<template>
  <div class="infinite-scroll"
    ref="infinite"
  >
    <div class="infinite-scroll__trigger">
      <div class="infinite-scroll__loading" v-show="!complete">
        <span class="infinite-scroll__loading-default" v-show="!loaded">
          <div class="sk-fading-circle">
            <div class="sk-circle1 sk-circle"></div>
            <div class="sk-circle2 sk-circle"></div>
            <div class="sk-circle3 sk-circle"></div>
            <div class="sk-circle4 sk-circle"></div>
            <div class="sk-circle5 sk-circle"></div>
            <div class="sk-circle6 sk-circle"></div>
            <div class="sk-circle7 sk-circle"></div>
            <div class="sk-circle8 sk-circle"></div>
            <div class="sk-circle9 sk-circle"></div>
            <div class="sk-circle10 sk-circle"></div>
            <div class="sk-circle11 sk-circle"></div>
            <div class="sk-circle12 sk-circle"></div>
          </div>
        </span>
      </div>
      <div class="infinite-scroll__completed" v-if="complete">没有更多了哦~</div>
    </div>
    
    <!-- 
    <div class="console">
      <p>elBottom: {{ elBottom }}</p>
      <p>vpBottom: {{ vpBottom }}</p>
      <p>touched: {{ touched }}</p>
    </div>
     -->
  </div>
</template>

<script>
  import { Toast } from '@/components/common'

  export default {
    name: 'InfiniteScroll',
    components: {
      
    },
    props: {
      handler: {
        type: Function,
      },
    },
    data() {
      return {
        loaded: true,
        complete: false,

        // debug
        elBottom: null,
        vpBottom: null,
        touched: false,
      }
    },
    created() {
      window.addEventListener('scroll', this.scrollHandler)
      window.addEventListener('resize', this.scrollHandler)
      window.addEventListener('resize', () => {
        Toast.open({
          content: `resize to height ${window.innerHeight}`,
        })
      })
    },
    activated() {

    },
    deactivated() {

    },
    destroyed() {
      window.removeEventListener('scroll', this.scrollHandler)
      window.addEventListener('resize', this.scrollHandler)

    },
    methods: {
      scrollHandler() {
        // console.log('debug - InfiniteScroll scrolling...')
        if (!this.loaded) return
        if (this.complete) return
        
        // console.log('debug - InfiniteScroll check')
        const el = this.$refs.infinite;
        const elRect = el.getBoundingClientRect();
        const elBottom = Math.round(elRect.bottom);
        const vpBottom = window.innerHeight;

        const shouldHandle = elBottom - vpBottom <= 0;

        this.elBottom = elBottom
        this.vpBottom = vpBottom
        this.touched = shouldHandle

        if (shouldHandle && this.handler) {
          console.log('debug - InfiniteScroll load')
          this.loaded = false
          this.handler({
            loaded: () => {
              this.loaded = true
            },
            complete: () => {
              this.loaded = true
              this.complete = true
            },
            vpBottom,
            elBottom,
          })
        }
      },
      reset() {
        this.loaded = true
        this.complete = false
        this.scrollHandler()
      }
    },
  }
</script>

<style lang="scss" scoped>
  .infinite-scroll__loading,
  .infinite-scroll__completed {
    position: relative;
    text-align: center;
    font-size: 28px;
    padding: .5em 0;
    background-color: #fff;
    line-height: 2;
    height: 2em;
  }
  .infinite-scroll__loading-default {
    // position: absolute;
    // left: 0;
    // right: 0;
    // top: 0;
    // bottom: 0;
    // margin: auto;
    // animation: spin 1s linear infinite ;
  }

  // @keyframes spin {
  //   0% {
  //     transform: rotate(0);
  //   }
  //   100% {
  //     transform: rotate(360deg);
  //   }
  // }

  .console {
    position: fixed;
    z-index: 99999;
    top: 0;
    left: 0;
    padding: 20px;
    background-color: rgba(0, 0, 0, .6);
    color: #fff;
  }
</style>

