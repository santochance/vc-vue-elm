(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["IndexSelectAddress"],{"2fdb":function(t,e,s){"use strict";var i=s("5ca1"),n=s("d2c8"),a="includes";i(i.P+i.F*s("5147")(a),"String",{includes:function(t){return!!~n(this,t,a).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},"418e":function(t,e,s){"use strict";var i=s("8b3a"),n=s.n(i);n.a},5147:function(t,e,s){var i=s("2b4c")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(s){try{return e[i]=!1,!"/./"[t](e)}catch(t){}}return!0}},"529d":function(t,e,s){},6762:function(t,e,s){"use strict";var i=s("5ca1"),n=s("c366")(!0);i(i.P,"Array",{includes:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),s("9c6c")("includes")},"8b3a":function(t,e,s){},ae25:function(t,e,s){"use strict";var i=s("529d"),n=s.n(i);n.a},d223:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("page",{staticClass:"p-select-address p-select-address__box",attrs:{title:"选择收货地址","back-default":!1},on:{back:t.onBack}},[s("div",{staticClass:"p-select-address__search-bar"},[s("div",{staticClass:"p-select-address__city-btn",on:{click:function(e){return e.stopPropagation(),t.chooseCity(e)}}},[s("span",{staticClass:"p-select-address__city-name ellipsis"},[t._v(t._s(t.cityName))]),s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 14 8"}},[s("path",{attrs:{fill:"#333","fill-rule":"evenodd",d:"M5.588 6.588c.78.78 2.04.784 2.824 0l5.176-5.176c.78-.78.517-1.412-.582-1.412H.994C-.107 0-.372.628.412 1.412l5.176 5.176z"}})])]),s("div",{staticClass:"p-select-address__search-box"},[s("svg",{staticClass:"p-select-address__search-icon",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"}},[s("path",{attrs:{"fill-opacity":".38",d:"M14.778 13.732a.739.739 0 1 1-1.056 1.036l-2.515-2.565a.864.864 0 0 1-.01-1.206 4.894 4.894 0 0 0 1.357-3.651c-.126-2.492-2.156-4.52-4.648-4.647a4.911 4.911 0 0 0-5.16 5.163c.126 2.475 2.13 4.496 4.605 4.642.451.026.896-.008 1.326-.1a.739.739 0 0 1 .308 1.446c-.56.12-1.137.164-1.72.13-3.227-.19-5.83-2.815-5.995-6.042a6.39 6.39 0 0 1 6.71-6.715c3.25.165 5.884 2.8 6.05 6.048a6.37 6.37 0 0 1-1.374 4.3l2.12 2.161z"}})]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],ref:"input",staticClass:"p-select-address__input",attrs:{type:"search",placeholder:"请输入地址"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}})])]),s("section",{directives:[{name:"show",rawName:"v-show",value:!t.resultListVisible,expression:"!resultListVisible"}],staticClass:"p-select-address__section"},[s("h4",[t._v("当前地址")]),s("div",{staticClass:"p-select-address__current",on:{click:function(e){return e.stopPropagation(),t.selectCurrentAddress(e)}}},[s("span",{staticClass:"ellipsis"},[t._v(t._s(t.currentAddress.name))]),s("span",{staticClass:"p-select-address__relocate",on:{click:function(e){return e.stopPropagation(),t.reLocate(e)}}},[s("svg",{class:{"p-select-address__reloading":t.reloading},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 15 15"}},[s("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[s("circle",{attrs:{cx:"7.5",cy:"7.5",r:"7",stroke:"#2395FF"}}),s("path",{attrs:{fill:"#2395FF",d:"M7 0h1v5H7zM7 10h1v5H7zM10 7h5v1h-5zM0 7h5v1H0z"}})])]),s("span",[t._v("重新定位")])])])]),s("section",{directives:[{name:"show",rawName:"v-show",value:t.addressListVisible,expression:"addressListVisible"}],staticClass:"p-select-address__section"},[s("h4",[t._v("收货地址")]),s("div",{staticClass:"p-select-address__address-list"},t._l(t.addressList,function(e){return s("div",{key:e.id,staticClass:"p-select-address__address-item",on:{click:function(s){s.stopPropagation(),t.select(e)}}},[s("div",{staticClass:"p-select-address__address-line"},[s("span",{staticClass:"p-select-address__address-name"},[t._v(t._s(e.name))]),s("span",{staticClass:"p-select-address__address-sex"},[t._v(t._s(["先生","女士"][e.sex-1]))]),s("span",[t._v(t._s(e.phone))])]),s("div",{staticClass:"p-select-address__address-address"},[s("span",[t._v(t._s(e.address))])])])}))]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.resultListVisible,expression:"resultListVisible"}],staticClass:"p-select-address__result-list"},[t._l(t.results,function(e){return s("div",{key:e.id,staticClass:"p-select-address__result-item",on:{click:function(s){s.stopPropagation(),t.select(e)}}},[s("div",{staticClass:"p-select-address__result-info"},[s("div",{staticClass:"p-select-address__result-name"},[t._v(t._s(e.name))]),s("div",{staticClass:"p-select-address__result-address"},[t._v(t._s(e.address))])]),s("div",{staticClass:"p-select-address__result-distance"},[t._v(t._s(e.distance))])])}),s("div",{staticClass:"p-select-address__result-tip"},[s("p",[t._v("找不到地址？")]),s("p",[t._v("请尝试只输入小区、写字楼或学校名")]),s("p",[t._v("详细地址（如门牌号）可稍后输入")])])],2),s("IndexSelectCity",{directives:[{name:"show",rawName:"v-show",value:t.selectCityVisible,expression:"selectCityVisible"}],staticClass:"p-select-address__select-city",attrs:{"city-data":t.cityList,"default-name":t.cityName},on:{change:t.onChangeCity,back:function(e){t.$router.back()}}})],1)},n=[],a=(s("7f7f"),s("386d"),s("a481"),s("c93e")),c=s("2f62"),r=s("408b"),o=s("4579"),l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("page",{staticClass:"b-select-city b-select-city__box",attrs:{title:"城市选择","back-default":!1},on:{back:t.onBack}},[s("section",{staticClass:"b-select-city__search"},[s("svg",{staticClass:"b-select-city__search-icon",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"}},[s("path",{attrs:{"fill-opacity":".38",d:"M14.778 13.732a.739.739 0 1 1-1.056 1.036l-2.515-2.565a.864.864 0 0 1-.01-1.206 4.894 4.894 0 0 0 1.357-3.651c-.126-2.492-2.156-4.52-4.648-4.647a4.911 4.911 0 0 0-5.16 5.163c.126 2.475 2.13 4.496 4.605 4.642.451.026.896-.008 1.326-.1a.739.739 0 0 1 .308 1.446c-.56.12-1.137.164-1.72.13-3.227-.19-5.83-2.815-5.995-6.042a6.39 6.39 0 0 1 6.71-6.715c3.25.165 5.884 2.8 6.05 6.048a6.37 6.37 0 0 1-1.374 4.3l2.12 2.161z"}})]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"b-select-city__input",attrs:{type:"search",placeholder:"输入城市名、拼音或首字母查询"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}})]),t.cityData?[s("section",{directives:[{name:"show",rawName:"v-show",value:!t.query,expression:"!query"}],ref:"city",staticClass:"b-select-city__content"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.cityName,expression:"cityName"}],staticClass:"b-select-city__section"},[s("h2",{staticClass:"b-select-city__section-title"},[t._v("当前定位城市")]),s("div",{staticClass:"b-select-city__city-item",on:{click:function(e){return e.stopPropagation(),t.onBack(e)}}},[t._v(t._s(t.cityName))])]),t._l(t.cityData.cityList,function(e){return s("div",{key:e.idx,staticClass:"b-select-city__section",attrs:{id:e.idx}},[s("h2",{staticClass:"b-select-city__section-title"},[t._v(t._s(e.idx))]),t._l(e.cities,function(e){return s("div",{key:e.id,staticClass:"b-select-city__city-item"},[s("span",{on:{click:function(s){t.onSelectCity(e)}}},[t._v(t._s(e.name))])])})],2)}),s("aside",{staticClass:"b-select-city__sidebar"},t._l(t.cityData.alphabet,function(e){return s("span",{key:e,on:{click:function(s){t.jump(e)}}},[t._v(t._s(e))])}))],2)]:t._e(),s("section",{directives:[{name:"show",rawName:"v-show",value:t.query&&t.results.length,expression:"query && results.length"}],staticClass:"b-select-city__search-result"},t._l(t.results,function(e){return s("div",{key:e.id,staticClass:"b-select-city__city-item"},[s("span",{on:{click:function(s){t.onSelectCity(e)}}},[t._v(t._s(e.name))])])})),s("section",{directives:[{name:"show",rawName:"v-show",value:t.query&&!t.results.length,expression:"query && !results.length"}],staticClass:"b-select-city__no-result"},[s("span",[t._v("无结果")])])],2)},d=[],u=(s("6762"),s("2fdb"),s("8afe")),h=!1,_={name:"IndexSelectCity",components:{Page:o["a"]},props:{defaultName:{type:String},cityData:{type:Object}},data:function(){return{query:"",currentCity:{},results:[]}},computed:{flatCityList:function(){return this.cityData.cityList.reduce(function(t,e){return Object(u["a"])(t).concat(Object(u["a"])(e.cities))},[])},cityName:function(){return this.currentCity&&this.currentCity.name||this.defaultName}},created:function(){h&&(window[this.$options.name]=this)},watch:{query:function(t){t&&(this.results=this.flatCityList.filter(function(e){return e.name.includes(t)||e.pinyin.includes(t.toLowerCase())}))}},methods:{onSelectCity:function(t){this.query="",this.currentCity.id!==t.id&&(this.currentCity=t,this.$emit("change",t)),this.onBack()},jump:function(t){var e=document.getElementById(t);if(e.scrollIntoView)return e.scrollIntoView();var s=this.$refs.city,i=s.getBoundingClientRect(),n=e.getBoundingClientRect();s.scrollTop+=n.top-i.top},onBack:function(){this.$emit("back")}}},p=_,v=(s("ae25"),s("2877")),y=Object(v["a"])(p,l,d,!1,null,"c37ac5cc",null);y.options.__file="IndexSelectCity.vue";var f=y.exports,m=s.e("Geohash").then(s.t.bind(null,"e02a",7)).then(function(t){m=t}),g=!1,C={name:"IndexSelectAddress",components:{Page:o["a"],IndexSelectCity:f},props:{visible:{type:Boolean,default:!1}},data:function(){return{query:"",addressList:[],results:[],currentAddress:{name:"正在定位...",latitude:null,longitude:null,geohash:"",valid:!1},currentCity:{latitude:this.$store.state.latitude,longitude:this.$store.state.longitude,city_id:this.$store.state.cityId},cityNameResolved:!1,loaded:!1,reloading:!1,emptyTip:{img:"no-log",title:"没有搜索结果",content:"换个关键字试试"}}},computed:Object(a["a"])({},Object(c["e"])(["useId","locationName","cityList"]),{resultListVisible:function(){return this.query&&this.results.length},addressListVisible:function(){return!this.resultListVisible&&this.addressList.length},cityName:function(){return this.cityNameResolved?(this.$store.state.cityName||"").replace(/市$/,"")||"选择...":"定位中"},selectCityVisible:function(){return"#city"===this.$route.hash}}),watch:{query:function(t,e){g&&console.log("query:",t),t&&t!==e&&this.search(t),t||(this.results=[])}},created:function(){g&&(window[this.$options.name]=this),this.init()},activated:function(){this.init()},methods:Object(a["a"])({init:function(){var t=this;return this.cityNameResolved=!1,Promise.resolve().then(function(){t.fetchAddressList()}).then(function(){return new Promise(function(t){return setTimeout(t,300)})}).then(function(){t.reverseGeoCoding(t.currentCity).then(function(e){var s=e.city;t.$store.commit("SET_CITY_NAME",s)},function(){}).then(function(){t.cityNameResolved=!0},function(){t.cityNameResolved=!1}),t.reLocate()}).then(function(){return new Promise(function(t){return setTimeout(t,300)})}).then(function(){t.getCityList()})},fetchAddressList:function(){var t=this;return this.loaded=!1,Object(r["a"])().then(function(e){t.addressList=e.filter(function(t){if(0===t.poi_type&&"0"!==t.st_geohash)return t.geohash=t.st_geohash,!0}),t.loaded=!0,t.addressList.length||t.$refs.input.focus()})},search:function(t){var e=this;t&&Object(r["v"])({keyword:t,latitude:this.currentCity.latitude,longitude:this.currentCity.longitude}).then(function(t){e.results=t})},select:function(t){if(!t)throw new TypeError("select() expect an object as argument but got undefeind");if(this.query="",!t.latitude||!t.longitude){var e=m.decode(t.geohash);t=Object(a["a"])({},t,{latitude:e.latitude,longitude:e.longitude}),g&&console.log("parse geohash to:",e)}var s="st_geohash"in t?t.address:t.name;this.$store.commit("SET_LOCATION_NAME",s),this.$store.commit("SET_CITY_ID",t.city_id),this.$store.commit("SAVE_LOCATION",{latitude:t.latitude,longitude:t.longitude,geohash:t.geohash}),this.onBack()},selectCurrentAddress:function(){this.currentAddress.valid&&this.select(this.currentAddress)},reLocate:function(){var t=this;return g&&console.log("reLocate"),this.reloading=!0,this.currentAddress.name="正在定位...",this.currentAddress.valid=!1,this.getCurrentPosition().then(function(e){var s=e.coords;return g&&console.log("定位成功"),t.currentAddress=Object(a["a"])({},t.currentAddress,{latitude:s.latitude,longitude:s.longitude}),t.reverseGeoCoding(s).then(function(e){var s=e.name,i=e.geohash,n=e.city_id,c=e.city;g&&console.log("解析成功"),t.currentAddress=Object(a["a"])({},t.currentAddress,{name:s||"未知地址",geohash:i,city_id:n,city:c,valid:!0})},function(){g&&console.log("解析失败"),t.currentAddress.name="未能获取地址",t.currentAddress.geohash=m.encode(s.latitude,s.longitude,12)})},function(e){return g&&console.log("定位失败"),new Promise(function(t){return setTimeout(t,1e3)}).then(function(){if(t.currentAddress=Object(a["a"])({},t.currentAddress,{name:"未能获取地址",latitude:null,longitude:null,geohash:""}),e)throw e})}).then(function(){t.reloading=!1},function(e){if(t.reloading=!1,e)throw e})},onChangeCity:function(t){this.currentCity=Object(a["a"])({},this.currentCity,{latitude:t.latitude,longitude:t.longitude,geohash:m.encode(t.latitude,t.longitude,12),city_id:t.id}),this.$store.commit("SET_CITY_NAME",t.name),this.query&&this.search(this.query)},chooseCity:function(){this.$router.push(this.$route.path+"#city")},onBack:function(){this.$router.push("/")},reverseGeoCoding:r["t"]},Object(c["b"])(["getCityList","getCurrentPosition"]))},b=C,w=(s("418e"),Object(v["a"])(b,i,n,!1,null,"4dd887ce",null));w.options.__file="IndexSelectAddress.vue";e["default"]=w.exports},d2c8:function(t,e,s){var i=s("aae3"),n=s("be13");t.exports=function(t,e,s){if(i(e))throw TypeError("String#"+s+" doesn't accept regex!");return String(n(t))}}}]);
//# sourceMappingURL=IndexSelectAddress.86c3114d.js.map