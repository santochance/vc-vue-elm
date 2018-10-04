import { isEqual } from 'lodash-es'
import { Toast } from '@/components/common'

import {
  SAVE_USER_ID,
  SAVE_USER,

  SAVE_CART,
  ADD_CART,
  REDUCE_CART,
  CLEAR_CART,
  INIT_CART,
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
      Toast.open({
        content: '超过库存，无法添加!',
        mark: false,
      })
    } else {
      entities.splice(entityIndex, 1, { ...entity, quantity: newQuantity })
    }

    // state.cartMap = {...cartMap}
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
}

