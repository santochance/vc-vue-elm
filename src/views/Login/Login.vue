<template>
  <div class="b-login__block">
    <div class="b-login__wrap">
      <header class="b-login__header">
        <div class="b-login__logo">
          <svg><use xlink:href="#logo"></use></svg>
        </div>
        <div class="b-login__header-title">
          <a href="javascript;"
            class="b-login__mobile-login"
          >
            <span>短信登录</span>
          </a>
        </div>
      </header>
      <div class="b-login__content">
        <form>
          <div class="b-login__form-item">
            <input class="b-login__form-control"
              v-model="phoneItem.value"
              type="tel"
              maxlength="11"
              placeholder="手机号"
              name="phone"
              v-validate="{ required: true, regex: /^1\d{10}$/ }"
            />
            <button class="b-login__get-code"
              :disabled="countButtonDisabled"
              @click.stop.prevent="onCountClick"
            >{{ this.countTimeout ? `已发送(${countValue}s)`
              : this.countButtonDirty? '重新获取' : '获取验证码' }}</button>
          </div>
          <div class="b-login__form-item">
            <input class="b-login__form-control"
              v-model="codeItem.value"
              type="tel"
              maxlength="6"
              placeholder="验证码"
              name="code"
              v-validate="{ required: true, regex: /^\w{6}$/ }"
            />
          </div>
          <div class="b-login__form-desc">
            <span>温馨提示：未注册饿了么账号的手机号，登录时将自动注册，且代表您已同意</span>
            <router-link to=""
              class="b-login__user-agreement"
            >《用户服务协议》</router-link>
          </div>
          <div class="b-login__form-submit">
            <button class="b-login__submit-btn"
              @click.stop.prevent="onLogin"
            >登录</button>
          </div>
        </form>
        <router-link to="" tag="p"
          class="b-login__about"
        >关于我们</router-link>
      </div>
    </div>

    <modal :visible="captchaShow" :closable="false"
      @close="captchaShow = false"
    >
      <div class="captcha-panel">
        <h2 class="captcha-panel__title">请填写图形验证码</h2>
        <div class="captcha-panel__content">
          <div class="captcha-panel__form-item">
            <input type="text"
              class=""
              v-model="captchaValue"
            >
            <img :src="captchaImage" alt=""
              @click.stop.prevent="onRequestCaptcha"
            >
          </div>
          <p class="captcha-panel__error">
            <span v-if="captchaError">
              <img src="./error.png" alt="">验证码错误，请重新填写
            </span>
          </p>
        </div>
        <div class="captcha-panel__btns">
          <button class="captcha-panel__btn captcha-panel__btn-cancel"
            @click.stop.prevent="captchaShow = false"
          >取消</button>
          <button class="captcha-panel__btn captcha-panel__btn-ok"
            @click.stop.prevent="onSubmitCaptcha"
          >确定</button>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import { Modal, Toast } from '@/components/common'
  import { fetchMobileCode, fetchCaptcha } from '@/service/api'

  const debug = true
  debug && console.warn('[Debug] Login debug is activating')

  export default {
    name: 'Login',
    components: {
      Modal,
    },
    props: {

    },
    data() {
      return {
        phoneItem: {
          value: '',
        },
        codeItem: {
          value: '',
        },

        countButtonDisabled: true,
        countButtonDirty: false,
        countValue: '',
        countTimeout: null,

        captchaShow: false,
        captchaError: false,
        captchaValue: '',
        captchaHash: '',
        captchaImage: '',

        validateToken: '',

        errorMsgs: {
          phone: {
            required: '请输入正确的手机号',
            regex: '请输入正确的手机号',
          },
          code: {
            required: '请输入6位短信验证码',
            regex: '请输入6位短信验证码',
          },
        }
      }
    },
    watch: {
      'phoneItem.value'(value) {
        if (value.length >= 11 && !this.countTimeout) {
          this.countButtonDisabled = false
        } else {
          this.countButtonDisabled = true
        }
      },
    },
    created() {
      debug && (window[this.$options.name] = this)
    },
    methods: {
      /* call APIs */
      fetchMobileCode() {
        const payload = {
          mobile: this.phoneItem.value,
          'captcha_hash': this.captchaHash,
          'captcha_value': this.captchaValue,
        }
        return fetchMobileCode(payload)
          .then(this.fetchMobileCodeFulfilled)
          .catch(this.fetchMobileCodeRejected)
      },
      fetchCaptcha() {
        // 调用接口
        const payload = {
          'captcha_str': this.phoneItem.value,
        }
        return fetchCaptcha(payload)
          .then(this.fetchCaptchaFulfilled)
      },
      // loginByMobile() {
      //   const payload = {
      //     mobile: this.phoneItem.value,
      //     validate_code: this.codeItem.value,
      //     validate_token: this.validateToken,
      //   }
      //   return loginByMobile(payload)
      //     .then(this.loginByMobileFulfilled)
      // },
      ...mapActions([
        'loginByMobile',
      ]),

      /* event handlers */
      onCountClick() {
        this.setCount()
        this.fetchMobileCode()
      },
      onRequestCaptcha() {
        this.fetchCaptcha()
      },
      onSubmitCaptcha() {
        this.fetchMobileCode()
      },
      onLogin() {
        return this.$validator.validate()
          .then((valid) => {
            if (valid) {
              const payload = {
                mobile: this.phoneItem.value,
                validate_code: this.codeItem.value,
                validate_token: this.validateToken,
              }
              return this.loginByMobile(payload)
                .then(this.loginByMobileFulfilled)
                .catch(this.loginByMobileRejected)
            } else {
              const error = this.errors.items[0]
              if (error) {
                const msg = this.errorMsgs[error.field] && this.errorMsgs[error.field][error.rule]
                  return Toast.open({
                    content: msg,
                    mask: false,
                  })
              }
            }
          })
      },

      fetchMobileCodeFulfilled({ validate_token }) {
        this.validateToken = validate_token
        this.captchaValue = ''
        this.captchaError = false
        this.captchaShow = false
      },
      fetchMobileCodeRejected({ name, message }) {
        // 获取失败
        if (name === "NEED_CAPTCHA") {
          return this.fetchCaptcha()
        }

        if (name === "CAPTCHA_CODE_ERROR") {
          this.captchaError = true
          return this.fetchCaptcha()
        }

        if (name === "HERMES_CLIENT_ERROR") {
          this.captchaShow = false
          // 显示反馈信息
          return Toast.open({
            content: message,
            mask: false,
          })
        }

        if (name === "INVALID_MOBILE") {
          this.captchaShow = false
          // 显示反馈信息
          return Toast.open({
            content: message,
            mask: false,
          })
        }
      },
      fetchCaptchaFulfilled({ captcha_hash, captcha_image }) {
        // 显示图形验证码
        this.captchaHash = captcha_hash
        this.captchaImage = captcha_image
        this.captchaShow = true
      },
      loginByMobileFulfilled() {
        this.redirect()
      },
      loginByMobileRejected({ name, message }) {
        this.code = ''
        let content = message
        if (name === 'INVALID_VALIDATE_TOKEN') {
          content += '，请尝试重新获取验证码'
        }
        return Toast.open({
          content,
          mask: false,
          duration: 4,
        })
      },

      redirect() {
        this.$router.replace(this.$route.query.redirect || '/')
      },

      setCount() {
        this.countButtonDirty = true
        this.countValue = 30
        this.countButtonDisabled = true
        const step = (() => {
          if (this.countValue--) {
            this.countTimeout = setTimeout(step, 1000)
          } else {
            this.cancelCount()
          }
        })
        step()
      },
      cancelCount() {
        clearTimeout(this.countTimeout)
        this.countValue = ''
        this.countButtonDisabled = false
        this.countTimeout = null
      },
    }
  }
