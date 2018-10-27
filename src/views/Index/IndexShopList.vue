<template>
  <div class="b-index-shoplist">
    <IndexShopListFilter
      :filterOptions="filterOptions"
    ></IndexShopListFilter>
<!--     <section v-if="!item || !item.length" class="b-b-index-shoplist__nodata">
      <img src="./index-no-result.gif" alt="">
      <h3>附近没有外卖商家</h3>
      <p>饿了么正在以光速来到你身边</p>
    </section> -->
    <IndexShopListView>
      <IndexShopListItem
        v-for="item in items" :key="item.id"
        :item="item.restaurant"
      ></IndexShopListItem>
    </IndexShopListView>
    <InfiniteScroll
      :handler="infiniteScrollHandler"
      ref="infiniteScroll"
      class="b-index-shoplist__infinite"
    ></InfiniteScroll>
  </div>
</template>

<script>
  import { fetchBatchFilter, fetchRestaurantList } from '@/service/api'
  import IndexShopListFilter from './IndexShopListFilter'
  import IndexShopListView from './IndexShopListView'
  import IndexShopListItem from './IndexShopListItem'
  import InfiniteScroll from '@/components/common/InfiniteScroll'

  const debug = true

  export default {
    name: 'IndexShopList',
    components: {
      IndexShopListFilter,
      IndexShopListView,
      IndexShopListItem,
      InfiniteScroll,
    },
    props: {

    },
    data() {
      return {
        // fetchRestaurantList
        items: [],
        offset: 0,
        limit: 8,

        rankId: '',

        // fetchBatchFilter
        filterOptions: null,

      }
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
        this.fetchBatchFilter()
        this.fetchRestaurantList()
      },
      fetchBatchFilter() {
        return fetchBatchFilter({})
          .then((filterOptions) => {
            this.filterOptions = filterOptions
          })
      },
      fetchRestaurantList() {
        const payload = {
          limit: this.limit,
          offset: this.offset,
        }
        // 分页式加载数据
        return fetchRestaurantList(payload)
          .then(({ items, rank_id }) => {

            debug && console.log('debug - get response of comments')

            if (this.offset === 0) {
              // 重置列表数据
              this.items = items;
            } else {
              // 增添列表数据
              this.items = this.items.concat(items)
            }
            this.rankId = rank_id
            this.offset = this.items.length
            // 根据响应数据数量判断是否全部加载完成
            return items.length > 1 ? 'loaded' : 'complete'
          })
      },
      onFiltersSubmit() {
        this.offset = 0
        this.items = []

        this.$nextTick(() => {
          // 在过滤器 tab 改变时主动调用 infiniteScroll 的 reset 接口
          this.$refs.infiniteScroll.reset()
        })
      },

      infiniteScrollHandler($state) {

        debug && console.log('debug - exec infiniteScrollHandler')

        this.fetchRestaurantList()
          .then(method => {

            debug && console.log('debug - infinite scroll loaded')

            $state[method]()
          })
      },
    },
  }
</script>

<style lang="scss" scoped>
  .b-index-shoplist {
    display: flex;
    flex-direction: column;
    padding-bottom: 100px;
  }
    .b-index-shoplist__nodata {
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
    .b-index-shoplist__infinite {
      padding: 20px 0;
    }
</style>