<template>
  <header class="page-header">
    <span v-if="backBtn"
      class="page-header__left"
      @click.stop.prevent="onBack">
      <!-- <img src="./arrow-left.svg" alt=""> -->
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 30" id="arrow-left"><path fill="#FFF" fill-rule="evenodd" d="M16.552 5.633L14.508 3.59 2.243 15.853 14.508 28.41l2.044-2.043-10.22-10.513z"/></svg>
    </span>
    <h1 class="page-header__title ellipsis"
      >{{ title }}</h1>
  </header>
</template>

<script>
  export default {
    name: 'PageHeader',
    components: {

    },
    props: {
      title: {
        type: String,
      },
      backBtn: {
        type: Boolean,
        default: true,
      }
    },
    data() {
      return {

      }
    },
    methods: {
      onBack() {
        this.$emit('back')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .page-header {
    position: relative;
    display: flex;
    align-items: center;
    height: 90px;
    font-size: 36px;
    background-image: linear-gradient(90deg, #0af, #0085ff);
    color: #fff;
  }
  .page-header__left {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 88px;
    height: 88px;
    img {
      width: 24px;
    }
    svg {
      width: 20px;
      height: 32px;
      fill: #fff;
    }
  }
  .page-header__title {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    max-width: 50%;
    margin: auto;
    text-align: center;
    font-size: 1em;
    font-weight: 700;
    line-height: 88px;
  }

</style>