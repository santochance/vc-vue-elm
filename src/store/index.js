import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations'
import actions from './actions'
import { initState, wrapPersistence } from './persistence'

Vue.use(Vuex);

 const store = new Vuex.Store({
  state: initState({
    userId: '', // 用户id
    user: null, // 用户信息

    cartMap: {}, // 店铺购物车集合

    addressList: null, // ?Array, 地址列表
    selectedAddressId: '', // 选择的地址
    editingAddress: '', // 正在编辑的地址

    currentRestaurantId: '', // 当前结算餐厅 id
    sig: '', // 确认订单页cart数据检验签名
    remarkList: null, // ?Array, 订单备注选择列表
    usedRemark: null, // ?Object, 使用的订单备注

    /* location */
    latitude: null,    // ?Number
    longitude: null,  // ?Number
    geohash: '',
    locationName: '', // Index 的地址名称
    cityName: '',   // SelectCity 的城市名称
    cityList: null, // 城市列表数据



  }),
  getters: {
    selectedAddress(state) {
      const id = state.selectedAddressId;
      return (state.addressList || []).find(addr => addr.id === id)
    },
    remarkText(state) {
      if (!state.usedRemark) return ''

      const { inputed, selected = [] } = state.usedRemark
      return selected
        .map(v => v && v.join(''))
        .concat(inputed)
        .filter(v => v)
        .join(',')
    },
  },
  mutations,
  actions,
});

wrapPersistence(store)

export default store
