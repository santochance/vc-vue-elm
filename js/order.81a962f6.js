(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["order"],{"0560":function(t,e,a){},"0c2a":function(t,e,a){"use strict";var n=a("0d2e"),i=a.n(n);i.a},"0d2e":function(t,e,a){},3506:function(t,e,a){"use strict";var n=a("0560"),i=a.n(n);i.a},"55e2":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Page",{attrs:{title:"订单","back-btn":!1}},[t._v("\n  Order\n")])},i=[],c=a("9973"),r={name:"Order",components:{Page:c["a"]},props:{},data:function(){return{}}},o=r,s=(a("734c"),a("2877")),l=Object(s["a"])(o,n,i,!1,null,"1d0d4c58",null);l.options.__file="Order.vue";var u=l.exports;a.d(e,"default",function(){return u})},"5acf":function(t,e,a){},"734c":function(t,e,a){"use strict";var n=a("73a2"),i=a.n(n);i.a},"73a2":function(t,e,a){},"7be6":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"load-fade"}},[t.visible?a("div",{staticClass:"loading__wrapper"},[a("div",{staticClass:"loading__main"},[a("div",{staticClass:"loading__icon"})])]):t._e()])},i=[],c={props:{visible:{type:Boolean,default:!1}},data:function(){return{localVisible:!1}},watch:{visible:function(t){var e=this;requestAnimationFrame(function(){e.localVisible=t})}}},r=c,o=(a("b6ca"),a("2877")),s=Object(o["a"])(r,n,i,!1,null,"3b66a32e",null);s.options.__file="LoadingImage.vue";var l=s.exports;a.d(e,"a",function(){return l})},9973:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page__container"},[a("page-header",{attrs:{title:t.title,"back-btn":t.backBtn},on:{back:t.onBack}}),a("div",{staticClass:"page__main"},[t._t("default")],2),a("loading-image",{attrs:{visible:t.loading}})],1)},i=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"page-header"},[t.backBtn?n("span",{staticClass:"page-header__left",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.onBack(e)}}},[n("img",{attrs:{src:a("c94c"),alt:""}})]):t._e(),n("h1",{staticClass:"page-header__title ellipsis"},[t._v(t._s(t.title))])])},r=[],o={name:"PageHeader",components:{},props:{title:{type:String},backBtn:{type:Boolean,default:!0}},data:function(){return{}},methods:{onBack:function(){this.$emit("back")}}},s=o,l=(a("0c2a"),a("2877")),u=Object(l["a"])(s,c,r,!1,null,"7a1ab779",null);u.options.__file="PageHeader.vue";var f=u.exports,d=a("7be6"),p={name:"Page",components:{PageHeader:f,LoadingImage:d["a"]},props:{title:{type:String},backBtn:{type:Boolean,default:!0},backDefault:{type:Boolean,default:!0},loading:{type:Boolean,default:!1}},data:function(){return{}},methods:{onBack:function(){this.$emit("back"),this.backDefault&&this.$router.back()}}},_=p,b=(a("3506"),Object(l["a"])(_,n,i,!1,null,"58972422",null));b.options.__file="Page.vue";e["a"]=b.exports},b6ca:function(t,e,a){"use strict";var n=a("5acf"),i=a.n(n);i.a},c94c:function(t,e,a){t.exports=a.p+"img/arrow-left.267c91c0.svg"}}]);
//# sourceMappingURL=order.81a962f6.js.map