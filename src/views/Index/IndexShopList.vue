<template>
  <div>
    <IndexShopListFilter
      :filterOptions="filterOptions"
    ></IndexShopListFilter>
    <IndexShopListView>
      <IndexShopListItem
        v-for="item in items" :key="item.id"
        :item="item"
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

</style>