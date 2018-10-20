<template>
  <div class="info__block">
    <div class="info__group">
      <div class="info__item info__avatar">
        <b>头像</b>
        <span class="info__item-right info__avatar-right">
          <input type="file" accept="image/jpeg, image/jpg, image/png"
            class="info__avatar-file"
          >
          <span class="info__avatar-value"
            :style="{ backgroundPosition: `0 ${$toRem(120 * random(0, 6))}` }"
          ></span>
          <span>
            <svg><use xlink:href="#arrow"></use></svg>
          </span>
        </span>
      </div>
      <router-link to="/profile/info/username"
        class="info__item">
        <b>用户名</b>
        <span>
          <span>{{ user.username }}</span>
          <span class="info__item-right">
            <svg ><use xlink:href="#arrow"></use></svg>
          </span>
        </span>
      </router-link>
    </div>

    <div class="info__group-title">账号绑定</div>
    <div class="info__group">
      <div class="info__item">
        <span>
          <i class="info__phone-icon">
            <svg><use xlink:href="#info-mobile"></use></svg>
          </i>
          <b>手机</b>
        </span>
        <span class="info__item-right">
          <span>{{ user.mobile }}</span>
          <span>
            <svg><use xlink:href="#arrow"></use></svg>
          </span>
        </span>
      </div>
    </div>

    <div class="info__group-title">安全设置</div>
    <div class="info__group">
      <router-link to="/profile/info/password"
        class="info__item">
        <span>登录密码</span>
        <span class="info__item-right">
          <span class="info__password-value">未设置</span>
          <span>
            <svg><use xlink:href="#arrow"></use></svg>
          </span>
        </span>
      </router-link>
    </div>

    <div class="info__group">
      <button class="info__btn-logout">退出登录</button>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import { fetchExtraProfile } from '@/service/api'
  
  export default {
    name: 'ProfileInfoMain',
    components: {

    },
    props: {
      
    },
    data() {
      return {
        extraProfile: null,
      }
    },
    created() {
      this.loadData()
    },
    activated() {
      this.loadData()
    },
    computed: {
      ...mapState([
        'user',
      ]),
    },
    methods: {
      loadData() {
        this.fetchCurrentUser()
          .then(({ id }) => {
            this.fetchUser({ user_id: id })

            fetchExtraProfile(id)
              .then((extraProfile) => {
                this.extraProfile = extraProfile
              })
          })
      },
      ...mapActions([
        'fetchCurrentUser',
        'fetchUser',
      ]),
      random(min, max) {
        return Math.floor(min + Math.random() * (max - min))
      },
    },
  }
</script>

<style lang="scss" scoped>
  .info {@at-root{
    .info__block {
    }
    .info__group {
      background-color: #fff;
      width: 100%;
      font-size: 32px;
    }
    .info__group-title {
      margin: 32px 0 14px 28px;
      font-size: 24px;
      color: #999;
    }
    .info__item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 28px;
      border-bottom: 1px solid #ddd; /*no*/
      &:last-child {
        border-bottom: none;
      }
    }
    .info__item-right {
      svg {
        fill: #ddd;
        width: 36px;
        height: 26px;

      }
    }
    .info__avatar {
      position: relative;
    }
    .info__avatar-right {
      display: flex;
      align-items: center;
    }
    .info__avatar-value {
      display: inline-block;
      width: 120px;
      height: 120px;
      background-color: #ddd;
      background-image: url('/sprite-avatar.png');
      background-size: 120px;
      border-radius: 50%;
    }
    .info__avatar-file {
      display: block;
      position: absolute;
      opacity: 0;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .info__phone-icon {
      padding: 4px;
      margin-right: 10px;
      vertical-align: middle;
      svg {
        width: 32px;
        height: 32px;
      }
    }
    .info__password-value {
      color: #0097ff;
    }

    .info__btn-logout {
      display: block;
      width: 100%;
      padding: 28px 0;
      margin: 40px 0;
      text-align: center;
      font-size: 32px;
      font-weight: 700;
      color: #ff5339;
      background-color: #fff;
      border-radius: 6px;
    }
  }}
</style>