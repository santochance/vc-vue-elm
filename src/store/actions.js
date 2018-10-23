import { fetchCurrentUser, fetchUser, fetchAddressList } from '@/service/api'

export default {
  fetchCurrentUser({ commit }) {

    return fetchCurrentUser()
      .then((id) => {
        commit('SAVE_USER_ID', id)
        // 如果保存这个简略的 user 对象
        // 因为数据缺失 Profile 页会出现数据闪烁现象
        
        return id
      })
  },
  fetchUser({ commit }, { user_id }) {

    return fetchUser({ user_id })
      .then((user) => {
        commit('SAVE_USER', user)

        return user
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