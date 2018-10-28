<template>
  <div class="p-index">
    <IndexHeader
      :location-name="location.locationName"
      :locating="locating"
      :detecting="!loaded"
      @click:address="onClickHeaderAddress"
    ></IndexHeader>
    <IndexSearch></IndexSearch>

    <IndexMainEntries
      v-if="entryGroupMap.main"
      :entries="entryGroupMap.main.entries"
    ></IndexMainEntries>
    <div class="p-index__member"></div>
    <div class="p-index__banner"></div>

    <div class="p-index__shoplist-title">推荐商家</div>
    <IndexShopListFilter
      :filterOptions="filterOptions"
      @submit="onSubmitFilters"
    ></IndexShopListFilter>
    <IndexShopList
      ref="infinite"
      :items="restaurantList"
      @infinite="onInifiniteScroll"
    ></IndexShopList>

    <transition name="slide-left">
      <SelectAddress
        class="p-index__select-address"
        v-show="selectAddressVisible"
        @select="onSelectAddress"
        @back="selectAddressVisible = false"
      ></SelectAddress>
    </transition>

    <transition name="fade">
      <div class="p-index__back-top"
        v-show="backTopVisible"
        @click="onBackTop"
      >
        <img src="@/assets/backtop.svg" alt="">
      </div>
    </transition>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import { fetchRestaurantList, fetchEntryList, fetchBatchFilter, fetchBannerList } from '@/service/api'
  import { debounce } from '@/util/utils'

  import IndexHeader from './IndexHeader'
  import IndexSearch from './IndexSearch'
  import IndexSkeleton from './IndexSkeleton'
  import IndexShopList from './IndexShopList'
  import IndexMainEntries from './IndexMainEntries'
  import SelectAddress from '../SelectAddress'
  import IndexShopListFilter from './IndexShopListFilter'
  import IndexShopListItem from './IndexShopListItem'
  import InfiniteScroll from '@/components/common/InfiniteScroll'
  const importGeohash = () => import(/* webpackChunkName: "Geohash" */'ngeohash')

  const debug = true

  export default {
    name: 'Index',
    components: {
      IndexHeader,
      IndexSearch,
      IndexSkeleton,
      IndexShopList,
      IndexMainEntries,
      SelectAddress,
      IndexShopListFilter,
      InfiniteScroll,
      IndexShopListItem,
    },
    props: {

    },
    data() {
      return {
        /* remote data */
        entryGroupMap: {},
        bannerList: [],
        filterOptions: {},
        restaurantList: [],

        loaded: false,
        locating: false,
        locState: 0,

        offset: 0,
        rankId: '',
        filterPayload: null,

        selectAddressVisible: false,
        backTopVisible: false,
      }
    },
    computed: {
      ...mapState({
        location(state) {
          return {
            longitude: state.longitude,
            latitude: state.latitude,
            geohash: state.geohash,
            locationName: state.locationName,
          }
        }
      }),
      ...mapState([
        'latitude', 'longitude', 'geohash', 'locationName',
      ]),
    },
    created() {
      debug && (window[this.$options.name] = this)

      this.loadData()
    },
    activated() {
      this.loadData()
    },
    mounted() {
      importGeohash()

      window.addEventListener('scroll', debounce(() => {
        this.backTopVisible = window.scrollY > 1800
      }), 100)
    },
    methods: {
      loadData() {
        this.loaded = false

        // 如果 items 为空，会显示无商家反馈视图
        return Promise.resolve()
          .then(() => {
            if (!this.geohash) {
              return this.locate()
                .then(({ coords }) => {
                  // 识别地址
                  return this.reverseGeoCoding(coords)
                })
            } else {
              return this.location
            }
          })
          .then(() => {
            // 查询接口
            return Promise.all([
              // 查询导航入口
              this.fetchEntryList(),
              this.fetchRestaurantList(),
              this.fetchBatchFilter(),
              this.fetchBannerList(),
            ])
          })
          .then(() => {
            this.loaded = true
          })
          .catch(() => {
            this.loaded = true
          })
      },
      locate() {
        this.locating = true

        debug && console.log('正在定位地址...')

        return this.getCurrentPosition()
          .then(({ coords }) => {
            this.locating = false
            return coords
          })
      },
      fetchEntryList() {
        return fetchEntryList({
          latitude: this.latitude,
          longitude: this.longitude,
        })
          .then((entryGroupList) => {
            this.entryGroupMap = entryGroupList.reduce((rst, group) =>
              ({
                ...rst,
                [group.group_name]: group,
              })
            , {})
          })
      },
      fetchBannerList() {
        return fetchBannerList({
          latitude: this.latitude,
          longitude: this.longitude,
        })
          .then((bannerList) => {
            this.bannerList= bannerList
          })
      },
      fetchBatchFilter() {
        return fetchBatchFilter({
          latitude: this.latitude,
          longitude: this.longitude,
        })
          .then((filterOptions) => {

            this.filterOptions = filterOptions
          })
      },
      fetchRestaurantList() {
        // 分页式加载数据
        return fetchRestaurantList({
          latitude: this.latitude,
          longitude: this.longitude,
          offset: this.offset,
          ...this.filterPayload,
        })
          .then(({ items, rank_id }) => {

            debug && console.log('debug - get response of comments')

            if (this.offset === 0) {
              // 重置列表数据
              this.restaurantList = items;
            } else {
              // 增添列表数据
              this.restaurantList = this.restaurantList.concat(items)
            }
            this.rankId = rank_id
            this.offset = this.restaurantList.length
            // 根据响应数据数量判断是否全部加载完成
            return items.length > 1 ? 'loaded' : 'complete'
          })
      },

      ...mapActions([
        'reverseGeoCoding',
        'getCurrentPosition'
      ]),

      /* event handlers */
      onClickHeaderAddress() {
        this.selectAddressVisible = true
      },

      onSubmitFilters(options) {
        this.filterPayload = options
        this.offset = 0
        this.restaurantList = []

        this.$refs.infinite.reset()
        // this.$nextTick(() => {
        //   this.$nextTick(() => {
        //     // 在过滤器 tab 改变时主动调用 infiniteScroll 的 reset 接口
        //     this.$refs.infinite.reset()
        //   })
        // })
      },
      onInifiniteScroll($state) {
        debug && console.log('<Index> onInifiniteScroll')

        this.fetchRestaurantList()
          .then(method => {
            $state[method]()
          })
      },
      onSelectAddress(/*address*/) {
        // const location = {
        //   latitude: address.latitude,

        // }
        // this.$store.commit('SAVE_LOCATION', {

        // })
/*        this.fetchEntryList(),
        this.fetchRestaurantList(),
        this.fetchBatchFilter(),
        this.fetchBannerList(),*/
      },
      onBackTop() {
        document.documentElement.scrollTop = 0
      },
    },
  }
