(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ShopContainer"],{"281f":function(e,n,o){"use strict";var t=o("8ceb"),r=o.n(t);r.a},4763:function(e,n,o){"use strict";var t=o("8705"),r=o.n(t);r.a},8705:function(e,n,o){},"8ceb":function(e,n,o){},a06e:function(e,n,o){"use strict";o.r(n);var t=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[e.error?e._e():t("Shop",{on:{loaded:e.shopLoaded,error:e.onError}}),e.loaded||e.error?e._e():t("ShopSkeleton"),e.error?t("div",{staticClass:"p-shop__unauthorized"},[t("img",{attrs:{src:o("c0eb"),alt:""}}),"UNAUTHORIZED_RESTAURANT_ERROR"===e.error.name?[t("h3",[e._v(e._s(e.error.message))]),t("button",{on:{click:e.toLogin}},[e._v("立即登录")])]:"SOA_INVOKE_ERROR"===e.error.name?[t("h3",[e._v(e._s(e.error.message))]),t("p",[e._v("请重试")]),t("button",{on:{click:e.reload}},[e._v("重试")])]:[t("h3",[e._v(e._s(e.error.message))]),t("button",{on:{click:function(n){e.$router.push("/")}}},[e._v("返回首页")])]],2):e._e()],1)},r=[],i=o("e903"),a=function(){return o.e("Shop").then(o.bind(null,"821d"))},s={name:"ShopContainer",components:{ShopSkeleton:i["a"],Shop:a},props:{},data:function(){return{loaded:!1,error:null}},created:function(){},methods:{shopLoaded:function(){this.loaded=!0},onError:function(e){this.error=e},toLogin:function(){this.$router.push({path:"/login",query:{redirect:this.$route.fullPath}})},reload:function(){window.location.reload()}}},c=s,u=(o("4763"),o("2877")),l=Object(u["a"])(c,t,r,!1,null,"47e5aff6",null);l.options.__file="ShopContainer.vue";n["default"]=l.exports},c0eb:function(e,n,o){e.exports=o.p+"img/unauthorized.d6070008.png"},e903:function(e,n,o){"use strict";var t=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"shell"},[t("img",{staticClass:"shellAnimation",attrs:{src:o("ec77"),alt:""}})])}],i={name:"ShopSkeleton",components:{},props:{},data:function(){return{}}},a=i,s=(o("281f"),o("2877")),c=Object(s["a"])(a,t,r,!1,null,"76920134",null);c.options.__file="ShopSkeleton.vue";var u=c.exports;o.d(n,"a",function(){return u})},ec77:function(e,n,o){e.exports=o.p+"img/skeleton.abb43463.svg"}}]);
//# sourceMappingURL=ShopContainer.8d5becb1.js.map