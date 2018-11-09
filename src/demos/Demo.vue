<script>

  const debug = false

  export default {
    name: 'Demo',
    components: {

    },
    props: {

    },
    data() {
      return {

      }
    },
    computed: {

    },
    created() {
      debug && (window[this.$options.name] = this)

    },
    methods: {

    },
  }
</script>

<template>
  <div class="p-demos">
    <router-view></router-view>
  </div>
</template>


<style lang="scss" scoped>
  .b-namespace {}

    .b-namespace__box {}

</style>