<template>
  <page :title="mode === 'create' ? '添加地址' : '编辑地址'">
    <template v-if="address">
      <div class="address-form">
        <div class="address-form__content">
          <div class="address-form__control">
            <div class="label-wrap">联系人</div>
            <div class="input-group-wrap">
              <div class="input-wrap">
                <input type="text" v-model="address.name"
                  placeholder="你的姓名"
                  name="name"
                  v-validate="'required'"
                >
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
              <input type="text" v-model="address.phone"
                placeholder="你的手机号"
                name="phone"
                v-validate="{ required: true, regex: /^1\d{10}$/ }"
              >
            </div>
          </div>
          <div class="address-form__control">
            <div class="label-wrap">
              <p>地址</p>
              <p>门牌号</p>
            </div>
            <div class="input-group-wrap">
              <div class="input-wrap">
                <input type="text" v-model="address.address"
                  placeholder="小区/写字楼/学校等"
                  name="address"
                  v-validate="'required'"
                >
                <svg><use xlink:href="#arrow-right"></use></svg>
              </div>
              <div class="input-wrap">
                <textarea rows="2" maxlength="100"
                  placeholder="10号楼5层501室"
                  v-model="address.address_detail"
                ></textarea>
                <svg style="visibility: hidden;"><use xlink:href="#edit"></use></svg>
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
    </template>
  </page>
</template>

<script>
  import { mapMutations } from 'vuex'

  import Page from '@/components/Page'
  import Radio from '@/components/Radio'
  import Toast from '@/components/common/Toast'
  import Vue from 'vue'
  import(/* webpackChunkName: 'vee-validate' */ 'vee-validate')
    .then(VeeValidate => Vue.use(VeeValidate))


  const debug = true

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
        // address: null,
        // mode: '',

        errorMsgs: {
          name: {
            required: '请输入联系人',
          },
          phone: {
            required: '请输入正确的手机号',
            regex: '请输入正确的手机号',
          },
          address: {
            required: '请输入确定的小区/写字楼/学校等地址信息',
          },
        },
      }
    },
    computed: {
      mode() {
        return this.$route.path.split('/').slice(-1)[0]
      },
      address() {
        return this.$store.state.editingAddress
      },
    },
    created() {
      debug && (window[this.$options.name] = this)

    },
    methods: {
      /* events */
      onSave() {
        return this.$validator.validate()
          .then((valid) => {
            if (valid) {
              this.$emit('save')
              this.SAVE_ADDRESS(this.address)
              this.$router.back()
            } else {
              const error = this.errors.items[0]
              if (error) {
                const msg = this.errorMsgs[error.field] && this.errorMsgs[error.field][error.rule]
                  Toast.open({
                    content: msg,
                    mask: false,
                  })
              }
            }
          })
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