<template>
  <div>
    <header class="index__header">
      
    </header>
    <div class="index__search"></div>
    <div class="index__navs"></div>
    <div class="index__member"></div>
    <div class="index__banner"></div>
    <IndexShopList></IndexShopList>
  </div>
</template>

<script>
  import IndexShopList from './IndexShopList'

  export default {
    name: 'Index',
    components: {
      IndexShopList,
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