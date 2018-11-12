<template>
  <div class="tabpage" :style="{ height: shouldFixBottomBar ? docElHeight + 1 + 'px' : '' }">
    <header class="tabpage__header"></header>
    <template v-if="!injectedComponent">
      <div class="tabpage__body">
        <slot>
        </slot>
      </div>
      <footer class="=tabpage__footer">
        <TabBar :current-tab="tabKey"></TabBar>
      </footer>
    </template>
    <template v-else>
      <div class="tabpage__body">
        <component :is="injectedComponent"></component>
      </div>
      <footer class="=tabpage__footer">
        <TabBar :current-tab="injectedTabKey"></TabBar>
      </footer>
    </template>
  </div>
</template>

<script>
  import TabBar from './TabBar'

  // const debug = false

  // var isAndroid = window.navigator.userAgent.search(/android/i) !== -1
  // var maybeChrome = window.chrome || window.navigator.userAgent.search(/chrome/i) !== -1
  // var shouldFix = false

  // if (isAndroid && maybeChrome) {
  //   shouldFix = true
  //   debug && console.warn('[fix TabBar] should do')
  // } else {
  //   debug && console.warn('[fix TabBar] no need')
  // }

  export default {
    name: 'TabPage',
    components: {
      TabBar,
    },
    props: {
      tabKey: {
        type: String,
      }
    },
    data() {
      return {

      }
    },
    computed: {
      injectedComponent() {
        return this.$options.injectedComponent
      },
      injectedTabKey() {
        return this.$options.injectedTabKey
      },
      docElHeight() {
        return document.documentElement.offsetHeight
      },
      shouldFixBottomBar() {
        // return shouldFix
        return false
      },
    },
  }
</script>

<style lang="scss" scoped>
  .tabpage {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .tabpage__body {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
</style>