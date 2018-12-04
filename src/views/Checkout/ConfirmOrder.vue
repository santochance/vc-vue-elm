<template>
  <page title="确认订单" :loading="loading">
    <div class="checkout-body"
      v-if="checkout"
    >
      <section class="cart-address"
        @click="selectAddr">
        <div v-if="selectedAddress" class="cart-address__item">
          <div class="cart-address__title">
            <span>订单配送至</span>
            <span v-if="selectedAddress.tag_type" class="cart-address__address-tag">{{ { 1: '家', 2: '公司', 3: '学校' }[selectedAddress.tag_type] }}</span>
          </div>
          <div class="cart-address__address-detail">
            <span class="ellipsis">{{ selectedAddress.address + selectedAddress.address_detail }}</span>
            <svg><use xlink:href="#arrow-right-bold"></use></svg>
          </div>
          <div class="cart-address__address-name">
            <span>{{ selectedAddress.name }}</span>
            <span>({{ selectedAddress.sex === 1 ? '先生' : '女士' }})</span>
            <span class="cart-address__address-phone">{{ selectedAddress.phone }}</span>
          </div>
        </div>
        <div v-else class="cart-address__item">
          <div class="cart-address__title">
            <span>订单配送至</span>
          </div>
          <div class="cart-address__address-detail">
            <span class="ellipsis">马上选择地址</span>
            <svg><use xlink:href="#arrow-right-bold"></use></svg>
          </div>
        </div>
      </section>

      <section class="checkout-section">
        <div class="checkout-item delivery">
          <div class="delivery__left">
            <div class="checkout-item__title"><span>送达时间</span></div>
            <div class="delivery__delivery-type"
              v-if="delivery_type"
            >
              <span>{{ delivery_type && delivery_type.name }}</span>
            </div>
          </div>
          <div class="delivery__right">
            <div class="delivery__select">
              <template v-if="deliver_times">
                <span @click.stop.prevent="deliverTimesVisible = true">
                  {{ selectedDeliverDateTime === '' ? '选择送达时间' : selectedDeliverDateTime }}
                </span>
                <svg><use xlink:href="#arrow-right"></use></svg>
              </template>
              <template v-else>
                <span>尽快送达({{ checkout.delivery_reach_time }}送达)</span>
              </template>
            </div>
          </div>
        </div>
        <div class="checkout-item pay-method">
          <div class="checkout-item__title"><span>支付方式</span></div>
          <div class="pay-method__text"><span>{{ checkout.pay_methods[0].name }}</span></div>
        </div>
      </section>

      <section class="checkout-section cart-group"
        v-if="true"
      >
        <div class="cart-group__header">
          <span class="cart-group__shop-name">{{ shopNames[0] }}</span>
          <span class="cart-group__branch-name">{{ shopNames[1] ? `(${shopNames[1]})` : '' }}</span>
        </div>
        <ul class="cart-group__list">
          <li v-for="food in checkout.cart.group[0]" :key="food.id + food.attrs"
            class="checkout-item food-item"
          >
            <div class="food-item__img">
              <img :src="$getImage(food.image_hash, foodImgParam)" alt="">
            </div>
            <div class="food-item__info">
              <div class="food-item__name ellipsis">{{ food.name }}</div>
              <div class="food-item__attr"><span v-for="(attr, idx) in food.attrs" :key="idx">{{ attr.value }}</span></div>
            </div>
            <div class="food-item__quantity">× {{ food.quantity }}</div>
            <div class="food-item__price">{{ food.quantity * food.price | toPrice }}</div>
          </li>
        </ul>
        <div class="checkout-item cart-group__item"
          v-if="packing_fee"
        >
          <div>
            <span class="cart-group__tag cart-group__packing-fee">{{ packing_fee.icon.name }}</span>
            <span class="cart-group__item-title ellipsis">{{ packing_fee.name }}</span>
          </div>
          <div class="cart-group__price">{{ packing_fee.price | toPrice }}</div>
        </div>
        <div class="checkout-item cart-group__item"
          v-if="agent_fee"
        >
          <div>
            <span class="cart-group__tag cart-group__agent-fee">{{ agent_fee.icon.name }}</span>
            <span class="cart-group__item-title ellipsis">{{ agent_fee.name }}</span>
          </div>
          <div class="cart-group__price">{{ agent_fee.price | toPrice }}</div>
        </div>
        <div class="checkout-item cart-group__discount">新用户立减与其他优惠不能同享</div>
        <div class="checkout-item cart-group__item"
          v-if="checkout.hongbao_info"
        >
          <div class="cart-group__item-title">红包</div>
          <div class="cart-group__hongbao">
            <svg><use xlink:href="#red-packet"></use></svg>
            <span>{{ checkout.hongbao_info.status_text || '暂时只在饿了么 APP 中支持' }}</span>
          </div>
        </div>
        <div class="checkout-item cart-group__footer">
          <a href="javascript:" class="cart-group__discount-intro">
            <span>优惠说明</span>
            <svg><use xlink:href="#tip"></use></svg>
          </a>
          <div class="cart-group__total-price-wrap">
            <span>小计 &#xA5;</span>
            <span class="cart-group__total-price">{{ checkout.cart.original_total | toPrice }}</span>
          </div>
        </div>
      </section>

      <section class="checkout-section checkout-misc">
        <div class="checkout-item checkout-misc__tableware"
          @click.stop.prevent="tablewareVisible = true">
          <span>餐具份数</span>
          <a class="checkout-misc__content" href="javascript:">
            <span v-if="selectedTableware === ''"
              class="checkout-misc__tableware_unselected">
              未选择</span>
            <span v-else-if="selectedTableware === '0'"
              class="checkout-misc__tableware_selected">
              无需餐具</span>
            <span v-else
              class="checkout-misc__tableware_selected">
              {{ selectedTableware }}餐具</span>
            <svg><use xlink:href="#arrow-right"></use></svg>
          </a>
          <div class="checkout-misc__slogan">
            <img src="./environ.png" alt="">
            <span>马上助力环保</span>
          </div>
        </div>
        <div class="checkout-item" @click.stop.prevent="inputRemark">
          <span v-if="!remarkText">订单备注</span>
          <span v-else class="checkout-misc__remark">{{ remarkText }}</span>
          <a class="checkout-misc__content" href="javascript:">
            <span v-if="!remarkText">口味、偏好</span>
            <svg><use xlink:href="#arrow-right"></use></svg>
          </a>
        </div>
        <div class="checkout-item">
          <span>发票信息</span>
          <span class="checkout-misc__content">商家不支持开发票</span>
        </div>
      </section>
    </div>

    <footer class="action-bar"
      v-if="checkout"
    >
      <span class="action-bar__total-price">&#xA5;{{ checkout.cart.original_total | toPrice }}</span>
      <!-- <span class="action-bar__verify-feedback">{{ verifyFailedMsg }}</span> -->
      <a href="javascript:" class="action-bar__submit-btn" @click.stop.prevent="submit">去支付</a>
    </footer>

    <modal :visible="deliverTimesVisible" panel="bottom" :closable="false" @close="deliverTimesVisible = false">
      <div v-if="checkout" class="deliver-times__container">
        <h3 class="deliver-times__head">选择送达时间</h3>
        <div class="deliver-times__content">
          <nav class="deliver-times__tabs">
            <div v-for="(day, idx) in checkout.deliver_times" :key="day.tab"
              class="deliver-times__tab"
              :class="{ 'deliver-times__tab_active': activeDeliverDayIdx === idx }"
              @click.stop.prevent="activeDeliverDayIdx = idx"
            >{{ day.tab }}</div>
          </nav>
          <ul class="deliver-times__panels">
            <template v-for="(day, i) in checkout.deliver_times" v-if="activeDeliverDayIdx === i">
              <li v-for="time in day.time_points" :key="time.time"
                class="deliver-times__panel"
                @click.stop.prevent="selectDeliverTime(day, time)"
              >
                <span class="deliver-times__time">{{ time.time }}</span>
                <span class="deliver-times__description">（{{ time.delivery_fee_description }}）</span>
                <svg v-if="selectedDeliverDateTime === day.tab + time.time"><use xlink:href="#select"></use></svg>
              </li>
            </template>
          </ul>

        </div>
      </div>
    </modal>

    <modal :visible="tablewareVisible" panel="bottom" @close="tablewareVisible = false">
      <div class="tableware__container">
        <h2 class="tableware__head">餐具份数</h2>
        <ul class="tableware__list">
          <li class="tableware__item" :key="0" @click.stop.prevent="selectTableware('0')">
            <img src="./environ.png" alt="">
            <span>无需餐具</span>
          </li>
          <li v-for="n in 10" :key="n"
            class="tableware__item" @click.stop.prevent="selectTableware(n + '份')"
          >{{ n }}
          </li>
          <li class="tableware__item" :key="11" @click.stop.prevent="selectTableware('10份以上')">10份以上</li>
        </ul>
      </div>
    </modal>
  </page>
