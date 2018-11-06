<template>
  <Page title="订单" :back-btn="false">
    <NoDataTip
      class="p-order__no-data"
      :data="emptyTip"
    ></NoDataTip>
  </Page>
</template>

<script>
  import Page from '@/components/Page'
  import NoDataTip from '@/components/NoDataTip'

  export default {
    name: 'Order',
    components: {
      Page,
      NoDataTip,
    },
    props: {

    },
    data() {
      return {
        // emptyTip: {
        //   img: 'https://fuss10.elemecdn.com/d/60/70008646170d1f654e926a2aaa3afpng.png',
        //   title: '登录后查看外卖订单',
        //   button: {
        //     text: '立即登录',
        //     handler: () => {
        //       this.$router.push({
        //         path: '/login',
        //         query: { redirect: this.$route.fullPath },
        //       })
        //     },
        //   }
        // }
        emptyTip: {
          img: 'https://fuss10.elemecdn.com/d/60/70008646170d1f654e926a2aaa3afpng.png',
          title: '当前页面还在开发中',
          button: {
            text: '返回首页',
            handler: () => {
              this.$router.push('/')
            }
          }
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
  .p-order__no-data {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
</style>