<script>
  import { mapState, mapActions } from 'vuex'
  import { fetchAddressList, searchNearby, reverseGeoCoding } from '@/service/api'
  import Page from '@/components/Page'
  import IndexSelectCity from './IndexSelectCity'
  let Geohash = import(/* webpackChunkName: "Geohash" */ 'ngeohash').then(module => { Geohash = module })

  const debug = false

  export default {
    name: 'IndexSelectAddress',
    /* options: 模板依赖 */
    components: {
      Page,
      IndexSelectCity,
    },
    // filters: {},
    // directives: { bind, inserted, update, componentUpdated, unbind },
    // v-directive:arg.modifiers="value(expression)"

    /* options: 接口 */
    props: {
      visible: {
        type: Boolean,
        default: false,
      },
    },
    // model: {},

    /* options: 本地状态 */
    data() {
      return {
        query: '',
        addressList: [],
        results: [],

        currentAddress: {
          name: '正在定位...',
          latitude: null,
          longitude: null,
          geohash: '',
          valid: false,
        },
        currentCity: {
          latitude: this.$store.state.latitude,
          longitude: this.$store.state.longitude,
          city_id: this.$store.state.cityId,
        },
        cityNameResolved: false,

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
        'useId', 'locationName', 'cityList',
      ]),
      resultListVisible() {
        return this.query && this.results.length
      },
      addressListVisible() {
        return !this.resultListVisible && this.addressList.length
      },
      cityName() {
        return this.cityNameResolved ? ((this.$store.state.cityName || '').replace(/市$/, '') || '选择...') : '定位中'
      },
      selectCityVisible() {
        return this.$route.hash === '#city'
      }
    },
    /* options: 事件 */
    watch: {
      query(value, oldValue) {

        debug && console.log('query:', value)

        if (value && value !== oldValue) {
          this.search(value)
        }

        if (!value) {
          this.results = []
        }
      },
      // visible(value, oldValue) {
      //   if (value && value !== oldValue) {
      //     this.geohashChanged = false
      //     this.reverseGeoCoding()
      //   }
      // },
    },

    // beforeCreate, created, beforeMount, mounted, beforeUpdate, update,
    // activated, deactivated, beforeDestroy, destroyed
    created() {
      debug && (window[this.$options.name] = this)

      this.init()
    },
    activated() {
      this.init()
    },
    methods: {
      init() {
        this.cityNameResolved = false

        return Promise.resolve()
          .then(() => {
            this.fetchAddressList()
          })
          .then(() => new Promise(resolve => setTimeout(resolve, 300)))
          .then(() => {
            this.reverseGeoCoding(this.currentCity)
              .then(({ city }) => {
                this.$store.commit('SET_CITY_NAME', city)
              }, () => {})
              .then(() => {
                this.cityNameResolved = true
              }, () => {
                this.cityNameResolved = false
              })
            this.reLocate()
          })
          .then(() => new Promise(resolve => setTimeout(resolve, 300)))
          .then(() => {
            this.getCityList()
          })
      },
      fetchAddressList() {
        this.loaded = false
        return fetchAddressList()
          .then((addressList) => {
            this.addressList = addressList.filter(address => {
              if (address.poi_type === 0 && address.st_geohash !== '0'){
                address.geohash = address.st_geohash
                return true
              }
            })
            this.loaded = true
            this.addressList.length || this.$refs.input.focus()
          })
      },
      search(keyword) {
        if (keyword) {
          searchNearby({
            keyword,
            latitude: this.currentCity.latitude,
            longitude: this.currentCity.longitude,
          }).then((pois) => {
            this.results = pois
          })
        }
      },
      select(address) {
        if (!address) {
          throw new TypeError('select() expect an object as argument but got undefeind')
        }

        this.query = ''
        if (!address.latitude || !address.longitude) {
          const coords = Geohash.decode(address.geohash)
          address = {
            ...address,
            latitude: coords.latitude,
            longitude: coords.longitude,
          }

          debug && console.log('parse geohash to:', coords)
        }

        const locationName = ('st_geohash' in address) ? address.address : address.name
        this.$store.commit('SET_LOCATION_NAME', locationName)
        this.$store.commit('SET_CITY_ID', address.city_id)

        this.$store.commit('SAVE_LOCATION', {
          latitude: address.latitude,
          longitude: address.longitude,
          geohash: address.geohash,
        })

        this.onBack()
      },
      selectCurrentAddress() {
        if (this.currentAddress.valid) {
          this.select(this.currentAddress)
        }
      },
      reLocate() {
        debug && console.log('reLocate')
        this.reloading = true
        this.currentAddress.name = '正在定位...'
        this.currentAddress.valid = false

        return this.getCurrentPosition()
          .then(({ coords }) => {
            debug && console.log('定位成功')

            this.currentAddress = {
              ...this.currentAddress,
              latitude: coords.latitude,
              longitude: coords.longitude,
            }

            return this.reverseGeoCoding(coords)
              .then(({ name, geohash, city_id, city }) => {
                debug && console.log('解析成功')
                this.currentAddress = {
                  ...this.currentAddress,
                  name: name || '未知地址',
                  geohash,
                  city_id,
                  city,
                  valid: true,
                }
              }, () => {
                debug && console.log('解析失败')
                this.currentAddress.name = '未能获取地址'
                this.currentAddress.geohash = Geohash.encode(coords.latitude, coords.longitude, 12)
              })

          }, (err) => {
            debug && console.log('定位失败')
            return new Promise(resolve => setTimeout(resolve, 1000))
              .then(() => {
                this.currentAddress = {
                  ...this.currentAddress,
                  name: '未能获取地址',
                  latitude: null,
                  longitude: null,
                  geohash: '',
                }
                if (err) throw err
              })
          })
          .then(() => {
            this.reloading = false
          }, (err) => {
            this.reloading = false
            if (err) throw err
          })
      },
      onChangeCity(city) {
        this.currentCity = {
          ...this.currentCity,
          latitude: city.latitude,
          longitude: city.longitude,
          geohash: Geohash.encode(city.latitude, city.longitude, 12),
          city_id: city.id,
        }
        this.$store.commit('SET_CITY_NAME', city.name)

        this.query && this.search(this.query)
      },
      chooseCity() {
        this.$router.push(this.$route.path + '#city')
      },
      onBack() {
        // if (this.geohashChanged) {
        //   this.$emit('change')
        // }
        // this.$emit('back')
        this.$router.push('/')
      },
      reverseGeoCoding,
      ...mapActions([
        'getCityList',
        'getCurrentPosition',
      ]),
    },
  }
