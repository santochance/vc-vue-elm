<template>
  <transition name="load-fade">
    <div v-if="visible" class="loading__wrapper">
      <div class="loading__main">
        <div class="loading__icon"></div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    props: {
      visible: {
        type: Boolean,
        default: false,
      },
    },
    data () {
      return {
        localVisible: false,
      }
    },
    watch: {
      visible(value) {
        requestAnimationFrame(() => {
          this.localVisible = value
        })
      }
    }
  }

</script>
<style lang="scss" scoped>
  .loading__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .loading__main {
    position: relative;
    // margin-top: 50px;
    width: 2em;
    height: 2em;
    font-size: 50px;
  }
  .loading__icon {
    position: absolute;
    z-index: 1;
    width: 2em;
    height: 2em;
    background: url('./loading.png') no-repeat;
    background-size: auto 100%;
    transform: 0 0;
    background-position-x: 0;
    user-select: none;
    cursor: pointer;
    animation: load 1.5s infinite steps(43);
  }

  @keyframes load {
    0% {
      background-postion-x: 0;
    }
    100% {
      background-position-x: 100%;
    }
  }

  .load-fade-enter-active,
  .load-fade-leave-active {
    transition: opacity .6s;
  }
  .load-fade-enter,
  .load-fade-leave-to {
    opacity: 0;
  }
</style>