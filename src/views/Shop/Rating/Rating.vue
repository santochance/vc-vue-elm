<template>
  <div class="rating__container">
    <template v-if="!loading">
      <div v-if="rating" class="rating__overview">
        <div class="overview__overall">
          <div class="overview__overall-score">{{ rating.overall_score | fixedNum }}</div>
          <div class="overview__overall-text">综合评价</div>
          <div class="overview__comparation">高于周边商家{{ rating.compare_rating | percentNum }}</div>
        </div>
        <div class="overview__specific">
          <div class="overview__item overview__service-score">
            <span class="overview__item-name">服务态度</span>
            <span class="overview__item-value">{{ rating.service_score | fixedNum }}</span>
          </div>
          <div class="overview__item overview__food-score">
            <span class="overview__item-name">商品评分</span>
            <span class="overview__item-value">{{ rating.food_score | fixedNum }}</span>
          </div>
          <div class="overview__item overview__deliver-time">
            <span class="overview__item-name">送达时间</span>
            <span class="overview__deliver-time-value">{{ rating.deliver_time }}分钟</span>
          </div>
        </div>
      </div>

      <div class="rating__content">
        <ul v-if="tags.length" class="rating__tags">
          <li v-for="(tag, index) in tags" :key="String(tag.name) + index"
           class="rating__tag"
           :class="{ tag_unsatisfied: tag.unsatisfied, tag_active: tag.name === tagNameCurrent }"
           @click="onTabsNavTap(tag.name)"
          >
            <span class="tag__name">{{ tag.name }}</span>&nbsp;
            <span class="tag__count">{{ tag.count }}</span>
          </li>
        </ul>

        <ul v-if="comments.length"
          class="rating__comments"
        >
          <li v-for="(comment, index) in comments" :key="String(comment.food_id) + index"
            class="comment"
          >
          <div class="comment__content">
              <div class="comment__avatar">
                <img v-if="comment.avatar" :src="$getImage(comment.avatar, avatarImgParam)" alt="">
                <span v-else :style="{ backgroundPositionY: $toRem(60) }"></span>
              </div>
              <div class="comment__info">
                <div class="comment__heading">
                  <h3 class="comment__username">{{ comment.username }}</h3>
                  <div class="comment__rated-at">{{ comment.rated_at }}</div>
                </div>
                <div>
                  <div class="comment__rating">
                    <div class="star">
                      <div class="star__gray">
                        <img src="./stars-gray.svg" alt="">
                      </div>
                      <div class="star__active" :style="{ right: (5 - comment.rating) / 5 * 100 + '%'}">
                        <img src="./stars-active.svg" alt="">
                      </div>
                    </div>
                    <span class="comment__rating-start-text" :style="{ color: ratingGradeMap[comment.rating][1] }">{{ ratingGradeMap[comment.rating][0] }}</span>
                  </div>
                  <div class="comment__rating-text">{{ comment.rating_text }}</div>
                  <div v-if="comment.reply"
                    class="comment__reply-content">{{ comment.reply && comment.reply.content }}</div>
                  <!--
                  <ul class="comment__food-images">
                    <li v-for="(image, index) in comment.order_images" :key="index"
                      class="comment__food-image">
                      <img :src="$getImage(image.image_hash, commentImgParam)" alt="">
                    </li>
                  </ul>
                   -->
                  <viewer
                   class="re-rating-comment__food-images"
                   :items="transformForViewer(comment.order_images)"
                  ></viewer>
                  <div class="comment__food-list">
                    <svg><use xlink:href="#like"></use></svg>
                    <template>
                      <span v-for="(food, index) in comment.food_ratings" :key="String(food.food_id) + index"
                       class="comment__food ellipsis">
                         {{ food.rate_name }}
                       </span>
                    </template>
                  </div>
                </div>
              </div>
          </div>
          </li>
        </ul>
      </div>
      <InfiniteScroll :handler="infiniteScrollHandler"
        ref="infiniteScroll"
      ></InfiniteScroll>
    </template>
    <loading-image :visible="loading"></loading-image>
  </div>
