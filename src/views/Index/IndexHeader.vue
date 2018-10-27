<script>

  const debug = false

  export default {
    name: 'IndexHeader',
    components: {

    },
    props: {
      locationName: {
        type: String,
      },
      detecting: {
        type: Boolean,
        default: false,
      },
      locating: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        detectingText: '正在识别地址...',
        locatingText: '正在定位...',
        unknownText: '未知地址'
      }
    },
    computed: {
      addressText() {
        return this.locating ? this.locatingText
          : this.detecting ? this.detectingText
            : this.locationName || this.unknownText
      }
    },
    created() {
      debug && (window[this.$options.name] = this)

    },
    methods: {
      /* emit events */
      onClickAddress() {
        this.$emit('click:address')
      }
    },
  }
</script>

<template>
  <header class="b-header b-header__box">
    <div class="b-header__content">
      <div class="b-header__address"
        @click="onClickAddress"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 31"
          class="b-header__location-icon">
          <path fill="#FFF" fill-rule="evenodd" d="M22.116 22.601c-2.329 2.804-7.669 7.827-7.669 7.827-.799.762-2.094.763-2.897-.008 0 0-5.26-4.97-7.643-7.796C1.524 19.8 0 16.89 0 13.194 0 5.908 5.82 0 13 0s13 5.907 13 13.195c0 3.682-1.554 6.602-3.884 9.406zM18 13a5 5 0 1 0-10 0 5 5 0 0 0 10 0z"></path>
        </svg>
        <span class="b-header__address-text ellipsis">
          {{ addressText }}
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 8"
          class="b-header__dropdown-icon">
          <path fill="#FFF" fill-rule="evenodd" d="M5.588 6.588c.78.78 2.04.784 2.824 0l5.176-5.176c.78-.78.517-1.412-.582-1.412H.994C-.107 0-.372.628.412 1.412l5.176 5.176z"></path>
        </svg>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
  .b-header {}

    .b-header__box {
      padding: 20px 28px 0 28px;
      background-image: linear-gradient(90deg,#0af,#0085ff);
      color: #fff;
    }
    .b-header__content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 70px;
    }

    .b-header__address {
      width: 60%;
      font-weight: 700;
      display: flex;
      align-items: center;
    }
    .b-header__address-text {
      max-width: 80%;
      margin: 0 10px;
      font-size: 34px;
    }
    .b-header__location-icon {
      width: 26px;
      height: 31px;
      fill: #fff;
    }
    .b-header__dropdown-icon {
      width: 14px;
      height: 7px;
      fill: #fff;
    }

</style>