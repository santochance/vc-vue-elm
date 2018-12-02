<template>
  <div class="seller__container">
    <div class="seller__item">
      <div class="seller__item-head"><span>配送信息</span></div>
      <div class="seller__item-content deliver-info">
        <p>
          <tag class="deliver-info__mode"
            v-if="shopDetails.delivery_mode.id === 1"
            :style="{fontSize: $toRem(22), backgroundColor: '#' + shopDetails.delivery_mode.color}"
            >{{ shopDetails.delivery_mode.text }}</tag>
          <span v-else>{{ shopDetails.delivery_mode.text }}</span>
          <span>约{{ shopDetails.order_lead_time }}分钟送达，</span>
          <span>距离{{ shopDetails.distance }}m</span>
        </p>
        <p><span>配送费 &yen; {{ shopDetails.piecewise_agent_fee.rules[0].fee }}</span></p>
      </div>
    </div>
    <div class="seller__item">
      <div class="seller__item-head"><span>活动与服务</span></div>
      <div class="seller__item-content activity">
        <div v-for="activity in shopDetails.activities" :key="activity.id"
          class="activity__item">
          <tag class="activity__icon" :text="'文本'"
            :style="{fontSize: $toRem(24), backgroundColor: '#' + activity.icon_color}"
            >{{ activity.icon_name }}</tag>
          <span>{{ activity.tips }}</span>
        </div>
      </div>
    </div>
    <div class="seller__item"
      v-if="shopDetails.albums && shopDetails.album.length"
    >
      <div class="seller__item-head"><span>商家实景</span></div>
      <div class="album__content">
        <a v-for="(album, index) in shopDetails.albums" :key="album.name + index"
          class="album__item" href="javascript:">
          <!--
          <img class="album__cover" :src="$getImage(album.cover_image_hash, albumImgParam)" alt="">
           -->
          <viewer :items="transformForViewer(album.photos)"
            thumbnailIndex="0"
          ></viewer>
          <span class="album__name">{{ album.name }}({{ album.count }}张)</span>
        </a>
      </div>
    </div>
    <div class="seller__item">
      <div class="seller__item-head"><span>商家信息</span></div>
      <div>
        <ul>
          <li class="info__item">{{ shopDetails.description || '暂无简介' }}</li>
          <li class="info__item">
            <span class="info__item-name">品类</span>
            <span>{{ shopDetails.flavors.map(item => item.name).join(', ') }}</span>
          </li>
          <li class="info__item">
            <span class="info__item-name">商家电话</span>
            <span>{{ shopDetails.phone.split(/\s+/)[0] }}
              <span class="detail-icon"></span></span>
          </li>
          <li class="info__item">
            <span class="info__item-name">地址</span>
            <span>{{ shopDetails.address }}</span>
          </li>
          <li class="info__item">
            <span class="info__item-name">营业时间</span>
            <span>{{ shopDetails.opening_hours.map(item => item.split('/').join('-')).join(', ') }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="seller__item">
      <div class="seller__item-head qulification"><span>营业资质</span>
        <span class="detail-icon"></span>
      </div>
    </div>
  </div>
</template>

<script>
  import { Tag } from '@/components/common'
  import Viewer from '@/components/Viewer'

  export default {
    components: {
      Tag,
      Viewer,
    },
    props: {
      shopDetails: {
        type: Object,
        default: () => ({}),
      },
    },
    data () {
      return {
        albumImgParam: '?imageMogr/format/webp/thumbnail/!200x200r/gravity/Center/crop/200x200/',
        albumBigImgParam: '?imageMogr/format/webp/thumbnail/!750x750r/gravity/Center/crop/750x750/',
      }
    },
    methods: {
      transformForViewer(photos) {
        return (photos || []).map(photo => ({
          thumbnail: this.$getImage(photo.image_hash, this.albumImgParam),
          image: this.$getImage(photo.image_hash, this.albumBigImgParam),
          loaded: false,
        }))
      },
    }
  }
</script>

<style lang="scss" scoped>
  .seller__container {
    font-size: 26px;
    background: #f5f5f5;
    overflow-y: auto;
  }
  .seller__item {
    overflow: hidden;
    padding: 32px 30px;
    margin-bottom: 20px;
    border-bottom: 1px solid #eee;
    font-size: 26px;
    background-color: #fff;
    color: #666;
  }
  .seller__item-head {
    font-size: 30px;
    font-weight: 700;
    line-height: 42px;
    color: #000;
  }
  .seller__item-content {
    margin-top: 32px;
  }

  .deliver-info {
    & > p,
    & > div {
      margin-bottom: 14px;
    }
  }
  .deliver-info__mode {
    margin-right: 20px;
    padding: 6px;
    border-radius: 6px;
    background-color: #2395FF;
  }

  .activity__item {
    margin-bottom: 23px;
  }
  .activity__icon {
    margin-right: 12px;
  }

  .album__content {
    margin-top: 16px;
  }
  .album__item {
    overflow: hidden;
    float: left;
    position: relative;
    height: 156px;
    width: 156px;
    margin-right: 14px;
    text-align: center;
    & > img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .album__name {
    display: block;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 36px;
    line-height: 36px;
    color: #eee;
    background-color: rgba(0, 0, 0, .6);
  }

  .info__item {
    display: flex;
    justify-content: space-between;
    padding: 30px 0;
    border-bottom: 1px solid #ddd;
    color: #666;
    &:last-child {
      border-bottom: none;
      padding-bottom: 0;
    }
  }
  .info__item-name {
    font-weight: 700;
    color: #333;
  }
  .detail-icon {
    display: inline-block;
    width: 16px;
    height: 16px;
    border-bottom: 2px solid #ccc;
    border-right: 2px solid #ccc;
    transform: rotate(-45deg);
  }

  .qulification {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>