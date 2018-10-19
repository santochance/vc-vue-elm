<template>
  <div class="username__block">
    <div class="username__item">
      <input type="text"
        class="username__input"
        v-model="username"
        placeholder="用户名">
    </div>
    <div class="username__submit-wrap">
      <div class="username__submit-desc">用户名只能修改一次（5-24个字）</div>
      <button class="username__submit-btn"
        :disabled="!username"
        @click="username && !processing && onSubmit()"
      >确认修改<span v-if="processing">加载中...</span></button>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'ProfileInfoUsername',
    components: {
      
    },
    props: {
      
    },
    data() {
      return {
        username: '',
        processing: false,
      }
    },
    methods: {
      onSubmit() {
        this.$emit('submit')
        this.processing = true
        setTimeout(() => {
          this.processing = false
        }, 3000)
      },
    },
  }
</script>

<style lang="scss" scoped>
  .username {@at-root{
    .username__block {

    }
    .username__item {
      padding-top: 30px;
      input {
        font-size: 30px;
        width: 100%;
        height: 88px;
        padding: 0 30px;
        background-color: #fff;
      }
    }
    .username__submit-wrap {
      padding: 0 30px;
    }
    .username__submit-desc {
      margin: 20px 0;
      font-size: 24px;
      color: #a9a9a9;
    }
    .username__submit-btn {
      display: block;
      text-align: center;
      width: 100%;
      height: 96px;
      font-size: 32px;
      font-weight: 700;
      background-color: #00d762;
      color: #fff;
      border-radius: 12px;
      &[disabled] {
        background-color: #ccc;
      }
    }
  }}
</style>