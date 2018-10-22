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
              type="tel"
              maxlength="11"
              placeholder="手机号" 
            />
            <button class="b-login__get-code">获取验证码</button>
          </div>
          <div class="b-login__form-item">
            <input class="b-login__form-control"
              type="tel"
              maxlength="8"
              placeholder="验证码" 
            />
          </div>
          <div class="b-login__form-desc">
            <span>温馨提示：未注册饿了么账号的手机号，登录时将自动注册，且代表您已同意</span>
            <router-link to=""
              class="b-login__user-agreement"
            >《用户服务协议》</router-link>
          </div>
          <div class="b-login__form-submit">
            <button class="b-login__submit-btn">登录</button>
          </div>
        </form>
        <router-link to="" tag="p"
          class="b-login__about"
        >关于我们</router-link>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Login',
    components: {
      
    },
    props: {
      
    },
    data() {
      return {
        
      }
    },
  }
</script>

<style lang="scss" scoped>
  .b-login {@at-root{
    .b-login__block {
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
      top: 50%;
      right: 20px;
      transform: translateY(-50%);

      padding: 0;
      text-align: center;
      font-size: 28px;
      border-radius: 12px;
      color: #2385ff;
      background-color: transparent;
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
      margin-top: 20px;
      font-size: 24px;
      color: #999;
    }
  }}
</style>