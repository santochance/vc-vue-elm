<template>
  <div class="tabpage">
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
      }
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