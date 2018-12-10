<script>

  const debug = false

  export default {
    name: 'Simple',
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
  <div class="b-namespace b-namespace__box">
    <span>Simple</span>
  </div>
</template>


<style lang="scss" scoped>
  .b-namespace {}

    .b-namespace__box {}

</style>