<style>
  .sk-fading-circle {
    /*margin: 100px auto;*/
    margin: 0 auto;
    width: 2em;
    height: 2em;
    position: relative;
  }

  .sk-fading-circle .sk-circle {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }

  .sk-fading-circle .sk-circle:before {
    content: '';
    display: block;
    margin: 0 auto;
    width: 15%;
    height: 15%;
    background-color: #333;
    border-radius: 100%;
    -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;
            animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;
  }
  .sk-fading-circle .sk-circle2 {
    -webkit-transform: rotate(30deg);
        -ms-transform: rotate(30deg);
            transform: rotate(30deg);
  }
  .sk-fading-circle .sk-circle3 {
    -webkit-transform: rotate(60deg);
        -ms-transform: rotate(60deg);
            transform: rotate(60deg);
  }
  .sk-fading-circle .sk-circle4 {
    -webkit-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
            transform: rotate(90deg);
  }
  .sk-fading-circle .sk-circle5 {
    -webkit-transform: rotate(120deg);
        -ms-transform: rotate(120deg);
            transform: rotate(120deg);
  }
  .sk-fading-circle .sk-circle6 {
    -webkit-transform: rotate(150deg);
        -ms-transform: rotate(150deg);
            transform: rotate(150deg);
  }
  .sk-fading-circle .sk-circle7 {
    -webkit-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
            transform: rotate(180deg);
  }
  .sk-fading-circle .sk-circle8 {
    -webkit-transform: rotate(210deg);
        -ms-transform: rotate(210deg);
            transform: rotate(210deg);
  }
  .sk-fading-circle .sk-circle9 {
    -webkit-transform: rotate(240deg);
        -ms-transform: rotate(240deg);
            transform: rotate(240deg);
  }
  .sk-fading-circle .sk-circle10 {
    -webkit-transform: rotate(270deg);
        -ms-transform: rotate(270deg);
            transform: rotate(270deg);
  }
  .sk-fading-circle .sk-circle11 {
    -webkit-transform: rotate(300deg);
        -ms-transform: rotate(300deg);
            transform: rotate(300deg); 
  }
  .sk-fading-circle .sk-circle12 {
    -webkit-transform: rotate(330deg);
        -ms-transform: rotate(330deg);
            transform: rotate(330deg); 
  }
  .sk-fading-circle .sk-circle2:before {
    -webkit-animation-delay: -1.1s;
            animation-delay: -1.1s; 
  }
  .sk-fading-circle .sk-circle3:before {
    -webkit-animation-delay: -1s;
            animation-delay: -1s; 
  }
  .sk-fading-circle .sk-circle4:before {
    -webkit-animation-delay: -0.9s;
            animation-delay: -0.9s; 
  }
  .sk-fading-circle .sk-circle5:before {
    -webkit-animation-delay: -0.8s;
            animation-delay: -0.8s; 
  }
  .sk-fading-circle .sk-circle6:before {
    -webkit-animation-delay: -0.7s;
            animation-delay: -0.7s; 
  }
  .sk-fading-circle .sk-circle7:before {
    -webkit-animation-delay: -0.6s;
            animation-delay: -0.6s; 
  }
  .sk-fading-circle .sk-circle8:before {
    -webkit-animation-delay: -0.5s;
            animation-delay: -0.5s; 
  }
  .sk-fading-circle .sk-circle9:before {
    -webkit-animation-delay: -0.4s;
            animation-delay: -0.4s;
  }
  .sk-fading-circle .sk-circle10:before {
    -webkit-animation-delay: -0.3s;
            animation-delay: -0.3s;
  }
  .sk-fading-circle .sk-circle11:before {
    -webkit-animation-delay: -0.2s;
            animation-delay: -0.2s;
  }
  .sk-fading-circle .sk-circle12:before {
    -webkit-animation-delay: -0.1s;
            animation-delay: -0.1s;
  }

  @-webkit-keyframes sk-circleFadeDelay {
    0%, 39%, 100% { opacity: 0; }
    40% { opacity: 1; }
  }

  @keyframes sk-circleFadeDelay {
    0%, 39%, 100% { opacity: 0; }
    40% { opacity: 1; } 
  }
</style>