<template>
  <div>
    <FoodMenu :menu="menu"
      :entities="entities"
     />
    <CartView :entities="entities"
      :minAmount="shopDetails && shopDetails.float_minimum_order_amount"
      @addcart="$emit('addcart', $event)"
      @reducecart="$emit('reducecart', $event)"
      @clearcart="$emit('clearcart', $event)"
      @submitcart="$emit('submitcart', $event)"
    />
  </div>
</template>

<script>
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
    }
  }
</script>

<style lang="scss" scoped>

</style>