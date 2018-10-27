import isEqual from 'lodash-es/isEqual'
import { Toast } from '@/components/common'

import {
  SAVE_USER_ID,
  SAVE_USER,

  SAVE_CART,
  ADD_CART,
  REDUCE_CART,
  CLEAR_CART,
  INIT_CART,
  SAVE_CURRENT_RESTAURANT_ID,

  SAVE_ADDRESS_LIST,
  ADD_ADDRESS,
  SAVE_ADDRESS,
  REMOVE_ADDRESS,
  SAVE_SELECTED_ADDRESS,
  SAVE_EDITING_ADDRESS,

  SAVE_REMARK_LIST,
  SAVE_USED_REMARK,

  SAVE_COORDS,
  SAVE_LOCATION,
  SET_CITY_LIST,
  // SET_CITY_NAME,
  // SET_LOCATION_NAME,
} from './mutation-types'


function createCartDetail(payload) {
  const { id, food_id = id, attrs, sku_id, item_id, category_id, name, price, packing_fee, stock, activity, specs, extra, image_path, weight } = payload

  return {
    activity,
    attrs,
    category_id,
    extra,
    id: food_id,
    food_id,
    image_hash: image_path,
    item_id,
    name,
    packing_fee,
    price,
    sku_id,
    specs,
    stock,
    weight,
  }
}

function getCartDetail(cart, { food_id, attrs }) {
  const entities = [...cart.entities]
  const index = entities.findIndex((ent) => ent.id === food_id && isEqual(ent.attrs, attrs))
  return [ entities[index], index, entities ]
}

export default {
/* user */
  [SAVE_USER_ID]: function (state, user_id) {
    state.userId = user_id
  },
  [SAVE_USER]: function (state, user) {
    state.user = user
  },

/* cart */
  [SAVE_CART]: function (state, { restaurant_id, cart }) {
    state.cartMap[restaurant_id] = cart
  },
  [ADD_CART]: function (state, payload) {
    const {
      deltaQuantity = 1,
      restaurant_id,
      stock,
    } = payload

    const cartMap = state.cartMap
    const cart = cartMap[restaurant_id] || (cartMap[restaurant_id] = {})
    const entities = cart.entities || (cart.entities = [])

    let [entity, entityIndex] = getCartDetail(cart, payload)
    if (!entity) {
      entity = createCartDetail(payload)
      entityIndex = entities.length + 1
    }

    const newQuantity = (entity.quantity || 0) + deltaQuantity
    if (newQuantity > stock) {
      return Toast.open({
        content: '超过库存，无法添加!',
        mark: false,
      })
    } else {
      entities.splice(entityIndex, 1, { ...entity, quantity: newQuantity })
      // 确保数据变动后视图更新
      state.cartMap = {...cartMap}
    }

  },
  [REDUCE_CART]: function (state, payload) {
    const  {
      deltaQuantity = 1,
      restaurant_id,
    } = payload

    const cartMap = state.cartMap
    const cart = cartMap[restaurant_id] || (cartMap[restaurant_id] = {})
    const entities = cart.entities || (cart.entities = [])

    let [entity, entityIndex] = getCartDetail(cart, payload)
    if (!entity) return

    const newQuantity = (entity.quantity || 0) - deltaQuantity
    if (newQuantity <= 0) {
      entities.splice(entityIndex, 1)
    } else {
      entities.splice(entityIndex, 1, { ... entity, quantity: newQuantity })
    }
  },
  [CLEAR_CART]: function (state, { restaurant_id }) {
    const cartMap = state.cartMap
    const cart = cartMap[restaurant_id] || (cartMap[restaurant_id] = {})
    cart.entities = []
  },
  [INIT_CART]: function (state, { restaurant_id }) {
    state.cartMap[restaurant_id] = {}
  },
  [SAVE_CURRENT_RESTAURANT_ID]: function (state, restaurant_id) {
    state.currentRestaurantId = restaurant_id
  },

/* address */
  [SAVE_ADDRESS_LIST]: function (state, addressList) {
    state.addressList = addressList
  },
  [ADD_ADDRESS]: function (state, address) {
    state.addressList.push(address)
  },
  [SAVE_ADDRESS]: function (state, address) {
    const index = state.addressList.findIndex(item => item.id === address.id)
    if (index > -1) {
      state.addressList.splice(index, 1, address)
    } else {
      state.addressList.push(address)
    }
  },
  [REMOVE_ADDRESS]: function (state, address) {
    const index = state.addressList.findIndex(item => item.id === address.id)
    if (index > -1) {
      state.addressList.splice(index, 1)
    }
  },
  [SAVE_SELECTED_ADDRESS]: function (state, address) {
    state.selectedAddressId = address.id
  },
  [SAVE_EDITING_ADDRESS]: function (state, address) {
    state.editingAddress = address
  },

/* remark */
  [SAVE_REMARK_LIST]: function (state, remarkList) {
    state.remarkList = remarkList
  },
  [SAVE_USED_REMARK]: function (state, usedRemark) {
    state.usedRemark = usedRemark
  },

/* location */

  // 保存经纬度
  [SAVE_COORDS]: function (state, { longitude, latitude }) {
    state.longitude = longitude
    state.latitude = latitude
  },
  // 保存 geohash 和 locationName
  [SAVE_LOCATION]: function (state, { longitude, latitude, geohash, locationName, cityName }) {
    state.longitude = longitude
    state.latitude = latitude
    state.geohash = geohash
    state.locationName = locationName,
    state.cityName = cityName
  },
  [SET_CITY_LIST]: function (state, cityList) {
    state.cityList = cityList
  },
  // [SET_CITY_NAME]: function (state, cityName) {
  //   state.cityName = cityName
  // },
  // [SET_LOCATION_NAME]: function (state, locationName) {
  //   state.locationName = locationName
  // },
}

