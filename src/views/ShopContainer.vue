<template>
  <div>
    <Shop @loaded="shopLoaded"></Shop>
    <ShopSkeleton v-if="!loaded"></ShopSkeleton>
  </div>
</template>

<script>
  import ShopSkeleton from '@/components/ShopSkeleton'
  const Shop = () => import(/* webpackChunkName: "shop" */ './Shop/Shop')

  export default {
    name: 'ShopContainer',
    components: {
      ShopSkeleton,
      Shop,
    },
    props: {
      
    },
    data() {
      return {
        loaded: false,
      }
    },
    created() {
    },
    methods: {
      shopLoaded() {
        this.loaded = true
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>