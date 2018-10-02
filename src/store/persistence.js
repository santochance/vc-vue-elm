import persistence from '@/util/persistence'

export function initState(state) {
  let initial = {}
  const userId = persistence.getItem('USER_ID')
  if (userId && typeof userId === 'number') {
    initial.userId = userId
  }
  const cartMap = persistence.getItem('CART_MAP')
  if (cartMap && typeof cartMap === 'object') {
    initial.cartMap = cartMap
  }

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
    (state) => state.cartMap,
    (value) => {
      persistence.setItem('CART_MAP', value)
    },
    { deep: true }
  )
}