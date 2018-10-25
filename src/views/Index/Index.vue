<template>
  <div>
    <IndexHeader :address="address"></IndexHeader>
    <IndexSearch></IndexSearch>
    <IndexMainEntries v-if="entryGroupMap.main"
      :entries="entryGroupMap.main.entries"
    ></IndexMainEntries>
    <!-- <IndexSkeleton></IndexSkeleton> -->
    <div class="index__member"></div>
    <div class="index__banner"></div>
    <IndexShopList></IndexShopList>
  </div>
</template>

<script>
  import { fetchEntryList, reverseGeoCoding } from '@/service/api'

  import IndexHeader from './IndexHeader'
  import IndexSearch from './IndexSearch'
  import IndexSkeleton from './IndexSkeleton'
  import IndexShopList from './IndexShopList'
  import IndexMainEntries from './IndexMainEntries'

  const debug = true

  export default {
    name: 'Index',
    components: {
      IndexHeader,
      IndexSearch,
      IndexSkeleton,
      IndexShopList,
      IndexMainEntries,
    },
    props: {

    },
    data() {
      return {
        /* remote data */
        entryGroupMap: {},
        address: null,
        latitude: 22.6222519,
        longitude: 114.0327521,
      }
    },
    created() {
      debug && (window[this.$options.name] = this)

      this.fetchEntryList()
      this.reverseGeoCoding()
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
      reverseGeoCoding() {
        return reverseGeoCoding()
          .then((address) => {
            this.address = address
          })
      }
    },
  }
</script>

<style lang="scss" scoped>
  .index {@at-root{

  }}
</style>