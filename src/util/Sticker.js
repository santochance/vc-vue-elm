/* 要点 */
// style.cssText 是可读写的
// scrollY 变大：window.scrollY 在 el 转为 fixed 时不会改变，而设置 holder height 后会变大。 注意 window的scrollY和pageYOffset都是只读的，需要通过 offsetTop 设置

/* Issue */
/* 切换为stick后 window.scrollY 会变大 */

let cid = -1
export default class Sticker {
  constructor (el, offset = 0, zIndex = 20) {
    cid++
    this.cid = cid
    this.el = el
    this.zIndex = zIndex
    this.offset = offset
    this.sticking = false
    this.onScroll = this.onScroll.bind(this)
    this.onResize = this.onResize.bind(this)

    // 创建和插入holder
    this.holder = document.createElement('div')
    this.holder.className = `auto-stick-holder auto-stick-holder-${this.cid}`
    this.el.parentNode.insertBefore(this.holder, this.el)

    window.addEventListener('scroll', this.onScroll)
    window.addEventListener('resize', this.onResize)
  }

  onScroll() {
    if (this.shouldStick()) {
      this.stick()
    } else {
      this.unstick()
    }
  }

  onResize() {
    this.unstick()
    this.onScroll()
  }

  /* 转为 sticky 状态 */
  stick() {
    if (this.sticking) return false
    this.sticking = true

    // 备份el内联样式
    this.styleCssText = this.el.style.cssText

    const cStyle = window.getComputedStyle(this.el)

    // 设置 holder 高度后出现 scrollY 变大的现象
    // 这里保存 scrollY 用于设置 holder 高度后重置 scrollY
    const scrollY = window.scrollY

    // 设置sticky样式
    this.el.style.width = cStyle.width
    this.el.style.position = 'fixed'
    this.el.style.top = this.offset + 'px'
    this.el.style.zIndex = this.zIndex

    // 设置holder
    this.holder.style.height = cStyle.height
    this.holder.style.margin = cStyle.margin

    document.documentElement.scrollTop = scrollY

    return true
  }

  unstick() {
    if (!this.sticking) return false
    this.sticking = false

    this.el.style.width = ''
    this.el.style.position = ''
    this.el.style.top = ''
    this.el.style.zIndex = ''

    // 还原el内联样式
    this.el.style.cssText = this.styleCssText

    // 还原holder
    this.holder.style.cssText = ''

    return true
  }

  shouldStick() {
    // 判断是否应该进入stick状态
    const holderRect = this.holder.getBoundingClientRect()
    return holderRect.top - this.offset <= 0
  }

  destory() {
    this.unstick()
    this.holder.parentNode.removeChild(this.holder)
    this.holder = null
    this.el = null

    window.removeEventListener('scroll', this.onScroll)
    window.removeEventListener('resize', this.onResize)
  }
}

