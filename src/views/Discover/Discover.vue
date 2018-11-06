<template>
  <Page title="发现" :back-btn="false">
    <NoDataTip
      class="p-discover__no-data"
      :data="emptyTip"
    ></NoDataTip>
  </Page>
</template>

<script>
  import Page from '@/components/Page'
  import NoDataTip from '@/components/NoDataTip'

  export default {
    name: 'Discover',
    components: {
      Page,
      NoDataTip,
    },
    props: {

    },
    data() {
      return {
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
  .p-discover__no-data {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
</style>