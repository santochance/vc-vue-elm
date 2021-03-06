<template>
  <Page
    class="p-index"
    :header="false"
    tabbar="index"
  >
    <div>
      <IndexSkeleton class="p-index__loading"
        v-if="!loaded"
        :headerLoaded="locState > 0"
        :entriesLoaded="entriesLoaded"
        :listLoaded="listLoaded"
      ></IndexSkeleton>
      <IndexHeader
        :location-name="location.locationName"
        :locating="locState === 0"
        :detecting="locState === 1"
        @click:address="chooseAddress"
      ></IndexHeader>
      <IndexSearch></IndexSearch>

      <template v-if="locState !== 3">
        <IndexMainEntries
          v-if="entryGroupMap.main"
          :entries="entryGroupMap.main.entries"
        ></IndexMainEntries>

<!--         <div class="p-index__activity-entries"
          v-if="favourEntries"
        >
          <div class="p-index__activity-entry"
            :class="{ 'p-index__activity-entry_only': !favourEntries || !favourEntries.length }"
          >
            <h3 class="p-index__activity-entry-title">品质套餐</h3>
            <div class="p-index__activity-entry-desc">搭配齐全吃得好</div>
            <div class="p-index__activity-entry-go">立即抢购 ></div>
            <img :src="$getImage('dd416ff085900d62b8d60fa7e9c6b65dpng', '?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/')" alt="">
          </div>
          <div class="p-index__activity-entry p-index__favour-entry"
            v-for="favour in favourEntries"
            :key="favour.id"
          >
            <h3 class="p-index__activity-entry-title">{{ favour.name }}</h3>
            <div class="p-index__activity-entry-desc">{{ favour.description }}</div>
            <div class="p-index__activity-entry-go">
              <span class="p-index__activity-entry-population">{{ favour.population }}</span> 正在抢 >
            </div>
            <img :src="$getImage(favour.image_hash, favourImgParam)" alt="">
          </div>
        </div> -->
        <IndexBanners
          class="p-index__banner"
          v-if="bannerList && bannerList.length"
          :banners="bannerList"
        ></IndexBanners>

        <div class="p-index__shoplist-title">推荐商家</div>
        <IndexShopListFilter
          ref="filter"
          :filterOptions="filterOptions"
          @submit="onSubmitFilters"
        ></IndexShopListFilter>
        <template v-if="listLoaded">
          <IndexShopList
            ref="infinite"
            :items="restaurantList"
            :state="restaurantListState"
            @infinite="onInifiniteScroll"
          ></IndexShopList>
        </template>
      </template>

    </div>

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
      <button @click.stop.prevent="chooseAddress">手动选择地址</button>
    </div>
  </Page>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import { fetchRestaurantList, fetchEntryList, fetchBatchFilter, fetchBannerList } from '@/service/api'
  import { debounce } from '@/util/utils'

  import IndexSkeleton from './IndexSkeleton'
  import IndexHeader from './IndexHeader'
  import IndexSearch from './IndexSearch'
  import IndexMainEntries from './IndexMainEntries'

  import IndexShopList from './IndexShopList'
  import IndexBanners from './IndexBanners'
  import IndexShopListFilter from './IndexShopListFilter'
  import IndexShopListItem from './IndexShopListItem'
  import InfiniteScroll from '@/components/common/InfiniteScroll'

  // const IndexBanners = () => import(/* webpackChunkName: "Index-deps" */ './IndexBanners')
  // const IndexShopListFilter = () => import(/* webpackChunkName: "Index-deps" */ './IndexShopListFilter')
  // const IndexShopList = () => import( webpackChunkName: "Index-deps"  './IndexShopList')
  // const IndexShopListItem = () => import(/* webpackChunkName: "Index-deps" */ './IndexShopListItem')
  // const InfiniteScroll = () => import(/* webpackChunkName: "Index-deps" */ '@/components/common/InfiniteScroll')

  const importGeohash = () => import(/* webpackChunkName: "Geohash" */ 'ngeohash')
  const importShopContainer = () => import(/* webpackChunkName: "ShopContainer" */ '@/views/ShopContainer')
  const importIndexSelectAddress = () => import(/* webpackChunkName: 'IndexSelectAddress' */ '@/views/Index/IndexSelectAddress')

  const debug = false

  export default {
    name: 'Index',
    components: {
      IndexSkeleton,
      IndexHeader,
      IndexSearch,
      IndexShopList,
      IndexMainEntries,
      IndexBanners,
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
        locState: 0, // 0: 正在定位, 1: 正在识别, 2: 识别完成, 3: 定位失败

        offset: 0,
        rankId: '',
        filterPayload: null,

        selectAddressVisible: false,
        backTopVisible: false,

        entriesLoaded: false,
        listLoaded: false,

        restaurantListState: 'loaded', // 0: init, 1: loading, 2: loaded, 3: complete, 4: empty

        favourImgParam: '?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/',

        geohashChanged: false,
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
      favourEntries() {
        const entries = (this.entryGroupMap['优惠专区类型'] || {}).entries

        if (!entries || !entries.length) return entries

        return entries.map(entry => {
          try {
            entry.population = JSON.parse(entry.more).population
          } catch(e) {/* do nothing */}

          return entry
        })
      },
    },
    watch: {
      geohash(value, oldValue) {
        if (value !== oldValue) {
          this.geohashChanged = true
        }
      },
    },
    created() {
      debug && (window[this.$options.name] = this)
      debug && console.log('<Index> created')

      this.loaded = false

      return Promise.resolve()
        .then(() => {
          if (!this.geohash) {
            return this.locate()
          } else if (!this.locationName) {
            return this.callPoi({
              latitude: this.latitude,
              longitude: this.longitude,
            })
          } else {
            return Promise.resolve()
              .then(() => { this.locState = 1 })
              .then(() => this.loadData())
          }
        })
        // 到这里时可能识别地址完成，也可能定位失败
        .then(() => new Promise(resolve => setTimeout(resolve, 1000)))
        .then(() => {
          this.loaded = true
          this.$emit('load')
        }, () => {
          this.loaded = true
          this.$emit('load')
        })
        .then(() => {
          // 预加载
          importIndexSelectAddress()
          importGeohash()
          importShopContainer()
        })
    },
    activated() {
      debug && console.log('<Index> activated')

      if (this.geohashChanged) {
        this.geohashChanged = false
        this.onChangeAddress()
      }
    },
    mounted() {
      window.addEventListener('scroll', debounce(() => {
        this.backTopVisible = window.scrollY > 1800
      }), 100)
    },
    updated() {
      this.$emit('updated:index', this.$data)
    },
    methods: {
      loadData() {
        this.locState = 2

        return Promise.resolve()
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
      callPoi(coords) {
        this.locState = 1

        return this.reverseGeoCoding(coords)
          // 这里 reverseGeoCoding 成功时会自动设置 location 和 locationName
          // 接口无论调用是否成功， 都表示解析完成
          .then(v => v, e => e) // finally
          .then(() => this.loadData())

      },
      locate() {
        this.locState = 0

        return this.getCurrentPosition()
            // 定位成功
          .then(({ coords }) => {
            const { latitude, longitude } = coords
            this.$store.commit('SAVE_LOCATION', {
              latitude,
              longitude,
              geohash: '',
            })
            // 识别地址
            return this.callPoi(coords)
          })
          // 定位失败
          .catch(() => {
            importGeohash()

            this.$store.commit('SET_LOCATION_NAME', '未能获取地址')

            return Promise.resolve()
              .then(() => new Promise(resolve => setTimeout(resolve, 2000)))  // delay
              .then(() => this.chooseAddress())
              .then(() => new Promise(resolve => setTimeout(resolve, 800))) // delay
              .then(() => { this.locState = 3 })
            }
          )
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
      chooseAddress() {
        this.$router.push('/index/address')
        // this.selectAddressVisible = true
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
        this.offset = 0
        this.restaurantList = []
        this.restaurantListState = 'loaded'
        // 如果是 locState 为 3，即定位失败后选择了地址，这时 inifnite 还没有加载
        this.$refs.infinite && this.$refs.infinite.reset(false)
        this.loadData()
      },
      closeSelectAddress() {
        this.$router.back()
        // this.selectAddressVisible = false
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

    .p-index__loading {
      position: fixed;
      z-index: 1000;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      visibility: hidden;
      > * {
        visibility: visible;
      }
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

  /* activity-entries */

    .p-index__activity-entries {
      display: flex;
      justify-content: center;
      margin-bottom: 6px;
      padding: 0 20px;
      background-color: #fff;
    }
    .p-index__activity-entry {
      box-sizing: border-box;
      position: relative;
      flex: 1;
      height: 280px;
      padding: 24px 0 0 30px;
      background: linear-gradient(0deg,#f4f4f4 5%,#fafafa 95%);
      margin-right: 6px;
      &:last-child {
        margin-right: 0;
      }
      img {
        position: absolute;
        right: 0;
        bottom: -15px;
        width: 240px;
        height: 160px;
      }

      &_only {
        height: 220px;
        img {
          top: 18px;
          right: 28px;
          bottom: auto;
          width: 282px;
          height: 188px;
        }
      }
    }
    .p-index__activity-entry-title {
      font-size: 34px;
      font-weight: 700;
      margin-bottom: 10px;
      color: #333;
    }
    .p-index__activity-entry-desc {
      font-size: 26px;
      margin-bottom: 18px;
      color: #777;
    }
    .p-index__activity-entry-go {
      font-size: 24px;
      font-weight: 700;
      color: #af8260;
    }
    .p-index__favour-entry {
      .p-index__activity-entry-title {
        color: #e81919;
      }
      .p-index__activity-entry-go {
        color: #333;
      }
      .p-index__activity-entry-population {
        color: #e81919;
      }
    }

    .p-index__banner {
      box-sizing: border-box;
      padding: 0 20px;
      margin-bottom: 16px;
      background-color: #fff;
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
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 1;
      margin-bottom: 110px;
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