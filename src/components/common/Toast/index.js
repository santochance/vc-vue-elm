  /* eslint no-console: 0, no-debugger: 0, no-unused-vars: 0 */

import Vue from 'vue'
import definition from './Toast'

const Ctor = Vue.extend(definition)

let uid = 0
let queue = []

function asyncEach(list, iteratee) {
  return list.reduce((promise, v, i, a) => promise.then(iteratee(v, i, a)), Promise.resolve())
}

class Toast {
  constructor(config = {}) {
    this.config = { ...config }
    this.uid = uid++
    this.timer = null

    this.context = new Ctor({
      // Vue 会把这里的数据合并到组件定义对象中，所以只需要传入覆盖的部分
      // 注意组件定义对象中 data 是函数
      data: Object.keys(definition.data()).reduce((rst, key) =>
        key in config ? { ...rst, [key]: config[key] } : rst
      , {}),
      methods: {
        ...(config.onClose ? { onClose: config.onClose } : undefined),
      },
    })
    this.context.$mount()
    this.el = this.context.$el
  }

  init() {
    return Promise.resolve().then(() => this.enqueue())
  }

  enqueue() {
    return Promise.resolve()
    .then(() => {
      // 一次只显示一个 toast
      // 如果队列不为空，清空队列
      if (queue.length > 0) {
        return this.clearQueue()
      }
    })
    // 入列
    .then(() => queue.push(this))
    // 挂载
    .then(() => this.mount())

  }

  dequeue() {
    return Promise.resolve()
      .then(() => {
        // 出列
        const idx = queue.findIndex(obj => obj.uid === this.uid)
        queue.splice(idx, 1)
      })
      // 卸载
      .then(() => this.unmount())
  }

  clearQueue() {
    return Promise.resolve()
      .then(() => {
        const list = queue
        queue = []
        return asyncEach(list, toast => toast.unmount())
      })
  }

  mount() {
    return Promise.resolve()
      .then(() => {
        // 挂载组件根元素
        document.body.appendChild(this.el)
      })
      .then(() => {
        return new Promise((resolve, reject) => {
          // 触发进入过渡
          requestAnimationFrame(() => {
            // 进入过渡过程中如果强制提前进入离开过渡，afterEnter 不会触发
            this.context.$on('afterEnter', resolve)
            this.context.$data.visible = true
          })
        })
      })
      .then(() => {
        const { duration } = this.context.$data
        // 设置自动关闭定时器
        if (duration) {
          this.timer = setTimeout(() => {
            this.destory()
          }, duration * 1000)
        }
      })
  }

  unmount() {
    return Promise.resolve()
      .then(() => {
        // 取消自动关闭定时器
        if (this.timer) {
          clearTimeout(this.timer)
        }
      })
      .then(() => {
        return new Promise((resolve) => {
          // 触发离开过渡
          requestAnimationFrame(() => {
            // 这里可以考虑添加参数控制是否等候进入过渡完成才触发离开过渡
            this.context.$on('afterLeave', resolve)
            this.context.$data.visible = false
          })
        })
      })
      .then(() => {
        // 离开过渡完成后卸载组件根元素
        document.body.removeChild(this.el)
        // 执行 onClose， 只在自动关闭，即 duration 不为0时执行
        const { duration, onClose } = this.context.$data
        if (duration && onClose) onClose()
      })
  }

  destory() {
    return Promise.resolve()
      .then(() => this.dequeue())
      .then(() => {
        this.config = null
        this.context = null
        this.el = null
      })
  }
}

const methods = {
  // 创建新实例
  open(config) {
    new Toast(config).init()
  },
  // 移除所有实例
  hide() {
    queue.forEach(toast => toast.destory())
  }
}

// 注意如果要同时用作 Vue 组件定义对象，不能返回 class 或 function
export default Object.assign(definition, methods)
