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
  import { mapState, mapActions } from 'vuex'
  import { fetchBatchShop } from '@/service/api'
  import { Tabs } from '@/components/common'
  import ShopSkeleton from '@/components/ShopSkeleton'

  import ShopHeader from './ShopHeader/ShopHeader'
  import OrderFood from './OrderFood/OrderFood'
  import Rating from './Rating'
  import Seller from './Seller'

  const debug = true

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
      ...mapState([
        'userId', 'latitude', 'longitude',
      ]),
      restaurantId() {
        return this.$route.query.id
      },
    },
    created() {
      debug && (window[this.$options.name] = this)

      this.loadData()
        .then(() => { window.scrollTo(0, 0) })

    },
    methods: {
      loadData() {
        this.loading = true

        const coords = {
          latitude: this.latitude,
          longitude: this.longitude
        }
        return this.reverseGeoCoding(coords)
          // reverseGeoCoding rejected
          .then(v => v, e => e) // finally
          .then(() => {
            return fetchBatchShop({
              ...coords,
              user_id: this.userId,
              restaurantId: this.restaurantId,
            })
          })
          .then(({ rst, menu }) => {
            this.shopDetails = rst
            this.menu = menu

            this.loading = false
            this.$emit('loaded')
          }, (error) => {
            this.loading = false
            this.$emit('error', error)
          })
      },
      ...mapActions([
        'reverseGeoCoding',
      ]),
    },
  }
</script>

<style lang="scss" scoped>

</style>