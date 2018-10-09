<template>
  <div>
    <FoodMenu :menu="menu"
      :shopDetails="shopDetails"
      :entities="entities"
      @add="addCart"
      @reduce="reduceCart"
      @showspec="openSpecPanel"
      @showdetail="openFoodDetail"
     />
    <CartView :entities="entities"
      :minAmount="shopDetails && shopDetails.float_minimum_order_amount"
      @addcart="addCart"
      @reducecart="reduceCart"
      @clearcart="clearCart"
      @submitcart="toCheckout"
    />
    <modal :visible="specShow" panel="center" :closable="false" :zIndex="1001" @close="closeSpecPanel">
      <FoodSpec :item="specItem"
        @ok="saveSpecPanel"></FoodSpec>
    </modal>
    <FoodDetail :visible="foodDetailVisible"
      :food="showingFood"
      @close="closeFoodDetail"
      @add="addCart"
      @reduce="reduceCart"
      @showspec="openSpecPanel"
    ></FoodDetail>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'

  import { Modal } from '@/components/common'

  import FoodMenu from './FoodMenu'
  import CartView from './CartView'
  import FoodSpec from './FoodSpec.vue'
  import FoodDetail from './FoodDetail'


  export default {
    name: 'OrderFood',
    components: {
      Modal,
      FoodMenu,
      CartView,
      FoodSpec,
      FoodDetail,
    },
    props: {
      shopDetails: Object,
      menu: Array,
    },
    data() {
      return {
        // FoodSpec modal
        specShow: false,
        specItem: null, // FoodSpec 组件显示的 food 实体
        /* 食品明细面板 */
        showingFood: null,
        foodDetailVisible: false,
      }
    },
    computed: {
      entities() {
        const state = this.$store.state
        try {
          return state.cartMap[this.shopDetails.id].entities
        } catch(e) {
          return []
        }
      },
    },
    methods: {
      /* Cart */
      ...mapMutations([
        'ADD_CART', 'REDUCE_CART', 'CLEAR_CART', 'SAVE_CURRENT_RESTAURANT_ID'
      ]),
      addCart(entity) {
        this.ADD_CART({
          restaurant_id: this.shopDetails.id,
          ...entity,
        })
      },
      reduceCart(entity) {
        this.REDUCE_CART({
          restaurant_id: this.shopDetails.id,
          ...entity,
        })
      },
      clearCart() {
        this.CLEAR_CART({
          restaurant_id: this.shopDetails.id,
        })
      },
      toCheckout() {
        this.SAVE_CURRENT_RESTAURANT_ID(this.shopDetails.id)
        this.$router.push('/checkout')
      },

      /*
        Spec Panel
       */
      openSpecPanel(food) {
        this.specShow = true
        this.specItem = food
      },
      closeSpecPanel() {
        this.specShow = false
        this.specItem = null
      },
      saveSpecPanel(entity) {
        this.addCart(entity)
        this.closeSpecPanel()
      },
      /*
        Food Detail Panel
       */
      openFoodDetail(food) {
        this.showingFood = food
        this.foodDetailVisible = true
      },
      closeFoodDetail() {
        this.showingFood = null
        this.foodDetailVisible = false
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>