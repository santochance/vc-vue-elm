<template>
  <div class="radio">
    <div v-for="(option, idx) in options" :key="idx"
      class="radio__item"
      :class="{ radio__item_checked: checkedOption === option }"
      @click="onClick(option, idx)"
    >{{ option }}</div>
  </div>
</template>

<script>

  export default {
    name: 'Radio',
    components: {
      
    },
    props: {
      options: {
        type: Array,
      },
      cancelable: {
        type: Boolean,
      },
      checkedValue: {
        type: String,
      }
    },
    data() {
      return {
        checkedOption: '',
      }
    },
    created() {
      this.checkedOption = this.checkedValue
    },
    methods: {
      onClick(option, idx) {
        const oldValue = this.checkedOption
        let newValue = option

        this.$emit('click', { value: newValue, index: idx })

        if (this.cancelable && newValue === oldValue) {
          newValue = ''
          idx = -1
        }
        if (newValue !== oldValue) {
          this.$emit('change', { value: newValue, index: idx })
        }

        this.checkedOption = newValue
      },
    },
  }
</script>

<style lang="scss" scoped>
  .radio {
    display: flex;
  }
  .radio__item {
    text-align: center;
    font-size: 28px;
    line-height: 56px;
    width: 136px;
    margin-right: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
  }
  .radio__item_checked {
    color: #2395ff;
    background-color: #eef7ff;
    border-color: rgba(35, 149, 255, .18);    
  }
</style>