<template>
  <page title="我的" :back-btn="false"
    class="profile__block">
    <template v-if="user">
      <router-link to="/profile/info"
        class="profile__user">
        <div class="profile__avatar"
          :style="{ backgroundPosition: `0 ${$toRem(120 * random(0, 6))}` }"
        ></div>
        <div class="profile__user-info">
          <p class="profile__user-name ellipsis"
          >{{ user.username }}</p>
          <p class="profile__user-phone ellipsis">
            <svg><use xlink:href="#mobile"></use></svg>
            <span>{{ user.mobile | mobileMask }}</span>
          </p>
        </div>
        <div class="profile__user-right">
          <svg><use xlink:href="#item-arrow-right"></use></svg>
        </div>
      </router-link>
      <div class="profile__item-col-group profile__assets">
        <router-link to=""
          class="profile__item-col profile__wallet">
          <div class="profile__item-col-value">
            <span>{{ user.balance | toFixed(2) }}</span>
            <span class="profile__item-col-unit">元</span>
          </div>
          <span class="profile__item-col-text">钱包</span>
        </router-link>
        <router-link to=""
          class="profile__item-col profile__hongbao">
          <div class="profile__item-col-value">
            <span>{{ user.gift_amount }}</span>
            <span class="profile__item-col-unit">个</span>
          </div>
          <span class="profile__item-col-text">红包</span>
        </router-link>
        <router-link to=""
          class="profile__item-col profile__gold">
          <div class="profile__item-col-value">
            <span>{{ user.point }}</span>
            <span class="profile__item-col-unit">个</span>
          </div>
          <span class="profile__item-col-text">金币</span>
        </router-link>

      </div>
    </template>

    <template v-else>
      <router-link :to="{ path: '/login', query: { redirect: '/profile' } }"
        class="profile__user">
        <div class="profile__avatar"
          :style="{ backgroundPosition: `0 ${$toRem(120 * random(0, 6))}` }"
        ></div>
        <div class="profile__user-info">
          <p class="profile__user-name ellipsis"
          >登录/注册</p>
          <p class="profile__user-phone ellipsis">
            <svg><use xlink:href="#mobile"></use></svg>
            <span>登录后享受更多特权</span>
          </p>
        </div>
        <div class="profile__user-right">
          <svg><use xlink:href="#item-arrow-right"></use></svg>
        </div>
      </router-link>
      <div class="profile__item-col-group profile__assets">
        <router-link :to="{ path: '/login', query: { redirect: '/profile' } }"
          class="profile__item-col profile__wallet">
          <div class="profile__item-col-value">
            <svg fill="#0098fb"><use xlink:href="#profile-balance"></use></svg>
          </div>
          <span class="profile__item-col-text">钱包</span>
        </router-link>
        <router-link :to="{ path: '/login', query: { redirect: '/profile' } }"
          class="profile__item-col profile__hongbao">
          <div class="profile__item-col-value">
            <svg fill="#ff5f3e"><use xlink:href="#luckybag"></use></svg>
          </div>
          <span class="profile__item-col-text">红包</span>
        </router-link>
        <router-link :to="{ path: '/login', query: { redirect: '/profile' } }"
          class="profile__item-col profile__gold">
          <div class="profile__item-col-value">
            <svg fill="#6ac20b"><use xlink:href="#profile-coins"></use></svg>
          </div>
          <span class="profile__item-col-text">金币</span>
        </router-link>
      </div>
    </template>

    <template>
      <section class="profile__item-group">
        <router-link :to="user ? '/profile/address'
          : { path: '/login', query: { redirect: '/profile/address' } }"
          class="profile__item"
        >
          <div class="profile__item-left">
            <svg><use xlink:href="#address"></use></svg>
          </div>
          <div class="profile__item-body">
            <span>我的地址</span>
            <div class="profile__item-right">
              <svg><use xlink:href="#item-arrow-right"></use></svg>
            </div>
          </div>
        </router-link>
      </section>
      <section class="profile__item-group">
        <router-link to=""
          class="profile__item"
          disabled
        >
          <div class="profile__item-left">
            <svg><use xlink:href="#point"></use></svg>
          </div>
          <div class="profile__item-body">
            <span>金币商城</span>
            <div class="profile__item-right">
              <svg><use xlink:href="#item-arrow-right"></use></svg>
            </div>
          </div>
        </router-link>
        <router-link to=""
          class="profile__item"
          disabled
        >
          <div class="profile__item-left">
            <svg><use xlink:href="#commend"></use></svg>
          </div>
          <div class="profile__item-body">
            <span>分享拿10元现金</span>
            <div class="profile__item-right">
              <svg><use xlink:href="#item-arrow-right"></use></svg>
            </div>
          </div>
        </router-link>
      </section>
      <section class="profile__item-group">
        <router-link to=""
          class="profile__item"
          disabled
        >
          <div class="profile__item-left">
            <svg><use xlink:href="#service"></use></svg>
          </div>
          <div class="profile__item-body">
            <span>我的客服</span>
            <div class="profile__item-right">
              <svg><use xlink:href="#item-arrow-right"></use></svg>
            </div>
          </div>
        </router-link>
        <router-link to=""
          class="profile__item"
          disabled
        >
          <div class="profile__item-left profile__download-icon">
            <svg><use xlink:href="#download"></use></svg>
          </div>
          <div class="profile__item-body">
            <span>下载饿了么APP</span>
            <div class="profile__item-right">
              <svg><use xlink:href="#item-arrow-right"></use></svg>
            </div>
          </div>
        </router-link>
      </section>
    </template>
  </page>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  import Page from '@/components/Page'

  export default {
    name: 'Profile',
    components: {
      Page,
    },
    props: {

    },
    data() {
      return {

      }
    },
    computed: {
      ...mapState([
        'user',
      ]),
    },
    created() {
      this.loadData()
    },
    activated() {
      this.loadData()
    },
    filters: {
      toFixed(value, num = 2) {
        return Number(value).toFixed(num)
      }
    },
    methods: {
      loadData() {
        return this.fetchCurrentUser()
          // .then((id) => {
          //   if (id) {
          //     this.fetchUser({ user_id: id })
          //   }
          // })
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
  .profile {@at-root{
    .profile__block {}
    .profile__user {
      display: flex;
      align-items: center;
      padding: 50px 30px;
      background-image: linear-gradient(90deg,#0af,#0085ff);
      color: #fff;
    }
    .profile__avatar {
      flex-shrink: 0;
      width: 120px;
      height: 120px;
      border-radius: 50%;
      background-image: url('../../assets/sprite-avatar.png');
      background-size: 120px;
    }
    .profile__user-info {
      overflow: hidden;
      flex-grow: 1;
      margin-left: 36px
    }
    .profile__user-name {
      font-size: 42px;
      font-weight: 700;
      margin-bottom: 16px;
    }
    .profile__user-phone {
      display: flex;
      align-items: center;
      font-size: 24px;
      svg {
        fill: #fff;
        width: 14px;
        height: 22px;
        margin-right: 5px;
      }
    }
    .profile__user-right {
      svg {
        fill: #fff;
        width: 20px;
        height: 20px;
      }
    }

    .profile__block {}

    .profile__item-col-group {
      display: flex;
      background-color: #fff;
    }
    .profile__item-col {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 40px 0;
      border-right: 1px solid #ddd;
      &:last-child {
        border-right: none;
      }
      svg {
        width: 52px;
        height: 52px;
      }
    }
    .profile__wallet {
      color: rgb(0, 152, 251);
    }
    .profile__hongbao {
      color: rgb(255, 95, 62);
    }
    .profile__gold {
      color: rgb(106, 194, 11);
    }

    .profile__item-col-value {
      font-size: 52px;
      font-weight: 700;
      line-height: 52px;
    }
    .profile__item-col-unit {
      font-size: 24px;
      line-height: 24px;
    }
    .profile__item-col-text {
      margin-top: 10px;
      font-size: 24px;
      font-weight: 700;
      color: #666;
    }

    .profile__item-group {
      margin-top: 20px;
      font-size: 32px;
      line-height: 32px;
      border: 1px solid #ddd; /*no*/
      background-color: #fff;
    }
    .profile__item {
      display: flex;
      justify-content: space-between;
      // &[disabled] {
      //   opacity: .6;
      //   color: #aaa;
      // }
    }
    .profile__item-left {
      flex-shrink: 0;
      width: 36px;
      height: 42px;
      padding: 28px 20px;
      margin-right: 20px;
      svg {
        width: 36px;
        height: 36px;
      }
    }
    .profile__item-body {
      flex-grow: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 28px 20px;
      font-size: 32px;
      border-bottom: 1px solid #eee; /*no*/
      :last-child > & {
        border-bottom: none;
      }
    }
    .profile__item-right {
      svg {
        fill: #bbb;
        width: 20px;
        height: 20px;
      }
    }
    .profile__download-icon {
      svg {
        fill: #3cabff;
      }
    }

  }}
</style>
