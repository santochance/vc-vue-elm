<template>
  <transition name="fade">
    <div v-show="visible" class="toast__block l-inbl">
      <!-- <div class="oper"><button @click.stop.prevent="onToggle">Toggle</button></div> -->
      <transition name="slide-up"
        @afterEnter="afterEnter"
        @afterLeave="afterLeave"
      >
        <div v-if="visible" class="toast__wrap">
          <div class="toast__content">
            {{ content }}
          </div>
        </div>
      </transition>
      <div v-if="visible && mask" class="toast__mask"></div>
    </div>
  </transition>
</template>

<script>
  /* eslint no-console: 0, no-debugger: 0, no-unused-vars: 0 */

  // 扩展功能定义在 Toast 的包裹类中
  export default {
    components: {
    },
    data () {
      return {
        content: 'Default Content',
        duration: 1.5,
        mask: true,
        visible: false,
      }
    },
    created() {
    },
    mounted() {
      // setTimeout(() => {
      //   this.visible = true
      //   if (this.duration) {
      //     setTimeout(() => {
      //       this.visible = false
      //     }, this.duration * 1000)
      //   }
      // }, 2000)
    },
    methods: {
      onToggle() {
        this.visible = !this.visible
      },
      afterEnter(el) {
        this.$emit('afterEnter', el)
      },

      afterLeave(el) {
        this.$emit('afterLeave', el)
      },
    },
  }

</script>

<style lang="scss" scoped>
  .oper {
    position: fixed;
    top: 0;
    right: 0;
    margin: auto;
    z-index: 9999;
  }

  .l-inbl {
    text-align: center;
    white-space: nowrap;
    font-size: 0;
    & > * {
      display: inline-block;
      vertical-align: bottom;
      white-space: normal;
      text-align: left;
      font-size: medium;
    }
    &:before {
      content: '';
      display: inline-block;
      vertical-align: middle;
      height: 100%;
    }
  }

  .toast {@at-root {
    .toast__block {
      position: fixed;
      z-index: 999;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      background-color: rgba(128, 128, 128, .3);
      // 交互透明容器
      visibility: hidden;
      & > * {
        visibility: visible;
      }
    }
    .toast__wrap {
      margin-bottom: 80px;
    }
    .toast__content {
      padding: 24px 30px;
      margin: auto;
      border-radius: 10px;
      font-size: 26px;
      color: #fff;
      background-color: rgba(0, 0, 0, .6);
    }
    .toast__mask {
      position: fixed;
      z-index: -1;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      // background-color: rgba(0, 0, 0, .7);
    }
  }}

  .slide-up-enter-active,
  .slide-up-leave-active {
    transition: all .3s;
  }
  .slide-up-enter {
    transform: translateY(80%);
  }
  .slide-up-leave-to {
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: all .3s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>