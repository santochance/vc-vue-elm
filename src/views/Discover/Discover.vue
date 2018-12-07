<template>
  <Page
    title="发现"
    :back-btn="false"
    tabbar="discover"
  >
<!--     <NoDataTip
      class="p-discover__no-data"
      :data="emptyTip"
    ></NoDataTip> -->
    <div class="p-discover__banner">
      <img :src="top.image" alt="">
    </div>
    <section class="p-discover__section"
      v-if="entries[1] && entries[1].length"
    >
      <div class="p-discover__entries m-list-3">
        <router-link to=""
          class="b-entry"
          v-for="entry in entries[1]" :key="entry.id"
        >
          <div>
            <h3 class="b-entry__title ellipsis"
            :style="{ color: entry.title_color }">{{ entry.title }}</h3>
            <p class="b-entry__subtitle ellipsis">{{ entry.subtitle }}</p>
          </div>
          <img class="b-entry__icon" :src="$getImage(entry.main_pic_hash, '?imageMogr/format/webp')" alt="">
        </router-link>
      </div>
    </section>
    <section class="p-discover__section"
      v-if="suggestion && suggestion.length"
    >
      <div class="p-discover__activity">
        <div class="b-activity__header">
          <div class="b-activity__title ellipsis">
            <span class="line left"></span>
            <svg class="icon"><use xlink:href="#alarm"></use></svg>
            <span class="text">限时好礼</span>
            <span class="line right"></span>
          </div>
          <p class="b-activity__subtitle ellipsis">金几换豪礼</p>
        </div>
        <div class="b-activity__body">
          <router-link to=""
            v-for="(item, index) in suggestion.slice(0, 3)" :key="index"
          >
            <div class="b-activity-item">
              <img class="b-activity-item__img" :src="$getImage(item.image_hash, '?imageMogr/format/webp')" alt="">
              <span class="b-activity-item__corner">{{ item.corner_marker }}</span>
              <div class="">
                <p class="b-activity-item__title">{{ item.title }}</p>
                <div class="">
                  <span class="b-activity-item__price">{{ item.points_required }}金币</span>
                  <del class="b-activity-item__original-price">&yen;{{ item.original_price }}</del>
                </div>
              </div>
            </div>
          </router-link>
        </div>
        <p class="b-activity__more">
          <span>查看更多</span>
          <svg class="b-activity__more-icon"><use xlink:href="#tab_found_next_page"></use></svg>
        </p>
      </div>
    </section>
  </Page>
</template>

<script>
  import { fetchDiscoverEntries, fetchDiscoverSuggestion } from '@/service/api'
  import { mapState } from 'vuex'
  import NoDataTip from '@/components/NoDataTip'

  export default {
    name: 'Discover',
    components: {
      NoDataTip,
    },
    props: {

    },
    data() {
      return {
        "top": {
          "image": "https://fuss10.elemecdn.com/9/41/253ca6a440ced6fa22044a96e6721jpeg.jpeg",
          "link": "javascript:location.href = navigator.userAgent.match(/Eleme/) ? \"eleme://web?url=https%3A%2F%2Fhuodong.m.taobao.com%2Flife%2Fjumpjump123.html\" : \"https://huodong.m.taobao.com/life/jumpjump123.html\";",
          "thresholdAndroid": 1,
          "thresholdIOS": 1,
          "title": "最美骑手"
        },
        entries: [],
        suggestion: [],

        emptyTip: {
          img: 'https://fuss10.elemecdn.com/d/60/70008646170d1f654e926a2aaa3afpng.png',
          title: '当前页面还在开发中',
          button: {
            text: '返回首页',
            handler: () => {
              this.$router.push('/')
            }
          }
        },
      }
    },
    computed: {
      ...mapState(['latitude', 'longitude', 'useId']),
    },
    created() {
      fetchDiscoverEntries({
        latitude: this.latitude,
        longitude: this.longitude,
      }).then(res => {
        this.entries = res
      })
      fetchDiscoverSuggestion()
        .then(res => {
          this.suggestion = res
        })
    },
  }
</script>

<style lang="scss" scoped>

  .p-discover__no-data {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .p-discover__banner {
    img {
      width: 100%;
    }
  }
  .p-discover__section {
    margin-bottom: 21px;
    border-top: 1px solid #eee;
  }

  .p-discover__entries {
    position: relative;
    a {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 160px;
      padding: 0 30px;
      border-bottom: 1px solid #f7f7f7; /*no*/

      background-color: #fff;
    }
    h3 {
      margin-bottom: 12px;
      font-size: 32px;
      line-height: 38.4px;
    }
    p {
      font-size: 24px;
      line-height: 28.8px;
      color: #999;
    }
    img {
      width: 90px;
      height: 90px;
    }

    &.m-list-3 {
      a {
        width: 50%;

        &:first-child {
          position: absolute;
          justify-content: space-between;
          align-items: normal;
          height: 320px;
          padding: 44px 22px 12px 32px;
          border-right: 1px solid #f7f7f7; /*no*/
          img {
            width: 150px;
            height: 150px;
          }
        }
        &:nth-child(2),
        &:nth-child(3) {
          margin-left: 50%;
        }
      }
    }
  }

  .p-discover__activity {
    background-color: #fff;
    margin-bottom: 140px;
  }
  .b-activity__header {
    text-align: center;
  }
  .b-activity__title {
    padding-top: 39px;
    padding-bottom: 10px;
    font-size: 36px;
    font-weight: 700;
    color: #333;

    .icon {
      position: relative;
      top: 4px;
      width: 33px;
      height: 33px;
      margin-right: 10px;
      margin-left: 8px;
      fill: #f94843;
    }
    .text {
      margin-right: 8px;
    }

    .line {
      position: relative;
      display: inline-block;
      width: 28px;
      height: 0;
      border: 1px solid #333; /*no*/
      margin: 16px 7px 13px;
      &:after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #000;
      }
    }
    .left {
      &:after {
        right: -10px;
      }
    }
    .right {
      &:after {
        left: -10px;
      }
    }

  }
  .b-activity__subtitle {
    padding-bottom: 12px  ;
    font-size: 22px;
    color: #999;
  }
  .b-activity__body {
    display: flex;
    justify-content: space-between;
    padding: 24px 0 30px 30px;
    white-space: nowrap;
  }
  .b-activity-item {
    box-sizing: border-box;
    position: relative;
    margin-right: 12px;
    width: 222px;
  }
    .b-activity-item__img {
      display: inline-block;
      width: 222px;
      height: 220px;
      margin-bottom: 19px;
    }
    .b-activity-item__corner {
      position: absolute;
      left: 0;
      top: 0;
      font-size: 22px;
      padding: 5px;
      background-color: #000;
      color: #fff;
    }
    .b-activity-item__title {
      font-size: 26px;
      font-weight: 400;
      margin-bottom: 10px;
    }
    .b-activity-item__price {
      display: inline-block;
      vertical-align: middle;
      max-width: 100px;
      font-size: 26px;
      line-height: 36px;
      color: #ff5339;
      margin-right: 7px;
    }
    .b-activity-item__original-price {
      display: inline-block;
      vertical-align: middle;
      max-width: 80px;
      font-size: 22px;
      color: #aaa;
      text-decoration: line-through;
    }
    .b-activity__more {
      padding: 36px;
      text-align: center;
      font-size: 26px;
      color: #999;
    }
    .b-activity__more-icon {
      width: 10px;
      height: 18px;
      margin-left: 11px;
    }

</style>