(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["remark"],{8145:function(e,t,s){},ca03:function(e,t,s){"use strict";var a=s("8145"),r=s.n(a);r.a},de38:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("page",{attrs:{title:"订单备注"}},[s("section",[s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.inputedRemark,expression:"inputedRemark"}],attrs:{placeholder:"填写额外对餐厅和骑手小哥备注的信息",maxlength:"100"},domProps:{value:e.inputedRemark},on:{input:function(t){t.target.composing||(e.inputedRemark=t.target.value)}}}),e.remarkList?s("div",e._l(e.remarkList.remarks,function(t,a){return s("div",{key:a,staticClass:"switch"},e._l(t,function(t,r){return s("span",{key:r,staticClass:"switch-item",class:{"switch-item_selected":e.selectedRemarks[a]&&r in e.selectedRemarks[a]},on:{click:function(s){s.stopPropagation(),s.preventDefault(),e.select(a,r,t)}}},[e._v(e._s(t))])}))})):e._e()]),s("button",{staticClass:"submit-btn",on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.submit(t)}}},[e._v("确定")])])},r=[],n=s("8afe"),i=s("c93e"),c=s("2f62"),u=s("408b"),o=s("4579"),d={name:"Remark",components:{Page:o["a"]},data:function(){return{inputedRemark:"",selectedRemarks:[]}},computed:Object(i["a"])({},Object(c["e"])(["remarkList","usedRemark","cartId","sig","currentRestaurantId"])),created:function(){var e=this;if(!this.remarkList){var t={cartId:this.cartId,sig:this.sig,restaurantId:this.currentRestaurantId};return Object(u["p"])(t).then(function(t){e.SAVE_REMARK_LIST(t)})}Promise.resolve().then(function(){var t=e.usedRemark;t&&(e.inputedRemark=t.inputed,e.selectedRemarks=t.selected)})},methods:Object(i["a"])({},Object(c["d"])(["SAVE_REMARK_LIST","SAVE_USED_REMARK"]),{select:function(e,t,s){var a=this.selectedRemarks[e]||[];void 0!=a[t]?a.splice(t,1):(a=[],a[t]=s),this.selectedRemarks[e]=a,this.selectedRemarks=Object(n["a"])(this.selectedRemarks)},submit:function(){this.SAVE_USED_REMARK({inputed:this.inputedRemark,selected:this.selectedRemarks}),this.$router.go(-1)}})},m=d,l=(s("ca03"),s("2877")),p=Object(l["a"])(m,a,r,!1,null,"bdd188da",null);p.options.__file="Remark.vue";t["default"]=p.exports}}]);
//# sourceMappingURL=remark.5e572f69.js.map