</template>

<script>
  import { fetchBatchComments, fetchRatings } from '@/service/api'
  import LoadingImage from '@/components/LoadingImage'
  import Viewer from '@/components/Viewer'
  import InfiniteScroll from '@/components/common/InfiniteScroll'

  const debug = false

  export default {
    props: {
      restaurantId: {
        type: [Number, String],
      }
    },
    components: {
      LoadingImage,
      Viewer,
      InfiniteScroll,
    },
    data () {
      return {
        loading: false,

        // remote data
        rating: null,
        tags: [],
        comments: [],

        limit: 20,
        offset: 0,
        tagNameCurrent: '',

        avatarImgParam: '?imageMogr/format/webp/thumbnail/!60x60r/gravity/Center/crop/60x60/',
        commentImgParam: '?imageMogr/format/webp/thumbnail/300x/',
        commentBigImgParam: '?imageMogr/format/webp/thumbnail/750x/',

        ratingGradeMap: {
          1: ['吐槽', 'rgb(137, 159, 188)'],
          2: ['较差', 'rgb(137, 159, 188)'],
          3: ['一般', 'rgb(251, 154, 11)'],
          4: ['满意', 'rgb(251, 154, 11)'],
          5: ['超赞', 'rgb(255, 96, 0)'],
        }
      }
    },
    created() {
      this.loadOverview()
    },
    methods: {
      loadOverview() {
        this.loading = true
        fetchBatchComments({
          restaurantId: this.restaurantId,
          has_content: true,
        }).then(overview => {
          this.comments = overview.comments
          this.offset = this.comments.length
          this.rating = overview.rating
          this.tags = overview.tags
          this.tagNameCurrent = overview.tags[0].name
          this.loading = false
        })
      },
      onTabsNavTap(tagName) {
        if (this.tagNameCurrent === tagName) return

        this.tagNameCurrent = tagName
        this.offset = 0
        this.comments = []

        this.$nextTick(() => {
          // 在过滤器 tab 改变时主动调用 infiniteScroll 的 reset 接口
          this.$refs.infiniteScroll.reset()
        })
      },
      infiniteScrollHandler($state) {
        debug && console.log('debug - exec infiniteScrollHandler')
        this.loadComments()
          .then((state) => {
            console.log('debug - infinite scroll loaded')
            $state(state)
          })
      },
      loadComments() {
        debug && console.log('debug - exec loadComments')
        const { restaurantId, tagNameCurrent: tagName, offset } = this
        // 返回 promise 供 infiniteLoading决定状态
        return fetchRatings({
          restaurantId,
          has_content: true,
          tag_name: tagName,
          offset
        })
          .then(comments => {

            debug && console.log('debug - get response of comments')

            if (offset === 0) {
              this.comments = comments
            } else {
              this.comments = this.comments.concat(comments)
            }
            this.offset = this.comments.length
            // return comments.length > 1 ? 'loaded' : 'complete'
            let state
            if (!this.offset) {
              state = 'empty'
            } else if (!comments.length) {
              state = 'complete'
            } else {
              state = 'loaded'
            }
            return state
          })
          .catch(() => {
            return 'loaded'
          })
      },
      transformForViewer(items) {
        return (items || []).map(item => ({
          thumbnail: this.$getImage(item.image_hash, this.commentImgParam),
          image: this.$getImage(item.image_hash, this.commentBigImgParam),
          caption: item.food_names[0],
          loaded: false,
        }))
      },
    },
    filters: {
      fixedNum(value) {
        return value !== undefined ? value.toFixed(1) : value;
      },
      percentNum(value) {
        return (value * 100).toFixed(1) + '%'
      },
    },
  }
</script>

