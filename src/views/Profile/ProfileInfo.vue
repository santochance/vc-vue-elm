<template>
  <page title="账户信息">
    <router-view></router-view>
  </page>
</template>

<script>
  import Page from '@/components/Page'

  export default {
    name: 'ProfileInfo',
    components: {
      Page,
    },
    props: {

    },
    data() {
      return {

      }
    },
  }
</script>