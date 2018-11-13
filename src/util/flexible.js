/* eslint no-unused-vars: off */
(function flexible (window, document) {

  // var debug = false

  // 是否使用根据 dpr 缩放
  var useScale = true
  // rem 自适应的最大 viewport width unit
  // maxVpWidthUnit 乘以 dpr 即为最大视口限制
  var maxVpWidthUnit /* = 1200 */
  var dpr
  var scale
  var vpWidth
  var deviceWidth
  var screenWidth
  var resetTimeout

  var docEl = document.documentElement;
  var metaEl = document.querySelector('meta[name="viewport"]')
  if (!metaEl) {
    metaEl = document.createElement('meta')
    document.head.appendChild(metaEl)
  }

  // reset rem unit on page resize
  window.addEventListener('resize', function () {
    // console.log('resize')
    refresh()
  })
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      refresh()
    }
  })

  refresh()

  function refresh() {
    if (resetTimeout) {
      clearTimeout(resetTimeout)
      resetTimeout = null
    }

    if (dpr !== window.devicePixelRatio || screenWidth !== window.screen.width) {
      // 屏幕变化，更新相关参数
      dpr = window.devicePixelRatio || 1
      screenWidth = window.screen.width
      detectHairlines()

      // 当前 window.innerWidth 可能不是屏幕独立像素宽度
      deviceWidth = null
    }

    if (!deviceWidth) {
      var metaVp = parseMetaVp()
      if (!(metaVp.width === 'device-width' && Number(metaVp['initial-scale']) === 1)) {
        metaEl.setAttribute('content', 'width=device-width,initial-scale=1.0')
      }
      deviceWidth = window.innerWidth

      if (useScale) {
        scale = 1 / dpr
        vpWidth = deviceWidth * dpr
        setScale()
      }

      // 不支持 initial-scale 或 不使用 scale
      if (vpWidth !== window.innerWidth || !useScale) {
        scale = 1
        vpWidth = deviceWidth
        setScale()
      }
    } else {
      vpWidth = window.innerWidth
    }

    // 设置viewport, 进行缩放(目的是实现1px border)
    // 设置时可能会触发一次 resize 事件
    setBodyFontSize()
    setRemUnit()
  }

  function parseMetaVp() {
    if (metaEl && metaEl.content) {
      return metaEl.content.split(/\s*,\s*/).reduce((rst, pair) => {
        var p = pair.split(/\s*=\s*/)
        rst[p[0]] = p[1]
        return rst
      }, {})
    }
  }

  function setScale() {
    metaEl.setAttribute('content', 'initial-scale=' + scale + ',maximum-scale=' + scale + ', minimum-scale=' + scale + ',user-scalable=no');
  }

  // adjust body font size
  function setBodyFontSize() {
    if (document.body) {
      document.body.style.fontSize = (12 / scale) + 'px'
    }
    else {
      document.addEventListener('DOMContentLoaded', setBodyFontSize)
    }
  }

  // set 1rem = viewWidth / 10
  function setRemUnit() {
    var rem = Math.min(vpWidth, maxVpWidthUnit * dpr || Infinity) / 10
    docEl.style.fontSize = rem + 'px'
    docEl.setAttribute('data-dpr', dpr)
    docEl.setAttribute('data-scale', scale)
    docEl.setAttribute('data-vp', vpWidth)
  }

  // detect 0.5px supports
  function detectHairlines() {
    if (dpr >= 2) {
      var fakeBody = document.createElement('body')
      var testElement = document.createElement('div')
      testElement.style.border = '.5px solid transparent'
      fakeBody.appendChild(testElement)
      docEl.appendChild(fakeBody)
      if (testElement.offsetHeight === 1) {
        docEl.classList.add('hairlines')
      } else {
        docEl.classList.add('pesudolines')
      }
      docEl.removeChild(fakeBody)
    }
  }

  // lock vp height to 100vh or 100%
  /*
    Android Chrome from version 56, 100vh is changed to the max viewport height,
    and 100% is the min viewport height, which keep same as the height of ICB.
    See: https://developers.google.com/web/updates/2016/12/url-bar-resizing
   */
  // function lockVpHeight() {
  //   // fallback for browser not support 100vh
  //   docEl.style.height = '100%'
  //   docEl.style.height = '100vh'
  //   debug && console.log('html offsetHeight:', docEl.offsetHeight)
  //   debug && console.log('html clientHeight:', docEl.clientHeight)
  //   docEl.style.height = docEl.offsetHeight + 'px'
  // }
}(window, document))