<style lang="scss" scoped>
  .rating__container {
    position: relative;
    background-color: #f5f5f5;
    -webkit-overflow-scrolling: touch;
  }
  .rating__overview {
    margin-bottom: 16px;
    background-color: #fff;
  }
  .rating__content {
    padding: 20px 24px;
    background-color: #fff;
  }
  .rating__overview {
    display: flex;
    align-items: center;
    padding: 40px 0 50px 70px;
  }

  .overview__overall {
    margin-right: 90px;
    text-align: center;
  }
  .overview__overall-score {
    font-size: 50px;
    color: #ff6000;
  }
  .overview__overall-text {
    font-size: 24px;
    margin-bottom: 24px;
  }
  .overview__comparation {
    font-size: 24px;
    color: #929191;
  }
  .overview__specific {
  }
  .overview__item {
    margin-bottom: 24px;
    font-size: 26px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .overview__item-name {
    margin-right: 28px;
  }
  .overview__item-value {
    color: #ff6000;
  }
  .overview__deliver-time-value {
    color: #929191;
  }
  .overview__service-score {}
  .overview__food-score {}
  .overview__deliver-time {}

  .rating__tags {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 24px;
    margin-bottom: 12px;
    border-bottom: 1px solid #eee;
  }
  .rating__tag {
    white-space: nowrap;
    margin: 7px;
    padding: 0 18px;
    font-size: 24px;
    line-height: 56px;
    border-radius: 4px;
    color: #6d7885;
    background-color: #ebf5ff;
  }
  .tag_active {
    background-color: #0097ff;
    color: #fff;
  }
  .tag_unsatisfied {
    background-color: #f5f5f5;
    color: #aaa;
  }
  .tag_unsatisfied.tag_active {
    background-color: #ccc;
    color: #fff;
  }

  .rating__comments {
    font-size: 27px;
  }

  .comment {
    padding: 30px 0 24px;
    border-bottom: 1px solid #eee; /* no */
  }
    .comment__content {
      position: relative;
      padding-left: 80px;
    }
    .comment__avatar {
      position: absolute;
      left: 0;
      top: 0;
      width: 60px;
      height: 60px;
      border-radius: 50%;

      & > span {
        display: inline-block;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: url('/sprite-avatar.png');
        background-size: 60px;
      }
      & > img {
        wdith: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .comment__info {
      font-size: 26px;
    }
    .comment__heading {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .comment__username {
      margin-right: 12px;
      font-size: 26px;
      color: #333;
    }
    .comment__rated-at {
      font-size: 22px;
      color: #999;
    }
    .comment__rating {
      display: flex;
      align-items: center;
    }
    .comment__rating-start-text {
      font-size: 22px;
      margin-left: 8px;
      color: rgb(255, 96, 0);
    }
    .comment__rating-text {
      font-size: 28px;
      margin: 16px 0;
    }
    .comment__reply-content {
      position: relative;
      margin: 20px 0;
      padding: 20px;
      background-color: #f3f3f3;
      border-radius: 8px;
      &:after {
        content: '';
        position: absolute;
        left: 30px;
        bottom: 100%;
        width: 0;
        height: 0;
        border-style: solid;
        border-color: transparent transparent #f3f3f3;
        border-width: 0 16px 16px;
      }
    }
    .comment__food-images {}
    .comment__food-image {

      & > img {
        width: 300px;
        height: 300px;
      }
    }
    .comment__food-list {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      margin-top: 12px;
      margin-bottom: -8px;

      & > svg {
        width: 34px;
        height: 34px;
        margin-right: 12px;
      }
    }
    .comment__food {
      margin: 0 8px 8px 0;
      padding: 0 12px;
      height: 48px;
      line-height: 48px;;
      font-size: 22px;
      border-radius: 4px;
      color: #6d7885;
      background-color: #ebf5ff;
    }

  .star {
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    & img {
      width: 112px;
    }
  }
    .star__gray {
    }
    .star__active {
      position: absolute;
      z-index: 1;
      top: 0;
      width: 100%;
    }

  .infinite__feedback {
    font-size: 28px;
    background-color: #fff;
  }
</style>

<style lang="scss">
  .re-rating-comment__food-images {
    .viewer-thumbnail__item {
      width: 300px;
      height: 300px;
    }
  }
</style>