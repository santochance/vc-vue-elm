<template>
  <page title="订单备注">
    <section>
      <textarea v-model="inputedRemark" placeholder="填写额外对餐厅和骑手小哥备注的信息" maxlength="100"></textarea>
      <div v-if="remarkList">
        <div v-for="(option, i) in remarkList.remarks" :key="i"
          class="switch"
        >
          <span v-for="(item, j) in option" :key="j"
            class="switch-item"
            :class="{ 'switch-item_selected': selectedRemarks[i] && j in selectedRemarks[i] }"
            @click.stop.prevent="select(i, j, item)"
          >{{ item }}</span>
        </div>
      </div>
    </section>
    <button class="submit-btn" @click.stop.prevent="submit">确定</button>
  </page>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  import { fetchRemarkList } from '@/service/api'

  import Page from '@/components/Page'

  export default {
    name: 'Remark',
    components: {
      Page,
    },
    data () {
      return {
        inputedRemark: '',
        selectedRemarks: []
      }
    },
    computed: {
      ...mapState([
        'remarkList', 'usedRemark',
      ]),
    },
    created() {
      if (!this.remarkList) {
        return fetchRemarkList().then(remarkList => {
          this.SAVE_REMARK_LIST(remarkList)
        })
      }
      Promise.resolve().then(() => {
        const usedRemark = this.usedRemark
        if (usedRemark) {
          this.inputedRemark = usedRemark.inputed
          this.selectedRemarks = usedRemark.selected
        }
      })
    },
    methods: {
      ...mapMutations([
        'SAVE_REMARK_LIST', 'SAVE_USED_REMARK'
      ]),
      select(i, j, value) {
        let remarkOption = this.selectedRemarks[i] || []
        if (remarkOption[j] != undefined) {
          remarkOption.splice(j, 1)
        } else {
          remarkOption = []
          remarkOption[j] = value
        }
        this.selectedRemarks[i] = remarkOption
        this.selectedRemarks = [ ...this.selectedRemarks ]
      },
      // extract() {
      //   return this.selectedRemarks
      //     .map(v => v.join(''))
      //     .concat(this.inputedRemark)
      //     .filter(v => v)
      //     .join(',')
      // },
      submit() {
        this.SAVE_USED_REMARK({ inputed: this.inputedRemark, selected: this.selectedRemarks })
        this.$router.go(-1)
      },
    },
  }
</script>

<style lang="scss" scoped>
  section {
    padding: 32px;
    margin: 16px 0;
    background-color: #fff;
  }
  textarea {
    box-sizing: border-box;
    width: 100%;
    height: 224px;
    margin-bottom: 32px;
    padding: 32px;
    border: 1px solid #ccc; /* no */
    border-radius: 5px;
    font-size: 28px;
    background-color: #f9f9f9;
    color: #666;
    resize: none;
  }
  .switch {
    overflow: hidden;
    display: inline-block;
    margin: 0 20px 20px 0;
    font-size: 26px;
    border: 1px solid #ddd; /* no */
    border-radius: 8px;
  }
  .switch-item {
    display: inline-block;
    padding: 0 16px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    color: #666;

    &:after {
      content: '';
      position: relative;
      left: 17px;
      display: inline-block;
      width: 1px; /* no */
      height: 30px;
      line-height: 60px;
      vertical-align: middle;
      background-color: #ddd;
    }
    &:last-child:after {
      display: none;
    }
  }
  .switch-item_selected {
    background-color: #0186ff;
    color: #fff;
    &:after {
      background-color: #0186ff;
    }
  }
  .submit-btn {
    box-sizing: border-box;
    display: block;
    width: 92%;
    margin: 32px auto 0;
    padding: 26px;
    border-radius: 4px;
    font-size: 32px;
    background-color: #00e067;
    color: #fff;
    opacity: .98;
  }
</style>