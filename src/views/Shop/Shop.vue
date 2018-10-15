<template>
  <div v-if="shopDetails" class="shop__block">
    <ShopHeader :shopDetails="shopDetails"
    />
    <tabs :tabs="tabs" lazy>
      <component v-for="(tab) in tabs" :key="tab.key"
        :is="tab.key"
        v-bind="propsMap[tab.key]"
        ></component>
    </tabs>
    <ShopSkeleton v-if="loading"></ShopSkeleton>
  </div>
</template>

<script>
  import { fetchRestaurant, fetchFoodMenu } from '@/service/api'
  import { Tabs } from '@/components/common'
  import ShopSkeleton from '@/components/ShopSkeleton'

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
      ShopSkeleton,
    },
    data() {
      return {
        loading: false,

        // remote data
        shopDetails: null,
        menu: null,

        restaurantId: 157158603, // 餐厅 id
        tabs: [{
          key: 'order-food',
          title: '点餐',
          props: ['shopDetails', 'menu'],
        }, {
          key: 'rating',
          title: '评价',
          props: ['restaurantId'],
        }, {
          key: 'seller',
          title: '商家',
          props: ['shopDetails'],
        }],
      }
    },
    computed: {
      propsMap() {
        return this.tabs.reduce((rst, tab) =>
          ({
            ...rst,
            [tab.key]: (tab.props || []).reduce((props, name) =>
              ({ ...props, [name]: this[name] })
            , {})
          })
        , {})
      },
    },
    created() {
      this.restaurantId = this.$route.query.id || this.restaurantId

      this.loadData()
    },
    methods: {
      loadData() {
        this.loading = true

        // 查询餐厅信息和餐厅菜单
        return Promise.all([
          fetchRestaurant(this.restaurantId),
          fetchFoodMenu(this.restaurantId),
        ]).then(([ shopDetails, menu ]) => {
          this.shopDetails = shopDetails
          this.menu = menu
        }).then(() => {
          return new Promise((resolve) => {
            setTimeout(resolve, 4000)
          })
        }).then(() => {
          this.loading = false
          this.$emit('loaded')
        })
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>