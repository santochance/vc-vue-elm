import { fetchCurrentUser, fetchUser, loginByMobile, logout, fetchAddressList } from '@/service/api'

export default {

  fetchCurrentUser({ commit, dispatch }) {

    return fetchCurrentUser()
      .then((id) => {
        commit('SAVE_USER_ID', id)
        // 如果保存这个简略的 user 对象
        // 因为数据缺失 Profile 页会出现数据闪烁现象
        if (id) {
          return dispatch('fetchUser', { user_id: id })
        } else {
          commit('SAVE_USER', null)
          return null
        }
      })
  },
  fetchUser({ commit }, { user_id }) {
    
    return fetchUser({ user_id })
      .then((user) => {
        commit('SAVE_USER', user)

        return user
      })
  },

  loginByMobile({ commit, dispatch }, payload) {
    return loginByMobile(payload)
      .then(({ user_id }) => {
        commit('SAVE_USER_ID', user_id)
        dispatch('fetchUser', { user_id })
      })
  },
  logout({ commit }, payload) {
    return logout(payload)
      .then(() => {
        commit('SAVE_USER_ID', 0)
        commit("SAVE_USER", null)        
      })
  },

  fetchAddressList({ state, commit }) {
    const userId = state.userId
    if (!userId) return Promise.resolve()

    return fetchAddressList(userId)
      .then(addressList => {
        commit('SAVE_ADDRESS_LIST', addressList)

        return addressList
      })
  },
}