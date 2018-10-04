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
          props: ['shopDetails', 'menu'],
        }, {
          key: 'rating',
          title: '评价',
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