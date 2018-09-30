<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld class="bd" :msg="msg"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { fetchHello } from '@/service/api'

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  created() {
    fetchHello()
      .then((res) => {
        this.msg = res.message
      })
  },
};
</script>

<style lang="scss" scoped>
  .home {
    text-align: center;
  }
  .bd {
    border: 1px solid $some-color;
    /* no */
    font-size: 28px;
    // @include border-1px;
  }
</style>
