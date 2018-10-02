<template>
  <div>OrderFood</div>
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
    },
    data() {
      return {

      }
    },
  }
</script>

<style lang="scss" scoped>

</style>