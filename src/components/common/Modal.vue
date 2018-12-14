<template>
  <transition name="modal-fade">
    <div v-if="visible"
        class="modal__container"
        :class="panel === 'center' ? 'modal__container_center' : 'modal__container_bottom'"
        :style="{ zIndex: zIndex }"
        v-hold-up-scroll>
        <template v-if="overlay">
          <div v-if="overlayCloseable" class="modal__overlay" @click.stop.prevent="onClose"></div>
          <div v-else class="modal__overlay"></div>
        </template>
      <div class="modal__panel"
        :class="panel === 'center' ? 'modal__panel_center' : 'modal__panel_bottom'">
        <slot></slot>
        <div v-if="closable && closeBtn === 'rightTop'"
          class="modal__close-btn" @click.stop.prevent="onClose">
          <svg><use xlink:href="#gray-close"></use></svg>
        </div>
      </div>
      <div v-if="closable && closeBtn === 'center'"
        class="modal__outer-close-btn" @click.stop.prevent="onClose">&times;
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position:absolute;width:0;height:0;visibility:hidden;">
        <defs>
          <symbol xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" id="gray-close"><defs><path id="gray-close_a" d="M13.132 12l6.47-6.47a.75.75 0 0 0-1.061-1.06l-6.47 6.47-6.47-6.47a.75.75 0 0 0-1.06 1.06L11.01 12l-.072.071.071.071-6.47 6.47a.75.75 0 0 0 1.061 1.06l6.47-6.47 6.47 6.47a.75.75 0 0 0 1.06-1.06l-6.47-6.47.072-.07-.071-.072z"></path></defs><g fill="none" fill-rule="evenodd"><use fill="#000" fill-opacity=".54" fill-rule="nonzero" xlink:href="#gray-close_a"></use><path d="M0 0h24v24H0z"></path></g></symbol>
        </defs>
      </svg>
    </div>
  </transition>

</template>

<script>
  const keyForModal = 'modal'
  let cid = 0

  function getActiveModalSet(query) {
    if (query === null || typeof query !== 'object') return new TypeError('query must be an object')
    return new Set(query[keyForModal] && query[keyForModal].split(',').map(Number))
  }

  const debug = true

  export default {
    name: 'Modal',
    props: {
      /* modal 是否可见 */
      visible: Boolean,

      /* 是否显示关闭按钮 */
      closable: {
        type: Boolean,
        default: true,
      },
      /* 关闭按钮的位置，有'rightTop'(或'topRight'), 'bottom'两种 */
      closeBtn: {
        type: String,
        default: 'rightTop'
      },

      /* 是否显示 overlay */
      overlay: {
        type: Boolean,
        default: true,
      },
      /* 是否可以通过 overlay 关闭 modal */
      overlayCloseable: {
        type: Boolean,
        default: true,
      },

      /* 面板显示位置，有'center', 'bottom'两种 */
      panel: {
        type: String,
        default: 'center',
      },
      /* 自定义 modal 的 z-index*/
      zIndex: {
        type: Number,
        default: 1000,
      },
      /* 关闭时是否销毁 modal 里的子元素 */
      destoryOnClose: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        cid: undefined,
        willEmitChange: true,
      }
    },
    created() {
      debug && (window[this.$options.name] = this)

      this.cid = cid++
    },
    watch: {
      // modal 可见状态变化时，写入 modal 状态信息到路由
      visible(value) {
        const query = {...this.$route.query}
        const activeModalSet = getActiveModalSet(query)
        const visibleInQuery = activeModalSet.has(this.cid)
        // visible 变化了，但 query 中 modal 状态信息已经同步
        if (value === visibleInQuery) return

        // 用户点击视图改变 visible，modal 会更新路由，但不再通知视图 visible 变化
        this.willEmitChange = false

        if (value) {
          activeModalSet.add(this.cid)
        } else {
          activeModalSet.delete(this.cid)
        }

        // 仅修改 query 中 modal 状态信息部分
        const activeModalStr = [...activeModalSet].toString()
        if (activeModalStr) {
          query[keyForModal] = activeModalStr
        } else {
          // 如果没有活动状态的 modal, 则从 query 中删除 modal 状态信息
          delete query[keyForModal]
        }

        this.$router.push({
          ...this.$route,
          query,
        })
      },
      // 路由路线变化时, 检查 modal 活动状态，并通知变化
      '$route'(to, from) {
        if (!this.willEmitChange) {
          this.willEmitChange = true
          return
        }

        const visible = getActiveModalSet(to.query).has(this.cid)
        const oldVisible = getActiveModalSet(from.query).has(this.cid)
        if (visible === oldVisible) return

        // 用户操作浏览器导航触发路由更新，modal 会通知视图改变 visible
        const payload = {
          visible,
          cid: this.cid
        }
        this.$emit('change', payload)
      },
    },
    methods: {
      onClose() {
        this.$emit('close')
      },
    },
  }
</script>

<style lang="scss" scoped>
  // 居中方案使用flex

  .modal__container {
    display: flex;
    align-items: center;
    flex-direction: column;

    position: fixed;
    z-index: 1000; // 自定义需求
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    &_center {
      justify-content: center;
    }
    &_bottom {
      justify-content: flex-end;
    }
  }
  .modal__overlay {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .6); // 自定义需求
  }
  .modal__panel {
    box-sizing: border-box;
    overflow: auto;
    position: relative;
    z-index: 1;
    &_center {
      max-height: 90%;
      max-width: 100%;
    }
    &_bottom {
      width: 100%;
    }
  }
  .modal__pandel-default {
    margin: auto;
    padding: 40px;
    background-color: #fff;
    border-radius: 8px;
    transition: transform .3s;
    will-change: transform;
  }
  .modal__outer-close-btn {
    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
    z-index: 2;
    width: 60px;
    height: 60px;
    margin: 60px auto 0;
    font-size: 60px;
    border-radius: 100%;
    color: #dcdcdc;
    border: 1px solid #dcdcdc; /* no */
  }
  .modal__close-btn {
    position: absolute;
    z-index: 2;
    top: 20px;
    right: 20px;
    width: 48px;
    height: 48px;
    svg {
      width: 100%;
      height: 100%;
    }
  }

  .modal-fade-enter-active {
    transition: opacity .3s ease-out;
  }
  .modal-fade-leave-active {
    transition: opacity .3s ease-in;
  }
  .modal-fade-enter,
  .modal-fade-leave-to {
    opacity: 0;
  }

  .modal-fade-enter-active .modal__panel_center,
  .modal-fade-leave-active .modal__panel_center {
    transition: transform .3s;
  }
  .modal-fade-enter .modal__panel_center,
  .modal-fade-leave-to .modal__panel_center {
    transform: scale(0);
  }

  .modal-fade-enter-active .modal__panel_bottom,
  .modal-fade-leave-active .modal__panel_bottom {
    transition: transform .3s;
  }
  .modal-fade-enter .modal__panel_bottom,
  .modal-fade-leave-to .modal__panel_bottom {
    transform: translateY(100%);
  }
</style>