const debug = false

class ScrollLocker {
  constructor(el, options) {
    options = options || {}
    this.options = options
    this.lockClassName = options.lockClassName || 'modaling'
    this.autoUnlockDelay = options.autoUnlockDelay ||  5000,

    this.el = el
    this.lockTimeout = null
    this.lockScroll = this.lockScroll.bind(this)
    this.unlockScroll = this.unlockScroll.bind(this)

    this.init()
  }

  init() {
    debug && console.log('debug - ScrollLocker: call init()')
    this.insertStyle()
    this.lockScroll()
    this.el.addEventListener('wheel', this.lockScroll)
    this.el.addEventListener('touchmove', this.lockScroll)
  }

  destroy() {
    debug && console.log('debug - ScrollLocker: call destroy()')
    this.el.removeEventListener('wheel', this.lockScroll)
    this.el.removeEventListener('touchmove', this.lockScroll)
    this.unlockScroll()

    this.options = null
    this.el = null
    this.lockTimeout = null
  }

  lockScroll(ev) {
    debug && console.log('debug - ScrollLocker: call lockScroll()')
    const docEl = document.documentElement

    if (!docEl.classList.contains(this.lockClassName)) {
      if (typeof (ev || {}).preventDefault === 'function') {
        ev.preventDefault()
      }
      docEl.classList.add(this.lockClassName)
    }

    if (!this.autoUnlockDelay) return

    debug && console.log('debug - ScrollLocker: auto unlock after %ss', this.autoUnlockDelay / 1000)

    // 重置自动解除定时器
    if (this.lockTimeout) {
      clearTimeout(this.lockTimeout)
    }
    this.lockTimeout = setTimeout(this.unlockScroll, this.autoUnlockDelay)
  }

  unlockScroll() {
    debug && console.log('debug - ScrollLocker: call unlockScroll()')
    const docEl = document.documentElement
    docEl.classList.remove(this.lockClassName)
    this.lockTimeout = null
  }

  insertStyle() {
    const className = this.lockClassName
    const styleMap = ScrollLocker.insertedStyles || (ScrollLocker.insertedStyles = {})
    if (styleMap[className]) return

    debug && console.log('debug - ScrollLocker: insert new style for: .%s', className)

    const style = document.createElement('style')
    style.innerHTML = `
      /* ScrollLocker lock style \`.${className}\` */
      html.${className} {
        overflow-y: hidden !important;
      }
      html.${className} body {
        overflow-y: scroll !important;
      }
    `
    styleMap[className] = style
    document.head.appendChild(style)
  }
}

ScrollLocker.insertedStyles = {}

debug && (window.ScrollLocker = ScrollLocker)

// 注册 Vue 插件

ScrollLocker.directive = {
  bind(el, binding, vnode) {
    debug && console.log('debug - ScrollLocker: bind')
    vnode.context[binding.name] = new ScrollLocker(el)
  },
  unbind(el, binding, vnode) {
    debug && console.log('debug - ScrollLocker: unbind')
    vnode.context[binding.name].destroy()
  },
}

ScrollLocker.install = function install(Vue, options) {
  options = options || { name: 'hold-up-scroll' }
  Vue.directive(options.name, this.directive)
}

export default ScrollLocker