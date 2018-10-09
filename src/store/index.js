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
    currentRestaurantId: '', // 当前结算餐厅 id

  }),
  mutations,
  actions,
});

wrapPersistence(store)

export default store
