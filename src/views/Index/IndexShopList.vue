<template>
  <div class="b-index-shoplist">
    <section v-show="noDataTipVisible"
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
      :state="state"
      ref="infiniteScroll"
      class="b-index-shoplist__infinite"
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
      },
      state: {
        type: [String, Number],
      }
    },
    data() {
      return {

      }
    },
    created() {
      debug && (window[this.$options.name] = this)

    },
    computed: {
      noDataTipVisible() {
        return this.state === 'empty'
      },
    },
    methods: {
      infiniteScrollHandler(payload) {
        this.$emit('infinite', payload)
      },
      reset(immediate) {

        this.$nextTick(() => {
          this.resetScroll()
          this.$nextTick(() => {
            // 重置滚动值
            // 在过滤器 tab 改变时主动调用 infiniteScroll 的 reset 接口
            this.$refs.infiniteScroll.reset(immediate)
          })
        })
      },
      resetScroll() {
        const elRect = this.$el.getBoundingClientRect()
        const elRectTop = Math.round(elRect.top)
        const offset = parseFloat(this.$toRpx(100 + 80))

        if (elRectTop < offset) {
          debug && console.log('<IndexShopList> should update scrollTop')
          const targetScrollTop = window.scrollY + elRectTop - offset
          document.documentElement.scrollTop = targetScrollTop
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
  .b-index-shoplist {
    box-sizing: border-box;
    min-height: 1200px;
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
      padding: 16px 0;
    }
</style>