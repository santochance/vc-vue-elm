<template>
  <div id="app">
    <keep-alive :include="['TabPage', 'IndexPage', 'Index', 'Discover', 'Order', 'Profile']">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
  // import Vue from 'vue'

  let requireAll = requireContext => requireContext.keys().map(requireContext)
  requireAll(require.context('./assets/icons', false, /\.svg$/))

  export default {
    name: 'App',
    components: {

    },
    data() {
      return {

      }
    },
    created() {
      // this.mountSvgIcon()
      // 初始化 user 和 address
      // this.$store.dispatch('fetchCurrentUser')
      //   .then(() => {
      //     this.$store.dispatch('fetchAddressList')
      //   })
    },
    methods: {
      // mountSvgIcon() {
      //   import(/* webpackChunkName: "SvgIcon" */ '@/components/SvgIcon')
      //     .then((module) => {
      //       const SvgIcon = module.default || module
      //       const icons = new (Vue.extend(SvgIcon))()
      //       icons.$mount()
      //       document.body.appendChild(icons.$el)
      //     })
      // }
    }
  }
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  flex-direction: column;
  flex: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

<style lang="scss">
  .console {
    position: fixed;
    z-index: 99999;
    left: 20px;
    top: 20px;
    padding: 32px;
    background-color: rgba(0, 0, 0, .5);
    color: #fff;
    font-size: 28px;
    div, p {
      line-height: 1.4;
      margin-top: .3em;
    }
  }
</style>
