<template>
  <div class="p-index">
    <div v-show="!selectAddressVisible">
      <IndexSkeleton class="p-index__shell"
        :headerLoaded="headerLoaded"
        :entriesLoaded="entriesLoaded"
        :listLoaded="listLoaded"
      ></IndexSkeleton>

      <IndexHeader
        :location-name="location.locationName"
        :locating="locating"
        :detecting="!loaded"
        @click:address="onClickHeaderAddress"
      ></IndexHeader>
      <IndexSearch></IndexSearch>

      <template v-if="locState !== 3">
        <IndexMainEntries
          v-if="entryGroupMap.main"
          :entries="entryGroupMap.main.entries"
        ></IndexMainEntries>
        <div class="p-index__member"></div>
        <div class="p-index__banner"></div>

        <template v-if="listLoaded">
          <div class="p-index__shoplist-title">推荐商家</div>
          <IndexShopListFilter
            ref="filter"
            :filterOptions="filterOptions"
            @submit="onSubmitFilters"
          ></IndexShopListFilter>
          <IndexShopList
            ref="infinite"
            :items="restaurantList"
            :state="restaurantListState"
            @infinite="onInifiniteScroll"
          ></IndexShopList>
        </template>
      </template>

    </div>

    <transition name="slide-left">
      <SelectAddress
        class="p-index__select-address"
        :visible="selectAddressVisible"
        @change="onChangeAddress"
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

    <div class="p-index__locate-fail"
      v-if="locState === 3"
    >
      <img src="./index-locate-fail.gif" alt="">
      <h3>输入地址后才能订餐哦！</h3>
      <button @click.stop.prevent="selectAddressVisible = true">手动选择地址</button>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import { fetchRestaurantList, fetchEntryList, fetchBatchFilter, fetchBannerList } from '@/service/api'
  import { debounce } from '@/util/utils'

  import IndexSkeleton from './IndexSkeleton'
  import IndexHeader from './IndexHeader'
  import IndexSearch from './IndexSearch'
  import IndexShopList from './IndexShopList'
  import IndexMainEntries from './IndexMainEntries'
  import IndexShopListFilter from './IndexShopListFilter'
  import IndexShopListItem from './IndexShopListItem'
  import InfiniteScroll from '@/components/common/InfiniteScroll'
  const importGeohash = () => import(/* webpackChunkName: "Geohash" */ 'ngeohash')
  import SelectAddress from '../SelectAddress'
  // const SelectAddress = () => import(/* webpackChunkName: "SelectAddress" */ '../SelectAddress')

  const debug = true

  export default {
    name: 'Index',
    components: {
      IndexSkeleton,
      IndexHeader,
      IndexSearch,
      IndexShopList,
      IndexMainEntries,
      IndexShopListFilter,
      InfiniteScroll,
      IndexShopListItem,
      SelectAddress,
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
        locState: 2, // 0: 正在定位, 1: 正在识别, 2: 识别完成, 3: 定位失败

        offset: 0,
        rankId: '',
        filterPayload: null,

        selectAddressVisible: false,
        backTopVisible: false,

        headerLoaded: false,
        entriesLoaded: false,
        listLoaded: false,

        restaurantListState: 'loaded', // 0: init, 1: loading, 2: loaded, 3: complete, 4: empty
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
    watch: {

    },
    created() {
      debug && (window[this.$options.name] = this)

      this.loaded = false
      this.loadData()
        .then(() => {
          return new Promise((resolve) => {
            setTimeout(resolve, 500)
          })
        })
        .then(() => {
          this.loaded = true
          this.$emit('load')
        })
        .catch(() => {
          this.loaded = true
          this.$emit('load')
        })
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
        // this.loaded = false

        // 如果 items 为空，会显示无商家反馈视图
        return Promise.resolve()
          .then(() => {
            if (!this.geohash || !this.locationName) {
              return this.locate()
            } else {
              return this.location
            }
          })
          .then(() => {
            this.headerLoaded = true
          })
          .then(() => {
            // 查询接口
            this.fetchEntryList()
              .then(() => {
                this.entriesLoaded = true
              })
            this.fetchBatchFilter()
              .then(() => {
                this.listLoaded = true
              })
            this.fetchRestaurantList()
            this.fetchBannerList()
          })
      },
      locate() {
        this.locating = true
        this.locState = 0

        debug && console.log('正在定位地址...')

        return this.getCurrentPosition()
          .then(({ coords }) => {
            this.locating = false
            this.locState = 1

            const { latitude, longitude } = coords
            this.$store.commit('SAVE_LOCATION', {
              latitude,
              longitude,
              geohash: '',
            })

            // 识别地址
            return this.reverseGeoCoding(coords)
            .then(() => {
              this.locState = 2
            })
             // 接口调用失败
             .catch(({ name }) => {
                if (name === 'INVALID_LAT_LON') {
                  // 无效的经纬度坐标
                }
             })
          })
          .catch(() => {
            this.locating = false
            this.locState = 3
            this.$store.commit('SET_LOCATION_NAME', '未能获取地址')
            this.selectAddressVisible = true
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
        this.restaurantListState = 'loading'

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

            let state
            if (!this.offset) {
              state = 'empty'
            } else if (!items.length) {
              state = 'complete'
            } else {
              state = 'loaded'
            }
            return (this.restaurantListState = state)
          })
          .catch(() => {
            return (this.restaurantListState = 'loaded')
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
        this.restaurantListState = 'loaded'
        this.$refs.infinite.reset()
      },
      onInifiniteScroll() {
        debug && console.log('<Index> handle infinite event')

        this.fetchRestaurantList()
      },
      onChangeAddress() {
        this.locState = 2
        this.$nextTick(() => {
          this.offset = 0
          this.restaurantList = []
          this.restaurantListState = 'loaded'
          this.$refs.infinite.reset(false)
          this.loadData()
        })
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
    .p-index__shell {
      position: absolute;
      z-index: 1000;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
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

  /* locate fail */
  .p-index__locate-fail {
    min-height: 1040px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    img {
      display: block;
      height: 400px;
      width: 400px;
    }
    h3 {
      font-size: 34px;
      font-weight: normal;
      margin: 25px 0;
      color: #6a6a6a;
    }
    button {
      padding: 20px;
      min-width: 240px;
      font-size: 28px;
      color: #fff;
      background-color: #56d176;
    }
  }
</style>