<script>
  
  export default {
    name: 'IndexSkeleton',
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

<template>
  <div class="shell">
    <header class="shell__header"></header>
    <section class="shell__section shellAnimation">
      <div v-for="(n, idx) in 10" :key="idx"
        class="shell__item"
      ></div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
  .shell {@at-root{
    
    .shell__header {
      height: 190px;
      background: #0096ff;
    }
    .shell__section {
      outline: 1px solid;
      background-color: #fff;
      text-align: center;
    }
    .shell__item {
      display: inline-block;
      width: 20%;
      margin-top: 22px;
      &:before,
      &:after {
        content: '';
        display: block;
        margin-left: auto;
        margin-right: auto;
        background-color: #f4f4f4;
      }
      &:before {
        width: 80px;
        height: 80px;
        margin-top: 6px;
        margin-bottom: 4px;
        border-radius: 50%;
      }
      &:after {
        width: 60px;
        height: 28px;
        margin-top: 10px;
      }
    }

  }}

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