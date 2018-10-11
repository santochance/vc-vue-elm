import { fetchCurrentUser, fetchAddressList } from '@/service/api'

export default {
  fetchCurrentUser({ commit }) {
    fetchCurrentUser()
      .then((user) => {
        commit('SAVE_USER_ID', user.id)
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