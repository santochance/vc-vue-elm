<template>
  <section class="shop__header">
    <nav v-if="shopDetails.shop_sign" class="shop__nav" :style="{ backgroundImage: 'url(' + $getImage(shopDetails.shop_sign.image_hash, shopPostImgParam) + ')' }">
      <a class="shop__back-btn" href="javascript:"
        @click="onBack"
      ></a>
    </nav>
    <div class="shop__overview">
      <div class="shop__logo">
        <tag v-if="shopDetails.is_premium" class="shop__logo-tag">品牌</tag>
        <img :src="$getImage(shopDetails.image_path, shopLogoImgParam)" alt="">
      </div>
      <div class="shop__info" @click.stop.prevent="shopInfoShow = true">
        <h2 class="shop__name">
          <span class="shop__name-text">{{ shopDetails.name }}</span>
          <span class="shop__info-show-btn"></span>
        </h2>
        <div class="shop__service">
          <span class="shop__rating">评价{{ shopDetails.rating && shopDetails.rating.toFixed(1) }}</span>
          <span class="shop__sales">月售{{ shopDetails.recent_order_num }}单</span>
          <span class="shop__delivery-time">{{ shopDetails.delivery_mode && shopDetails.delivery_mode.text }}约{{ shopDetails.order_lead_time }}分钟</span>
        </div>
      </div>
      <div class="shop__activity" v-if="shopDetails.activities && shopDetails.activities.length > 0"
        @click.stop.prevent="activityListShow = true">
        <div class="shop__activity-abstract">
          <tag class="shop__activity-icon" :style="{ fontSize: $toRem(18), backgroundColor: '#' + shopDetails.activities[0].icon_color }"
            >{{ shopDetails.activities[0].icon_name }}</tag>
          <span>{{ shopDetails.activities[0].tips }}</span>
        </div>
        <div class="shop__activity-show-btn">
          <span>{{ shopDetails.activities.length }}个优惠</span>
        </div>
      </div>
      <div class="shop__promotion">公告: {{ shopDetails.promotion_info }}
      </div>
    </div>

    <modal :visible="shopInfoShow" panel="center" closeBtn="center" @close="shopInfoShow = false" @change="onFoodInfoModalChange">
      <ShopInfo :shopDetails="shopDetails" />
    </modal>
    <modal :visible="activityListShow" panel="bottom" @close="activityListShow = false" @change="onActivityListModalChange">
      <ActivityList :shopDetails="shopDetails" />
    </modal>
  </section>
</template>

<script>
  import { Tag, Modal } from '@/components/common'

  import ShopInfo from './ShopInfo'
  import ActivityList from './ActivityList'

  export default {
    name: 'ShopHeader',
    components: {
      Tag,
      Modal,
      ShopInfo,
      ActivityList,
    },
    props: {
      shopDetails: Object,
    },
    data() {
      return {
        shopInfoShow: false,
        activityListShow: false,

        /* img params */
        shopPostImgParam: '?imageMogr/format/webp/thumbnail/750x/',
        shopLogoImgParam: '?imageMogr/format/webp/thumbnail/150x/',

        debug: null,
      }
    },
    methods: {
      onBack() {
        this.$router.back()
      },
      onFoodInfoModalChange(event) {
        this.shopInfoShow = event.visible
      },
      onActivityListModalChange(event) {
        this.activityListShow = event.visible
      }
    },
  }
</script>

<style lang="scss" scoped>
  .shop__header {
    padding-top: 200px;
    font-size: 22px;
    color: #333;
    background-color: #fff;
  }
  .shop__nav {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 192px;
    padding: 8px 20px 0;

    background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    // 渐变效果
    &:before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-image: linear-gradient(0deg,hsla(0,0%,100%,0),rgba(0,0,0,.5));
    }
  }
  .shop__back-btn {
    position: relative;
    z-index: 1;
    display: inline-block;
    width: 20px;
    height: 20px;
    margin: 10px 0 0 10px;
    border: 0 solid #fff;
    border-width: 0 0 4px 4px;
    transform: rotate(45deg);
  }
  .shop__overview {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 60px;
    background: #fff;;
  }
  .shop__logo {
    position: absolute;
    bottom: 100%;
    left: 0;
    right: 0;
    margin: 0 auto;
    margin-bottom: -20px;
    width: 150px;
    height: 150px;
    & > img {
      width: 100%;
      border-radius: 6px;
      box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 0.4vw 0px;
    }
  }
  .shop__logo-tag {
    position: absolute;
    left: 0;
    top: 0;
    padding: 2px;
    font-size: 20px;
    font-weight: 700;
    background-image: linear-gradient(90deg,#fff100,#ffe339);
    color: #6f3f15;

  }
  .shop__info {
    width: 72vw;
  }
  .shop__name {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 20px;
    font-size: 40px;
    font-weight: 700;

  }
  .shop__name-text {
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .shop__info-show-btn {
    position: relative;
    width: 30px;
    height: 48px;
    &:after {
      position: absolute;
      content: '';
      border: 0 solid transparent;
      border-width: 11px 0 11px 13px;
      border-left-color: rgba(0, 0, 0, .67);
      left: 13px;
      top: 13px;
    }
  }
  .shop__service {
    margin-top: 13px;
    white-space: nowrap;
    text-align: center;
    font-size: 22px;
    color: #666;
  }
  .shop__rating,
  .shop__sales {
    &:after {
      content: " \B7 ";
      opacity: .2;
    }
  }
  .shop__delivery-time {}

  .shop__activity {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 600px;
    margin: 24px 75px 0;
    font-size: 22px;
  }
  .shop__activity-abstract {
    min-width: 300px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .shop__activity-icon {
    padding: 4px 6px;
    margin-right: 8px;
  }
  .shop__activity-show-btn {
    position: relative;
    display: block;
    flex-shrink: 0;
    width: 116px;
    padding-right: 22px;
    text-align: right;
    color: #999;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    &:after {
      content: '';
      border: 0 solid transparent;
      border-width: 8px 7px 0;
      border-top-color: #999;

      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
    }
  }
  .shop__promotion {
    width: 600px;
    margin: 17px 75px 20px;
    padding: 0;
    font-size: 22px;
    color: #999;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>