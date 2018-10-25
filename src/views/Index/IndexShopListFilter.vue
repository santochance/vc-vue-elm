<script>
  import { toggleValue, toggleArray } from '@/util/toggleChange'

  const debug = true
  debug && (window.toggleValue = toggleValue)
  debug && (window.toggleArray = toggleArray)

  export default {
    name: 'IndexShopListFilter',
    components: {

    },
    props: {
      filterOptions: {
        type: Object,
      }
    },
    data() {
      return {
        selectedInsideSorterName: '', // ?String
        selectedSorter: null, // ?Object

        sortDropdownVisible: false,


        filterDropdownVisible: false,
        averageCostsGroupItems: [
          [null, 20], [20, 40], [40, 60], [60, 80], [80, 100], [100, null],
        ],
        // selectedFilters: {},

        filterPayload: {
          quality_union: null,
          order_by: null,
          delivery_mode: [],
          support_ids: [],
          activity_types: null,
          cost_range: null,
          cost_from: null,
          cost_to: null,
        },

        deliverModeIconParam: '?imageMogr/format/webp/thumbnail/!24x24r/gravity/Center/crop/24x24/',
      }
    },
    computed: {
      insideSorterList() {
        try {
          return this.filterOptions.outside.inside_sort_filter
        } catch(e) {
          return []
        }
      },
      outsideSorterList() {
        try {
          return this.filterOptions.outside.outside_sort_filter
        } catch(e) {
          return []
        }
      },
      uniqueSorterKeys() {
        return this.insideSorterList.concat(this.outsideSorterList)
          .reduce((unique, sorter) =>
            (unique.indexOf(sorter.key) === -1)
              ? [ ...unique, sorter.key ] : unique
          ,[])
      },
      filterGroupList() {
        return this.filterOptions.bar || {}
      },
      supportsGroup() {
        return this.filterGroupList['supports'] || []
      },
      activityTypesGroup() {
        return this.filterGroupList['activity_types'] || []
      },
      deliverMode() {
        return [this.filterGroupList['delivery_mode']]
      },
      averageCostsGroup() {
        const items = this.averageCostsGroupItems
        const makeDescription = (from, to) =>
          (to == null) ? `¥${from}以上`
            : (from == null) ? `¥${to}以下` : `¥${from} - ¥${to}`

        return items.map(([from, to], idx)=> {
          return ({
            description: makeDescription(from, to),
            id: idx + 1,
            from,
            to,
          })
        })
      },
    },
    watch: {
      // 动态设置 selectedInsideSorterName 初始值
      'filterOptions.inside_sort_filter'(value) {
        this.initSelectedInsideSorterName(value)
      },
    },
    created() {
      debug && (window[this.$options.name] = this)

      this.initSelectedInsideSorterName(this.insideSorterList)
    },
    methods: {
      initSelectedInsideSorterName(list) {
        let name
        try {
          name = list[0].name
        } catch(e) {
          name = ''
        }
        this.selectedInsideSorterName = name
      },
      onSorterClick(sorter, position) {
        const filterPayload = this.filterPayload
        const keysToReset = this.uniqueSorterKeys.filter(key => key !== sorter.key)

        keysToReset.forEach(key =>filterPayload[key] = null)
        filterPayload[sorter.key] = toggleValue(filterPayload[sorter.key], sorter.value)

        // 确保能够触发视图更新
        this.filterPayload = { ...filterPayload }

        this.selectedSorter = sorter
        if (position === 'outside') {
          this.selectedInsideSorterName = (this.insideSorterList[0] || {}).name || ''
        } else {
          this.selectedInsideSorterName = sorter.name
        }
      },
      // 值相同时返回指定空值
      toggleValue,
      toggleArray,
      checkSorterActive(sorter, selectedSorter) {
        if (!selectedSorter) return false

        const compareSorter = (a, b) => (a.key === b.key && a.value === b.value)

        if (Array.isArray(sorter)) {
          return sorter.some(s => compareSorter(s, selectedSorter))
        } else {
          return compareSorter(sorter, selectedSorter)
        }
      },
      checkFilteValueActive(value, selected) {
        if (!selected) return false

        if (Array.isArray(selected)) {
          return selected.indexOf(value) !== -1
        } else {
          return value === selected
        }
      },
      onFilterClear() {
        this.filterPayload = {
          ...this.filterPayload,
          delivery_mode: [],
          support_ids: [],
          activity_types: null,
          cost_range: null,
        }
      },
    },
  }
