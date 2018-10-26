<script>

  const debug = false

  export default {
    name: 'Blank',
    /* options: 模板依赖 */
    components: {

    },
    // filters: {},
    // directives: { bind, inserted, update, componentUpdated, unbind },
    // v-directive:arg.modifiers="value(expression)"

    /* options: 接口 */
    props: {
      // propName: {
      //   type, required, default, validator,
      // }
    },
    // model: {},

    /* options: 本地状态 */
    data() {
      return {

      }
    },
    computed: {

    },

    /* options: 事件 */
    // watch: {}

    // beforeCreate, created, beforeMount, mounted, beforeUpdate, update,
    // activated, deactivated, beforeDestroy, destroyed
    created() {
      debug && (window[this.$options.name] = this)

    },
    activated() {

    },

    methods: {

    },
  }
</script>

<template>
  <div class="b-blank b-blank__box">
    <span>Blank</span>
  </div>
</template>


<style lang="scss" scoped>
  .b-blank {@at-root{

    .b-blank__box {}

  }}
</style>