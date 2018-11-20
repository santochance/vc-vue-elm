<template>
  <div class="page__container">
    <page-header
      :title="title"
      :back-btn="backBtn"
      @back="onBack"
    />
    <div class="page__main">
      <slot></slot>
    </div>
    <loading-image :visible="loading"></loading-image>
  </div>
</template>

<script>
  import PageHeader from './PageHeader'
  import LoadingImage from '../LoadingImage'

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
      backDefault: {
        type: Boolean,
        default: true,
      },
      loading: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {

      }
    },
    methods: {
      onBack() {
        this.$emit('back')
        if (this.backDefault) {
          this.$router.back()
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
  .sticky-box {
    position: sticky;
    top: 0;
    z-index: 999;
  }
  .page__container {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .page__main {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
</style>