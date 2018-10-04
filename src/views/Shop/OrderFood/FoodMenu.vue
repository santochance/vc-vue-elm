<template>
  <div v-if="menu && menu.length > 0"
    class="menu__container"
    :style="{height: menuHeight}">
    <ul class="menu__nav">
      <li v-for="(item, index) in menu" :key="item.id"
        class="menu__nav-item"
        :class="{ 'menu__nav-item_active': activeMenuItem !== '' ?
        activeMenuItem === item.id : index === 0  }"
       @click="changeActiveItem(item.id)">
        <img class="menu__nav-item-icon"
          :src="$getImage(
            (activeMenuItem !== '' ? activeMenuItem === item.id : index === 0) ?
              item.icon_url : item.grey_icon_url,
            iconImgParam
          )" alt="">
        <span class="menu__nav-item-text"
          >{{ item.name }}</span>
        <span class="menu__nav-item-quantity"
          >{{ selectedNums[item.id] }}</span>
      </li>
    </ul>
    <ul class="menu__list"
      :style="{overflow: menuOverflow}"
      @scroll="onScroll"
      v-scroller
      ref="scroller">
      <li v-for="(list, index) in menu" :key="list.id"
        class="menu__list-item"
        :class="{ 'menu__list-item_active': activeMenuItem !== '' ?
          activeMenuItem === list.id : index === 0  }"
        v-scroll-into="list.id"
      >
        <div class="menu__list-title-wrap">
          <strong class="menu__list-title"
            >{{ list.name }}</strong>
          <span class="menu__list-desc ellipsis"
            >{{ list.description }}</span>
        </div>
          <ul class="menu__list">
            <li v-for="item in list.foods" :key="item.item_id"
              class="menu__list-item"
              @click.stop.prevent="onShowDetail(item)">
              <div class="food__container">
                <div class="food__img">
                  <tag v-if="item.attributes.length"
                    class="food__attr-tag"
                    :style="{backgroundColor: '#' + item.attributes[0].icon_color }"
                    >{{ item.attributes[0].icon_name }}</tag>
                  <img :src="$getImage(item.image_path, foodImgParam)" alt="">
                </div>
                <div class="food__info">
                  <div class="food__name ellipsis"
                    >{{ item.name }}</div>
                  <div class="food__desc ellipsis"
                    >{{ item.description }}</div>
                  <div class="food__sales">
                    <span>月售{{ item.month_sales }}份</span>
                    <span>好评率{{ item.satisfy_rate }}%</span>
                  </div>
                  <strong class="food__price">
                    <span>{{ item.specfoods[0].price }}</span>
                    <del v-if="item.specfoods[0].original_price"
                      class="food__original-price"
                      >￥{{ item.specfoods[0].original_price }}</del>
                  </strong>

                  <cart-button class="food__btns"
                    :item="item"
                    @add="onAdd"
                    @reduce="onReduce"
                    @showspec="onShowSpec"
                  />
                </div>
              </div>
            </li>
          </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  import { Tag } from '@/components/common'
  import CartButton from './CartButton'

  export default {
    name: 'FoodMenu',
    components: {
      Tag,
      CartButton,
    },
    props: {
      shopDetails: {
        type: Object,
        required: true,
      },
      menu: {
        type: Array,
        required: true,
      },
      entities: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        menuOverflow: 'hidden', // menu content 的 overflow 状态

        // scroll active
        activeMenuItem: '', // 当前 menu nav 的活动项
        needToScroll: false,
        menuScroller: null,
        menuScrollItems: [],

        // selectedNums: {}, // menu nav 各条目的选中数量

        iconImgParam: '?imageMogr/format/webp/thumbnail/26x/',
        foodImgParam: '?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/',
      }
    },
    computed: {
      /* menu nav 各条目的选中数量 */
      selectedNums() {
        const entities = this.entities;
        let nums = {};
        entities.forEach(ent => {
          let id = ent.category_id
          if (!(id in nums)) {
            nums[id] = 0
          }
          nums[id] += ent.quantity
        })
        return nums
      },
      /* local scroll */
      menuHeight() {
        // 根据所在视口情况动态设置 local scroll 容器高度
        // 顶部 tab 导航高度是80px, 下面 cartbar 高度是96px
        return (window.innerHeight - window.innerWidth / 750 * 80) + 'px'
      }
    },
    methods: {
      /* event */
      onShowDetail(food) {
        this.$emit('showdetail', food)
      },
      onAdd($event) {
        this.$emit('add', $event)
      },
      onReduce($event) {
        this.$emit('reduce', $event)
      },
      onShowSpec($event) {
        this.$emit('showspec', $event)
      },
      // scroll active 监听器
      onScroll() {
        const scroller = this.$refs.scroller || window
        if (!scroller) return

        const scrollerTop = scroller.getBoundingClientRect().top
        let activeItemKey
        this.menuScrollItems.forEach(({ el, key }) => {
          // 找出 topEdge 越过 viewport topEdge 的最后一个元素
          const itemTop = el.getBoundingClientRect().top
          if (itemTop - scrollerTop < 1) {
            activeItemKey = key
          }
        })
        if (activeItemKey) {
          this.activeMenuItem = activeItemKey
        }
      },
      // 监听 local scroll 的 touchmove 和 wheel 事件，根据 global scroll 是否触及底端时开关 local scroll
      toggleScroll(ev) {
        const touched = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight
        if (touched) {
          // 全局 scroll 触及底端
          ev.currentTarget.style.overflow = 'auto'
        } else {
          ev.currentTarget.style.overflow = 'hidden'
        }
      },
      changeActiveItem(key) {
        this.activeMenuItem = key
        this.needToScroll = true
      },
    },
    watch: {
      foodDetailVisible(value) {
        if (value) {
          document.documentElement.style.overflowY = 'hidden'
          document.body.style.overflowY = 'scroll'
        } else {
          document.documentElement.style.overflowY = ''
          document.body.style.overflowY = ''
        }
      }
    },
    directives: {
      // 点击 menu nav 改变活动项时，使 menu content 的目标元素 scroll into view
      // 或者可以叫 v-anchor？
      scrollInto: {
        bind(el, binding, vnode) {
          vnode.context.menuScrollItems.push({ el, key: vnode.key })
        },
        update(el, { value }, vnode) {
          const { needToScroll, activeMenuItem } = vnode.context
          if (needToScroll && activeMenuItem === value) {
            vnode.context.needToScroll = false
            el.scrollIntoView()
          }
        },
      },
      scroller: {
        inserted(el, binding, vnode) {
          el.addEventListener('touchmove', vnode.context.toggleScroll)
          el.addEventListener('wheel', vnode.context.toggleScroll)
        },
        unbind(el, binding, vnode) {
          el.removeEventListener('touchmove', vnode.context.toggleScroll)
          el.removeEventListener('wheel', vnode.context.toggleScroll)
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
  .menu {@at-root{
    .menu__container {
      box-sizing: border-box;
      overflow: hidden;
      display: flex;
      padding-bottom: 96px;
    }
    .menu__nav {
      height: 100%;
      width: 154px;
      background: #f8f8f8;
    }
    .menu__nav-item {
      position: relative;
      padding: 33.6px 14.4px;
      font-size: .32rem;
      color: #666;

      &_active {
        color: #333;
        background: #fff;
      }
    }

    .menu__nav-item-icon {
      width: 26px;
      height: 26px;
      vertical-align: top;
      margin-right: 6px;
    }
    .menu__nav-item-quantity {
      position: absolute;
      right: 6px;
      top: 6px;
      padding: 0 7.8px;;
      font-size: 20px;
      font-weight: 700;
      line-height: 28px;
      border-radius: 15px;
      background-image: linear-gradient(-90deg,#ff7416,#ff3c15 98%);
      color: #fff;
    }
    .menu__nav-item-text {
      // display: block;
    }
    .menu__list {
      height: 100%;
      width: 596px;
      background-color: #fff;
    }
    .menu__list-title-wrap {
      margin-left: 2.6666667vw;
      padding: 2vw 8vw 2vw 0;
      // border-bottom: 1px solid #eee;
    }
    .menu__list-title {
      margin-right: 1.333333vw;
      font-size: .32rem;
      font-weight: 700;
      color: #666;
    }
    .menu__list-desc {
      font-size: .26666667rem;
      color: #999;
    }
  }}

  .food {@at-root{
    .food__container {
      overflow: hidden;
      position: relative;
      display: flex;
      box-sizing: border-box;
      padding: 20px;
      min-height: 206px;
    }

    .food__img {
      position: relative;
      flex: none; // 防止无图片时收缩为0
      width: 190px;
      height: 190px;
      margin-right: 20px;
      /* aspect-ratio: 1 / 1 */
      &:before {
        content: '';
        display: block;
        padding-top: 100%;
        background: url('/picsum.jpeg') no-repeat center / cover;
      }
      & > img {
        position: absolute;
        z-index: 1;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        width: 100%;
        border-radius: 4px;
      }
    }
    .food__attr-tag {
      position: absolute;
      z-index: 2;
      left: 0;
      top: 0;
      padding: 0 2px;
      font-size: 20px;
    }
    .food__info {
      overflow: hidden;
      position: relative;
      flex: 1;
      padding-bottom: 50px;
    }
    .food__name {
      overflow: hidden;
      padding-right: 5.333333333vw;
      line-height: 1.2;
      font-size: .4rem;
      font-weight: 700;
      width: 300px;
    }
    .food__desc {
      margin: 10px 0;
      font-size: 19px;
      color: #999;
      width: 360px;
    }
    .food__sales {
      margin: 1.7333333vw 0;
      vertical-align: middle;
      line-height: 1;
      font-size: .2933333rem;
      color: #666;
    }
    .food__sales span:not(:first-child) {
      margin-left: 1.066667vw;
    }
    .food__price {
      position: absolute;
      bottom: 0;
      line-height: 48px;
      font-size: 32px;
      font-weight: 700;
      color: #f60;
      &:before {
        content: '\A5';
        display: inline-block;
        margin-right: 4px;
        font-size: 24px;
      }
    }
    .food__original-price {
      margin-left: 8px;
      font-size: 24px;
      font-weight: 400;
      color: #666;
    }
    .food__btns {
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }}

</style>