<template>
  <div class="activity__container">
    <div class="activity__head">优惠活动</div>
    <div class="activity__content">
      <div v-for="activity in shopDetails.activities" :key="activity.id"
        class="activity__item">
        <tag class="activity__icon"
          :style="{fontSize: $toRem(26), backgroundColor: '#' + activity.icon_color}"
          >{{ activity.icon_name }}</tag>
        <span>{{ activity.tips }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import { Tag } from '@/components/common'

  export default {
    components: {
      Tag,
    },
    props: {
      shopDetails: Object,
    },
  }
</script>

<style lang="scss" scoped>
  .activity__container {
    padding: 40px 52px;
    background-color: #f5f5f5;
    box-shadow: 0 -1px 5px 0 rgba(0,0,0,.4);
  }
  .activity__head {
    margin-bottom: 30px;
    text-align: center;
    font-size: 34px;
    font-weight: 600;
  }
  .activity__content {
    overflow: auto;
    height: 380px;
  }
  .activity__item {
    margin-bottom: 23px;
    font-size: 26px;
  }
  .activity__icon {
    margin-right: 12px;
  }
</style>