</script>

<style lang="scss" scoped>
  .b-login {@at-root{

    .b-login__block {
      box-sizing: border-box;
      flex: 1 0 auto;
      padding-top: 80px;
      min-height: 100%;
      background-color: #fff;
    }
    .b-login__wrap {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 600px;
      margin: auto;
    }
    .b-login__header {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .b-login__logo {
      width: 280px;
      height: 112px;
      svg {
        width: 100%;
        width: 100%;
      }
    }
    .b-login__header-title {
      display: flex;
      justify-content: center;
      margin-top: 80px;
    }
    .b-login__mobile-login {
      width: 116px;
      padding-bottom: 8px;
      margin: 0 20px;
      font-size: 28px;
      font-weight: 700;
      cursor: pointer;

      color: #2395ff;
      border-bottom: 4px solid #2395ff;
    }
    .b-login__content {

    }
    .b-login__form-item {
      box-sizing: border-box;
      position: relative;
      margin-top: 32px;
      height: 96px;
      font-size: 28px;
      background-color: #fff;
    }
    .b-login__form-control {
      padding: 2px 2px 2px 20px;
      width: 100%;
      height: 100%;
      border-radius: 8px;
      border: 2px solid #ddd;
      color: #333;
      -webkit-appearance: none;
      &:focus {
        border-color: #0089dc;
      }
    }
    .b-login__get-code {
      position: absolute;
      z-index: 5;
      top: 50%;
      right: 20px;
      transform: translateY(-50%);

      padding: 0;
      text-align: center;
      font-size: 28px;
      border-radius: 12px;
      color: #2385ff;
      background-color: transparent;

      &[disabled] {
        color: #ccc;
      }
    }
    .b-login__form-desc {
      margin-top: 24px;
      font-size: 28px;
      line-height: 40px;
      color: #999;
    }
    .b-login__user-agreement {
      color: #2395ff;
    }
    .b-login__submit-btn {
      display: block;
      width: 100%;
      height: 82px;
      margin-top: 60px;
      text-align: center;
      font-size: 32px;
      line-height: 82px;
      border-radius: 8px;
      background-color: #4cd96f;
      color: #fff;
      cursor: pointer;
    }
    .b-login__about {
      text-align: center;
      margin-top: 40px;
      font-size: 24px;
      color: #999;
    }

  }}

  .captcha-panel {@at-root{

    .captcha-panel {
      overflow: hidden;
      width: 580px;
      border-radius: 10px;
      background: rgba(255, 255, 255, .9);
    }
    .captcha-panel__title {
      text-align: center;
      font-size: 40px;
      font-weight: 700;
      margin: 44px 0;
      color: #000;
    }
    .captcha-panel__content {
    }
    .captcha-panel__form-item {
      margin: 0 28px;
      display: flex;
      background-color: #fff;
      input {
        flex: 1;
        width: 100%;
        height: 86px;
        padding: 0 24px;
        font-size: 36px;
      }
      img {
        width: 200px;
        height: 68px;
        margin: 9px;
      }
    }
    .captcha-panel__error {
      display: flex;
      margin: 20px 30px;
      font-size: 26px;
      height: 26px;
      color: #ff6000;
      img {
        vertical-align: middle;
        width: 30px;
        height: 30px;
        margin-right: 6px;
      }
    }
    .captcha-panel__btns {
      display: flex;
      justify-content: space-between;
      border-top: 1px solid #ddd; /*no*/
    }
    .captcha-panel__btn {
      flex: 1;
      font-size: 34px;
      height: 88px;
      border: 1px solid #ddd; /*no*/
      background: none;
      color: #666;
      &:active {
        opacity: .7;
      }
    }
    .captcha-panel__btn-cancel {

    }
    .captcha-panel__btn-ok {
      border: none;
      font-weight: 700;
      color: #3190e8;
    }

  }}
</style>