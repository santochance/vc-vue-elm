<script>
  import toggleChange from '@/util/toggleChange'
  
  const debug = true
  debug && (window.toggleChange = toggleChange)

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
        
        selectedFilters: {

        },

        sortDowndownVisible: false,

        filterPayload: {},
      }
    },
    computed: {
      insideSorterList() {
        return this.filterOptions.inside_sort_filter
      },
      outsideSorterList() {
        return this.filterOptions.outside_sort_filter
      },
      uniqueSorterKeys() {
        return this.insideSorterList.concat(this.outsideSorterList)
          .reduce((unique, sorter) => 
            (unique.indexOf(sorter.key) === -1)
              ? [ ...unique, sorter.key ] : unique
          ,[])
      },
    },
    watch: {
      // 动态设置 selectedInsideSorterName 初始值
      'filterOptions.inside_sort_filter'(value) {
        let name
        try {
          name = value[0].name
        } catch(e) {
          name = ''
        }
        this.selectedInsideSorterName = name
      },
    },
    created() {
      debug && (window[this.$options.name] = this)
    },
    methods: {
      onSorterClick(sorter, position) {
        const filterPayload = this.filterPayload
        const keysToReset = this.uniqueSorterKeys.filter(key => key !== sorter.key)

        keysToReset.forEach(key =>filterPayload[key] = null)
        filterPayload[sorter.key] = toggleChange(filterPayload[sorter.key], sorter.value)

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
      toggleChange,
      checkSorterActive(sorter, selectedSorter) {
        if (!selectedSorter) return false

        const compareSorter = (a, b) => (a.key === b.key && a.value === b.value)

        if (Array.isArray(sorter)) {
          return sorter.some(s => compareSorter(s, selectedSorter))
        } else {
          return compareSorter(sorter, selectedSorter)
        }
      },
    },
  }
</script>

<template>
  <aside v-if="filterOptions" class="b-filter b-filter__box">
    <div class="b-filter__header">
      <a href="javascript:"
        class="b-filter__nav" 
        :class="{
          'b-filter__nav_active': checkSorterActive(insideSorterList, selectedSorter),
          'b-filter__nav_open': sortDowndownVisible,
        }"
        @click="sortDowndownVisible = !sortDowndownVisible"
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
        class="b-filter__nav" 
      >
        <span>筛选</span>
        <!-- <svg><use xlink:href=""></use></svg> -->
      </a>
    </div>
    <section class="b-filter__extend">
      <ul>
        <li v-for="(sorter, idx) in insideSorterList" :key="sorter.name + idx"
          @click="onSorterClick(sorter)"
          :class="{ 'b-filter__sorter_active': checkSorterActive(sorter, selectedSorter) }"
        >
          <span>{{ sorter.name }}</span>
        </li>
      </ul>
    </section>
    <section class="b-filter__extend"></section>
    <div class="console">filterPayload: {{ filterPayload }}</div>
  </aside>
</template>


<style lang="scss" scoped>
  .b-filter {@at-root{

    .b-filter__box {}
    
    .b-filter__header {
      display: flex;
      align-items: center;
      text-align: center;
    }
    .b-filter__nav {
      display: block;
      flex: 1 auto;
      font-size: 32px;
      line-height: 2em;
      &_active {
        font-weight: 700;
        color: #000;
      }
      &_open {
        color: #3190e8;
        font-weight: 700;
      }
    }
    .b-filter__extend {
      li {
        font-size: 32px;
        line-height: 2em;
      }
    }
    .b-filter__sorter_active {
      font-weight: 700;
      color: #3190e8;
    }
  }}
</style>