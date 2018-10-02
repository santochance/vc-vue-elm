<template>
  <div v-if="shopDetails" class="shop__block">
    <ShopHeader :shopDetails="shopDetails"
    />
    <tabs :tabs="tabs" lazy>
      <component v-for="(tab) in tabs" :key="tab.key"
        :is="tab.key"
        :shopDetails="shopDetails"
        :menu="menu"
        ></component>
    </tabs>
  </div>
</template>

<script>
  import { fetchRestaurant, fetchFoodMenu } from '@/service/api'
  import { Tabs } from '@/components/common'

  import ShopHeader from './ShopHeader/ShopHeader'
  import OrderFood from './OrderFood/OrderFood'
  import Rating from './Rating'
  import Seller from './Seller'

  export default {
    name: 'Shop',
    components: {
      Tabs,
      ShopHeader,
      OrderFood,
      Rating,
      Seller,
    },
    data() {
      return {
        loading: false,

        // remote data
        shopDetails: null,
        menu: null,

        shopId: 157158603, // 餐厅 id
        tabs: [{
          key: 'order-food',
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

        // 查询餐厅信息和餐厅菜单
        return Promise.all([
          fetchRestaurant(this.shopId),
          fetchFoodMenu(this.shopId),
        ]).then(([ shopDetails, menu ]) => {
          this.shopDetails = shopDetails
          this.menu = menu

          this.loading = false
        })
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>