import { fetchCurrentUser, fetchUser, loginByMobile, logout, fetchAddressList, reverseGeoCoding, fetchCityList } from '@/service/api'
import {
  SAVE_LOCATION,
} from './mutation-types.js'

import persistence from '@/util/persistence'

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

/* location */

  getCurrentPosition() {
    if ('geolocation' in navigator) {
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
      })
        .then((position) => {
          return position
        })
    } else {
      return Promise.reject({
        code: 'not support geolcation',
        message: '浏览器不支持地理定位功能'
      })
    }
  },

  reverseGeoCoding({ commit, state }, payload) {
    
    payload || (payload = {
      latitude: state.latitude,
      longitude: state.longitude,
    })

    return reverseGeoCoding(payload)
      .then((location) => {
        commit(SAVE_LOCATION, {
          latitude: location.latitude,
          longitude: location.longitude,
          geohash: location.geohash,
          cityName: location.city,
          locationName: location.name,
        })
        return location
      })
  },

  getCityList({ commit, state }) {
    if (state.cityList) {
      return Promise.resolve(state.cityList)
    }

    const cityData = persistence.getItem('CITY_LIST')
    if (cityData) {
      commit('SET_CITY_LIST', cityData)
      return Promise.resolve(cityData)
    }

    return fetchCityList()
      .then((cities) => {
        persistence.setItem('CITY_LIST', cities)
        commit('SET_CITY_LIST', cities)
        return cities
      })
  },
}