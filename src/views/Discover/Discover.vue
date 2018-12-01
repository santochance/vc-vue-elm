<template>
  <Page title="发现" :back-btn="false">
<!--     <NoDataTip
      class="p-discover__no-data"
      :data="emptyTip"
    ></NoDataTip> -->
    <div class="p-discover__banner">
      <img :src="top.image" alt="">
    </div>
    <section class="p-discover__section">
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
    <div class="p-discover__activities">
      <div class="b-activity__header">
        <h3>限时好礼</h3>
        <p>金几换豪礼</p>
      </div>
      <div class="b-activity__body">
        <router-link to=""
          v-for="(item, index) in suggestion.slice(0, 3)" :key="index"
        >
          <div class="b-activity-item">
            <img class="b-activity-item__img" src="" alt="">
            <span class="b-activity-item__corner">限时优惠</span>
            <div class="">
              <p class="b-activity-item__title">3元饿了么红包</p>
              <div class="">
                <span class="b-activity-item__price">90金币</span>
                <span class="b-activity-item__original-price">&yen;3</span>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
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
    background-color: #fff;
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

  .p-discover__activities {
    background-color: #fff;
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
      width: 222px;
      height: 220px;
      margin-bottom: 19px;
    }
    .b-activity-item__corner {

    }
    .b-activity-item__title {

    }
    .b-activity-item__original-price {

    }
</style>