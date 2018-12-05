<template>
  <Address
   title="选择地址"
   mode="select"
   :selectedAddressId="selectedAddressId"
   :addressList="addressList"
   @select="selectAddr"
   ></Address>
</template>

<script>
  import Address from '@/components/Address/Address'
  import { mapState, mapMutations } from 'vuex'
  import { fetchCartAddresses } from '@/service/api'

  export default {
    name: 'CheckoutAddress',
    components: {
      Address,
    },
    props: {

    },
    data() {
      return {
        addressList: [],
      }
    },
    computed: {
      ...mapState([
        'userId',
        'cartId',
        'sig',
        'selectedAddressId',
      ]),
    },
    beforeRouteEnter(to, from, next) {
      if (!from.path.match('/checkout')) {
        return next('/checkout')
      }
      next()
    },
    created() {
      const payload = {
        userId: this.userId,
        cartId: this.cartId,
        sig: this.sig,
      }
      fetchCartAddresses(payload)
        .then(addressList => {
          this.addressList = addressList
        })
    },
    methods: {
      ...mapMutations([
        'SAVE_SELECTED_ADDRESS_ID',
      ]),
      selectAddr(address) {
        this.SAVE_SELECTED_ADDRESS_ID(address && address.id)
        this.$router.go(-1)
      },
    }
  }
</script>