<template>
  <div class="p-index">
    <IndexHeader
      :location-name="location.locationName"
      :locating="locating"
      :detecting="!loaded"
    ></IndexHeader>
    <IndexSearch></IndexSearch>
    <IndexMainEntries v-if="entryGroupMap.main"
      :entries="entryGroupMap.main.entries"
    ></IndexMainEntries>
    <!-- <IndexSkeleton></IndexSkeleton> -->
    <div class="index__member"></div>
    <div class="index__banner"></div>
    <div class="p-index__shoplist-title">推荐商家</div>
    <IndexShopList></IndexShopList>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import { fetchEntryList } from '@/service/api'

  import IndexHeader from './IndexHeader'
  import IndexSearch from './IndexSearch'
  import IndexSkeleton from './IndexSkeleton'
  import IndexShopList from './IndexShopList'
  import IndexMainEntries from './IndexMainEntries'

  const debug = true

  export default {
    name: 'Index',
    components: {
      IndexHeader,
      IndexSearch,
      IndexSkeleton,
      IndexShopList,
      IndexMainEntries,
    },
    props: {

    },
    data() {
      return {
        /* remote data */
        entryGroupMap: {},

        loaded: false,
        locating: false,
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
    },
    created() {
      debug && (window[this.$options.name] = this)

      this.loadData()
    },
    activated() {
      this.loadData()
    },
    methods: {
      loadData() {
        this.loaded = false

        // 如果 items 为空，会显示无商家反馈视图
        return Promise.resolve()
          .then(() => {
            if (!this.checkLocation(this.location)) {
              return this.locate()
            } else {
              return this.location
            }
          })
          .then((coords) => {
            // 查询接口
            return Promise.all([
              // 查询导航入口
              this.fetchEntryList(),
              // 识别地址
              this.reverseGeoCoding(coords)
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
      checkLocation(location) {
        const { longitude, latitude, geohash, locationName } = location
        if (
          longitude == null ||
          latitude == null ||
          !geohash ||
          !locationName
        ) {
          return false
        }
        return true
      },
      fetchEntryList() {
        return fetchEntryList()
          .then((entryGroupList) => {
            this.entryGroupMap = entryGroupList.reduce((rst, group) =>
              ({
                ...rst,
                [group.group_name]: group,
              })
            , {})
          })
      },
      ...mapActions([
        'reverseGeoCoding',
        'getCurrentPosition'
      ]),
    },
  }
</script>

<style lang="scss" scoped>
  .p-index {
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
</style>