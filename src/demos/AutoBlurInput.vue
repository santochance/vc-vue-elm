<script>

  const debug = false

  export default {
    name: 'AutoBlurInput',
    components: {

    },
    directives: {
      'auto-blur': {

      },
    },
    props: {

    },
    data() {
      return {

      }
    },
    computed: {

    },
    created() {
      debug && (window[this.$options.name] = this)
    },
    mounted() {
      const container = this.$refs.container
      container.addEventListener('focusin', () => {
        console.log('focusin')
      })

      const input = this.$refs.input
      input.addEventListener('focus', () => {
        console.log('focus')
      })
      window.addEventListener('resize', () => {
        console.log('resize')
        if (document.activeElement.tagName.search(/input|textarea/i) !== -1) {
          const screenHeight = window.screen.availHeight * window.window.devicePixelRatio
          const vpHeight = window.innerHeight
          // 以红米Note 4x为例，屏幕总高度 640 * 3 = 1920, 状态栏高 60, 地址栏高 168，百度输入法软键盘高度 692 ~ 948
          if (vpHeight < screenHeight - 600) {
            // keyboard shown
            console.log('keyboard shown')
          } else {
            // keyboard hidden
            console.log('keyboard hidden')
          }
        }
      })
    },
    methods: {

    },
  }
</script>

<template>
  <div class="b-namespace b-namespace__box" ref="container">
    <span>AutoBlurInput</span>
    <div>
      <input type="text" ref="input">
    </div>
  </div>
</template>


<style lang="scss" scoped>
  .b-namespace {}

    .b-namespace__box {
      padding: 40px;
    }

</style>