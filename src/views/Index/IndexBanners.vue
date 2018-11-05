<script>
  import { Swipe, SwipeItem } from 'vue-swipe/src'

  const debug = false

  export default {
    name: 'IndexBanners',
    components: {
      Swipe,
      SwipeItem,
    },
    props: {
      banners: {
        type: Array,
      }
    },
    data() {
      return {
        /* image param */
        bannerImgParam: '?imageMogr/format/webp/thumbnail/568x/',
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
  <div class="p-index__banners b-banners"
    v-if ="banners && banners.length"
  >
    <swipe class="b-banners__swipe">
      <swipe-item class="b-banners__swipe-item"
        v-for="banner in banners" :key="banner.id"
      >
        <img :src="$getImage(banner.image_hash, bannerImgParam)" alt="">
      </swipe-item>
    </swipe>
  </div>
</template>


<style lang="scss" scoped>
  .p-index__banners {
    height: 176px;
    width: 100%;
    margin-top: 10px;
    border-radius: 8px;
    img {
      width: 100%;
    }
  }

  .b-banners {}

</style>

<style lang="scss">
  .p-index__banners {
    .mint-swipe-indicator {
      width: 18px;
      height: 3px;
      border-radius: 0;
      &.is-active {
        background-color: #00a6ff;
      }
    }
  }
</style>