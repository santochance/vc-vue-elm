<template>
  <div>
    <div>
      <router-link to="/checkout/address">选择地址</router-link>
    </div>
    <div>
      <div @click="deliverTimesVisible = true">选择派送时间</div>
    </div>
    <div>
      <div @click="tablewareVisible = true">选择餐具份数</div>
    </div>
    <div>
      <router-link to="/checkout/remark">填写备注信息</router-link>
    </div>
    <footer>
      <a href="javascript:"
        @click.stop.prevent="submit"
      >去支付</a>
    </footer>

    <modal :visible="deliverTimesVisible"
      panel="bottom"
      :closable="false"
      @close="deliverTimesVisible = false"
    >
      <div>派送时间选择器</div>
    </modal>

    <modal :visible="tablewareVisible"
      panel="bottom"
      @close="tablewareVisible = false"
    >
      <div>餐具份数选择器</div>
    </modal>
  </div>
</template>

<script>
  import { mapGetters, mapState } from 'vuex'
  import { submitCart } from '@/service/api'
  import { Tag, Modal } from '@/components/common'


  export default {
    name: 'ConfirmOrder',
    components: {
      Tag,
      Modal
    },
    props: {

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
          return (state.cartMap[this.restaurant] || {}).entities || []
        },
      }),
      ...mapGetters([
        'selectedAddress', 'remarkText'
      ]),
    },
    created() {
      if (!this.restaurantId) return this.$router.replace('/shop')

      this.loading = true
      this.doCheckout().then(checkout => {
        this.checkout = checkout
        this.loading = false
      })
    },
    methods: {
      doCheckout() {
        const {
          userId,
          selectedAddressId,
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
        }

        return submitCart(payload)
      },
      submit() {
        if (this.verify() !== '') return

      },
      verify() {
        if (!this.selectedAddress) {
          return (this.verifyFailedMsg = '请选择配送地址！')
        } else if (!this.selectedDeliverDateTime) {
          return (this.verifyFailedMsg = '请选择配送时间！')
        }
        return (this.verifyFailedMsg = '')
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>