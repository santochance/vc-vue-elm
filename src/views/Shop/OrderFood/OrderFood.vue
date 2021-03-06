<template>
  <div v-if="cartClient">
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
      :cartClient="cartClient"
      @addcart="addCart"
      @reducecart="reduceCart"
      @clearcart="clearCart"
      @submitcart="toCheckout"
    />
    <modal :visible="specShow" panel="center" :closable="false" :zIndex="1001" @close="closeSpecPanel" @change="specShow = $event">
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
  import { updateCart } from '@/service/api'
  import { mapState, mapMutations } from 'vuex'

  import { Modal, Toast } from '@/components/common'

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

        cartClient: null,
      }
    },
    computed: {
      ...mapState(['geohash', 'userId']),
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
    created() {
      this.updateRemoteCart()
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
        this.updateRemoteCart([entity.sku_id])
      },
      reduceCart(entity) {
        this.REDUCE_CART({
          ...entity,
          restaurant_id: this.shopDetails.id,
        })
        this.updateRemoteCart([entity.sku_id])
      },
      clearCart() {
        this.CLEAR_CART({
          restaurant_id: this.shopDetails.id,
        })
        this.updateRemoteCart([])
      },
      updateRemoteCart(sku_ids) {
        sku_ids = sku_ids || []
        var payload = {
          geohash: this.geohash,
          user_id: this.userId,
          restaurant_id: this.shopDetails.id,
          entities: this.entities.map(entity => {
            let e = this.pick(entity, ['id', 'sku_id', 'quantity', 'new_specs', 'attrs', 'specs'])
            e.new_specs = e.specs
            delete e.specs
            return e
          }),
          sku_ids,
        }

        updateCart(payload).then((res) => {
          // 更新本地购物车
          this.cartClient = res
        }).catch((err) => {
          Toast.open({
            content: err.message,
            mask: false,
          })
        })
      },
      pick(obj, props) {
        // non-object
        if (!obj || typeof obj !== 'object' && typeof obj !== 'function') {
          return obj
        }

        // null, undefined, [] or ''
        if (!props || !props.length) {
          return obj
        }

        props = Array.isArray(props) ? props : [props]
        return props.reduce((rst, prop) => {
          if (prop in obj) {
            rst[prop] = obj[prop]
          }
          return rst
        }, {})
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