</template>

<script>
  import { mapGetters, mapState } from 'vuex'
  import { submitCart } from '@/service/api'
  import { Tag, Modal, Toast } from '@/components/common'
  import Page from '@/components/Page'


  export default {
    name: 'ConfirmOrder',
    components: {
      Tag,
      Modal,
      Toast,
      Page,
    },
    props: {

    },
    filters: {
      toPrice(value, num) {
        return Number((value || 0).toFixed(num || 2))
      },
    },
    data() {
      return {
        loading: false,

        /* remote data */
        checkout: null, // ?Object

        tablewareVisible: false,
        selectedTableware: '', // ?String, ['', '0', '1份', ..., '10份以上']

        deliverTimesVisible: false,
        activeDeliverDayIdx: 0,
        selectedDeliverDateTime: '',

        verifyFailedMsg: '',

        foodImgParam: '?imageMogr/format/webp/thumbnail/!72x72r/gravity/Center/crop/72x72/',
      }
    },
    computed: {
      ...mapState({
        restaurantId: 'currentRestaurantId',
        entities(state) {
          return (state.cartMap[this.restaurantId] || {}).entities || []
        },
        // mockTotalPrice() {
        //   return this.entities.reduce((rst, ent) => rst += ent.price * ent.quantity, 0)
        // },
      }),
      ...mapGetters([
        'selectedAddress', 'remarkText', 'addressList'
      ]),
      delivery_type() {
        let value
        try {
          value = this.checkout.cart.restaurant.delivery_type
        } catch(e) {/* empty */}
        return value
      },
      shopNames() {
        const checkout = this.checkout
        const name = checkout.cart && checkout.cart.restaurant && checkout.cart.restaurant.name || ''
        return name.split(/[()（）]/)
      },
      packing_fee() {
        let value
        try {
          value = this.checkout.cart.extra.packing_fee
        } catch(e) {/* empty */}
        return value
      },
      agent_fee() {
        let value
        try {
          value = this.checkout.cart.extra.agent_fee
        } catch(e) {/* empty */}
        return value
      },
      deliver_times() {
        let value
        try {
          value = this.checkout.cart.extra.agent_fee
        } catch(e) {/* empty */}

        // 不可以指定派送时间
        if (!value || !value.length || value[0] && !value[0].time_points.length) {
          value = null
        }
        return value
      }
    },
    created() {
      if (!this.restaurantId) {
        Toast.open({
          content: '当前还没有任何下单信息',
          duration: 4,
        })
        return this.$router.replace('/')
      }

      if (!this.addressList) {
        this.$store.dispatch('fetchAddressList')
      }

      this.doCheckout()
    },
    methods: {
      doCheckout() {
        const {
          userId,
          selectedAddressId,
          geohash,
        } = this.$store.state

        // request payload
        const payload = {
          userId,
          restaurantId: this.restaurantId,
          addressId: selectedAddressId,
          entities: this.entities,
          deliverTime: this.selectedDeliverDateTime,
          tableware: this.selectedTableware,
          remark: this.remarkText,
          geohash,
        }
        console.log('payload:', payload)

        this.loading = true
        return submitCart(payload).then(checkout => {
          this.checkout = checkout
          this.loading = false
        }, err => {
          Toast.open({
            content: err.message
          })
          if (err.name === 'NOT_AVAILABLE_ENTITIES') {
            return this.$router.replace('/')
          }
        })
      },
      submit() {
        if (this.verify() !== '') return

      },
      verify() {
        if (!this.selectedAddress) {
          Toast.open({
            content: '请选择配送地址！',
            mask: false,
          })
          return (this.verifyFailedMsg = '请选择配送地址！')
        } else if (!this.selectedDeliverDateTime) {
          Toast.open({
            content: '请选择送达时间！',
            mask: false,
          })
          return (this.verifyFailedMsg = '请选择送达时间！')
        }
        return (this.verifyFailedMsg = '')
      },
      selectAddr() {
        this.$router.push(this.$route.path + '/address')
      },
      selectDeliverTime(day, time) {
        this.selectedDeliverDateTime = day.tab + time.time
        this.deliverTimesVisible = false
        this.refresh()
      },
      selectTableware(value) {
        this.selectedTableware = value
        this.tablewareVisible = false
        this.refresh()
      },
      inputRemark() {
        this.$router.push(this.$route.path + '/remark')
      },
      refresh() {
        this.verifyFailedMsg = ''
      },
    },
    watch: {
      selectedAddress() {  this.doCheckout() },
      selectedDeliverDateTime() { this.doCheckout() },
      selectedTableware() { this.doCheckout() },
      remarkText() { this.doCheckout() }
    },
  }
