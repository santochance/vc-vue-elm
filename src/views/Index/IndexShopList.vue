<template>
  <div class="b-index-shoplist">
    <section v-show="infiniteComplete && !items.length"
      class="b-index-shoplist__nodata">
      <img src="./index-no-result.gif" alt="">
      <h3>附近没有外卖商家</h3>
      <p>饿了么正在以光速来到你身边</p>
    </section>

    <IndexShopListView v-show="items.length">
      <IndexShopListItem
        v-for="item in items" :key="item.id"
        :item="item.restaurant"
      ></IndexShopListItem>
    </IndexShopListView>

    <InfiniteScroll
      :handler="infiniteScrollHandler"
      ref="infiniteScroll"
      class="b-index-shoplist__infinite"
      @complete="complete"
    ></InfiniteScroll>
  </div>
</template>

<script>
  import IndexShopListView from './IndexShopListView'
  import IndexShopListItem from './IndexShopListItem'
  import InfiniteScroll from '@/components/common/InfiniteScroll'

  const debug = true

  export default {
    name: 'IndexShopList',
    components: {
      IndexShopListView,
      IndexShopListItem,
      InfiniteScroll,
    },
    props: {
      items: {
        type: Array,
      }
    },
    data() {
      return {
        infiniteComplete: false
      }
    },
    created() {
      debug && (window[this.$options.name] = this)

    },
    methods: {
      infiniteScrollHandler(payload) {
        this.$emit('infinite', payload)
      },
      reset() {
        this.infiniteComplete = false
        this.$nextTick(() => {
          this.$nextTick(() => {
            // 在过滤器 tab 改变时主动调用 infiniteScroll 的 reset 接口
            this.$refs.infiniteScroll.reset()
            // reset 后马上触发 infinite 事件
          })
        })
      },
      complete() {
        this.infiniteComplete = true
      },
    },
  }
</script>

<style lang="scss" scoped>
  .b-index-shoplist {
    box-sizing: border-box;
    min-height: 1154px;
    display: flex;
    flex-direction: column;
    padding-bottom: 100px;
  }
    .b-index-shoplist__nodata {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      min-height: 1040px;

      h3 {
        margin: 25px 0 20px;
        font-size: 34px;
        font-weight: 400;
        color: #6a6a6a;
      }
      p {
        margin-bottom: 25px;
        font-size: 23px;
        color: #999;
      }
    }
    .b-index-shoplist__infinite {
      padding: 20px 0;
    }
</style>