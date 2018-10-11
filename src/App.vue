<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import SvgIcon from '@/components/SvgIcon'
  import Vue from 'vue'

  export default {
    name: 'App',
    components: {

    },
    data() {
      return {

      }
    },
    created() {
      this.mountSvgIcon()
      // 初始化 user 和 address
      this.$store.dispatch('fetchCurrentUser')
        .then(() => {
          this.$store.dispatch('fetchAddressList')
        })
    },
    methods: {
      mountSvgIcon() {
        const icons = new (Vue.extend(SvgIcon))()
        icons.$mount()
        document.body.appendChild(icons.$el)
      }
    }
  }
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