</script>

<style lang="scss" scoped>
.checkout {
}
.checkout-body {
  margin-bottom: 88px;
  padding: 0 12px 1px;
  font-size: 32px;
  background-image: linear-gradient(0deg,#f5f5f5,#f5f5f5 65%,hsla(0,0%,96%,.3) 75%,hsla(0,0%,96%,0)),linear-gradient(270deg,#0085ff,#0af);
  color: #fff;
}
.checkout-section {
  margin-bottom: 16px;
  padding: 0 40px;
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
  color: #000;
}
.checkout-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 0;
  border-bottom: 1px solid #e8e8e8; /*no*/
  &:last-child {
    border-bottom: none;
  }
}

.cart-address {
  display: flex;
  justify-content: center;
  padding-top: 32px;
  min-height: 166px;
}
.cart-address__item {
  overflow: hidden;
  position: relative;
  flex: 0 100%;
  padding: 0 16px;
  color: #fff;
}
.cart-address__title {
  line-height: 1.5;
  font-size: 28px;
  color: hsla(0, 0%, 100%, .8);
}
.cart-address__address-tag {
  margin-left: 12px;
  padding: 2px 4px;
  border: 1px solid hsla(0, 0%, 100%, .8); /* no */
}
.cart-address__address-detail {
  display: flex;
  align-items: center;
  margin-right: 16px;
  font-size: 44px;
  font-weight: 700;
  line-height: 1.88;
  svg {
    flex: none;
    width: 14px;
    height: 24px;
    margin-left: 16px;
  }
}
.cart-address__address-name {
  margin-bottom: 10px;
  font-size: 28px;
  line-height: 34px;
}
.cart-address__address-phone {
  margin-left: 16px;
}

