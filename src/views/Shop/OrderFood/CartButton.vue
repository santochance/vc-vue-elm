<template>
  <div class="cart__entity-btns">
    <template v-if="item.attrs.length <= 0">
      <a v-if="quantity > 0" href="javascript:" class="cart__entity-btn-minus" @click.stop.prevent="onReduce">
        <svg><use xlink:href="#cart-minus"></use></svg>
      </a>
      <span v-if="quantity > 0" class="cart__entity-quantity">{{ quantity }}</span>
      <a href="javascript:" class="cart__entity-btn-add" @click.stop.prevent="onAdd">
        <svg><use xlink:href="#cart-add"></use></svg>
      </a>
    </template>
    <template v-else>
      <a v-if="quantity > 0" href="javascript:" class="cart__entity-btn-minus" @click.stop.prevent="showToast">
        <svg><use xlink:href="#cart-minus"></use></svg>
      </a>
      <span v-if="quantity > 0" class="cart__entity-quantity">{{ quantity }}</span>
      <a href="javascript:" class="cart__entity-btn-spec" @click.stop.prevent="onShowSpec">
        <span class="cart__entitiy-btn-specBtn">选规格</span>
      </a>
    </template>
  </div>
</template>

<script>
  import { Toast } from '@/components/common'

  export default {
    props: {
      item: {
        type: Object,
        required: true,
      }, // item 是 menu 数据中的 food 实体
      quantity: {
        type: Number,
        default: 0,
      }
    },
    data () {
      return {

      }
    },
    computed: {

    },
    methods: {
      /* events */
      onAdd() {
        this.$emit('add', {
          ...this.item,
          ...this.item.specfoods[0],
        })
      },
      onReduce() {
        this.$emit('reduce', {
          ...this.item,
          ...this.item.specfoods[0],
        })
      },
      onShowSpec() {
        this.$emit('showspec', this.item)
      },
      showToast() {
        Toast.open({
          content: '多规格食品只能在购物车中减少数量',
          mask: false,
        })
      },
    }
  }
</script>

<style lang="scss" scoped>
  .cart__entity-btns {
    display: flex;
    align-items: center;
    white-space: nowrap;
    min-height: 50px;
    svg {
      width: 40px;
      height: 40px;
      vertical-align: middle;
      fill: #2395ff;
    }
  }
  .cart__entity-btn-minus,
  .cart__entity-btn-add {
    display: inline-block;
    vertical-align: middle;
    text-decoration: none;
  }
  .cart__entity-quantity {
    overflow: hidden;
    display: inline-block;
    vertical-align: middle;
    margin: 8px;
    text-align: center;
    font-size: 28px;
    color: #666;
    min-width: 36px;
    max-width: 56px;
  }
  .cart__entity-btn-spec {
    display: inline-block;
    vertical-align: middle;
    padding: 0 15px;
    line-height: 50px;
    font-size: 24px;
    color: #fff;
    background-color: #3199e8;
    border-radius: 26px;
    text-decoration: none;
  }
</style>