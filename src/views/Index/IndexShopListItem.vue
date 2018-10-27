<script>
  import { Tag } from '@/components/common'
  import RatingStars from '@/components/RatingStars'

  export default {
    name: 'IndexShopListItem',
    components: {
      Tag,
      RatingStars,
    },
    filters: {
      formatDistance(value) {
        if (value >= 1000) {
          return Number(value / 1000).toFixed(2) + 'km'
        } else if (value >= 0) {
          return Number(value) + 'm'
        } else {
          return ''
        }
      },
    },
    props: {
      item: {
        type: Object,
      }
    },
    data() {
      return {
        activityListCollapsed: true,
        dislikeVisible: false,

        logoImgParam: '?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/',
        recommendTagImg: 'https://fuss10.elemecdn.com/a/c1/24c767ffa7fd296d3e2d6f01798c6png.png?imageMogr/format/webp/thumbnail/!20x20r/gravity/Center/crop/20x20/'
      }
    },
    computed: {
      supportTags() {
        try {
          return this.item.support_tags.filter(item => item.text !== '口碑人气好店')
        } catch(e) {
          return []
        }
      },
      recommendTag() {
        try {
          return this.item.support_tags.filter(item => item.text === '口碑人气好店')[0]
        } catch(e) {
          return null
        }
      },
    },
    methods: {
      onToggleActivityList() {
        this.activityListCollapsed = !this.activityListCollapsed
      },
      onDislike() {

      },
    },
  }
</script>

<template>
  <router-link :to="{ path: '/shop', query: { id: item.id } }" tag="div"
    class="b-item b-item__box"
    v-if="item"
  >
    <div class="b-item__mask"
      v-if="dislikeVisible"
      @click="dislikeVisible = false"
    >
      <div class="b-item__dislike-btn"
        @click="onDislike"
      >不喜欢</div>
    </div>
    <div class="b-item__shop-info">
      <div class="b-item__logo-wrap">
        <div class="b-item__new-icon"
          v-if="item.is_new"
        >
          <span>新店</span>
        </div>
        <img :src="$getImage(item.image_path, logoImgParam)" alt="">
      </div>
      <div class="b-item__main-wrap">
        <div class="b-item__info-line">
          <h3 class="b-item__shop-name">
            <Tag class="b-item__premium-icon"
              v-if="item.is_premium"
            >品牌</Tag>
            <span class="b-item__shop-name-text ellipsis"
            >{{ item.name }}</span>
          </h3>
          <div class="b-item__support-wrap">
            <tag class="b-item__ad-icon"
              v-if="item.recommend.is_ad">{{ item.recommend.reason }}</tag>
            <span class="b-item__omit-btn"
              @click="dislikeVisible = true"
            >&#183;&#183;&#183;</span>
          </div>
        </div>
        <div class="b-item__info-line">
          <div class="b-item__rating-misc-wrap">
            <RatingStars class="b-item__stars" :value="item.rating"></RatingStars>
            <span class="b-item__rating"
            >{{ item.rating }}</span>
            <span class="b-item__sales"
            >月售{{ item.recent_order_num }}单</span>
          </div>
          <div class="b-item__delivery"
            v-if="item.delivery_mode"
          >
            <Tag class="b-item__delivery-tag"
              :style="{ backgroundColor: '#' + item.delivery_mode.color }"
            >{{ item.delivery_mode.text }}</Tag>
          </div>
        </div>
        <div class="b-item__info-line">
          <div class="b-item__delivery-limit-wrap">
            <span>&yen;{{ item.piecewise_agent_fee.rules[0].price }}起送</span>
            <span class="b-item__delivery-fee ellipsis"
            >优惠配送费&yen;{{ item.piecewise_agent_fee.rules[0].fee }}</span>
          </div>
          <div class="b-item__time-distance-wrap">
            <span>{{ item.distance | formatDistance }}</span>
            <span class="b-item__delivery-time"
            >{{ item.order_lead_time }}分钟</span>
          </div>
        </div>
      </div>
    </div>
    <div class="b-item__tags-and-activities">
      <div class="b-item__tag-line">
        <Tag class="b-item__support-tag"
          v-for="tag in supportTags" :key="tag.text"
        >{{ tag.text }}</Tag>
        <span class="b-item__recommend-tag"
          v-if="recommendTag">
          <img :src="recommendTagImg" alt="">
          <span>{{ recommendTag.text }}</span>
        </span>
      </div>
      <div class="b-item__activity-wrap"
        v-if="item.activities"
      >
        <div class="b-item__activity-list">
          <div class="b-item__activity-item"
            v-for="(activity, idx) in item.activities" :key="activity.id"
            v-show="idx < 2 || !activityListCollapsed"
          >
            <tag class="b-item__activity-item-icon"
              :style="{ backgroundColor: '#' + activity.icon_color }"
            >{{ activity.icon_name }}</tag>
            <span class="b-item__activity-item-text ellipsis"
            >{{ activity.description }}</span>
          </div>
        </div>
        <div class="b-item__activity-btn"
          v-if="item.activities.length > 2"
          :class="{ 'b-item__activity-btn_expanded': activityListCollapsed}"
          @click="onToggleActivityList"
        >
          <span>{{ item.activities.length }}个活动</span>
          <img src="./arrow.svg" alt="">
        </div>
      </div>
    </div>
  </router-link>
