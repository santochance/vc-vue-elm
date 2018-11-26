<template>
  <div>
    <FoodMenu :menu="menu"
      :shopDetails="shopDetails"
      :entities="entities"
      :selectedNums="selectedNums"
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
      :quantity="selectedNums.item[showingFood && showingFood.item_id]"
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
      selectedNums() {
        return this.entities.reduce((rst, ent) => {
          const itemId = ent.item_id
          const categoryId = ent.category_id
          rst.item[itemId] = (rst.item[itemId] || 0) + ent.quantity
          rst.category[categoryId] = (rst.category[categoryId] || 0) + ent.quantity
          return rst
        }, { item: {}, category: {} })
      },
    },
    methods: {
      /* Cart */
      ...mapMutations([
        'ADD_CART', 'REDUCE_CART', 'CLEAR_CART', 'SAVE_CURRENT_RESTAURANT_ID'
      ]),
      addCart(entity) {
        this.ADD_CART({
          ...entity,
          restaurant_id: this.shopDetails.id,
        })
      },
      reduceCart(entity) {
        this.REDUCE_CART({
          ...entity,
          restaurant_id: this.shopDetails.id,
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