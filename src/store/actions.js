import { fetchCurrentUser } from '@/service/api'

export default {
  fetchCurrentUser({ commit }) {
    fetchCurrentUser()
      .then((user) => {
        commit('SAVE_USER_ID', user.id)
        commit('SAVE_USER', user)
        return user
      })
  },
}