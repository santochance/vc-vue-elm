<template>
  <div class="page__container">
    <page-header :title="title"
      :back-btn="backBtn" />
    <div class="page__main">
      <slot></slot>
    </div>
    <loading-image :visible="loading"></loading-image>
  </div>
</template>

<script>
  import PageHeader from './PageHeader'
  import LoadingImage from './LoadingImage'

  export default {
    name: 'Page',
    components: {
      PageHeader,
      LoadingImage,
    },
    props: {
      title: {
        type: String,
      },
      backBtn: {
        type: Boolean,
        default: true,
      },
      loading: {
        type: Boolean,
        default: false,
      }
    },
    data() {
      return {

      }
    },
  }
</script>

<style lang="scss" scoped>
  .page__container {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .page__main {
    flex: 1 auto;
  }
</style>