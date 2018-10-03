<template>
  <div v-if="item" class="specs__container">
    <div class="specs__title">{{ item.name }}</div>
    <div class="specs__details">
      <ul class="specs__attrs">
        <li class="specs__attr"
          v-for="(attr, index) in item.attrs" :key="attr.name + index"
        >
          <div class="specs__attr-title">{{ attr.name }}</div>
          <ul class="specs__attr-options">
            <li v-for="value in attr.values" :key="value + index"
              class="specs__attr-option"
              :class="{ 'specs__attr-option_active': selectedAttrs[index] && selectedAttrs[index].value === value }"
              @click.stop.prevent="selectAttr(index, attr.name, value)"
            >{{ value }}</li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="specs__result">
      <div class="specs__price">{{ item.specfoods[0].price }}
        <del class="specs__original-price">¥{{ item.specfoods[0].original_price }}</del>
      </div>
      <a class="specs__btn-add-cart" href="javascript"
        @click.stop.prevent="ok">选好了</a>
    </div>
  </div>

</template>

<script>

  export default {
    name: 'FoodSpec',
    components: {

    },
    props: {
      item: {
        type: Object,
        default() { return {} }
      }
    },
    data () {
      return {
        selectedAttrs: [],
      }
    },
    created() {
      this.init()
    },
    methods: {
      ok () {
        this.$emit('ok', {
          ...this.item,
          attrs: this.selectedAttrs,
        })
      },
      selectAttr(idx, name, value) {
        this.selectedAttrs.splice(idx, 1, { name, value })
      },
      init() {
        // 如果item为null或undefined, 则退出
        const item = this.item
        if (!item) return
        const attrs = item.attrs || [];
        this.selectedAttrs = attrs.map(attr => ({ name: attr.name, value: attr.values[0] }))
      }
    },
    watch: {
      item () {
        this.init()
      },
    }
  }
</script>

<style lang="scss" scoped>
  .specs__container {
    border-radius: 8px;
    background-color: #fff;
  }
  .specs__title {
    margin: 0;
    padding: 25px 60px;
    line-height: 45px;
    font-size: 32px;
    color: #333;
  }
  .specs__details {
    padding: 0 30px 40px;
  }
  .specs__attrs { }
  .specs__attr {
    margin-bottom: 10px;
  }
  .specs__attr-title {
    line-height: 40px;
    font-size: 26px;
    color: #666;
  }
  .specs__attr-options {
    display: flex;
  }
  .specs__attr-option {
    box-sizing: content-box;
    white-space: nowrap;
    padding: 0 18px;
    min-width: 100px;
    height: 48px;
    margin: 13px 30px 0 0;
    line-height: 48px;
    text-align: center;
    font-size: 24px;
    color: #666;
    border-radius: 40px;
    border: 1px solid #999; /* no */
  }
  .specs__attr-option_active {
    font-weight: 700;
    color: #3199e8;
    background-color: #f6fbff;
    border-color: #3199e8;
  }
  .specs__result {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 30px;
    border: 1px solid #eee; /* no */
    border-width: 1px 0;
    background-color: #f9f9f9;
  }
  .specs__price {
    line-height: 1;
    font-size: 42px;
    color: #ff6000;
    &:before {
      content: '\A5';
      display: inline-block;
      margin-right: 4px;
      font-size: 24px;
    }
  }
  .specs__original-price {
    font-size: 24px;
    color: #666;
  }
  .specs__btn-add-cart {
    display: inline-block;
    padding: 0 25px;
    line-height: 65px;
    text-align: center;
    border-radius: 6px;
    font-size: 28px;
    color: #fff;
    background-color: #3199e8;
    text-decoration: none;
  }
</style>