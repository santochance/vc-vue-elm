<template>
  <div class="im__main">
    <h2 class="im__head">
      <span v-if="shopDetails.is_premium" class="imc__premium-tag">品牌</span>
      {{ shopDetails.name }}</h2>
    <div class="im__content">
      <ul class="imc__service">
        <li class="imc__service-item">
          <h3 class="imc__service-title imc__rating">{{ shopDetails.rating && shopDetails.rating.toFixed(1) }}</h3>
          <p class="imc__service-text">评分</p>
        </li>
        <li class="imc__service-item">
          <h3 class="imc__service-title imc__sales">{{ shopDetails.recent_order_num }}单</h3>
          <p class="imc__service-text">月售</p>
        </li>
        <li class="imc__service-item">
          <h3 class="imc__service-title imc__delivery-time">{{ shopDetails.delivery_mode && shopDetails.delivery_mode.text }}</h3>
          <p class="imc__service-text">约{{ shopDetails.order_lead_time }}分钟</p>
        </li>
        <li class="imc__service-item">
          <h3 class="imc__service-title imc__delivery-fee">{{ shopDetails.piecewise_agent_fee && shopDetails.piecewise_agent_fee.rules[0].fee }}元</h3>
          <p class="imc__service-text">配送费</p>
        </li>
        <li class="imc__service-item">
          <h3 class="imc__service-title imc__distance">{{ shopDetails.distance | formatDistance }}</h3>
          <p class="imc__service-text">距离</p>
        </li>
      </ul>
      <div class="imc__promotion-title">
        <div class="imc__promotion-decoration">
          <span class="imc__promotion-text">公告</span>
        </div>
      </div>
      <div class="imc__promotion">{{ shopDetails.promotion_info }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      shopDetails: Object,
    },
    filters: {
      formatDistance(value) {
        if (value >= 1000) {
          return Number(value / 1000).toFixed(1) + 'km'
        } else if (value >= 0) {
          return Number(value) + 'm'
        } else {
          return ''
        }
      },
    },
  }
</script>

<style lang="scss" scoped>

  .im__container {
    position: fixed;
    z-index: 9999;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    font-size: 0;
    white-space: nowrap;
    text-align: center;

    &:after {
      content: '';
      display: inline-block;
      vertical-align: middle;
      height: 100%;
    }
    & > * {
      display: inline-block;
      vertical-align: middle;
      font-size: medium;
      white-space: normal;
      text-align: left;
      text-align: start;
    }
  }
  .im__overlay {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .6);
  }
  .im__main {
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
    z-index: 2;
    max-height: 640px;
    max-width: 600px;
    margin: auto;
    padding: 57px 50px;
    background-color: #fff;
    border-radius: 8px;
    transition: transform .2s;
    will-change: transform;
  }

  .im__head {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 45px;
    font-weight: 700;
    line-height: 50px;
    color: #333；
  }
  .im__content {

  }

  .im__close-btn {
    position: relative;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    margin: 60px auto 0;
    font-size: 60px;
    border-radius: 100%;
    color: #a8a8a8;
    border: 1px solid #a8a8a8; /* no */
  }

  .imc__premium-tag {
    padding: 6px;
    margin-right: 12px;
    border-radius: 2px;
    font-size: 24px;;
    line-height: 1.2;
    font-weight: 700;
    color: #6a3709;
    background-image: linear-gradient(90deg,#fff100,#ffe339);
  }

  .imc__service {
    display: flex;
    margin: 38px -50px 0;
  }
  .imc__service-item {
    flex: 1;
    white-space: nowrap;
    text-align: center;
  }
  .imc__service-title {
    margin-bottom: 12px;
    font-size: 30px;
    font-weight: 600;
    color: #333;
  }
  .imc__service-text {
    font-size: 22px;
    color: #999;;
  }

  .imc__promotion-title {
    position: relative;
    margin: 36px 0 20px;
    text-align: center;
    font-size: 24px;
    color: #999;
  }
  .imc__promotion-decoration {
    display: inline-block;
    background: linear-gradient(90deg,#fff,#333 50%,#fff) no-repeat 50%/100% 1px; /* no */
  }
  .imc__promotion-text {
    display: inline-block;
    padding: 0 8px;
    margin: 0 40px;
    white-space: nowrap;
    background-color: #fff;
  }
  .imc__promotion {
    font-size: 26px;
    line-height: 1.54;
    color: #333;
    background-color: #fff;

    max-height: 200px;
    overflow-y: auto;
  }
</style>