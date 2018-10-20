<template>
  <AddressEdit></AddressEdit>
</template>

<script>
  import AddressEdit from '@/components/Address/AddressEdit'

  export default {
    name: 'ProfileAddressEdit',
    components: {
      AddressEdit,
    },
    props: {
      
    },
    data() {
      return {

      }
    },
    beforeRouteEnter(to, from, next) {
      // 不是由 /profile/address 进入，重定向回 /profile
      if (!from.path.match('/profile/address')) {
        return next('/profile')
      }

      // const mode = to.path.split('/').slice(-1)[0];
      next((vm) => (function (){
        const address = this.$store.state.editingAddress
        // 如果没有正在编辑的 address，重定向回 /profile
        if (!address) {
          return next('/profile')
        }
      }).call(vm))
    }
  }
</script>

<style lang="scss" scoped>

</style>