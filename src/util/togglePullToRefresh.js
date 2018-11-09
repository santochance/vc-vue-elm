
let lastTouchY = 0
let maybePrevent = false
let passiveSupported = false
let firstMove = false // 用于标示当前 touchmove 是否为 touchstart 后的首次事件

try {
  window.addEventListener('test', null, {
    get passive() {
      passiveSupported = true
    }
  })
} catch(e) {/* empty */}

const onTouchStart = ev => {
  // 多点触摸时浏览器会取消 pull fresh
  if (ev.touches.length !== 1) {
    maybePrevent = false
    return
  }
  // 只有 window.scrollY 为 0 时触发的 touchstart 才可能触发 pull fresh
  maybePrevent = window.scrollY === 0

  lastTouchY = ev.touches[0].clientY
  if (maybePrevent) {
    firstMove = true
  }
}

const onTouchMove = ev => {
  if (!maybePrevent) return

  const downwards = isMoveDownwards(ev)

  if (firstMove) {
    firstMove = false
    // 自 touchstart 后初次 touchmove 是向下的，不会触发 pull fresh
    if (!downwards) {
      maybePrevent = false
    }
  }

  // 如果到这里，只要 window.scrollY 为 0 就可能触发 pull fresh
  if (downwards && window.scrollY === 0) {
    ev.preventDefault()
  }
}

const isMoveDownwards = ev => {
  const touchY = ev.touches[0].clientY
  const deltaY = touchY - lastTouchY
  lastTouchY = touchY
  return deltaY > 0
}

const getElement = elem => {
  let target
  if (typeof elem === 'string') {
    target = document.querySelector(elem)
  } else if (elem instanceof Element) {
    target = elem
  } else {
    target = window
  }
  console.log('pull to refresh target:', target)
  return target
}

export const preventPullToRefresh = elem => {
  const target = getElement(elem)

  target.addEventListener('touchstart', onTouchStart, passiveSupported ? { passive: false } : false)
  target.addEventListener('touchmove', onTouchMove, passiveSupported ? { passive: false } : false)
}

export const resumePullToRefresh = elem => {
  const target = getElement(elem)
  target.removeEventListener('touchstart', onTouchStart, passiveSupported ? { passive: false } : false)
  target.removeEventListener('touchmove', onTouchMove, passiveSupported ? { passive: false } : false)

}

console.log('prevent pull fresh loaded')