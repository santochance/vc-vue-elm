<script>

  const debug = false

  export default {
    name: 'NoDataTip',
    components: {

    },
    props: {
      data: {
        type: Object,
      },
    },
    data() {
      return {

      }
    },
    computed: {
      imgUrl() {
        const img = this.data.img
        if (typeof img === 'object' && !img) {
          return this.$getImage(img.hash, img.param)
        }
        return img
      },
    },
    created() {
      debug && (window[this.$options.name] = this)

    },
    methods: {

    },
  }
</script>

<template>
  <div class="b-no-data b-no-data__box"
    v-if="data"
  >
    <img v-if="data.img" :src="imgUrl" alt="">
    <h3>{{ data.title }}</h3>
    <p>{{ data.content }}</p>
    <button
      v-if="data.button"
      @click.stop.prevent="data.button.handler"
    >{{ data.button.text }}</button>
  </div>
</template>


<style lang="scss" scoped>
  .b-no-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    img {
      display: block;
      width: 400px;
    }
    h3 {
      font-size: 34px;
      font-weight: 400;
      margin: 25px 0 20px;
      color: #6a6a6a;
    }
    button {
      padding: 20px;
      min-width: 240px;
      font-size: 28px;
      color: #fff;
      background-color: #56d176;
    }
  }

    .b-no-data__box {}

</style>