import persistence from '@/util/persistence'
import {
  SAVE_LOCATION
} from './mutation-types'

const debug = true

export function initState(state) {
  let initial = {}

  const userId = persistence.getItem('USER_ID')
  if (userId != null && typeof userId === 'number') {
    initial.userId = userId
  }

  const user = persistence.getItem('USER')
  if (user != null && typeof user === 'object') {
    initial.user = user
  }

  const cartMap = persistence.getItem('CART_MAP')
  if (cartMap != null && typeof cartMap === 'object') {
    initial.cartMap = cartMap
  }

  const currentRestaurantId = persistence.getItem('CURRENT_RESTAURANT_ID')
  if (currentRestaurantId != null && typeof currentRestaurantId === 'number') {
    initial.currentRestaurantId = currentRestaurantId
  }

  const selectedAddressId = persistence.getItem('CURRENT_ADDRESS_ID', 'sessionStorage')
  if (selectedAddressId != null && typeof selectedAddressId === 'number') {
    initial.selectedAddressId = selectedAddressId
  }

  const location = persistence.getItem('LOCATION')
  if (location != null && typeof location === 'object') {
    initial = { ...initial, ...location }
  }
  debug && console.log('init state with location:', location)

  return { ...state, ...initial }
}

/* 监听 store 自动保存到本地存储 */
export function wrapPersistence(store) {
  store.watch(
    (state) => state.userId,
    (value) => {
      persistence.setItem('USER_ID', value)
    },
  )

  store.watch(
    (state) => state.user,
    (value) => {
      persistence.setItem('USER', value)
    }
  )

  store.watch(
    (state) => state.cartMap,
    (value) => {
      persistence.setItem('CART_MAP', value)
    },
    { deep: true }
  )

  store.watch(
    (state) => state.currentRestaurantId,
    (value) => {
      persistence.setItem('CURRENT_RESTAURANT_ID', value)
    }
  )

  store.watch(
    (state) => state.selectedAddressId,
    (value) => {
      persistence.setItem('CURRENT_ADDRESS_ID', value, 'sessionStorage')
    },
  )

  store.subscribe((mutation) => {
    if (mutation.type === SAVE_LOCATION) {
      persistence.setItem('LOCATION', mutation.payload)
    }
  })
}