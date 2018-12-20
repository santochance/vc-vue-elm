<template>
  <div class="page__container">
    <page-header
      class="sticky-box"
      v-if="header"
      :title="title"
      :back-btn="backBtn"
      @back="onBack"
    />
    <div class="page__main">
      <slot></slot>
    </div>
    <TabBar v-if="tabbar" :current-tab="tabbar" />
    <loading-image :visible="loading"></loading-image>
  </div>
</template>

<script>
  import PageHeader from './PageHeader'
  import LoadingImage from '../LoadingImage'
  import TabBar from '../TabBar'

  export default {
    name: 'Page',
    components: {
      PageHeader,
      LoadingImage,
      TabBar,
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
      header: {
        type: Boolean,
        default: true,
      },
      tabbar: {
        type: String,
        default: '',
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