!(function() {
  const debug = true

  window.addEventListener('resize', () => {
    if (document.activeElement.tagName.search(/input|textarea/i) !== -1) {
      const screenHeight = window.screen.availHeight * window.window.devicePixelRatio
      const vpHeight = window.innerHeight
      // 以红米Note 4x为例，屏幕总高度 640 * 3 = 1920, 状态栏高 60, 地址栏高 168，百度输入法软键盘高度 692 ~ 948
      if (vpHeight < screenHeight - 600) {
        // keyboard shown
        debug && console.log('keyboard shown')
      } else {
        // keyboard hidden
        debug && console.log('keyboard hidden')
        document.activeElement.blur()
      }
    }
  })
}())