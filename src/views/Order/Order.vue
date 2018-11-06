<template>
  <Page title="订单" :back-btn="false">
    <NoDataTip
      v-if="user && user.user_id"
      class="p-order__no-data"
      :data="emptyTip"
    ></NoDataTip>
    <NoDataTip
      v-else
      class="p-order__no-data"
      :data="unauthorizedTip"
    ></NoDataTip>
  </Page>
</template>

<script>
  import { mapState } from 'vuex'
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
        unauthorizedTip: {
          img: 'https://fuss10.elemecdn.com/d/60/70008646170d1f654e926a2aaa3afpng.png',
          title: '登录后查看外卖订单',
          button: {
            text: '立即登录',
            handler: () => {
              this.$router.push({
                path: '/login',
                query: { redirect: this.$route.fullPath },
              })
            },
          }
        },
        emptyTip: {
          // img: 'https://fuss10.elemecdn.com/8/c8/bbe5984003cb26fc7b445a4a15195png.png',
          img: 'https://fuss10.elemecdn.com/6/87/4efda8c6bf4734d39faf86fe190c3gif.gif',
          title: '近三个月无订单记录',
        }
      }
    },
    computed: {
      ...mapState(['user']),
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