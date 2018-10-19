<template>
  <div>
    <div class="inspect">
      <p>dpr: {{ dpr }}</p>
      <p>window.innerHeight: {{ innerHeight }}</p>
      <p>window.outerHeight: {{ outerHeight }}</p>
      <p>window.scrollY: {{ scrollY }}</p>
      <p>docEl.scrollHeight: {{ docElScrollHeight }}</p>
      <p>viewHeight: {{ viewHeight }}</p>
      <p>docEl.clientHeight: {{ clientHeight }}</p>
    </div>
    <div class="fixed-view" ref="view">
     <div class="content"></div>
    </div>
  </div>
</template>

<script>
  import { Toast } from '@/components/common'

  export default {
    name: 'InpectPage',
    components: {

    },
    props: {

    },
    data() {
      return {
        scrollY: window.scrollY,
        innerHeight: window.innerHeight,
        outerHeight: window.outerHeight,
        docElScrollHeight: document.documentElement.scrollHeight,
        dpr: window.devicePixelRatio,
        viewHeight: '???',
        clientHeight: document.documentElement.clientHeight,
      }
    },
    created() {
      window.addEventListener('resize', () => {
        Toast.open({
          content: `trigger resize, window.innerheight: ${window.innerHeight}`
        })
        this.innerHeight = window.innerHeight
        this.outerHeight = window.outerHeight
        this.scrollY = window.scrollY
        this.docElScrollHeight = document.documentElement.scrollHeight
      })
      window.addEventListener('scroll', () => {
        console.log('debug - scroll')
        this.scrollY = window.scrollY
      })
    },
    mounted() {
      console.log('view:', this.$refs.view)
      const view = this.$refs.view
      view.scrollTop = view.scrollHeight
      requestAnimationFrame(() => {
        console.log(this.viewHeight = view.scrollHeight - view.scrollTop)
      })
      this.$nextTick(() => {
        window.scrollTo(0, 9999)
      })
      setTimeout(() => {
        window.scrollTo(0, 9999)
      }, 2000)
    },
    computed: {
      // innerHeight() {
      //   return window.innerHeight
      // },
      // outerHeight() {
      //   return window.outerHeight
      // },
      // scrollY() {
      //   return window.scrollY
      // }
    }
  }
</script>

<style lang="scss" scoped>
  .inspect {
    position: fixed;
    z-index: 99999;
    top: 20px;
    left: 20px;
    background-color: #fff;
  }
  .fixed-view {
    // position: fixed;
    // overflow: auto;
    z-index: 9999;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    // background-color: rgba(0, 0, 0, 1);
  }
  .content {
    height: 2000px;
    background-image: linear-gradient(0deg, black, white);
  }
</style>