<script>

  const debug = false

  export default {
    name: 'IndexPage',
    components: {

    },
    props: {

    },
    data() {
      return {

      }
    },
    computed: {
      eventBus() {
        return this
      },
    },
    created() {
      debug && (window[this.$options.name] = this)

      debug && console.log('<IndexPage> created')
    },
    methods: {

    },
  }
</script>

<template>
  <keep-alive :include="['Index']">
    <router-view></router-view>
  </keep-alive>
</template>


<style lang="scss" scoped>
  .b-namespace {}

    .b-namespace__box {}

</style>