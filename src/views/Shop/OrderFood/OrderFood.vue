<template>
  <div>
    <FoodMenu :menu="menu"
      :shopDetails="shopDetails"
      :entities="entities"
     />
    <CartView :entities="entities"
      :minAmount="shopDetails && shopDetails.float_minimum_order_amount"
      @addcart="addCart"
      @reducecart="reduceCart"
      @clearcart="clearCart"
      @submitcart="toCheckout"
    />
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'

  import FoodMenu from './FoodMenu'
  import CartView from './CartView'

  export default {
    name: 'OrderFood',
    inheritAttrs: false,
    components: {
      FoodMenu,
      CartView,
    },
    props: {
      shopDetails: Object,
      menu: Array,
    },
    data() {
      return {

      }
    },
    computed: {
      entities() {
        const state = this.$store.state
        try {
          return state.cartMap[this.shopDetails.id].entities
        } catch(e) {
          return []
        }
      },
    },
    methods: {
      ...mapMutations([
        'ADD_CART', 'REDUCE_CART', 'CLEAR_CART',
      ]),
      addCart(entity) {
        this.ADD_CART({
          restaurant_id: this.shopDetails.id,
          ...entity,
        })
      },
      reduceCart(entity) {
        this.REDUCE_CART({
          restaurant_id: this.shopDetails.id,
          ...entity,
        })
      },
      clearCart() {
        this.CLEAR_CART({
          restaurant_id: this.shopDetails.id,
        })
      },
      toCheckout() {

      },
    }
  }
</script>

<style lang="scss" scoped>

</style>