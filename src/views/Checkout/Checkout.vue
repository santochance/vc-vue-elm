<template>
  <keep-alive :exclude="['AddressEdit']">
    <router-view></router-view>
  </keep-alive>
</template>

<script>

  export default {
    name: 'Checkout',
    components: {

    },
    props: {

    },
    data() {
      return {

      }
    },
  }
</script>

<style lang="scss" scoped>

</style>