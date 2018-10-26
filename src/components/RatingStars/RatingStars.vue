<script>

  const debug = false

  export default {
    name: 'RatingStars',
    components: {

    },
    props: {
      value: {
        type: Number,
        default: 5,
      },
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
  <div class="b-star">
    <div class="b-star__gray">
      <img src="./stars-gray.svg" alt="">
    </div>
    <div class="b-star__active" :style="{ width: Math.round(value / 5 * 100) + '%' }">
      <img src="./stars-active.svg" alt="">
    </div>
  </div>
</template>


<style lang="scss" scoped>
  .b-star {
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    & img {
      width: 112px;
    }
  }
    .b-star__gray,
    .b-star__active {
      img {
        width: 112px;
        height: 20px;
        flex: none;
        max-width: none;
      }
    }
    .b-star__gray {
      display: flex;
    }
    .b-star__active {
      display: flex;
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      overflow: hidden;
      // width: 100%;
    }
</style>