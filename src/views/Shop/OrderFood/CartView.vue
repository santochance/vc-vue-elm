<template>
  <div class="cartview">
    <transition name="fade">
      <div v-show="show" class="cartview__mask" @click="hideCart"></div>
    </transition>
    <div class="cartview__panel">
      <div class="cartview__discount-tip">新用户下单立减17元</div>
      <collapse-transition>
        <div v-show="show" class="cartview__content">
          <div class="cartview__header">
            <div class="cartview__title">已选商品</div>
            <a class="cartview__btn-clear" href="javascript:"
              @click.stop.prevent="onClearCart">
              <svg><use xlink:href="#cart-remove"></use></svg>
              <span>清空</span>
            </a>
          </div>
          <ul class="cartview__entitylist">
            <li v-for="(entity, idx) in entities" :key="entity.id + idx"
              class="entityitem">
              <div class="entityitem__info ellipsis">
                <div class="entityitem__name">{{ entity.name }}</div>
                <div v-if="entity.attrs && entity.attrs.length > 0" class="entityitem__attrs ellipsis">{{ entity.attrs[0] && entity.attrs[0].value }} </div>
              </div>
              <div class="entityitem__price">{{ entity.price }}</div>
              <div class="entityitem__cart-btns">
                <a class="entityitem__entity-btn-minus" href="javascript:"
                  @click.stop.prevent="onReduceCart(entity)">
                  <svg><use xlink:href="#cart-minus"></use></svg>
                </a>
                <span class="entityitem__entity-quantity">{{ entity.quantity }}</span>
                <a class="entityitem__entity-btn-add" href="javascript:"
                  @click.stop.prevent="onAddCart(entity)">
                  <svg><use xlink:href="#cart-add"></use></svg>
                </a>
              </div>
            </li>
            <li class="entityitem">
              <div class="entityitem__info">餐盒</div>
              <div class="entityitem__price">{{ total.packingFee }}</div>
              <div class="entityitem__cart-btns"></div>
            </li>
          </ul>
        </div>
      </collapse-transition>
    </div>

    <div class="cartbar">
      <a v-show="entities.length > 0" class="cartbar__btn-toggle-panel" href="javascript:"
        @click.stop.prevent="toggleShow"
      >
        <span v-show="entities.length" class="cartbar__badge">{{ total.quantity }}</span>
      </a>
      <a v-show="entities.length <= 0" class="cartbar__btn-toggle-panel cartbar__btn-toggle-panel_empty" href="javascript:"></a>

      <div class="cartbar__total-price">&#xA5;{{ total.price }}
        <div class="cartbar__delivery-fee">另需配送费8元</div>
      </div>
      <a class="cartbar__btn-checkout" href="javascript:"
        :class="{ 'cartbar__btn-checkout_disabled': diffAmount > 0 }"
      >
        <span v-if="diffAmount <= 0" @click.stop.prevent="toCheckout">去结算</span>
        <small v-else-if="diffAmount >= 10">还差 ¥{{ diffAmount }} 起送</small>
        <span v-else>还差 ¥{{ diffAmount }} 起送</span>
      </a>
    </div>
  </div>
</template>

