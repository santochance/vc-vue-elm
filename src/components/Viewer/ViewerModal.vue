<template>
  <div class="viewer__container">
    <transition name="fade">
      <div v-show="transitionVisible" class="viewer__mask"
        @click.stop.prevent="close(currentIdx)"
      ></div>
    </transition>
    <div class="viewer__wrap">
      <transition name="view"
        @beforeEnter="beforeEnter"
        @enter="enter"
        @afterEnter="afterEnter"
        @beforeLeave="beforeLeave"
        @leave="leave"
        @afterLeave="afterLeave"
      >
        <div v-if="activeItem"
          v-show="transitionVisible"
          class="transition-container"
          :style="[rectStyle, transformStyle]"
          @click.stop.prevent="close(currentIdx)">
          <img v-if="activeItem.loaded" :src="activeItem.image" alt="">
          <img v-else :src="activeItem.thumbnail" alt="">
        </div>
      </transition>

      <div v-if="galleryVisible" class="gallery__container o-image__gallery">
        <div class="gallery__wrap">
          <div v-for="(item, idx) in items" :key="idx"
            class="gallery__item">
            <div class="o-image__item" @click.stop.prevent="close(galleryCurrentIdx)">
              <img :src="item.image" alt="">
              <div class="o-image__caption">{{ item.caption }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  /* eslint no-console: 0, no-debugger: 0 */

  export default {
    data() {
      return {
        items: [],
        els: [],
        /*
          items: [{
            thumbnail: 'https://picsum.photos/100/100?image=0',
            image: 'https://picsum.photos/800/800?image=0',
            caption: '图片 1',
            loaded: false,
          }, {
            thumbnail: 'https://picsum.photos/100/100?image=2',
            image: 'https://picsum.photos/800/800?image=2',
            caption: '图片 2',
            loaded: false,
          }, {
            thumbnail: 'https://picsum.photos/100/100?image=6',
            image: 'https://picsum.photos/800/800?image=6',
            caption: '图片 3',
            loaded: false,
          }, {
            thumbnail: 'https://picsum.photos/100/100?image=8',
            image: 'https://picsum.photos/800/800?image=8',
            caption: '图片 4',
            loaded: false,
          }],
        */

        activeItem: null,

        currentIdx: 0,
        lastIdx: null,
        loop: false,

        clickLocking: false,

        transitionVisible: false,

        rectStyle: null,
        transformStyle: null,
        computedStyles: null,

        galleryVisible: false,
        galleryCurrentIdx: 0,


      }
    },
    created() {
      window.viewer = this
    },
    methods: {
      onThumbnailClick(event, idx) {
        if (this.clickLocking || this.currentIdx === idx) return Promise.resolve()
        this.clickLocking = true

        this.lastIdx = this.currentIdx
        this.currentIdx = idx

        // 执行过渡
        return Promise.resolve().then(() => {
          return this.close(this.lastIdx)
        }).then(() => {
          return this.open(this.currentIdx)
        }).then(() => {
          this.clickLocking = false
        })
      },

      getThumbnailElByIdx(idx) {
        // 注意 $refs[name] 返回的是 Array!!!
        // return this.$refs['thumbnails'][idx]
        return this.els[idx]
      },
      fixIdx(idx) {
        // console.log('debugger:fixIdx')
        const length = this.items.length
        if (idx >= 0 && idx < length) return idx

        // 修正 idx
        if (!this.loop) return null

        const remainder = idx % 4
        return remainder >= 0 ? remainder : length + remainder
      },
      fixEl(el, idx) {
        return el instanceof HTMLElement ? el : this.getThumbnailElByIdx(idx)
      },

      // 触发进入过渡，类似于 mount
      open(idx, el) {
        // console.log('debug - ViewerModal.open()')
        if (this.transitionVisible) return Promise.resolve()

        idx = this.fixIdx(idx)
        el = this.fixEl(el, idx)
        if (idx == null) return Promise.reject('idx should not be null')
        if (el == null) return Promise.reject('el should not be null')

        // 加载大图
        const item = this.items[idx]
        if (!item.loaded) {
          this.loadImage(item.image).then(() => {
            item.loaded = true
          })
        }
        return new Promise((resolve) => {

          // 设置数据 item
          this.activeItem = this.items[idx]
          // 计算过渡样式
          this.computedStyles = this.computeTransitionStyle(el)

          this.$on('afterEnter', resolve)
          // 触发进入过渡
          this.transitionVisible = true
        }).then(() => {
          // 告知 Gallery currrent idx
          this.galleryCurrentIdx = idx
          this.galleryVisible = true
        })
      },
      // 触发离开过渡，类似于 unmount
      close(idx, el) {
        // console.log('debug - ViewerModal.close()')
        if (!this.transitionVisible) return Promise.resolve()

        idx = this.fixIdx(idx)
        el = this.fixEl(el, idx)
        if (idx == null) return Promise.reject('idx should not be null')
        if (el == null) return Promise.reject('el should not be null')

        return new Promise((resolve) => {

          // 设置数据 item
          this.activeItem = this.items[idx]
          // 计算过渡样式
          this.computedStyles = this.computeTransitionStyle(el)

          this.$on('afterLeave', resolve)
          // 触发离开过渡
          this.transitionVisible = false
          this.galleryVisible = false
        })
      },
      /* js 过渡钩子 */
      beforeEnter() {
        // console.log('debug - ViewerModal.beforeEnter')
        const { rectStyle, transformStyle } = this.computedStyles

        // 设置过渡开始状态
        // 设置 rectStyle 和 tranformStyle
        this.rectStyle = rectStyle
        this.transformStyle = null

        // （下一帧）设置过渡结束状态
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            this.transformStyle = transformStyle
          })
        })
      },
      enter(el, done) {
        // 设置过渡完成回调
        el.addEventListener('transitionend', done)
      },
      afterEnter() {
        this.$emit('afterEnter')
      },
      beforeLeave() {
        const { rectStyle, transformStyle } = this.computedStyles

        // 设置过渡开始状态
        // 设置 rectStyle 和 tranformStyle
        this.rectStyle = rectStyle
        this.transformStyle = transformStyle

        // （下一帧）设置过渡结束状态
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            this.transformStyle = null
          })
        })
      },
      leave(el, done) {
        // 设置过渡完成回调
        el.addEventListener('transitionend', done)
      },
      afterLeave() {
        this.$emit('afterLeave')
      },
      loadImage(src) {
        return new Promise((resolve, reject) => {
          const img = new Image()
          img.addEventListener('load', resolve)
          img.addEventListener('error', reject)
          img.src = src
        })
      },
      // 获取元素尺寸和视口坐标
      getElementRect(el) {
        const elRect = el.getBoundingClientRect()
        const { width, height, top, left } = elRect;
        return {
          width,
          height,
          left,
          top,
          centerX: left + width / 2,
          centerY: top + height / 2,
        }
      },

      // 获取元素尺寸和视口坐标
      getViewportRect() {
        const width = window.innerWidth
        const height = window.innerHeight
        return {
          width,
          height,
          centerX: width / 2,
          centerY: height / 2,
        }
      },

      // 计算 transition 样式
      computeTransitionStyle(el) {
        // 获取缩略图尺寸和坐标
        // 获取视口尺寸和坐标
        // 计算 transform
        const elRect = this.getElementRect(el)
        const vpRect = this.getViewportRect()
        const translateX = vpRect.centerX - elRect.centerX
        const translateY = vpRect.centerY - elRect.centerY
        const scale = vpRect.width / elRect.width

        const rectStyle = {
          width: elRect.width + 'px',
          height: elRect.height + 'px',
          top: elRect.top + 'px',
          left: elRect.left + 'px',
        }
        const transformStyle = {
          transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
        }

        return {
          rectStyle,
          transformStyle,
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

  .viewer {@at-root {
    .viewer__container {

    }
    .viewer__mask {
      position: fixed;
      z-index: 999;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      background-color: rgba(0, 0, 0, .9);
    }
    .viewer__wrap {
      position: fixed;
      z-index: 999;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      visibility: hidden;
      & > * {
        visibility: visible;
      }
    }
  }}

  .gallery {@at-root {
    .gallery__container {
      position: relative;
    }
    .gallery__wrap {
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;
    }
    .gallery__item {
      position: relative;
      display: flex;
      align-items: center;
      flex-shrink: 0;
      width: 100%;
      height: 100%;
    }
  }}

  .o-image {@at-root {
    .o-image__gallery {
      position: fixed;
      z-index: 10;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      margin: auto;
    }
    .o-image__item {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      width: 100%;
    }
    .o-image__caption {
      position: absolute;
      bottom: 12px;
      left: 12px;
      font-size: 26px;
      color: #fff;
    }
  }}

  .thumbnail {@at-root {
    .thumbnail__container {
      display: flex;
    }
    .thumbnail__item {
      position: relative;
      margin: 10px 10px 10px 0;
      &:last-child {
        margin-right: 0;
      }

      flex: 1 1 auto;
    }
  }}

  .transition-container {
    position: fixed;
    z-index: 5;
    transition: all .3s;

    & > img {
      width: 100%;
    }
  }

  .fade-enter-active {
    transition: opacity .3s;
  }
  .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>