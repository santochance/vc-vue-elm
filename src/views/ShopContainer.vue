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
      <template v-if="error.name === 'UNAUTHORIZED_RESTAURANT_ERROR'">
        <h3>{{ error.message }}</h3>
        <button @click="toLogin">立即登录</button>
      </template>
      <template v-else-if="error.name === 'SOA_INVOKE_ERROR'">
        <h3>{{ error.message }}</h3>
        <p>请重试</p>
        <button @click="reload">重试</button>
      </template>
      <template v-else>
        <h3>{{ error.message }}</h3>
        <button @click="$router.push('/')">返回首页</button>
      </template>
    </div>
  </div>
</template>

<script>
  import ShopSkeleton from '@/components/ShopSkeleton'
  const Shop = () => import(/* webpackChunkName: "Shop" */ './Shop/Shop')

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
        error: null,
      }
    },
    created() {
    },
    methods: {
      shopLoaded() {
        this.loaded = true
      },
      onError(error) {
        this.error = error
      },
      toLogin() {
        this.$router.push({
          path: '/login',
          query: { redirect: this.$route.fullPath },
        })
      },
      reload() {
        window.location.reload()
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
    p {
      color: #888;
      margin-bottom: 25px;
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