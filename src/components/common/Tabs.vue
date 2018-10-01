<template>
  <div v-if="tabs && tabs.length" class="tabs__block">
    <div class="tabs__bar">
      <div v-for="(tab, idx) in tabs" :key="idx"
        class="tabs__tab"
        :class="{ 'tabs__tab_active': current === idx || current === tab.key }"
        @click="onTabClick(tab, idx)">
        <span class="tabs__tab-text"
          :class="{ 'tabs__tab-text_active': current === idx || current === tab.key }"
        >{{ tab.title }}</span>
      </div>
    </div>
    <div class="tabs__content">
      <div v-for="(tab, idx) in tabs" :key="idx"
        v-show="current === idx || current === tab.key"
        class="tabs__pane">
        <vnode v-if="tabLoaded[tab.key]" :vnode="($slots.default || [])[idx]"></vnode>
      </div>
    </div>
  </div>
</template>

<script>
  const debug = false

  export default {
    name: 'tabs',
    components: {
      Vnode: {
        functional: true,
        render: (h, ctx) => ctx.props.vnode
      },
    },
    props: {
      tabs: {
        type: Array,
        default: () => [],
        required: true,
      },
      initialTab: [Number, String],
      currentTab: [Number, String],
      lazy: Boolean,
    },
    data() {
      return {
        // current 依赖 tabs，当 tabs 改变时才执行初始化
        current: null,
        default: 0, // list 非空时的 current 缺省默认值
        tabLoaded: {},
      }
    },
    computed: {
    },
    created() {
      debug && console.log('debug:Tabs created')

      this.init()
    },
    watch: {
      tabs() {
        this.init()
      },
      currentTab(value, oldValue) {
        if (value !== undefined && value !== oldValue) {
          this.setCurrent(this.currentTab)
        }
      }
    },
    methods: {
      init() {
        debug && console.log('debug:Tabs.init')
        if (this.lazy) {
          this.updateTabLoaded()
        }

        if (this.currentTab === undefined) {
          this.setCurrent(this.current)
        } else {
          // 无外部 current 值
          this.setCurrent(this.currentTab)
        }
      },
      onTabClick(tab, idx) {
        this.$emit('tab-click', tab, idx)

        debug && console.log('debug:onTabClick')
        if (this.currentTab === undefined) {
          // 无外部 current 值
          this.setCurrent(idx)
        }
      },
      // 检测并初始化 current
      setCurrent(value) {
        // verify and convert current
        const tabs = this.tabs
        // value 可能为 null, 范围内值，超范围值
        value = this.getIndex(value, tabs)

        // change current
        const oldValue = this.current
        if (value === oldValue) return

        const tab = tabs[value]
        this.current = value
        this.$emit('change', tab, value)

        // update lazy load
        if (!this.lazy) return

        const key = tab.key
        const tabLoaded = this.tabLoaded
        if (key in tabLoaded && !tabLoaded[key]) {
          this.tabLoaded[key] = true
        }
      },
      // 根据 prop(key 或 index) 从数据 list 中搜索 index 值
      getIndex(prop, list) {
        // list 为空时返回 null
        if (!list || !(list.length > 0)) return null

        // 缺省，默认值为 0
        if (prop == null) {
          prop = this.initialTab === undefined ? this.default : this.initialTab
        }

        // prop 为 Number 类型
        if (typeof prop === 'number') {
          if (!(prop >= 0 && prop < list.length)) {
            throw new RangeError('%s is not a valid index of tabs', prop)
          }
          return prop
        // prop 为 String 类型
        } else if (typeof prop === 'string') {
          const idx = list.findIndex(item => item.key === prop)
          if (!(idx >= 0)) {
            throw new RangeError('%s is not a valid key of tabs', prop)
          }
          return idx
        // 其他所有类型
        } else {
          return null
        }
      },
      updateTabLoaded() {
        const tabs = this.tabs
        if (!tabs || !(tabs.length > 0)) {
          return this.tabLoaded = {}
        }

        // tabs 不为空
        const tabLoaded = this.tabLoaded
        this.tabLoaded = tabs.reduce((rst, tab) => {
          // 新增的设为 false, 已有的不变，失效的去掉
          // 没有 key 的不记录
          const key = tab.key
          rst[key] = key in tabLoaded ? tabLoaded[key] : false
          return rst
        }, {})
      },
    },
  }
</script>

<style lang="scss" scoped>
  .tabs__block {
    display: flex;
    flex-direction: column;
  }

  .tabs__bar {
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #fff;
    border-bottom: 1px solid #ebebeb; /* no */;
  }
  .tabs__tab {
    flex: 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .tabs__tab-text {
    position: relative;
    display: inline-block;
    line-height: 80px;

    text-align: center;
    font-size: 28px;
    color: #666;

    &_active {
      color: #333;
      font-weight: 700;

      &:after {
        content: ' ';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        border-bottom: 4px solid #2395ff;
      }
    }
  }

  .tabs__content {
    flex: 1 auto;
    display: flex;
  }
  .tabs__pane {
    flex: 1 0 100%;
    display: flex;
    flex-direction: column;
  }
</style>