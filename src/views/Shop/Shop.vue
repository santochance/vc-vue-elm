<template>
  <div v-if="shopDetails" class="shop__block">
    <ShopHeader :shopDetails="shopDetails"
    />
    <tabs :tabs="tabs" lazy>
      <component v-for="(tab) in tabs" :key="tab.key"
        :is="tab.key"></component>
    </tabs>
  </div>
</template>

<script>
  import { fetchRestaurant } from '@/service/api'
  import { Tabs } from '@/components/common'

  import ShopHeader from './ShopHeader/ShopHeader'
  import FoodMenu from './FoodMenu/FoodMenu'
  import Rating from './Rating'
  import Seller from './Seller'

  export default {
    name: 'Shop',
    components: {
      Tabs,
      ShopHeader,
      FoodMenu,
      Rating,
      Seller,
    },
    data() {
      return {
        loading:false,

        // remote data
        shopDetails: null,

        shopId: 157158603, // 餐厅 id
        tabs: [{
          key: 'food-menu',
          title: '点餐',
        }, {
          key: 'rating',
          title: '评价',
        }, {
          key: 'seller',
          title: '商家',
        }],
      }
    },
    created() {
      this.shopId = this.$route.query.id || this.shopId
      this.loadData()
    },
    methods: {
      loadData() {
        this.loading = true
        fetchRestaurant(this.shopId).then((shopDetails) => {
          this.shopDetails = shopDetails
          this.loading = false
        })
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>