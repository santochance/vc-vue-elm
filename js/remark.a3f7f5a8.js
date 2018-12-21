(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["remark"],{"0da5":function(e,t,a){},"5acf":function(e,t,a){},"7be6":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"load-fade"}},[e.visible?a("div",{staticClass:"loading__wrapper"},[a("div",{staticClass:"loading__main"},[a("div",{staticClass:"loading__icon"})])]):e._e()])},i=[],s={props:{visible:{type:Boolean,default:!1}},data:function(){return{localVisible:!1}},watch:{visible:function(e){var t=this;requestAnimationFrame(function(){t.localVisible=e})}}},r=s,c=(a("b6ca"),a("2877")),o=Object(c["a"])(r,n,i,!1,null,"3b66a32e",null);o.options.__file="LoadingImage.vue";var l=o.exports;a.d(t,"a",function(){return l})},"7d05":function(e,t,a){"use strict";var n=a("920f"),i=a.n(n);i.a},8315:function(e,t,a){"use strict";var n=a("0da5"),i=a.n(n);i.a},"920f":function(e,t,a){},9973:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page__container"},[a("page-header",{attrs:{title:e.title,"back-btn":e.backBtn}}),a("div",{staticClass:"page__main"},[e._t("default")],2),a("loading-image",{attrs:{visible:e.loading}})],1)},i=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"page-header"},[e.backBtn?n("span",{staticClass:"page-header__left",on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.onBack(t)}}},[n("img",{attrs:{src:a("c94c"),alt:""}})]):e._e(),n("h1",{staticClass:"page-header__title ellipsis"},[e._v(e._s(e.title))])])},r=[],c={name:"PageHeader",components:{},props:{title:{type:String},backBtn:{type:Boolean,default:!0}},data:function(){return{}},methods:{onBack:function(){this.$router.back()}}},o=c,l=(a("7d05"),a("2877")),u=Object(l["a"])(o,s,r,!1,null,"42dcd31e",null);u.options.__file="PageHeader.vue";var d=u.exports,p=a("7be6"),f={name:"Page",components:{PageHeader:d,LoadingImage:p["a"]},props:{title:{type:String},backBtn:{type:Boolean,default:!0},loading:{type:Boolean,default:!1}},data:function(){return{}}},m=f,_=(a("8315"),Object(l["a"])(m,n,i,!1,null,"406afc08",null));_.options.__file="Page.vue";t["a"]=_.exports},b6ca:function(e,t,a){"use strict";var n=a("5acf"),i=a.n(n);i.a},c94c:function(e,t,a){e.exports=a.p+"img/arrow-left.267c91c0.svg"},d34b:function(e,t,a){},de38:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("page",{attrs:{title:"订单备注"}},[a("section",[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.inputedRemark,expression:"inputedRemark"}],attrs:{placeholder:"填写额外对餐厅和骑手小哥备注的信息",maxlength:"100"},domProps:{value:e.inputedRemark},on:{input:function(t){t.target.composing||(e.inputedRemark=t.target.value)}}}),e.remarkList?a("div",e._l(e.remarkList.remarks,function(t,n){return a("div",{key:n,staticClass:"switch"},e._l(t,function(t,i){return a("span",{key:i,staticClass:"switch-item",class:{"switch-item_selected":e.selectedRemarks[n]&&i in e.selectedRemarks[n]},on:{click:function(a){a.stopPropagation(),a.preventDefault(),e.select(n,i,t)}}},[e._v(e._s(t))])}))})):e._e()]),a("button",{staticClass:"submit-btn",on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.submit(t)}}},[e._v("确定")])])},i=[],s=a("8afe"),r=a("c93e"),c=a("2f62"),o=a("408b"),l=a("9973"),u={name:"Remark",components:{Page:l["a"]},data:function(){return{inputedRemark:"",selectedRemarks:[]}},computed:Object(r["a"])({},Object(c["d"])(["remarkList","usedRemark"])),created:function(){var e=this;if(!this.remarkList)return Object(o["g"])().then(function(t){e.SAVE_REMARK_LIST(t)});Promise.resolve().then(function(){var t=e.usedRemark;t&&(e.inputedRemark=t.inputed,e.selectedRemarks=t.selected)})},methods:Object(r["a"])({},Object(c["c"])(["SAVE_REMARK_LIST","SAVE_USED_REMARK"]),{select:function(e,t,a){var n=this.selectedRemarks[e]||[];void 0!=n[t]?n.splice(t,1):(n=[],n[t]=a),this.selectedRemarks[e]=n,this.selectedRemarks=Object(s["a"])(this.selectedRemarks)},submit:function(){this.SAVE_USED_REMARK({inputed:this.inputedRemark,selected:this.selectedRemarks}),this.$router.go(-1)}})},d=u,p=(a("e8c5"),a("2877")),f=Object(p["a"])(d,n,i,!1,null,"1495ff72",null);f.options.__file="Remark.vue";t["default"]=f.exports},e8c5:function(e,t,a){"use strict";var n=a("d34b"),i=a.n(n);i.a}}]);
//# sourceMappingURL=remark.a3f7f5a8.js.map