<template>
  <Address title="选择地址" mode="select"></Address>
</template>

<script>
  import Address from '@/components/Address/Address'

  export default {
    name: 'CheckoutAddress',
    components: {
      Address,
    },
    props: {
      
    },
    data() {
      return {
        
      }
    },
    beforeRouteEnter(to, from, next) {
      if (!from.path.match('/checkout')) {
        return next('/checkout')
      }
      next()
    }
  }
</script>

<style lang="scss" scoped>

</style>