.delivery {
  display: flex;
  align-items: center;
  justify-content: space-between;
  white-space: nowrap;
}
.delivery__delivery-type {
  display: inline-block;
  vertical-align: middle;
  font-size: 22px;
  padding: 3px 8px;
  margin-right: 10px;
  margin-top: 6px;
  border-radius: 1px; /* no */
  background-image: linear-gradient(90deg,#0af,#0085ff);
  color: #fff;
}
.delivery__right {
  text-align: right;
}
.delivery__select {
  text-align: right;
  color: #2395ff;
  select {
    font-size: inherit;
    font-family: inherit;
    border: none;
    background-color: transparent;
    color: inherit;
    direction: rtl;
    outline: none;
    -webkit-appearance: none;
    appearance: none;
  }
  svg {
    width: 24px;
    height: 24px;
    margin-left: 5px;
  }
}

.pay-method {}
.pay-method__text {
  font-weight: 500;
  color: #2395ff;
}

.cart-group__header {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  padding: 32px 0;
  border-bottom: 1px solid #d8d8d8; /*no*/
}
.cart-group__list {
  border-bottom: 1px solid #e8e8e8; /*no*/
}
.cart-group__shop-name {
  font-size: 34px;
  font-weight: 700;
  line-height: 1;
}
.cart-group__branch-name {
  margin-left: 10px;
  font-size: 26px;
  line-height: 1.15;
}
.food-item {
  padding: 24px 0;
  font-size: 28px;
  white-space: nowrap;
}
.food-item__img {
  width: 72px;
  height: 72px;
}
.food-item__info {
  overflow: hidden;
  flex: 9;
  margin-left: 16px;
}
.food-item__name {}
.food-item__attr {
  font-size: 22px;
  padding-top: 8px;
  color: #666;
}
.food-item__quantity {
  flex: 1;
  text-align: right;
  font-size: 24px;
}
.food-item__price {
  flex: 3;
  text-align: right;
  font-size: 32px;
  &:before {
    content: '\A5';
    font-size: 24px;
  }
}
.cart-group__discount {
  color: #bbb;
  font-size: 30px;
}

.cart-group__item {
}
.cart-group__tag {
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
  height: 28px;
  margin-right: 24px;
  padding: 0 8px;
  white-space: nowrap;
  font-size: 20px;
  border-radius: 1px; /*no*/
}
.cart-group__item-title {
  font-size: 28px;
}
.cart-group__price {
  &:before {
    content: '\A5';
    font-size: 24px;
  }
}
.cart-group__packing-fee {
  border: 2px solid 2px solid rgba(131,149,174,.34);
  background-color: rgba(149,168,193,.14);
  color: #8395ae;
}
.cart-group__agent-fee {
  background-color: #60acf4;
  color: #fff;
}
.cart-group__hongbao {;
  padding: 6px 8px;
  white-space: nowrap;
  font-size: 24px;
  line-height: 1;
  background-image: linear-gradient(106deg,#ff7417,#ff3c15);
  color: #fff;;
  svg {
    position: relative;
    top: 2px;
    width: 18px;
    height: 20px;
    margin-right: 6px;
  }
}
.cart-group__discount-intro {
  display: flex;
  align-items: center;
  font-size: 26px;
  color: #bbb;
  svg {
    width: 28px;
    height: 28px;
    padding-right: 4px;
    margin-left: 4px;
  }
}
.cart-group__total-price-wrap {
  font-size: 28px;
}
.cart-group__total-price {
  font-size: 44px;
  font-weight: 500;
}

.checkout-misc__content {
  display: flex;
  align-items: center;
  max-width: 520px;
  font-size: 26px;
  color: #bbb;
  svg {
    width: 24px;
    height: 24px;
    margin-left: 10px;
  }
}
.checkout-misc__tableware {
  flex-wrap: wrap;
}
.checkout-misc__tableware_selected {
  color: #333;
}
.checkout-misc__slogan {
  display: flex;
  align-items: center;
  flex: 100%;
  margin: 16px 10px 0 0;
  font-size: 24px;
  color: #0bb473;
  img {
    width: 32px;
    height: 32px;
    margin-right: 8px;
  }
}
.checkout-misc__remark {
  font-size: 28px;
}

.action-bar {
  position: fixed;
  z-index: 2;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 88px;
  background: #3c3c3c;
  color: #fff;
}
.action-bar__total-price {
  padding-left: 20px;
  vertical-align: middle;
  font-size: 36px;
  line-height: 88px;
}
.action-bar__verify-feedback {
  margin-left: 40px;
}
.action-bar__submit-btn {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 210px;
  padding: 0 10px;
  border: none;
  background: #00e067;
  font-size: 34px;
}

.tableware__container {
  padding: 40px 52px;
  background-color: #f5f5f5;
  box-shadow: 0 -1px 5px 0 rgba(0, 0, 0, .4);
  font-size: 32px;;
}
.tableware__head {
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 24px;
  padding: 0 56px;
  text-align: center;
  font-size: 34px;
  font-weight: 600px;

  &:before,
  &:after {
    content: '';
    width: 32px;
    border-top: 2px solid #333;
    margin: 0 24px;
  }
}
.tableware__list {
  overflow-y: auto;
  max-height: 600px;
  text-align: center;
}
.tableware__item {
  margin-bottom: 56px;
  & > img {
    width: 32px;
    height: 32px;
    margin-right: 8px;
    vertical-align: bottom;
  }
}

.deliver-times__container {
  height: 588px;
  background-color: #fff;
}
.deliver-times__head {
  text-align: center;
  height: 88px;
  line-height: 88px;
  font-size: 32px;
  background-color: #eee;
}
.deliver-times__content {
  display: flex;
  height: 500px;
  overflow: hidden;
}
.deliver-times__tabs {
  flex: 0 0 208px;
  background-color: #eee;
  overflow-y: auto;
}
.deliver-times__tab {
  text-align: center;
  height: 100px;
  line-height: 100px;
  font-size: 26px;
  background-color: #eee;
  color: #999;
}
.deliver-times__tab_active {
  background-color: #fff;
  color: #333;
}
.deliver-times__panels {
  flex: 1;
  margin-left: 32px;
  overflow-y: auto;
}
.deliver-times__panel {
  display: flex;
  align-items: center;

  position: relative;
  text-align: center;
  height: 100px;
  line-height: 100px;
  font-size: 26px;
  box-shadow: inset 0 -1px 0 0 #eee;
  color: #333;
  & > svg {
    position: absolute;
    right: 30px;
    width: 40px;
    height: 40px;
    fill: #4cd864;
  }
}
.deliver-times__time {

}
.deliver-times__description {
  font-size: 22px;
  color: #999;
}

</style>