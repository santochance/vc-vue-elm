(function flexible (window, document) {
  var docEl = document.documentElement;
  var dpr = window.devicePixelRatio || 1;

  /* scale */

  var useScale = false
  var scale = useScale ? (1 / dpr) : 1

  if (useScale) {
    var metaEl = document.querySelector('meta[name="viewport"]');
    // 设置viewport, 进行缩放(目的是实现1px border)
    metaEl.setAttribute('content', 'initial-scale=' + scale + ',maximum-scale=' + scale + ', minimum-scale=' + scale + ',user-scalable=no');
  }

  /* data-dpr */

  docEl.setAttribute('data-dpr', dpr)


  // adjust body font size
  function setBodyFontSize () {
    if (document.body) {
      document.body.style.fontSize = (12 / scale) + 'px'
      // document.body.style.fontSize = 12 + 'px'
    }
    else {
      document.addEventListener('DOMContentLoaded', setBodyFontSize)
    }
  }
  setBodyFontSize();

  /* rem */

  // rem 自适应的最大 viewport width
  var maxVpWidth = 600

  // set 1rem = viewWidth / 10
  function setRemUnit () {
    var rem = Math.min(docEl.clientWidth, maxVpWidth) / 10 / scale
    docEl.style.fontSize = rem + 'px'
  }

  setRemUnit()

  // reset rem unit on page resize
  window.addEventListener('resize', setRemUnit)
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      setRemUnit()
    }
  })

  // detect 0.5px supports
  if (dpr >= 2) {
    var fakeBody = document.createElement('body')
    var testElement = document.createElement('div')
    testElement.style.border = '.5px solid transparent'
    fakeBody.appendChild(testElement)
    docEl.appendChild(fakeBody)
    if (testElement.offsetHeight === 1) {
      docEl.classList.add('hairlines')
    }
    docEl.removeChild(fakeBody)
  }
}(window, document))