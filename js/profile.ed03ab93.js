(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["profile"],{"0560":function(t,e,i){},"0c2a":function(t,e,i){"use strict";var s=i("0d2e"),a=i.n(s);a.a},"0d2e":function(t,e,i){},"0fbe":function(t,e,i){"use strict";var s=i("d591"),a=i.n(s);a.a},3506:function(t,e,i){"use strict";var s=i("0560"),a=i.n(s);a.a},4334:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("page",{staticClass:"profile__block",attrs:{title:"我的","back-btn":!1}},[t.user?[i("router-link",{staticClass:"profile__user",attrs:{to:"/profile/info"}},[i("div",{staticClass:"profile__avatar",style:{backgroundPosition:"0 "+t.$toRem(120*t.random(0,6))}}),i("div",{staticClass:"profile__user-info"},[i("p",{staticClass:"profile__user-name ellipsis"},[t._v(t._s(t.user.username))]),i("p",{staticClass:"profile__user-phone ellipsis"},[i("svg",[i("use",{attrs:{"xlink:href":"#mobile"}})]),i("span",[t._v(t._s(t._f("mobileMask")(t.user.mobile)))])])]),i("div",{staticClass:"profile__user-right"},[i("svg",[i("use",{attrs:{"xlink:href":"#item-arrow-right"}})])])]),i("div",{staticClass:"profile__item-col-group profile__assets"},[i("router-link",{staticClass:"profile__item-col profile__wallet",attrs:{to:""}},[i("div",{staticClass:"profile__item-col-value"},[i("span",[t._v(t._s(t._f("toFixed")(t.user.balance,2)))]),i("span",{staticClass:"profile__item-col-unit"},[t._v("元")])]),i("span",{staticClass:"profile__item-col-text"},[t._v("钱包")])]),i("router-link",{staticClass:"profile__item-col profile__hongbao",attrs:{to:""}},[i("div",{staticClass:"profile__item-col-value"},[i("span",[t._v(t._s(t.user.gift_amount))]),i("span",{staticClass:"profile__item-col-unit"},[t._v("个")])]),i("span",{staticClass:"profile__item-col-text"},[t._v("红包")])]),i("router-link",{staticClass:"profile__item-col profile__gold",attrs:{to:""}},[i("div",{staticClass:"profile__item-col-value"},[i("span",[t._v(t._s(t.user.point))]),i("span",{staticClass:"profile__item-col-unit"},[t._v("个")])]),i("span",{staticClass:"profile__item-col-text"},[t._v("金币")])])],1)]:[i("router-link",{staticClass:"profile__user",attrs:{to:{path:"/login",query:{redirect:"/profile"}}}},[i("div",{staticClass:"profile__avatar",style:{backgroundPosition:"0 "+t.$toRem(120*t.random(0,6))}}),i("div",{staticClass:"profile__user-info"},[i("p",{staticClass:"profile__user-name ellipsis"},[t._v("登录/注册")]),i("p",{staticClass:"profile__user-phone ellipsis"},[i("svg",[i("use",{attrs:{"xlink:href":"#mobile"}})]),i("span",[t._v("登录后享受更多特权")])])]),i("div",{staticClass:"profile__user-right"},[i("svg",[i("use",{attrs:{"xlink:href":"#item-arrow-right"}})])])]),i("div",{staticClass:"profile__item-col-group profile__assets"},[i("router-link",{staticClass:"profile__item-col profile__wallet",attrs:{to:{path:"/login",query:{redirect:"/profile"}}}},[i("div",{staticClass:"profile__item-col-value"},[i("svg",{attrs:{fill:"#0098fb"}},[i("use",{attrs:{"xlink:href":"#profile-balance"}})])]),i("span",{staticClass:"profile__item-col-text"},[t._v("钱包")])]),i("router-link",{staticClass:"profile__item-col profile__hongbao",attrs:{to:{path:"/login",query:{redirect:"/profile"}}}},[i("div",{staticClass:"profile__item-col-value"},[i("svg",{attrs:{fill:"#ff5f3e"}},[i("use",{attrs:{"xlink:href":"#luckybag"}})])]),i("span",{staticClass:"profile__item-col-text"},[t._v("红包")])]),i("router-link",{staticClass:"profile__item-col profile__gold",attrs:{to:{path:"/login",query:{redirect:"/profile"}}}},[i("div",{staticClass:"profile__item-col-value"},[i("svg",{attrs:{fill:"#6ac20b"}},[i("use",{attrs:{"xlink:href":"#profile-coins"}})])]),i("span",{staticClass:"profile__item-col-text"},[t._v("金币")])])],1)],[i("section",{staticClass:"profile__item-group"},[i("router-link",{staticClass:"profile__item",attrs:{to:t.user?"/profile/address":{path:"/login",query:{redirect:"/profile/address"}}}},[i("div",{staticClass:"profile__item-left"},[i("svg",[i("use",{attrs:{"xlink:href":"#address"}})])]),i("div",{staticClass:"profile__item-body"},[i("span",[t._v("我的地址")]),i("div",{staticClass:"profile__item-right"},[i("svg",[i("use",{attrs:{"xlink:href":"#item-arrow-right"}})])])])])],1),i("section",{staticClass:"profile__item-group"},[i("router-link",{staticClass:"profile__item",attrs:{to:"",disabled:""}},[i("div",{staticClass:"profile__item-left"},[i("svg",[i("use",{attrs:{"xlink:href":"#point"}})])]),i("div",{staticClass:"profile__item-body"},[i("span",[t._v("金币商城")]),i("div",{staticClass:"profile__item-right"},[i("svg",[i("use",{attrs:{"xlink:href":"#item-arrow-right"}})])])])]),i("router-link",{staticClass:"profile__item",attrs:{to:"",disabled:""}},[i("div",{staticClass:"profile__item-left"},[i("svg",[i("use",{attrs:{"xlink:href":"#commend"}})])]),i("div",{staticClass:"profile__item-body"},[i("span",[t._v("分享拿10元现金")]),i("div",{staticClass:"profile__item-right"},[i("svg",[i("use",{attrs:{"xlink:href":"#item-arrow-right"}})])])])])],1),i("section",{staticClass:"profile__item-group"},[i("router-link",{staticClass:"profile__item",attrs:{to:"",disabled:""}},[i("div",{staticClass:"profile__item-left"},[i("svg",[i("use",{attrs:{"xlink:href":"#service"}})])]),i("div",{staticClass:"profile__item-body"},[i("span",[t._v("我的客服")]),i("div",{staticClass:"profile__item-right"},[i("svg",[i("use",{attrs:{"xlink:href":"#item-arrow-right"}})])])])]),i("router-link",{staticClass:"profile__item",attrs:{to:"",disabled:""}},[i("div",{staticClass:"profile__item-left profile__download-icon"},[i("svg",[i("use",{attrs:{"xlink:href":"#download"}})])]),i("div",{staticClass:"profile__item-body"},[i("span",[t._v("下载饿了么APP")]),i("div",{staticClass:"profile__item-right"},[i("svg",[i("use",{attrs:{"xlink:href":"#item-arrow-right"}})])])])])],1)]],2)},a=[],r=(i("c5f6"),i("c93e")),l=(i("cadf"),i("551c"),i("097d"),i("2f62")),o=i("9973"),n={name:"Profile",components:{Page:o["a"]},props:{},data:function(){return{}},computed:Object(r["a"])({},Object(l["e"])(["user"])),created:function(){this.loadData()},activated:function(){this.loadData()},filters:{toFixed:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return Number(t).toFixed(e)}},methods:Object(r["a"])({loadData:function(){return this.fetchCurrentUser()}},Object(l["b"])(["fetchCurrentUser","fetchUser"]),{random:function(t,e){return Math.floor(t+Math.random()*(e-t))}})},c=n,_=(i("0fbe"),i("2877")),f=Object(_["a"])(c,s,a,!1,null,"6b457c4c",null);f.options.__file="Profile.vue";var p=f.exports;i.d(e,"default",function(){return p})},"5acf":function(t,e,i){},"7be6":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"load-fade"}},[t.visible?i("div",{staticClass:"loading__wrapper"},[i("div",{staticClass:"loading__main"},[i("div",{staticClass:"loading__icon"})])]):t._e()])},a=[],r={props:{visible:{type:Boolean,default:!1}},data:function(){return{localVisible:!1}},watch:{visible:function(t){var e=this;requestAnimationFrame(function(){e.localVisible=t})}}},l=r,o=(i("b6ca"),i("2877")),n=Object(o["a"])(l,s,a,!1,null,"3b66a32e",null);n.options.__file="LoadingImage.vue";var c=n.exports;i.d(e,"a",function(){return c})},9973:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page__container"},[i("page-header",{attrs:{title:t.title,"back-btn":t.backBtn},on:{back:t.onBack}}),i("div",{staticClass:"page__main"},[t._t("default")],2),i("loading-image",{attrs:{visible:t.loading}})],1)},a=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"page-header"},[t.backBtn?s("span",{staticClass:"page-header__left",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.onBack(e)}}},[s("img",{attrs:{src:i("c94c"),alt:""}})]):t._e(),s("h1",{staticClass:"page-header__title ellipsis"},[t._v(t._s(t.title))])])},l=[],o={name:"PageHeader",components:{},props:{title:{type:String},backBtn:{type:Boolean,default:!0}},data:function(){return{}},methods:{onBack:function(){this.$emit("back")}}},n=o,c=(i("0c2a"),i("2877")),_=Object(c["a"])(n,r,l,!1,null,"7a1ab779",null);_.options.__file="PageHeader.vue";var f=_.exports,p=i("7be6"),u={name:"Page",components:{PageHeader:f,LoadingImage:p["a"]},props:{title:{type:String},backBtn:{type:Boolean,default:!0},backDefault:{type:Boolean,default:!0},loading:{type:Boolean,default:!1}},data:function(){return{}},methods:{onBack:function(){this.$emit("back"),this.backDefault&&this.$router.back()}}},d=u,v=(i("3506"),Object(c["a"])(d,s,a,!1,null,"58972422",null));v.options.__file="Page.vue";e["a"]=v.exports},b6ca:function(t,e,i){"use strict";var s=i("5acf"),a=i.n(s);a.a},c94c:function(t,e,i){t.exports=i.p+"img/arrow-left.267c91c0.svg"},d591:function(t,e,i){}}]);
//# sourceMappingURL=profile.ed03ab93.js.map