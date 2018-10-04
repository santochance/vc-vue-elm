<template>
  <transition name="collapse"
    @beforeEnter="beforeEnter"
    @afterEnter="afterEnter"
    @beforeLeave="beforeLeave"
    @afterLeave="afterLeave"
  >
    <slot></slot>
  </transition>
</template>

<script>
  export default {
    methods: {
      beforeEnter(el) {
        requestAnimationFrame(() => {
          el.style.height = 0
          requestAnimationFrame(() => {
            el.style.height = el.scrollHeight + 'px'
          })
        })
      },
      afterEnter(el) {
        el.style.height = ''
      },
      beforeLeave(el) {
        requestAnimationFrame(() => {
          el.style.height = el.scrollHeight + 'px'
          requestAnimationFrame(() => {
            el.style.height = 0
          })
        })
      },
      afterLeave(el) {
        el.style.height = ''
      },
    }
  }
</script>

<style lang="scss" scoped>
  .collapse-enter-active,
  .collapse-leave-active {
    transition: all .3s;
  }
</style>