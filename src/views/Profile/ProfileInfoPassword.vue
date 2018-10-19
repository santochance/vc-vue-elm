<template>
  <div class="password__block">
    <div class="password__wrap">
      <div class="password__item">
        <input type="password" v-model="oldPassword.value"
          placeholder="旧密码"
          @blur="validate({ setFeedback: true })"
          @input="validate()"
        >
        <span v-if="oldPassword.feedback"
          class="password__feedback"
        >{{ oldPassword.feedback }}</span>
      </div>
      <div class="password__item">
        <input type="password" v-model="newPassword.value"
          placeholder="新密码"
          @blur="validate({ setFeedback: true })"
          @input="validate()"
        >
        <span v-if="newPassword.feedback"
          class="password__feedback"
        >{{ newPassword.feedback }}</span>
      </div>
      <div class="password__item">
        <input type="password" v-model="repeatedPassword.value"
          placeholder="确认密码"
          @blur="validate({ setFeedback: true })"
          @input="validate({ setFeedback: true })"
        >
        <span v-if="repeatedPassword.feedback"
          class="password__feedback"
        >{{ repeatedPassword.feedback }}</span>
      </div>
    </div>
    <div class="password__submit-wrap">
      <button class="password__submit-btn"
        :disabled="submitDisabled"
      >确认并保存</button>
    </div>
  </div>
</template>

<script>
  import FormItem from '@/util/FormItem'
  
  export default {
    name: 'ProfileInfoPassword',
    components: {
      
    },
    props: {
      
    },
    data() {
      return {
        oldPassword: new FormItem({
          rules: [{
            validator: (value) => {
              return !value || value.length >= 6 && value.length <= 20
            },
            message: '密码长度为 6 - 20位',
          }],
        }),

        newPassword: new FormItem({
          rules: [{
            validator: (value) => {
              return !value || value.length >= 6 && value.length <= 20
            },
            message: '密码长度为 6 - 20位',
          }]
        }),

        repeatedPassword: new FormItem({
          rules: [{
            validator: (value) => {
              const targetValue = this.newPassword.value
              return !value || !targetValue || (value === targetValue)
            },
            message: '两次密码输入不一致',
          }]
        }),
      }
    },
    computed: {
      submitDisabled() {
        return !!(
          !this.oldPassword.value ||
          !this.newPassword.value ||
          !this.repeatedPassword.value ||
          !this.oldPassword.valid ||
          !this.newPassword.valid ||
          !this.repeatedPassword.valid
        )
      },
    },
    methods: {
      validate(...args) {
        this.oldPassword.validate(...args)
        this.newPassword.validate(...args)
        this.repeatedPassword.validate(...args)
      },
    },
  }
</script>

<style lang="scss" scoped>
  .password {@at-root{
    .password__block {}
    .password__wrap {
      background-color: #fff;
      padding: 20px 20px 0;
    }
    .password__item {
      margin-bottom: 20px;
      input {
        width: 100%;
        font-size: 30px;
        padding: 16px 0;
        border: 1px solid #ddd; /*no*/
        background-color: #fff;
        border-radius: 2px;
      }
    }
    .password__feedback {
      display: block;
      margin-top: 10px;
      font-size: 26px;
      color: #ea3106;
    }
    .password__submit-wrap {
      margin: 30px 18px;
    }
    .password__submit-btn {
      display: block;
      text-align: center;
      width: 100%;
      padding: 22px 0;
      font-size: 32px;
      font-weight: 700;
      background-color: #3199e8;
      color: #fff;
      border-radius: 12px;
      &[disabled] {
        background-color: #ccc;
      }
    }
  }}

</style>