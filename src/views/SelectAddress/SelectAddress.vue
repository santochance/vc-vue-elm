<script>
  import { mapState, mapActions } from 'vuex'
  import { fetchAddressList, searchNearby } from '@/service/api'
  import Page from '@/components/Page'

  const debug = true

  export default {
    name: 'SelectAddress',
    /* options: 模板依赖 */
    components: {
      Page,
    },
    // filters: {},
    // directives: { bind, inserted, update, componentUpdated, unbind },
    // v-directive:arg.modifiers="value(expression)"

    /* options: 接口 */
    props: {
      // propName: {
      //   type, required, default, validator,
      // }
    },
    // model: {},

    /* options: 本地状态 */
    data() {
      return {
        query: '',
        addressList: [],
        results: [],
        currentAddress: {
          geohash: this.$store.state.geohash,
          locationName: this.$store.state.locationName,
        },
        loaded: false,
        reloading: false,
        emptyTip: {
          img: 'no-log',
          title: '没有搜索结果',
          content: '换个关键字试试',
        },

      }
    },
    computed: {
      ...mapState([
        'useId', 'cityName', 'longitude', 'latitude', 'locationName',
      ]),
      resultListVisible() {
        return this.query && this.results.length
      }
    },

    /* options: 事件 */
    // watch: {}

    // beforeCreate, created, beforeMount, mounted, beforeUpdate, update,
    // activated, deactivated, beforeDestroy, destroyed
    created() {
      debug && (window[this.$options.name] = this)

      this.fetchAddressList()
    },
    activated() {
      this.fetchAddressList()
    },
    watch: {
      query(value, oldValue) {

        debug && console.log('query:', value)

        if (value && value !== oldValue) {
          this.search(value)
        }
      },
    },
    methods: {
      fetchAddressList() {
        this.loaded = false
        return fetchAddressList()
          .then((addressList) => {
            this.addressList = addressList.filter(address => {
              return address.poi_type === 0 && address.st_geohash !== '0'
            })
            this.loaded = true
            this.addressList.length || this.$refs.input.focus()
          })
      },
      search(keyword) {
        if (keyword) {
          searchNearby({
            keyword,
            latitude: this.latitude,
            longitude: this.longitude,
          }).then((pois) => {
            this.results = pois
          })
        }
      },
      select(address) {
        this.query = ''
        if (!address) {
          address = {
            geohash: this.currentAddress.geohash,
            address: this.currentAddress.address,
            cityId: this.currentAddress.city_id,
            districtId: this.currentAddress.district_id
          }
        }
        this.$emit('select', address)
      },
      reLocate() {
        this.reloading = true

        return this.getCurrentPosition()
          .then(({ coords }) => {
            return this.reverseGeoCoding(coords)
          })
          .then(({ name, geohash }) => {
            this.currentAddress.locationName = name
            this.currentAddress.geohash = geohash
            this.reloading = false
          })
      },
      back() {

      },
      ...mapActions([
        'getCityList',
        'getCurrentPosition',
        'reverseGeoCoding'
      ]),
      chooseCity() {
        this.getCityList()
      },
    },
  }
</script>

<template>
  <page title="选择收货地址"
    class="p-select-address p-select-address__box"
  >
    <div class="p-select-address__search-bar">
      <div class="p-select-address__city-btn">
        <span class="p-select-address__city-name ellipsis">{{ cityName }}</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 8" class="">
          <path fill="#333" fill-rule="evenodd" d="M5.588 6.588c.78.78 2.04.784 2.824 0l5.176-5.176c.78-.78.517-1.412-.582-1.412H.994C-.107 0-.372.628.412 1.412l5.176 5.176z">
          </path>
        </svg>
      </div>
      <div class="p-select-address__search-box">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="p-select-address__search-icon">
          <path fill-opacity=".38" d="M14.778 13.732a.739.739 0 1 1-1.056 1.036l-2.515-2.565a.864.864 0 0 1-.01-1.206 4.894 4.894 0 0 0 1.357-3.651c-.126-2.492-2.156-4.52-4.648-4.647a4.911 4.911 0 0 0-5.16 5.163c.126 2.475 2.13 4.496 4.605 4.642.451.026.896-.008 1.326-.1a.739.739 0 0 1 .308 1.446c-.56.12-1.137.164-1.72.13-3.227-.19-5.83-2.815-5.995-6.042a6.39 6.39 0 0 1 6.71-6.715c3.25.165 5.884 2.8 6.05 6.048a6.37 6.37 0 0 1-1.374 4.3l2.12 2.161z">
          </path>
      </svg>
        <input type="search" class="p-select-address__input"
          placeholder="请输入地址"
          v-model="query"
          ref="input"
        >
      </div>
    </div>
    <section class="p-select-address__section"
      v-show="!resultListVisible"
    >
      <h4>当前地址</h4>
      <div class="p-select-address__current ellipsis">
        <span>{{ currentAddress.locationName }}</span>
        <span class="p-select-address__relocate"
          @click="reLocate"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15"
            :class="{ 'p-select-address__reloading': reloading }"
          >
            <g fill="none" fill-rule="evenodd"><circle cx="7.5" cy="7.5" r="7" stroke="#2395FF"></circle><path fill="#2395FF" d="M7 0h1v5H7zM7 10h1v5H7zM10 7h5v1h-5zM0 7h5v1H0z"></path>
            </g>
          </svg>
          <span>重新定位</span>
        </span>
      </div>
    </section>
    <section class="p-select-address__section"
      v-show="!resultListVisible"
    >
      <h4>收货地址</h4>
      <div class="p-select-address__address-list">
        <div class="p-select-address__address-item"
          v-for="address in addressList" :key="address.id"
          @click="select(address)"
        >
          <div class="p-select-address__address-line">
            <span class="p-select-address__address-name"
            >{{ address.name }}</span>
            <span class="p-select-address__address-sex">{{ ['先生', '女士'][address.sex - 1] }}</span>
            <span>{{ address.phone }}</span>
          </div>
          <div class="p-select-address__address-address">
            <span>{{ address.address }}</span>
          </div>
        </div>
      </div>
    </section>
    <div class="p-select-address__result-list"
      v-show="resultListVisible"
    >
      <div class="p-select-address__result-item"
        v-for="result in results" :key="result.id"
      >
        <div class="p-select-address__result-info">
          <div class="p-select-address__result-name"
          >{{ result.name }}</div>
          <div class="p-select-address__result-address"
          >{{ result.address }}</div>
        </div>
        <div class="p-select-address__result-distance"
        >{{ result.distance }}</div>
      </div>
      <div class="p-select-address__result-tip">
        <p>找不到地址？</p>
        <p>请尝试只输入小区、写字楼或学校名</p>
        <p>详细地址（如门牌号）可稍后输入</p>
      </div>
    </div>
  </page>
