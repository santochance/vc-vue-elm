<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

  export default {
    name: 'App',
    components: {

    },
    data() {
      return {

      }
    },
    created() {
      this.$store.dispatch('fetchCurrentUser')
    },
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
