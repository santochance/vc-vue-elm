<template>
  <div class="cart__entity-btns">
    <a v-if="quantity > 0" href="javascript:" class="cart__entity-btn-minus" @click.stop.prevent="reduceCart()">
      <svg><use xlink:href="#cart-minus"></use></svg>
    </a>
    <span v-if="quantity > 0" class="cart__entity-quantity">{{ quantity }}</span>
    <a v-if="item.attrs.length <= 0" href="javascript:" class="cart__entity-btn-add" @click.stop.prevent="addCart()">
      <svg><use xlink:href="#cart-add"></use></svg>
    </a>
    <a v-else href="javascript:" class="cart__entity-btn-spec" @click.stop.prevent="onShowSpec">
      <span class="cart__entitiy-btn-specBtn">选规格</span>
    </a>
  </div>
</template>

<script>
  /* eslint-disable no-console, no-debugger  */
  import { mapState, mapMutations } from 'vuex'

  export default {
    props: {
      item: Object // item 即购物车中的 entity
    },
    data () {
      return {

      }
    },
    computed: {
      ...mapState({
        entities(state) {
          let restaurant_id = this.item.restaurant_id
          let restaurant = state.cartMap[restaurant_id] || {}
          let entities = restaurant.entities || []
          return entities
        }
      }),
      quantity() {
        return this.entities.reduce((sum, enti) => {
          if (enti.item_id === this.item.item_id) {
            sum += enti.quantity;
          }
          return sum;
        }, 0)
      },
    },
    methods: {
      ...mapMutations([
        'ADD_CART', 'REDUCE_CART',
      ]),
      addCart() {
        this.ADD_CART({
          ...this.item,
          ...this.item.specfoods[0],
        })
      },
      reduceCart() {
        this.REDUCE_CART({
          ...this.item,
          ...this.item.specfoods[0],
        })
      },
      onShowSpec() {
        this.$emit('showspec', this.item)
      },
    }
  }
</script>

<style lang="scss" scoped>
  .cart__entity-btns {
    white-space: nowrap;
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
    padding: 7px;
    text-decoration: none;
  }
  .cart__entity-quantity {
    overflow: hidden;
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    font-size: 28px;
    color: #666;
    min-width: 30px;
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