</template>


<style lang="scss" scoped>
  .p-select-address {}

    .p-select-address__box {}

    .p-select-address__section {
      h4 {
        padding: 30px 0 14px 30px;
        font-size: 26px;
        font-weight: 400;
        line-height: 36px;
        color: #666;
      }
    }
  /* search-bar */

    .p-select-address__search-bar {
      display: flex;
      background-color: #fff;
    }
    .p-select-address__city-btn {
      display: flex;
      align-items: center;
      padding-left: 30px;
      svg {
        width: 12px;
        height: 12px;
      }
    }
    .p-select-address__city-name {
      margin-right: 10px;
      width: 80px;
      text-align: center;
      font-size: 24px;
      color: #333;
      background-color: #fff;
    }
    .p-select-address__search-box {
      position: relative;
      padding: 20px;
      flex: 1;
    }
    .p-select-address__search-icon {
      position: absolute;
      width: 28px;
      height: 28px;
      top: 42px;
      left: 30px;
    }
    .p-select-address__input {
      box-sizing: border-box;
      width: 100%;
      height: 72px;
      padding: 18px 36px 18px 50px;
      border-radius: 2px;
      font-size: 26px;
      line-height: 36px;
      color: #999;
      background-color: #f2f2f2;
      -webkit-appearance: none;
    }

  /* current */

    .p-select-address__current {
      padding: 0 34px 0 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 88px;
      font-size: 30px;
      background-color: #fff;
      color: #333;
      span:first-child {
        font-weight: 700;
        max-width: 500px;
      }
    }
    .p-select-address__relocate {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 28px;
      line-height: 30px;
      color: #2395ff;
      svg {
        width: 30px;
        height: 30px;
        margin-right: 10px;
      }
    }
    .p-select-address__reloading {
      animation: index-spin .8s linear infinite;
    }
    @keyframes index-spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(1turn);
      }
    }

  /* address list */

    .p-select-address__address-list {}
    .p-select-address__address-item {
      padding: 22px 30px;
      font-size: 24px;
      color: #2a2a2a;
      background-color: #fff;
      border-bottom: 1px solid #ddd;
      &:last-child {
        border-bottom: none;
      }
    }
    .p-select-address__address-line {}
    .p-select-address__address-name {
      font-size: 30px;
      font-weight: 700;
      color: #333;
      margin-right: 10px;
    }
    .p-select-address__address-sex {
      margin-right: 10px;
    }
    .p-select-address__address-address {
      margin-top: 4px;
      font-size: 24px;
      font-weight: 400;
      color: #333;
    }

  /* result list */

    .p-select-address__result-list {}
    .p-select-address__result-item {
      display: flex;
      padding: 22px 30px;
      font-size: 24px;
      color: #2a2a2a;
      border-top: 1px solid #eee;
      background-color: #fff;
      &:first-child {
        border-top: none;
      }
    }
    .p-select-address__result-info {
      flex: 1;
    }
    .p-select-address__result-name {
      font-size: 30px;
      font-weight: 700;
      color: #333;
    }
    .p-select-address__result-address {
      margin-top: 4px;
      font-size: 24px;
      line-height: 34px;;
    }
    .p-select-address__result-distance {
      width: 100px;
      text-align: center;
    }
    .p-select-address__result-tip {
      text-align: center;
      padding: 40px 0 120px;
      font-size: 24px;
      color: #999;
      background-color: #fff;
      margin-bottom: 80px;
      p:first-child {
        font-size: 30px;
        margin-bottom: 16px;
      }
    }

</style>