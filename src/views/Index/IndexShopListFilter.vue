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
      'filterOptions.outside.inside_sort_filter'(value) {
        this.initSelectedInsideSorterName(value)
      },
    },
    created() {
      debug && (window[this.$options.name] = this)
      debug && console.log('<IndexShopListFilter> created')

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
      stick() {
        const elRect = this.$el.getBoundingClientRect()
        const elRectTop = Math.round(elRect.top)
        const offset = parseFloat(this.$toRpx(100))

        if (elRectTop > offset) {
          debug && console.log('should update scrollTop')
          const targetScrollTop = window.scrollY + elRectTop - offset
          document.documentElement.scrollTop = targetScrollTop
        }
      },
    },
  }
</script>

<template>
  <div class="b-filter sticky-box">
    <aside v-if="filterOptions"
      class="b-filter__box">
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
          @click="sortDropdownVisible = !sortDropdownVisible, stick()"
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
          @click="filterDropdownVisible = !filterDropdownVisible, stick()"
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

      <section class="b-filter__extend b-filter__extend-filters"
        :class="{ 'b-filter__extend_open': filterDropdownVisible }"
      >
        <div class="b-filter__filter-selects">
          <div class="b-filter__filter-select">
            <div class="b-filter__filter-select-title">商家服务（可多选）</div>
            <div class="b-filter__filter-options">
              <div v-for="option in deliverMode" :key="option.id"
                class="b-filter__filter-option"
                :class="{ 'b-filter__filter-option_active': checkFilteValueActive(option.id, filterPayload['delivery_mode']) }"
                @click="filterPayload['delivery_mode'] = toggleArray(filterPayload['delivery_mode'], option.id)"
              >
                <img class="b-filter__filter-option-icon"
                  :src="$getImage(option.icon_hash, deliverModeIconParam)"
                />
                <span class="b-filter__filter-option-name">{{ option.text }}</span>
              </div>
              <div v-for="option in supportsGroup" :key="option.id"
                class="b-filter__filter-option"
                :class="{ 'b-filter__filter-option_active': checkFilteValueActive(option.id, filterPayload['support_ids']) }"
                @click="filterPayload['support_ids'] = toggleArray(filterPayload['support_ids'], option.id)"
              >
                <img class="b-filter__filter-option-icon"
                  :src="$getImage(option.icon_hash, deliverModeIconParam)"
                />
                <span class="b-filter__filter-option-name">{{ option.name }}</span>
              </div>
            </div>
          </div>
          <div class="b-filter__filter-select">
            <div class="b-filter__filter-select-title">优惠活动（单选）</div>
            <div class="b-filter__filter-options">
              <div v-for="option in activityTypesGroup" :key="option.id"
                class="b-filter__filter-option"
                :class="{ 'b-filter__filter-option_active': checkFilteValueActive(option.id, filterPayload['activity_types']) }"
                @click="filterPayload['activity_types'] = toggleValue(filterPayload['activity_types'], option.id)"
              >
                <span class="b-filter__filter-option-name">{{ option.name }}</span>
              </div>
            </div>
          </div>
          <div class="b-filter__filter-select">
            <div class="b-filter__filter-select-title">人均消费</div>
            <div class="b-filter__filter-options">
              <div v-for="option in averageCostsGroup" :key="option.id"
                class="b-filter__filter-option"
                :class="{ 'b-filter__filter-option_active': checkFilteValueActive(option.id, filterPayload['cost_range']) }"
                @click="filterPayload['cost_range'] = toggleValue(filterPayload['cost_range'], option.id)"
              >
                <span class="b-filter__filter-option-name">{{ option.description }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="b-filter__filter-btns">
          <button class="b-filter__filter-btn b-filter__filter-btn-clear">清空</button>
          <button class="b-filter__filter-btn b-filter__filter-btn-ok">确定</button>
        </div>
      </section>

      <!--
      <div class="console">
        <p>filterPayload: {{ JSON.stringify(filterPayload) }}</p>
      </div>
       -->
    </aside>
  </div>
</template>

<style lang="scss" scoped>

  .sticky-box {
    position: sticky;
    top: 100px;
    z-index: 100;
  }
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

  /* filters panel */

    .b-filter__extend-filters {}
    .b-filter__filter-selects {
      overflow: auto;
      height: 100%;
      padding: 0 20px;
      background-color: #fff;
    }
    .b-filter__filter-select {
      margin: 20px 0;
    }
    .b-filter__filter-select-title {
      margin-left: 7px;
      margin-bottom: 15px;
      color: #666;

    }
    .b-filter__filter-options {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-bottom: 20px;
      text-align: center;
    }

    .b-filter__filter-option {
      flex: 1 auto;
      width: 31.33%;
      margin: 6px 7px;
      white-space: nowrap;
      font-size: 26px;
      line-height: 70px;
      background-color: #fafafa;
      &_active {
        font-weight: 700;
        color: #3190e8;
        background-color: #edf5ff;
      }
    }
    .b-filter__filter-option-icon {
      width: 26px;
      height: 26px;
      vertical-align: middle;
      margin-right: 6px;
    }
    .b-filter__filter-option-name {
      margin-left: 2%;
      vertical-align: middle;
    }
    .b-filter__filter-btns {
      display: flex;
      align-items: center;
      justify-content: space-around;
      box-shadow: 0 -2px 4px 0 #ededed;
      background-color: #fafafa;
    }
    .b-filter__filter-btn {
      flex: 1;
      text-align: center;
      text-decoration: none;
      font-size: 32px;
      line-height: 86px;
    }
    .b-filter__filter-btn-ok {
      color: #fff;
      background-color: #00d762;
      // border: 1px solid #00d762;
    }
    .b-filter__filter-btn-clear {
      color: #333;
      background-color: #fff;
    }

</style>