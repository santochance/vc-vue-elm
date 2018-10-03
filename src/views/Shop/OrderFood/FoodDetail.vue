<template>
  <transition name="slide">
    <div v-if="visible && food" class="modal__container">
      <div class="modal__overlay" @click.stop.prevent="onClose"></div>
      <div class="modal__panel food-detail__container">
        <img :src="$getImage(food.image_path, foodDetailImgParam)" alt="">
        <div class="food-detail__info">
          <h2 class="food-detail__name ellipsis">{{ food.name }}</h2>
          <div class="food-detail__service">
            <span class="food-detail__sales">月售{{ food.month_sales }}份 </span>
            <span class="food-detail__satisfy-rate">好评率{{ food.satisfy_rate }}</span>
          </div>
          <div class="food-detail__price-row">
            <span class="food-detail__price">{{ food.specfoods[0].price }}</span>
            <cart-button class="food-detail__cart-btns" :item="food" @showspec="onShowSpec" />
          </div>
          <div class="food-detail__description">{{ food.description }}</div>
        </div>
        <div class="modal__close-btn" @click.stop.prevent="onClose">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24" class="foodpanel-closeIcon_3a1DT">
            <defs><path id="a" d="M13.132 12l6.47-6.47a.75.75 0 0 0-1.061-1.06l-6.47 6.47-6.47-6.47a.75.75 0 0 0-1.06 1.06L11.01 12l-.072.071.071.071-6.47 6.47a.75.75 0 0 0 1.061 1.06l6.47-6.47 6.47 6.47a.75.75 0 0 0 1.06-1.06l-6.47-6.47.072-.07-.071-.072z"></path></defs>
            <g fill="none" fill-rule="evenodd"><use fill="#fff" fill-rule="nonzero" xlink:href="#a"></use><path d="M0 0h24v24H0z"></path></g>
          </svg>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import CartButton from './CartButton'

  export default {
    name: 'FoodDetail',
    components: {
      CartButton,
    },
    props: {
      visible: {
        type: Boolean,
        default: false,
      },
      food: Object,
    },
    data() {
      return {
        foodDetailImgParam: '?imageMogr/format/webp/thumbnail/!375x375r/gravity/Center/crop/375x375/',
      }
    },
    methods: {
      onClose() {
        this.$emit('close')
      },
      onShowSpec() {
        this.$emit('showspec', this.food)
      },
    },
  }
</script>

<style lang="scss" scoped>
// food-detail block
  .food-detail__container {
    position: relative;
    background: #fff;
    height: 100%;
    width: 100%;
    & > img {
      width: 100%;
    }
  }
    .food-detail__info {
      padding: 30px 30px 0 30px

    }
    .food-detail__name {
      font-size: 40px;
      font-weight: 700;
      width: 560px;
      margin-bottom: 18px;
    }
    .food-detail__service {
      display: flex;
      margin-bottom: 18px;
      font-size: 22px;
      color: #666;
    }
    .food-detail__sales {

    }
    .food-detail__satisfy-rate {}
    .food-detail__price-row {
      display: flex;
      align-items: center;
      margin-bottom: 18px;
    }
    .food-detail__price {
      margin-right: 10px;
      font-size: 36px;
      color: rgb(255, 83, 57);
      &:before {
        content: '\A5';
        display: inline-block;
        font-size: 28px;
      }
    }
    .food-detail__cart-btns {
      position: absolute;
      right: 30px;
    }
    .food-detail__description {
      font-size: 22px;
      color: #666;
      line-height: 28px;
    }

// modal block
  .modal__container {
    position: fixed;
    z-index: 1000;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;

  }
    .modal__overlay {
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: -1;

      background-color: rgba(0, 0, 0, .6);
    }
    .modal__close-btn {
      position: absolute;
      z-index: 1;
      right: 30px;
      top: 16px;
      padding: 8px;
      background-color: rgba(0,0,0,.2);
      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;
      & > svg {
        height: 40px;
        width: 40px;
      }
    }

  .slide-enter-active,
  .slide-leave-active {
    transition: transform .3s;
  }
  .slide-enter,
  .slide-leave-to {
    transform: translateY(100%);
  }
</style>