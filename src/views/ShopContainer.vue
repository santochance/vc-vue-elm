<template>
  <div>
    <Shop v-if="!error"
      @loaded="shopLoaded"
      @error="onError"
    ></Shop>
    <ShopSkeleton v-if="!loaded && !error"></ShopSkeleton>
    <div class="p-shop__unauthorized"
      v-if="error"
    >
      <img src="../assets/unauthorized.png" alt="">
      <h3>登陆后查看商家信息</h3>
      <button @click="toLogin">立即登录</button>
    </div>
  </div>
</template>

<script>
  import ShopSkeleton from '@/components/ShopSkeleton'
  const Shop = () => import(/* webpackChunkName: "shop" */ './Shop/Shop')

  export default {
    name: 'ShopContainer',
    components: {
      ShopSkeleton,
      Shop,
    },
    props: {

    },
    data() {
      return {
        loaded: false,
        error: false,
      }
    },
    created() {
    },
    methods: {
      shopLoaded() {
        this.loaded = true
      },
      onError() {
        this.error = true
      },
      toLogin() {
        this.$router.push({
          path: '/login',
          query: { redirect: this.$route.fullPath },
        })
      }
    },
  }
</script>

<style lang="scss" scoped>
  .p-shop__unauthorized {
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 400px;
    }
    h3 {
      font-size: 34px;
      font-weight: normal;
      margin: 25px 0;
      color: #6a6a6a;
    }
    button {
      padding: 20px;
      min-width: 240px;
      font-size: 28px;
      color: #fff;
      background-color: #56d176;
    }
  }

</style>