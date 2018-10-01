(function flexible (window, document) {
  // 是否使用根据 dpr 缩放
  var useScale = true
  // rem 自适应的最大 viewport width unit
  // maxVpWidthUnit 乘以 dpr 即为最大视口限制
  var maxVpWidthUnit /* = 1200 */
  var dpr
  var scale
  var vpWidth

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
  // dpr 和 scale 会改变
    dpr = window.devicePixelRatio || 1
    vpWidth = window.innerWidth
    scale = useScale ? (1 / dpr) : 1

    setScale()
    setBodyFontSize()
    setRemUnit()
    detectHairlines()
  }

  function setScale() {
    if (useScale) {
      // 设置viewport, 进行缩放(目的是实现1px border)
      // 设置时可能会触发一次 resize 事件
      metaEl.setAttribute('content', 'initial-scale=' + scale + ',maximum-scale=' + scale + ', minimum-scale=' + scale + ',user-scalable=no');
    }
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
}(window, document))