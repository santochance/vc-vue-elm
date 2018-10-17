<template>
  <div class="demo">
    <div class="list">
      <div>list</div>
    </div>
    <InfiniteScroll
      :handler="infiniteScrollHandler"
      ref="infiniteScroll"
    ></InfiniteScroll>
  </div>
</template>

<script>
  import InfiniteScroll from '../src/InfiniteScroll.vue'

  export default {
    name: 'Blank',
    components: {
      InfiniteScroll,
    },
    props: {
      
    },
    data() {
      return {
        list: [],  
      }
    },
    methods: {
      infiniteScrollHandler() {
        
      }
    }
  }
</script>

<style lang="scss" scoped>
  .list {
    height: 120vh;
    background-color: orange;
  }
</style>