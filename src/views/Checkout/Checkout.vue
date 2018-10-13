<template>
  <div>
    <keep-alive :exclude="['AddressEdit']">
      <router-view></router-view>
    </keep-alive>
  </div>
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