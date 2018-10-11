<template>
  <div class="shell">
    <img class="shellAnimation"
      src="./skeleton.svg" alt="">
  </div>
</template>

<script>

  export default {
    name: 'ShopSkeleton',
    components: {

    },
    props: {
      
    },
    data() {
      return {

      }
    },
  }
</script>

<style lang="scss" scoped>
  .shell {
    position: fixed;
    z-index: 9999;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #fff;
  }
  .shellAnimation {
    animation: shellPulse 1s infinite;
  }
  @keyframes shellPulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: .7;
    }
    100% {
      opacity: 1;
    }
  }
</style>