</script>

<style lang="scss" scoped>
  .p-index {
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: #fff;
  }
    .p-index__shoplist-title {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 72px;
      font-size: 30px;
      color: #000;
      &:before,
      &:after {
        content: '';
        display: block;
        width: 40px;
        height: 1px;
        background-color: #999;
      }
      &:before {
        margin-right: 26px;
      }
      &:after {
        margin-left: 26px;
      }
    }

  /* select address */

    .p-index__select-address {
      position: fixed;
      z-index: 1000;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }
    .slide-left-enter-active {
      transition: all .3s ease-in-out;
    }
    .slide-left-leave-active {
      transition: all .3s ease-in-out;
    }
    .slide-left-enter,
    .slide-left-leave-to {
      transform: translateX(100%)
    }

  /* shoplist */

    .p-index__shoplist {
      display: flex;
      flex-direction: column;
      padding-bottom: 140px;
    }
    .p-index__shoplist-nodata {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      min-height: 1040px;

      h3 {
        margin: 25px 0 20px;
        font-size: 34px;
        font-weight: 400;
        color: #6a6a6a;
      }
      p {
        margin-bottom: 25px;
        font-size: 23px;
        color: #999;
      }
    }

  /* backtop */
    .p-index__back-top {
      position: fixed;
      z-index: 50;
      right: 30px;
      bottom: 150px;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 83px;
      width: 83px;
      background-color: #fff;
      border-radius: 50%;
      border: 1px solid #999; /*no*/

      will-change: opacity;

      img {
        width: 40px;
        height: 40px;
      }

      // visibility: hidden;
      // opacity: 0;

      // &_visible {
      //   visibility: visible;
      //   opacity: 1;
      // }
    }
    .fade-enter-active,
    .fade-leave-active {
      transition: opacity .3s;
    }

    .fade-enter,
    .fade-leave-to {
      opacity: 0;
    }
</style>