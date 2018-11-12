!(function preventPullToRefresh(window, document) {

  var debug = false

  var isAndroid = window.navigator.userAgent.search(/android/i) !== -1
  var maybeChrome = window.chrome || window.navigator.userAgent.search(/chrome/i) !== -1

  if (!(isAndroid && maybeChrome)) {

    debug && console.warn('[preventPullToRefresh] no need')

    return
  }

  if ('overscrollBehaviorY' in document.body.style) {

    debug && console.warn('[preventPullToRefresh] use overscrollBehaviorY')

    return (document.body.style.overscrollBehaviorY = 'contain')
  }

  debug && console.warn('[preventPullToRefresh] use touch event')


  /* fallback */

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

  window.addEventListener('touchstart', onTouchStart, passiveSupported ? { passive: false } : false)
  window.addEventListener('touchmove', onTouchMove, passiveSupported ? { passive: false } : false)
}(window, document));