<template>
  <page title="换绑手机"
    class="b-moile__block">
    <div class="b-mobile__form-group">
      <div class="b-mobile__form-item">
        <label class="b-mobile__control-label">手机号</label>
        <input type="text"
          class="b-mobile__input" 
          :value="mobile | mobileMask"
          readonly
          maxlength="11"
        >
        <button class="b-mobile__form-button b-mobile__btn-code"
        >获取验证码</button>
      </div>
      <div class="b-mobile__form-item">
        <label class="b-mobile__control-label">验证码</label>
        <input type="text"
          class="b-mobile__input" 
          v-model="code"
          placeholder="请输入验证码"
        >
      </div>
    </div>
    <div class="b-mobile__submit-wrap">
      <button class="b-mobile__form-button b-modile__btn-sumbit"
      >验证后绑定新手机</button>
    </div>
  </page>
</template>

<script>
  import { mapState } from 'vuex'
  import Page from '@/components/Page'
  
  export default {
    name: 'ProfileRebindMobile',
    components: {
      Page,
    },
    props: {
      
    },
    data() {
      return {
        code: '',
      }
    },
    computed: {
      ...mapState({
        mobile(state) {
          return state.user && state.user.mobile || ''
        }
      }),
    },
  }
</script>

<style lang="scss" scoped>
  .b-mobile {@at-root{

    .b-mobile__form-group {
      margin-top: 20px;
      padding-left: 30px;
      background-color: #fff;
    }
    .b-mobile__form-item {
      display: flex;
      align-items: center;
      padding-right: 30px;
      font-size: 30px;
      line-height: 88px;
      border-bottom: 1px solid #ddd; /*no*/
    }
    .b-mobile__control-label {
      width: 120px;
      font-size: 32px;
      white-space: nowrap;
    }
    .b-mobile__input {
      flex-grow: 1;
    }
    .b-mobile__form-button {
      font-size: 30px;
      white-space: nowrap;
      border: 2px solid transparent;
      border-radius: 4px;
    }
    .b-mobile__btn-code {
      height: 56px;
      padding: 0 25px;
      color: #fff;
      background-color: #0097ff;
      border-color: #0097ff;
    }
    .b-modile__btn-sumbit {
      box-sizing: border-box;
      width: 100%;
      height: 84px;
      font-weight: 700;

      color: #fff;
      background-color: #4cd964;
      border-color: #4cd964;
      &[disabled] {
        color: rgba(0, 0, 0, .38);
        background-color: rgba(0,0,0,.06);
        border-color: transparent;
      }
    }
    .b-mobile__submit-wrap {
      padding: 33px 30px 26px 30px;
    }
  }}
</style>