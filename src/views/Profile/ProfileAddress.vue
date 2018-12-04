<template>
  <Address
    title="我的地址"
    mode="normal"
    :addressList="addressList"
  ></Address>
</template>

<script>
  import Address from '@/components/Address/Address'
  import { fetchAddressList } from '@/service/api'


  export default {
    name: 'ProfileAddress',
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
    beforeRouteEnter(to, from, next) {
      if (!from.path.match(/\/(profile|login)/)) {
        return next('/profile')
      }
      next()
    },
    created() {
      fetchAddressList().then(addressList => {
        this.addressList = addressList
        this.SAVE_ADDRESS_LIST(addressList)
      })
    },
  }
</script>

<style lang="scss" scoped>

</style>