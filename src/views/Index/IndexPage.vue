<script>
  import IndexSkeleton from './IndexSkeleton'

  const debug = false

  export default {
    name: 'IndexPage',
    components: {
      IndexSkeleton,
    },
    props: {

    },
    data() {
      return {
        transitionName: '',
        transitionMode: '',

        // data of <Index />
        index: {}
      }
    },
    computed: {
      eventBus() {
        return this
      },
      routePath() {
        return this.$route.path
      },
      isIndexRoute() {
        const  path = this.$route.path
        return path === '/' || path === '/index'
      }
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
      onIndexUpdated(data) {
        this.index = data
      }
    },
  }
</script>

<template>
  <div class="p-index__view">
    <transition :name="transitionName" :mode="transitionMode">
      <keep-alive :include="['TabPage', 'IndexSelectAddress']">
        <div class="p-index__view">
          <IndexSkeleton class="p-index__loading"
            v-if="!index.loaded"
            :headerLoaded="index.locState > 0"
            :entriesLoaded="index.entriesLoaded"
            :listLoaded="index.listLoaded"
          ></IndexSkeleton>
          <router-view @updated:index="onIndexUpdated"></router-view>
        </div>
      </keep-alive>
    </transition>
  </div>
</template>


<style lang="scss" scoped>
  .p-index__view {
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: #fff;
  }

  .p-index__loading {
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    visibility: hidden;
    > * {
      visibility: visible;
    }
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
    transition: all .3s;
    z-index: 10000;
  }
  .slide-left-enter {
    transform: translateX(100%);
  }
  .slide-left-leave {
    opacity: 0;
  }

  .slide-right-leave-active {
    transition: all .3s;
    z-index: 10000;
  }
  .slide-right-enter {
    opacity: 0;
  }
  .slide-right-leave-to {
    transform: translateX(100%);
  }
</style>