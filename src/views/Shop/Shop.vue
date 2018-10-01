<template>
  <div class="shop__block">

    <tabs :tabs="tabs" lazy>
      <component v-for="(tab) in tabs" :key="tab.key"
        :is="tab.key"></component>
    </tabs>
  </div>
</template>

<script>
  import Tabs from '@/components/common/Tabs'

  import FoodMenu from '@/views/Shop/FoodMenu/FoodMenu'
  import Rating from '@/views/Shop/Rating'
  import Seller from '@/views/Shop/Seller'

  export default {
    name: 'Shop',
    components: {
      Tabs,
      FoodMenu,
      Rating,
      Seller,
    },
    data() {
      return {
        tabs: [{
          key: 'food-menu',
          title: '点餐',
        }, {
          key: 'rating',
          title: '评价',
        }, {
          key: 'seller',
          title: '商家',
        }],
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>