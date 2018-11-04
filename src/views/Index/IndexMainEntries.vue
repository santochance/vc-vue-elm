<script>

  export default {
    name: 'IndexMainentries',
    components: {

    },
    props: {
      entries: {
        type: Array,
        default: () => [],
      }
    },
    data() {
      return {
        /* image param */
        mainEntryImgParam: '?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
      }
    },
    computed: {

    },
    methods: {

    },
  }
</script>

<template>
  <div class="b-entries b-entries__box">
    <div
      class="b-entries__main-entries">
      <router-link v-for="mainEntry in entries"
        :key="mainEntry.id"
        to=""
        class="b-entries__main-entry"
      >
        <div class="b-entries__main-entry-icon">
          <img :src="$getImage(mainEntry.image_hash, mainEntryImgParam)" alt="">
        </div>
        <p class="b-entries__main-entry-title">{{ mainEntry.name }}</p>
      </router-link>
    </div>
  </div>
</template>


<style lang="scss" scoped>

  .b-entries {}

    .b-entries__box {}

    .b-entries__main-entries {
      display: flex;
      flex-wrap: wrap;
      overflow: hidden;
      height: 354px;
      text-align: center;
      background-color: #fff;
    }
    .b-entries__main-entry {
      display: block;
      width: 20%;
      margin-top: 22px;
      img {
        display: inline-block;
      }
    }
    .b-entries__main-entry-icon {
      width: 90px;
      height: 90px;
      margin: auto;
    }
    .b-entries__main-entry-title {
      display: block;
      margin-top: 10px;
      font-size: 24px;
      color: #666;
    }

</style>