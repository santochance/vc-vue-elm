<template>
  <div>
    <FoodMenu :menu="menu" />
    <!-- <CartView :shopDetails="shopDetails" /> -->
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
  }
</script>

<style lang="scss" scoped>

</style>