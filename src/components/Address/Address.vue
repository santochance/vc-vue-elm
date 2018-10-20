<template>
  <page :title="title"
    class="address__container"
  >
    <div class="address__main">
      <a class="address__btn-add" href="javascript:" @click="openEditor()">
        <img class="address__icon-add" src="./add.png" alt="">
        <span class="">新增收货地址</span>
      </a>
      <ul>
        <li v-for="address in addressList" :key="address.id"
          class="address__addr-item"
          @click.stop.prevent="mode === 'select' ? selectAddr(address) : null">
          <div  v-if="mode === 'select'"
            class="address__select">
            <img v-if="selectedAddress && address.id === selectedAddress.id" src="./checked.png" alt="">
          </div>
          <div class="address__body">
            <div class="address__title ellipsis">
              <span class="address__name">{{ address.name }}</span><span class="address__sex">{{ ['', '先生', '女士'][address.sex] }}</span><span class="address__phone">{{ address.phone }}</span>
            </div>
            <div class="address__detail">
              <span v-if="address.tag_type" class="address__tag" :content="['', '家', '学校', '公司'][address.tag_type]">{{ ['', '家', '学校', '公司'][address.tag_type] }}</span>
              {{ address.address + address.address_detail }}
            </div>
          </div>
          <div class="address__btn-edit" @click.stop.prevent="openEditor(address)">
            <svg><use xlink:href="#edit"></use></svg>
          </div>
          <div class="address__btn-delete" @click.stop.prevent="openConfirm(address)">
            <svg><use xlink:href="#delete"></use></svg>
          </div>
          <!-- <button class="" @click.stop.prevent="openConfirm(address)">删除</button> -->
        </li>
      </ul>
      <!-- 
      <div v-if="editorShow && editingEntity" class="editor">
        <form action="">
          <input type="text" v-model="editingEntity.location">
          <button @click.stop.prevent="saveEditor(editingEntity)">保存</button>
          <button @click.stop.prevent="closeEditor">取消</button>
        </form>
      </div>
       -->
      <!-- 
      <div v-if="confirmShow && confirmingEntity" class="confirm">
        <h2>删除地址</h2>
        <p>确定删除该收货地址？</p>
        <button @click.stop.prevent="submitConfirm(confirmingEntity)">确认</button>
        <button @click.stop.prevent="closeConfirm">取消</button>
      </div>
      -->
      <modal :visible="confirmShow" :closable="false"
        @close="closeConfirm"
      >
        <div class="confirm-delete">
          <h2 class="confirm-delete__title">删除地址</h2>
          <p class="confirm-delete__content">确定删除该地址</p>
          <div class="confirm-delete__btns">
            <button class="confirm-delete__btn confirm-delete__btn-cancel"
              @click="closeConfirm"
            >取消</button>
            <button class="confirm-delete__btn confirm-delete__btn-ok"
              @click="submitConfirm"
            >确认</button>
          </div>
        </div>
      </modal>
    </div>
  </page>
</template>

<script>
  import { mapState, mapGetters, mapMutations } from 'vuex'
  import { fetchAddressList } from '@/service/api'
  import Page from '@/components/Page'
  import { Modal } from '@/components/common'

  export default {
    name: 'Address',
    components: {
      Page,
      Modal,
    },
    props: {
      title: {
        type: String,
      },
      // normal是用户中心的收货地址，select是下单时选择地址
      mode: {
        type: String,
        default: 'normal',
      }
    },
    data () {
      return {
        editorShow: false,
        editingEntity: null,
        confirmShow: false,
        confirmingEntity: null,
      }
    },
    created() {
      fetchAddressList().then(addrList => {
        this.SAVE_ADDRESS_LIST(addrList)
      })
    },
    // beforeRouteEnter(to, from, next) {
    //   if (!from.path.match('/checkout')) {
    //     return next('/checkout')
    //   }
    //   next()
    // },
    computed: {
      ...mapState([
        'addressList',
        'selectedAddressId',
      ]),
      ...mapGetters([
        'selectedAddress',
      ]),
    },
    methods: {
      ...mapMutations([
        'SAVE_ADDRESS_LIST', 
        'ADD_ADDRESS', 
        'SAVE_ADDRESS', 
        'REMOVE_ADDRESS', 
        'SAVE_SELECTED_ADDRESS', 
        'SAVE_EDITING_ADDRESS',
      ]),
      getUid: (function () {
        let count = 0
        return function () {
          return count++
        }
      })(),
      selectAddr(address) {
        this.SAVE_SELECTED_ADDRESS(address)
        this.$router.go(-1)
      },
      addAddr(address) {
        const newAddr = {
          id: this.getUid(),
          location: address.location,
          name: '家',
          phone: '13812345678'
        }
        this.ADD_ADDRESS(newAddr)
      },
      saveAddr(address) {
        this.SAVE_ADDRESS(address)
      },
      removeAddr(address) {
        this.REMOVE_ADDRESS(address)
      },
      openEditor(entity) {
        this.editingEntity = {...entity} || {}
        this.editorShow = true

        this.SAVE_EDITING_ADDRESS(this.editingEntity)
        if (entity) {
          this.$router.push(`${this.$route.path}/edit`)
        } else {
          this.$router.push(`${this.$route.path}/create`)
        }
      },
      closeEditor() {
        this.editingEntity = null
        this.editorShow = false
      },
      saveEditor(entity) {
        if (entity.id == null) {
          this.addAddr(entity)
        } else {
          this.saveAddr(entity)
        }
        this.closeEditor()
      },
      openConfirm(entity) {
        console.log('debug - openConfirm')
        this.confirmingEntity = {...entity} || {}
        this.confirmShow = true
      },
      closeConfirm() {
        this.confirmingEntity = null
        this.confirmShow = false
      },
      submitConfirm() {
        this.removeAddr(this.confirmingEntity)
        this.closeConfirm()
      },
    },
  }
