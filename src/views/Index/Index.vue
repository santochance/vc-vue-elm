<template>
  <div>
    <header class="index__header">
      
    </header>
    <div class="index__search"></div>
    <div v-if="entryGroupMap.main"
      class="index__main-entries">
      <router-link v-for="mainEntry in entryGroupMap.main.entries"
        :key="mainEntry.id"
        to=""
        class="index__main-entry"
      >
        <img :src="$getImage(mainEntry.image_hash, mainEntryImgParam)" alt="">
        <p class="index__main-entry-title">{{ mainEntry.name }}</p>
      </router-link>
    </div>

    <IndexSkeleton></IndexSkeleton>
    <div class="index__member"></div>
    <div class="index__banner"></div>
    <IndexShopList></IndexShopList>
  </div>
</template>

<script>
  import { fetchEntryList } from '@/service/api'

  import IndexSkeleton from './IndexSkeleton'
  import IndexShopList from './IndexShopList'

  export default {
    name: 'Index',
    components: {
      IndexSkeleton,
      IndexShopList,
    },
    props: {
      
    },
    data() {
      return {
        /* remote data */
        entryGroupMap: {},

        /* image param */
        mainEntryImgParam: '?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/',
      }
    },
    created() {
      this.fetchEntryList()
    },
    methods: {
      fetchEntryList() {
        return fetchEntryList()
          .then((entryGroupList) => {
            this.entryGroupMap = entryGroupList.reduce((rst, group) =>
              ({
                ...rst,
                [group.group_name]: group,
              })
            , {})
          })
      },
    },
  }
</script>

<style lang="scss" scoped>
  .index {@at-root{
    
    .index__main-entries {
      display: flex;
      flex-wrap: wrap;
      overflow: hidden;
      height: 354px;
      text-align: center;
      background-color: #fff;
    }
    .index__main-entry {
      width: 20%;
      margin-top: 22px;
      img {
        display: inline-block;
      }
    }
    .index__main-entry-title {
      display: block;
      margin-top: 10px;
      font-size: 24px;
      color: #666;
    }
  }}
</style>