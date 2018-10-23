<template>
  <Address title="我的地址" mode="normal"></Address>
</template>

<script>
  import Address from '@/components/Address/Address'

  export default {
    name: 'ProfileAddress',
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
      if (!from.path.match(/\/(profile|login)/)) {
        return next('/profile')
      }
      next()
    }
  }
</script>

<style lang="scss" scoped>

</style>