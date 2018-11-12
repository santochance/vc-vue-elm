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
        transitionName: '',
        transitionMode: '',
      }
    },
    computed: {
      eventBus() {
        return this
      },
    },
    watch: {
      '$route'(to, from) {
        if (from.path === '/' && to.path === '/index/address') {
          this.transitionName = 'slide-left'
          this.transitionMode = 'in-out'
        } else if (from.path === '/index/address' && to.path === '/' ) {
          this.transitionName = 'slide-right'
          this.transitionMode = 'in-out'
        } else {
          this.transitionName = ''
          this.transitionMode = ''
        }
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
  <div class="p-index-wrap">
    <transition :name="transitionName" :mode="transitionMode">
      <keep-alive :include="['TabPage']">
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>


<style lang="scss" scoped>
  .p-index-wrap {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .v-enter-active,
  .v-leave-active,
  .slide-left-enter-active,
  .slide-left-leave-active,
  .slide-right-enter-active,
  .slide-right-leave-active, {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 100%;
    min-height: 100%;
    min-height: 100vh;
  }

  .slide-left-enter-active {
    transition: all .3s ease-out;
    z-index: 10000;
  }
  .slide-left-enter {
    transform: translateX(100%);
  }
  .slide-left-leave {
    visibility: hidden;
  }

  .slide-right-leave-active {
    transition: all .3s ease-out;
    z-index: 10000;
  }
  .slide-right-enter {
    visibility: hidden;
  }
  .slide-right-leave-to {
    transform: translateX(100%);
  }
</style>