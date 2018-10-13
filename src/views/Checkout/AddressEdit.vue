<template>
  <page v-if="address" title="编辑地址">
    <div class="address-form">
      <div class="address-form__content">        
        <div class="address-form__control">
          <div class="label-wrap">联系人</div>
          <div class="input-group-wrap">
            <div class="input-wrap">
              <input type="text" v-model="address.name">
            </div>
            <radio class="input-wrap"
              :options="['先生', '女士']"
              :checkedValue="['先生', '女士'][address.sex - 1]"
              @change="address.sex = Number($event.index) + 1"
            ></radio>
          </div>
        </div>
        <div class="address-form__control">
          <div class="label-wrap">电话</div>
          <div class="input-wrap">
            <input type="text" v-model="address.phone">
          </div>
        </div>
        <div class="address-form__control">
          <div class="label-wrap">
            <p>地址</p>
            <p>门牌号</p>
          </div>
          <div class="input-group-wrap">
            <div class="input-wrap">
              <input type="text" v-model="address.address">
              <svg><use xlink:href="#arrow-right"></use></svg>
            </div>
            <div class="input-wrap">
              <textarea rows="2" maxlength="100"
                placeholder="10号楼5层501室"
                v-model="address.address_detail"></textarea>
              <svg><use xlink:href="#edit"></use></svg>
            </div>
          </div>
        </div>
        <div class="address-form__control">
          <div class="label-wrap">标签</div>
          <radio class="input-wrap"
            :cancelable="true"
            :options="['家', '学校', '公司']"
            :checkedValue="['家', '学校', '公司'][address.tag_type - 1]"
            @change="address.tag_type = Number($event.index) + 1"
          ></radio>
        </div>
      </div>
      <div class="form-button-wrap">
        <button class="form-button"
          @click="onSave"
        >确定</button>
      </div>
    </div>
  </page>
</template>

<script>
  import { mapMutations } from 'vuex'

  import Page from '@/components/Page'
  import Radio from '@/components/Radio'

  export default {
    name: 'AddressEdit',
    components: {
      Page,
      Radio,
    },
    props: {

    },
    data() {
      return {
        address: null,
      }
    },
    created() {
      const address = this.$store.state.editingAddress
      if (!address) {
        return this.$router.back()
      }
      this.address = { ...address }
    },
    computed: {
      // ...mapState({
      //   address(state) {
      //     return { ...state.editingAddress }
      //   },
      // }),
    },
    methods: {
      /* events */
      onSave() {
        this.$emit('save')
        this.SAVE_ADDRESS(this.address)
        this.$router.back()
      },
      ...mapMutations([
        'SAVE_ADDRESS',
        'REMOVE_ADDRESS',
      ]),
    }
  }
</script>

<style lang="scss" scoped>
  .address-form__content {
    padding-left: 30px;
    background-color: #fff;
  }
  .form-button-wrap {
    padding: 40px 30px;
  }
  .form-button {
    text-align: center;
    font-size: 36px;
    font-weight: 700;
    line-height: 38px;
    padding: 25px 0;
    width: 100%;
    background-color: #00d762;
    color: #fff;
  }

  .address-form__control {
    display: flex;
    border-bottom: 1px solid #eee; /* no */
    &:first-child {
      border-top: 2px solid #eee; /* no */
    }
    & input,
    & textarea {
      outline: none;
      border: none;
      font-size: 30px;
      line-height: 36px;
      padding-left: 0;
      padding-right: 30px;
      width: 100%;
      flex-grow: 1;
      color: #666;
      -webkit-tap-highlight-color: transparent;
    }
  }

  .label-wrap {
    flex-basis: 130px;
    font-size: 30px;
    font-weight: 700;
    line-height: 36px;
    padding: 28px 0;
    & > p:first-child {
      margin-bottom: 60px;
    }
  }
  .input-wrap {
    flex-grow: 1;
    display: flex;
    font-size: 24px;
    padding:  28px 0;
    border-bottom: 1px solid #eee; /*no*/
    & > svg {
      width: 36px;
      height: 38px;
      margin-right: 24px;
    }
  }
  .input-group-wrap {
    flex-grow: 1;
  }
</style>