</script>

<style lang="scss" scoped>
  .address__container {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
  .address__main {
    box-sizing: border-box;
    flex: 1;
    background-color: #efeff4;
    padding-bottom: 104px;
  }
  .address__btn-add {
    position: fixed;
    z-index: 5;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 104px;
    text-align: center;
    line-height: 38.4px;
    font-size: 32px;
    border-top: 2px solid #ddd;
    background: #fff;
    color: #3190e8;
    text-decoration: none;
  }
  .address__icon-add {
    display: block;
    width: 40px;
    height: 40px;
    margin-right: 12px;
  }
  .address__addr-item {
    box-sizing: border-box;
    display: flex;
    min-height: 136px;
    padding: 30px;
    font-size: 24px;
    border-bottom: 1px solid #ddd;
    border-top: 2px solid #ddd;
    background-color: #fff;
  }
  .address__select {
    display: flex;
    align-items: center;
    flex-basis: 55px;
    min-width: 55px;
    img {
      width: 40px;
      height: 40px;
    }
  }
  .address__body {
    flex: 1;
    margin-right: 6px;
  }
  .address__title {
    display: flex;
    margin-bottom: 8px;
    font-size: 35px;
    color: #666;
  }
  .address__name {
    font-weight: 700;
    color: #333;
  }
  .address__sex {
    padding: 0 12px 0 6px;
  }
  .address__phone {}
  .address__detail {
    position: relative;
    display: flex;
    align-items: center;
    font-size: 28px;
  }
  .address__tag {
    // position: absolute;
    // z-index: 1;
    // left: 0;
    // top: 0;
    margin-right: 6px;
    padding: 6px;
    white-space: nowrap;
    text-align: center;
    line-height: 20px;
    font-size: 20px;
    border: 1px solid #ff5722; /* no */
    border-radius: 1px;
    color: #ff5722;
  }
  .address__btn-edit {
    display: flex;
    align-items: center;
    flex-basis: 62px;
    svg {
      width: 36px;
      height: 38px;
    }
  }

  .address__btn-delete {
    display: flex;
    align-items: center;
    flex-basis: 30px;
    svg {
      width: 30px;
      height: 30px;
    }
  }

  .confirm-delete {
    text-align: center;
    padding: 40px 30px;
    width: 640px;
    border-radius: 8px;
    background: #fff;
  }
  .confirm-delete__title {
    font-size: 36px;
    font-weight: 700;
    margin: 18px 32px;
    color: #333;
  }
  .confirm-delete__content {
    font-size: 26px;
    line-height: 1.5;
    color: #666;
  }
  .confirm-delete__btns {
    display: flex;
    justify-content: space-between;
    margin-top: 26px;
  }
  .confirm-delete__btn {
    flex: 1;
    font-size: 32px;
    font-weight: 500;
    height: 86px;
    padding: 0;
    border: 1px solid rgba(0, 0, 0, .15); /*no*/
    border-radius: 4px;
    background: none;
    color: rgba(0, 0, 0, .87);
    &:active {
      opacity: .7;
    }
  }
  .confirm-delete__btn-cancel {

  }
  .confirm-delete__btn-ok {
    border: none;
    margin-left: 20px;
    background: #3190e8;
    color: #fff;
  }
</style>