<script>
  import CollapseTransition from '@/components/transitions/CollapseTransition'

  export default {
    components: {
      CollapseTransition
    },
    props: {
      entities: {
        type: Array,
        default: function () { return [] }
      },
      minAmount: {
        type: Number,
        default: 0
      },
    },
    data () {
      return {
        show: false
      }
    },
    computed: {
      total() {
        return this.entities.reduce((sum, enti) => {
          return {
            ...sum,
            price: (sum.price += enti.price * enti.quantity).toFixed(1) * 1,
            quantity: (sum.quantity += enti.quantity).toFixed(1) * 1,
            packingFee: (sum.packingFee += enti.packing_fee * enti.quantity).toFixed(1) * 1
          }
        }, { price: 0, quantity: 0, packingFee: 0 })
      },
      delievryFee() {
        // return entities.reduce((sum, enti) => (sum += enti.))
        return 0;
      },
      diffAmount() {
        return this.minAmount - this.total.price
      }
    },
    methods: {
      hideCart() {
        this.show = false
      },
      toggleShow() {
        this.show = !this.show
      },
      /* events */
      onAddCart(entity) {
        this.$emit('addcart', entity)
      },
      onReduceCart(entity) {
        this.$emit('reducecart', entity)
      },
      onClearCart() {
        this.$emit('clearcart')
      },
      toCheckout() {
        this.$emit('submitcart')
      },
    },
    watch: {
      entities(newValue) {
        if (!(newValue.length > 0)) {
          this.hideCart()
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

.cartview {
  position: relative;
  z-index: 999;
}
.cartview__mask {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .4);
}
.cartview__discount-tip {
  text-align: center;
  line-height: 40px;
  font-size: 22px;
  background-color: #fffad6;
  border-top: 1px solid #f9e8a3;
  opacity: .96;
}
.cartview__panel {
  position: fixed;
  bottom: 96px;
  width: 100%;
  background: #fff;

  display: flex;
  flex-direction: column;
}
.cartview__header {
  display: flex;
  align-items: center;
  height: 81px;
  padding: 0 25px;
  border-bottom: 1px solid #ddd; /* no */
  color: #666;
  background-color: #eceff1;
}
.cartview__title {
  flex: 1px;
  line-height: 38px;
  font-size: 32px;
  padding-left: 10px;
  border-left: 7px solid #2395ff;
}
.cartview__btn-clear {
  flex: none;
  display: flex;
  align-items: center;
  line-height: 30px;
  font-size: 26px;
  color: #666;
  text-decoration: none;
  svg {
    width: 30px;
    height: 30px;
    fill: #ddd;
    margin-right: 6px;
  }
}
.cartview__entitylist {
  overflow: auto;
  max-height: 605px;
}
.entityitem {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 15px 25px;
  min-height: 110px;
}
.entityitem__info {
  flex: 5.5;
  font-size: 32px;
  color: #333;
}
.entityitem__name {
  font-size: 32px;
}
.entityitem__attrs {
  line-height: 25px;
  font-size: 22px;
  color: #999;
}
.entityitem__price {
  flex: 2.5;
  text-align: right;
  font-size: 32px;
  font-weight: 700;
  color: #f60;
  &:before {
    content: '\A5';
    font-size: 20px;
    color: inherit;
  }
}
.entityitem__cart-btns {
  flex: 3;
  text-align: right;
  white-space: nowrap;
  svg {
    width: 40px;
    height: 40px;
    vertical-align: middle;
    fill: #2395ff;
  }
}
.entityitem__entity-btn-minus,
.entityitem__entity-btn-add {
  display: inline-block;
  vertical-align: middle;
  padding: 7px;
  text-decoration: none;
}
.entityitem__entity-quantity {
  overflow: hidden;
  display: inline-block;
  margin: 0 8px;
  vertical-align: middle;
  text-align: center;
  font-size: 28px;
  color: #666;
  min-width: 30px;
  max-width: 56px;
}

.cartbar {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 1;
  left: 0;
  right: 0;
  bottom: 0;
  height: 96px;
  width: 100%;
  padding-left: 158px;
  background-color: #fff;
  &:after {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(61,61,63,.9);
  }
}
.cartbar__btn-toggle-panel {
  position: absolute;
  left: 24px;
  bottom: 15px;
  width: 100px;
  height: 100px;
  border: 10px solid #444;
  border-radius: 50%;
  box-shadow: 0 -6px 4px 0 rgba(0,0,0,.1);
  background-color: #3190e8;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: url('./cart.svg') no-repeat center / 45px;
  }
}
.cartbar__btn-toggle-panel_empty {
  background-image: radial-gradient(circle,#363636 6.266667vw,#444 0);
  &:before {
    background-image: url(./cart-empty.svg);
  }
}
.cartbar__badge {
  position: absolute;
  right: -9px;
  top: -10px;
  padding: 4px 10px;
  line-height: 1;
  font-size: 20px;
  color: #fff;
  background-image: linear-gradient(-90deg,#ff7416,#ff3c15 98%);
  border-radius: 24px;
}
.cartbar__total-price {
  flex: 1;
  line-height: normal;
  font-size: 36px;
  color: #fff;
}
.cartbar__delivery-fee {
  font-size: 20px;
  color: #999;
}
.cartbar__btn-checkout {
  width: 210px;
  text-align: center;
  height: 100%;
  line-height: 96px;
  font-size: 30px;
  font-weight: 700;
  color: #fff;
  background-color: #4cd964;
  text-decoration: none;
  & > span,
  & > small {
    display: block;
  }
}
.cartbar__btn-checkout_disabled {
  background: #535356;
  & > small {
    font-size: 28px;
  }
}

.fade-enter-active {
  transition: all .3s ease-out;
}
.fade-leave-active {
  transition: all .3s ease-in;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

