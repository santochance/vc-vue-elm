<template>
  <AddressEdit></AddressEdit>
</template>

<script>
  import AddressEdit from '@/components/Address/AddressEdit'

  export default {
    name: 'CheckoutAddressEdit',
    components: {
      AddressEdit,
    },
    props: {
      
    },
    data() {
      return {

      }
    },
    beforeRouterEnter(to, from, next) {
      // 不是由 /checkout/address 进入，重定向回 /checkout
      if (!from.path.match('/checkout/address')) {
        return next('/checkout')
      }

      // const mode = to.path.split('/').slice(-1)[0];
      next((vm) => (function (){
        const address = this.$store.state.editingAddress
        // 如果没有正在编辑的 address，重定向回 /checkout
        if (!address) {
          return next('/checkout')
        }
      }).call(vm))
    }
  }
</script>

<style lang="scss" scoped>

</style>