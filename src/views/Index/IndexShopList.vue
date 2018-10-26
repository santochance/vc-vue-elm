<template>
  <div class="b-list">
    <IndexShopListFilter
      :filterOptions="filterOptions"
    ></IndexShopListFilter>
<!--     <section v-if="!item || !item.length" class="b-list__nodata">
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
  </div>
</template>

<script>
  import { fetchBatchFilter, fetchRestaurantList } from '@/service/api'
  import IndexShopListFilter from './IndexShopListFilter'
  import IndexShopListView from './IndexShopListView'
  import IndexShopListItem from './IndexShopListItem'

  export default {
    name: 'IndexShopList',
    components: {
      IndexShopListFilter,
      IndexShopListView,
      IndexShopListItem,
    },
    props: {

    },
    data() {
      return {
        // fetchRestaurantList
        items: [],
        rankId: '',

        // fetchBatchFilter
        filterOptions: null,

      }
    },
    created() {
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
        return fetchBatchFilter()
          .then((filterOptions) => {
            this.filterOptions = filterOptions
          })
      },
      fetchRestaurantList() {
        return fetchRestaurantList()
          .then(({ items, rank_id }) => {
            this.items = items
            this.rankId = rank_id
          })
      },
    },
  }
</script>

<style lang="scss" scoped>
  .b-list {
    display: flex;
    flex-direction: column;
  }
    .b-list__nodata {
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
</style>