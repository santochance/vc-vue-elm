export const LazyLocalScroll = {
  directive: {
    bind(el, binding, vnode) {
      // 监听 local scroll 的 touchmove 和 wheel 事件，根据 global scroll 是否触及底端时开关 local scroll
      const handler = vnode.context[`directive-${binding.name}`] = function () {
        // const touched = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight
        const touched = window.scrollY >= el.getBoundingClientRect().top
        if (touched) {
          // 全局 scroll 触及底端
          el.style.overflow = 'auto'
          vnode.context.menuOverflow = 'auto'
        } else {
          el.style.overflow = 'hidden'
          vnode.context.menuOverflow = 'hidden'
        }
      }.bind(vnode.context)

      el.style.overflow = 'hidden'

      // el.addEventListener('touchmove', handler)
      // el.addEventListener('wheel', handler)
      window.addEventListener('scroll', handler)
    },
    unbind(el, binding, vnode) {
      const handler = vnode.context[`directive-${binding.name}`]
      // el.removeEventListener('touchmove', handler)
      // el.removeEventListener('wheel', handler)
      window.removeEventListener('scroll', handler)
    }
  },
  install(Vue, options) {
    const name = options && options.name || 'lazy-local-scroll'
    Vue.directive(name, this.directive)
  },
}

export const HoldUpScroll = {
  directive: {
    bind(el, binding, vnode) {
      const handler = vnode.context[`directive-${binding.name}`] = function () {
        if (vnode.context.visible) {
          document.documentElement.style.overflowY = 'hidden'
          document.body.style.overflowY = 'scroll'
        } else {
          document.documentElement.style.overflowY = ''
          document.body.style.overflowY = ''
        }
      }.bind(vnode.context)

      document.documentElement.style.overflowY = 'hidden'
      document.body.style.overflowY = 'scroll'

      el.addEventListener('wheel', handler)
      el.addEventListener('touchmove', handler)
    },
    unbind(el, binding, vnode) {
      const handler = vnode.context[`directive-${binding.name}`]
      el.removeEventListener('wheel', handler)
      el.removeEventListener('touchmove', handler)

      document.documentElement.style.overflowY = ''
      document.body.style.overflowY = ''
    },
  },
  install(Vue, options) {
    const name = options && options.name || 'hold-up-scroll'
    Vue.directive(name, this.directive)
  }
}