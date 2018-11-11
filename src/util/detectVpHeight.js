!(function () {

  const debug = true

  function detectVpHeight() {

    window.util = window.util || {}
    window.util.vpHeight = {
      records: [],
      max: null,
      min: null,
      finished: false,
    }

    // 设置 html min-height

    document.documentElement.style.minHeight = window.screen.availHeight * window.window.devicePixelRatio + 'px'
    document.documentElement.style.transition = 'height .3s'

    const detect = () => {

      debug && console.log('进行检测...')

      const vpHeight = window.util.vpHeight
      const { records } = vpHeight
      const vpHeightBase = window.screen.availHeight - 300
      const innerHeight = window.innerHeight
      let finished = false
      let max
      let min

      if (innerHeight > vpHeightBase && records.indexOf(innerHeight) === -1) {
        records.push(innerHeight)
      }
      max = Math.max.apply(Math, records)
      min = Math.min.apply(Math, records)

      if (records.length >= 2) {
        finished = true
        window.removeEventListener('resize', detect)

        document.documentElement.style.minHeight = max + 'px'
        document.documentElement.style.transition = ''
      }

      Object.assign(vpHeight, {
        records,
        max,
        min,
        finished,
      })
    }

    window.addEventListener('resize', detect)

    detect()
  }

  const isMobile = window.navigator.userAgent.search(/mobile/i) !== -1
  const isFirefox = window.navigator.userAgent.search(/firefox/i) !== -1

  if (isMobile) {

    debug && console.log('将会检测 viewport height')

    if (!isFirefox) {
      window.addEventListener('load', detectVpHeight)

      // 修复 fixed 底栏贴底异常
      document.body.style.height = 'calc(100% + 1px)'
    }
  }
}());