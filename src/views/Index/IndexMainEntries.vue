<script>
  import { Swipe, SwipeItem } from 'vue-swipe'

  export default {
    name: 'IndexMainentries',
    components: {
      Swipe,
      SwipeItem,
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
      slicedEntries() {
        const entries = this.entries
        if (!entries || !entries.length) return entries
        const len = entries.length
        const size = 10
        let i = 0
        let result = []
        let shard
        while (i < len) {
          (i % size === 0) && result.push(shard = [])
          shard.push(entries[i++])
        }
        return result
      },
    },
    methods: {

    },
  }
</script>

<template>
  <div class="p-index__main-entries b-entries b-entries__box">
    <swipe :auto="0" :showIndicators="slicedEntries.length > 1"
      class="b-entries__swipe"
    >
      <swipe-item
        v-for="(shard, idx) in slicedEntries" :key="idx"
      >
        <div class="b-entries__main-entries">
          <router-link v-for="mainEntry in shard"
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
      </swipe-item>
    </swipe>
  </div>
</template>


<style lang="scss" scoped>

  .b-entries {}

    .b-entries__box {
      height: 354px;
    }

    .b-entries__swipe {
      height: 100%;
    }

    .b-entries__main-entries {
      display: flex;
      flex-wrap: wrap;
      overflow: hidden;
      text-align: center;
      background-color: #fff;
    }
    .b-entries__main-entry {
      display: block;
      width: 20%;
      margin-top: 22px;
      img {
        display: inline-block;
        width: 100%;
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

<style lang="scss">
  .p-index__main-entries {
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