</script>

<template>
  <aside v-if="filterOptions"
    class="b-filter b-filter__box">
    <div v-show="sortDropdownVisible || filterDropdownVisible"
      class="b-filter__mask"
      @click="(sortDropdownVisible = false, filterDropdownVisible = false)"
    ></div>
    <div class="b-filter__header">
      <a href="javascript:"
        class="b-filter__nav ellipsis"
        :class="{
          'b-filter__nav_active': checkSorterActive(insideSorterList, selectedSorter),
          'b-filter__nav_open': sortDropdownVisible,
        }"
        @click="sortDropdownVisible = !sortDropdownVisible"
      >
        <span>{{ selectedInsideSorterName }}</span>
        <!-- <svg><use></use></svg> -->
      </a>
      <a href="javascript:"
        v-for="(sorter, idx) in outsideSorterList" :key="sorter.name + idx"
        class="b-filter__nav"
        :class="{ 'b-filter__nav_active': checkSorterActive(sorter, selectedSorter) }"
        @click="onSorterClick(sorter, 'outside')"
      >
        <span>{{ sorter.name }}</span>
      </a>
      <a href="javascript:"
        class="b-filter__nav b-filter__nav-filters"
        @click="filterDropdownVisible = !filterDropdownVisible"
      >
        <span>筛选</span>
        <!-- <svg><use xlink:href=""></use></svg> -->
      </a>
    </div>

    <section
      class="b-filter__extend b-filter__extend-sorters"
      :class="{ 'b-filter__extend_open': sortDropdownVisible }"
    >
      <ul>
        <li v-for="(sorter, idx) in insideSorterList" :key="sorter.name + idx"
          @click="onSorterClick(sorter)"
          class="b-filter__sorter-item"
          :class="{ 'b-filter__sorter-item_active': checkSorterActive(sorter, selectedSorter) }"
        >
          <span>{{ sorter.name }}</span>
          <img src="./selected.png" alt="">
        </li>
      </ul>
    </section>

    <!--
    <div class="console">
      <p>filterPayload: {{ JSON.stringify(filterPayload) }}</p>
    </div>
     -->
  </aside>
</template>

<style lang="scss" scoped>

  .b-filter {}

  /* base */

    .b-filter__box {
      position: relative;
      height: 80px;
    }

    .b-filter__mask {
      position: fixed;
      z-index: 3;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-color: rgba(0, 0, 0, .5);
      transition: all .3s ease-in-out;

      // backdrop-filter: blur(10px);
    }

  /* navbar */

    .b-filter__header {
      position: relative;
      z-index: 4;
      display: flex;
      text-align: center;
      background-color: #fff;
      width: 100%;
      border-bottom: 1px solid #ddd; /* no */
      height: 79px;
      line-height: 78px;
    }
    .b-filter__nav {
      display: block;
      flex: 1;
      white-space: nowrap;
      text-align: center;
      font-size: 28px;
      color: #666;

      &_active {
        font-weight: 700;
        color: #000;
      }
      &_open {
        color: #3190e8;
        font-weight: 700;
      }
    }
    .b-filter__nav-filters {
      flex: 0 auto;
      width: 160px;
    }

    .b-filter__extend {
      position: absolute;
      z-index: 4;
      left: 0;
      right: 0;

      overflow: auto;
      border-top: 1px solid #ddd;
      background-color: #fff;

      /* collapse transition */
      transition: all .2s ease-in-out;
      opacity: 0;
      visibility: hidden;
      max-height: 0;
      &_open {
        opacity: 1;
        visibility: visible;
        max-height: 1500%;
      }
    }

  /* sorters panel */

    .b-filter__extend-sorters {
      padding: 16px 0 24px;
      font-size: 28px;
      color: #333;
      background-color: #fff;
    }
    .b-filter__sorter-item {
      position: relative;
      padding-left: 40px;
      font-size: 28px;
      line-height: 80px;

      img {
        position: absolute;
        right: 28px;
        top: 50%;
        transform: translateY(-50%);
        width: 30px;
        height: 30px;

        visibility: hidden;
      }

      &_active {
        font-weight: 700;
        color: #3190e8;
        img {
          visibility: visible;
        }
      }
    }


</style>