</template>


<style lang="scss" scoped>
  .b-item {}

    .b-item__box {
      position: relative;
      padding: 30px 0;
      font-size: 22px;
      line-height: normal;
      border-bottom: 1px solid #eee; /*no*/
      background-color: #fff;
      color: #666;
    }
    .b-item__mask {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: 3;
      background-color: rgba(0, 0, 0, .6);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .b-item__dislike-btn {
      text-align: center;
      height: 100px;
      width: 100px;
      font-size: 24px;
      line-height: 100px;
      color: #333;
      border-radius: 50%;
      background-color: #fff;
    }

  /* shop info top part */

    .b-item__shop-info {
      display: flex;
      padding: 0 20px;
    }
    .b-item__logo-wrap {
      width: 130px;
      height: 130px;
      background-image: url(./picsum.jpeg) no-repeat;
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    .b-item__new-icon {
      position: absolute;
      z-index: 5;
      left: 0;
      top: 0;
      height: 64px;
      width: 64px;
      text-align: center;
      background-image: linear-gradient(135deg,#26ce61,#26ce61 50%,transparent 0);
      & span {
        position: absolute;
        top: 10px;
        left: 2px;
        font-size: 18px;
        font-weight: 700;
        transform: rotate(-45deg);
        color: #fff;

      }
    }
    .b-item__main-wrap {
      flex: 1;
      display: flex;
      flex-direction: column;
      padding-left: 20px;
      user-select: none;
      overflow: hidden;
      justify-content: space-between;

    }
    .b-item__info-line {
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .b-item__shop-name {
      overflow: hidden;
      display: flex;
      align-items: center;
      font-size: 30px;
      font-weight: 700;
    }
    .b-item__premium-icon {
      margin-right: 10px;
      white-space: nowrap;
      font-size: 22px;
      font-weight: 700;
      background-image: linear-gradient(90deg,#fff100,#ffe339);
      color: #6f3f15;
      padding: 6px;
    }
    .b-item__shop-name-text {}
    .b-item__support-wrap {
      display: flex;
      align-items: center;
      margin-left: 20px;
      white-space: nowrap;
    }
    .b-item__ad-icon {
      margin-left: 6px;
      font-size: 16px;
      line-height: 1;
      color: #999;
      border: 1px solid #ddd; /*no*/
    }
    .b-item__omit-btn {
      padding: 0 10px;
      margin-left: 20px;
      font-weight: 700;
    }

    .b-item__rating-misc-wrap {
      display: flex;
      align-items: center;
    }
    .b-item__stars {
      margin-right: 8px;
    }
    .b-item__rating {
      margin-right: 8px;
    }
    .b-item__sales {}
    .b-item__delivery {}
    .b-item__delivery-tag {
      font-size: 20px;
      line-height: 1;
      padding: 2px;
    }

    .b-item__delivery-limit-wrap {}
    .b-item__delivery-fee,
    .b-item__delivery-time {
      &:before {
        content: '|';
        margin: 0 6px;
        color: #ddd;
      }
    }

    .b-item__time-distance-wrap {}

  /* shop info bottom part */

    .b-item__tags-and-activities {
      padding-left: 170px;
    }
    .b-item__tag-line {
      display: flex;
      align-items: center;
      margin: 20px 20px 0 0;
    }
    .b-item__support-tag {
      margin-right: 10px;
      padding: 2px 4px;
      font-size: 20px;
      line-height: 1;
      border: 1px solid;
      border-color: rgb(221, 221, 221);
      color: rgb(102, 102, 102);
    }
    .b-item__recommend-tag {
      padding: 0 8px;
      margin-right: 10px;
      color: #e8470b;
      img {
        width: 20px;
        height: 20px;
        margin-top: 3px;
        margin-right: 6px;
      }
    }

    .b-item__activity-wrap {
      display: flex;
      margin-top: 14px;
    }
    .b-item__activity-list {
      overflow: hidden;
      flex: 1;
      padding-right: 20px;
    }
    .b-item__activity-item {
      overflow: hidden;
      display: flex;
      align-items: center;
      font-size: 24px;
      margin-top: 2.5px;
      &:first-child {
        margin-top: 0;
      }
    }
    .b-item__activity-item-icon {
      margin-right: 6px;
      line-height: 1;
      border-radius: 4px;
    }
    .b-item__activity-item-text {
      flex: 1;
      line-height: 36px;
      padding: 3px;
    }
    .b-item__activity-btn {
      flex-shrink: 0;
      padding: 3px 10px 0 0;
      font-size: 24;
      line-height: 1;
      text-align: right;
      color: #999;
      white-space: nowrap;
      span {
        display: inline-block;
        vertical-align: middle;
      }
      img {
        width: 13px;
        height: 6px;
        margin-left: 8px;
        vertical-align: middle;
        position: relative;
        z-index: 1;
        opacity: .9;
        transform: rotate(0deg);
        transition: all .3s ease-in-out;
        will-change: transform;
      }

      &_expanded {
        img {
          transform: rotate(180deg);
        }
      }
    }

</style>