</script>

<template>
  <page title="选择收货地址"
    class="p-select-address p-select-address__box"
    :back-default="false"
    @back="onBack"
  >
    <div class="p-select-address__search-bar">
      <div class="p-select-address__city-btn"
        @click.stop="chooseCity"
      >
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
      <div class="p-select-address__current"
        @click.stop="selectCurrentAddress"
      >
        <span class="ellipsis">{{ currentAddress.name }}</span>
        <span class="p-select-address__relocate"
          @click.stop="reLocate"
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
      v-show="addressListVisible"
    >
      <h4>收货地址</h4>
      <div class="p-select-address__address-list">
        <div class="p-select-address__address-item"
          v-for="address in addressList" :key="address.id"
          @click.stop="select(address)"
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
        @click.stop="select(result)"
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
    <IndexSelectCity class="p-select-address__select-city"
      v-show="selectCityVisible"
      :city-data="cityList"
      :default-name="cityName"
      @change="onChangeCity"
      @back="$router.back()"
    ></IndexSelectCity>
  </page>
</template>


<style lang="scss" scoped>
  .p-select-address {
    width: 100%;
    background-color: #f4f4f4;
  }

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
      flex-shrink: 0;
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

    .p-select-address__address-list {
      overflow: auto;
    }
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

  .p-select-address__select-city {
    position: fixed;
    top: 0;
    height: 100%;
    height: 100vh;
    left: 0;
    right: 0;
    z-index: 20;
  }
</style>