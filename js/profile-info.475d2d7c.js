(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["profile-info"],{"0311":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("page",{attrs:{title:"账户信息"}},[a("router-view")],1)},i=[],o=a("9973"),c={name:"ProfileInfo",components:{Page:o["a"]},props:{},data:function(){return{}}},s=c,r=(a("3601"),a("2877")),l=Object(r["a"])(s,n,i,!1,null,"1825d5a2",null);l.options.__file="ProfileInfo.vue";e["default"]=l.exports},"0560":function(t,e,a){},"1c9b":function(t,e,a){},3506:function(t,e,a){"use strict";var n=a("0560"),i=a.n(n);i.a},3601:function(t,e,a){"use strict";var n=a("735c"),i=a.n(n);i.a},"5acf":function(t,e,a){},"735c":function(t,e,a){},"7be6":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"load-fade"}},[t.visible?a("div",{staticClass:"loading__wrapper"},[a("div",{staticClass:"loading__main"},[a("div",{staticClass:"loading__icon"})])]):t._e()])},i=[],o={props:{visible:{type:Boolean,default:!1}},data:function(){return{localVisible:!1}},watch:{visible:function(t){var e=this;requestAnimationFrame(function(){e.localVisible=t})}}},c=o,s=(a("b6ca"),a("2877")),r=Object(s["a"])(c,n,i,!1,null,"3b66a32e",null);r.options.__file="LoadingImage.vue";var l=r.exports;a.d(e,"a",function(){return l})},9973:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page__container"},[a("page-header",{attrs:{title:t.title,"back-btn":t.backBtn},on:{back:t.onBack}}),a("div",{staticClass:"page__main"},[t._t("default")],2),a("loading-image",{attrs:{visible:t.loading}})],1)},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"page-header"},[t.backBtn?n("span",{staticClass:"page-header__left",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.onBack(e)}}},[n("img",{attrs:{src:a("c94c"),alt:""}})]):t._e(),n("h1",{staticClass:"page-header__title ellipsis"},[t._v(t._s(t.title))])])},c=[],s={name:"PageHeader",components:{},props:{title:{type:String},backBtn:{type:Boolean,default:!0}},data:function(){return{}},methods:{onBack:function(){this.$emit("back")}}},r=s,l=(a("b4ca"),a("2877")),u=Object(l["a"])(r,o,c,!1,null,"77aad942",null);u.options.__file="PageHeader.vue";var f=u.exports,p=a("7be6"),d={name:"Page",components:{PageHeader:f,LoadingImage:p["a"]},props:{title:{type:String},backBtn:{type:Boolean,default:!0},backDefault:{type:Boolean,default:!0},loading:{type:Boolean,default:!1}},data:function(){return{}},methods:{onBack:function(){this.$emit("back"),this.backDefault&&this.$router.back()}}},_=d,b=(a("3506"),Object(l["a"])(_,n,i,!1,null,"58972422",null));b.options.__file="Page.vue";e["a"]=b.exports},b4ca:function(t,e,a){"use strict";var n=a("1c9b"),i=a.n(n);i.a},b6ca:function(t,e,a){"use strict";var n=a("5acf"),i=a.n(n);i.a},c94c:function(t,e,a){t.exports=a.p+"img/arrow-left.267c91c0.svg"}}]);
//# sourceMappingURL=profile-info.475d2d7c.js.map