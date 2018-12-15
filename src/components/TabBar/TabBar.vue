<template>
  <div class="tabbar"
    :style="[options.borderStyle, { backgroundColor: options.backgroundColor }]"
  >
    <router-link class="tabbar__tab"
      v-for="(tab, idx) in tabs" :key="tab.key"
      :to="tab.path" replace
      :style="[currentTabKey === idx ? { color: options.selectedColor } : { color: options.color }]"
      @click="currentTabKey = idx"
    >
      <svg class="tabbar__icon">
        <use :xlink:href="currentTabKey === idx ? tab.activeIconPath : tab.iconPath"></use>
      </svg>
      <div>
      </div>
      <span class="tabbar__text"
      >{{ tab.text }}</span>
    </router-link>
  </div>
</template>
<script>
  import config from '@/config'

  const options = config.tabBar
  const tabs = options.list
  let requireAll = requireContext => requireContext.keys().map(requireContext)
  requireAll(require.context('@svg-sprite/tabbar', false, /\.svg$/))

  export default {
    name: 'TabBar',
    props: {
      currentTab: {
        type: [Number, String],
        default: 0,
      },
    },
    data() {
      return {
        options,
        tabs,
        currentTabKey: '',
      }
    },
    created() {
      this.currentTabKey = this.getIndex(this.currentTab, this.tabs)
    },
    methods: {
      getIndex(prop, list) {
        // list 为空时返回 null
        if (!list || !(list.length > 0)) return null

        // 缺省，默认值为 0
        if (prop == null) {
          // prop = this.initialTab === undefined ? this.default : this.initialTab
          return
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
    },
  }
</script>
<style lang="scss" scoped>
.tabbar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  height: 100px;
  padding-top: 10px;
  /* box-shadow: 0 -2px 4px rgba(0, 0, 0, .1); */ // use inline style
  /* background-color: #fff; */ // use inline style
}

.tabbar__tab {
  display: block;
  flex: 1 auto;
  text-align: center;
}

.tabbar__icon {
  width: 40px;
  height: 40px;

  &>svg,
  img {
    width: 100%;
    height: 100%;
  }
}

.tabbar__text {
  font-size: 20px;
  /* color: #8e8e93; */ // use inline style

  .tabbar__tab_active & {
    /* color: #0089dc; */ // use inline style
  }
}
</style>