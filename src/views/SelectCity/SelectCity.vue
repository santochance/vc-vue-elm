<script>
  import Page from '@/components/Page'

  const debug = false

  export default {
    name: 'SelectCity',
    components: {
      Page,
    },
    props: {
      defaultName: {
        type: String,
      },
      cityData: {
        type: Object,
      },
    },
    data() {
      return {
        query: '',
        currentCity: {},
        results: [],
      }
    },
    computed: {
      flatCityList() {
        return this.cityData.cityList.reduce((rst, entity) =>
          [ ...rst, ...entity.cities ]
        , [])
      },
      cityName() {
        return this.currentCity && this.currentCity.name || this.defaultName
      },
    },
    created() {
      debug && (window[this.$options.name] = this)

    },
    watch: {
      query(keyword) {
        if (keyword) {
          this.results =  this.flatCityList.filter(city =>
            city.name.includes(keyword) || city.pinyin.includes(keyword.toLowerCase())
          )
        }
      }
    },
    methods: {
      /* emit events */
      onSelectCity(city) {
        this.query = ''
        if (this.currentCity.id !== city.id) {
          this.currentCity = city
          this.$emit('change', city)
          this.onBack()
        }
      },

      /* events handlers */
      jump(id) {
        const el = document.getElementById(id)

        if (el.scrollIntoView) {
          return el.scrollIntoView()
        }

        const scroller = this.$refs.city
        const scrollerRect = scroller.getBoundingClientRect()
        const elRect = el.getBoundingClientRect()
        scroller.scrollTop += (elRect.top - scrollerRect.top)
      },
      onBack() {
        this.$emit('back')
      },
    },
  }
</script>

<template>
  <page title="城市选择"
    class="b-select-city b-select-city__box"
    @back="onBack">
    <section class="b-select-city__search">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
        class="b-select-city__search-icon">
        <path fill-opacity=".38" d="M14.778 13.732a.739.739 0 1 1-1.056 1.036l-2.515-2.565a.864.864 0 0 1-.01-1.206 4.894 4.894 0 0 0 1.357-3.651c-.126-2.492-2.156-4.52-4.648-4.647a4.911 4.911 0 0 0-5.16 5.163c.126 2.475 2.13 4.496 4.605 4.642.451.026.896-.008 1.326-.1a.739.739 0 0 1 .308 1.446c-.56.12-1.137.164-1.72.13-3.227-.19-5.83-2.815-5.995-6.042a6.39 6.39 0 0 1 6.71-6.715c3.25.165 5.884 2.8 6.05 6.048a6.37 6.37 0 0 1-1.374 4.3l2.12 2.161z">
        </path>
      </svg>
      <input type="search" class="b-select-city__input"
        v-model="query"
        placeholder="输入城市名、拼音或首字母查询"
      >
    </section>

    <template v-if="cityData">
      <section class="b-select-city__content"
        v-show="!query"
        ref="city"
      >
        <div class="b-select-city__section"
          v-show="cityName"
        >
          <h2 class="b-select-city__section-title">当前定位城市</h2>
          <div class="b-select-city__city-item">{{ cityName }}</div>
        </div>
        <div class="b-select-city__section"
          v-for="cityList in cityData.cityList" :key="cityList.idx"
          :id="cityList.idx"
        >
          <h2 class="b-select-city__section-title">{{ cityList.idx }}</h2>
          <div class="b-select-city__city-item"
            v-for="city in cityList.cities" :key="city.id"
          >
            <span @click="onSelectCity(city)">{{ city.name }}</span>
          </div>
        </div>
        <aside class="b-select-city__sidebar">
          <span v-for="alph in cityData.alphabet" :key="alph"
            @click="jump(alph)"
          >{{ alph }}</span>
        </aside>
      </section>
    </template>

    <section class="b-select-city__search-result"
      v-show="query && results.length"
    >
      <div class="b-select-city__city-item"
        v-for="city in results" :key="city.id"
      >
        <span @click="onSelectCity(city)">{{ city.name }}</span>
      </div>
    </section>
    <section class="b-select-city__no-result"
      v-show="query && !results.length"
    >
      <span>无结果</span>
    </section>

  </page>
</template>


<style lang="scss" scoped>
  .b-select-city {
    width: 100%;
    background-color: #fff;
  }

    .b-select-city__box {}

    .b-select-city__search {
      flex-shrink: 0;
      position: relative;
      text-align: center;
      height: 88px;
      background-image: linear-gradient(90deg,#0af,#0085ff);
    }
    .b-select-city__search-icon {
      height: 28px;
      width: 28px;
      position: absolute;
      left: 60px;
      top: 30px;
    }
    .b-select-city__input {
      font-size: 24px;
      width: 590px;
      height: 58px;
      padding-left: 60px;
      padding-right: 20px;
      margin-top: 14px;
      border-radius: 30px;
      background-color: #fff;
      appearance: none;
    }

    .b-select-city__sidebar {
      position: fixed;
      right: 20px;
      top: 300px;
      width: 40px;
      display: flex;
      flex-direction: column;
      color: #999;
      text-align: center;
      span {
        width: 100%;
        height: 40px;
        line-height: 40px;
      }
    }

    .b-select-city__content {
      flex: 1;
      overflow: auto;
    }

    .b-select-city__section {
      font-size: 28px;
      color: #333;
    }
    .b-select-city__section-title {
      font-size: 28px;
      font-weight: 400;
      padding: 28px 0 14px 30px;
      color: #666;
      background-color: #f5f5f5;
      border-bottom: 1px solid #ddd; /*no*/
    }
    .b-select-city__current {}
    .b-select-city__city-item {
      font-size: 28px;
      margin-left: 30px;
      line-height: 100px;
      height: 100px;
      border-bottom: 1px solid #ddd; /*no*/
      background-color: #fff;
      &:last-child {
        border-bottom: none;
      }
      span {
        display: inline-block;
        width: 80%;
        height: 100%;
      }
    }
    .b-select-city__no-result {
      flex: 1;
      font-size: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

</style>