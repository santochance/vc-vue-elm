(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["remark"],{d34b:function(e,t,s){},de38:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("page",{attrs:{title:"订单备注"}},[s("section",[s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.inputedRemark,expression:"inputedRemark"}],attrs:{placeholder:"填写额外对餐厅和骑手小哥备注的信息",maxlength:"100"},domProps:{value:e.inputedRemark},on:{input:function(t){t.target.composing||(e.inputedRemark=t.target.value)}}}),e.remarkList?s("div",e._l(e.remarkList.remarks,function(t,a){return s("div",{key:a,staticClass:"switch"},e._l(t,function(t,n){return s("span",{key:n,staticClass:"switch-item",class:{"switch-item_selected":e.selectedRemarks[a]&&n in e.selectedRemarks[a]},on:{click:function(s){s.stopPropagation(),s.preventDefault(),e.select(a,n,t)}}},[e._v(e._s(t))])}))})):e._e()]),s("button",{staticClass:"submit-btn",on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.submit(t)}}},[e._v("确定")])])},n=[],i=s("8afe"),r=s("c93e"),c=s("2f62"),u=s("408b"),o=s("4579"),m={name:"Remark",components:{Page:o["a"]},data:function(){return{inputedRemark:"",selectedRemarks:[]}},computed:Object(r["a"])({},Object(c["e"])(["remarkList","usedRemark"])),created:function(){var e=this;if(!this.remarkList)return Object(u["m"])().then(function(t){e.SAVE_REMARK_LIST(t)});Promise.resolve().then(function(){var t=e.usedRemark;t&&(e.inputedRemark=t.inputed,e.selectedRemarks=t.selected)})},methods:Object(r["a"])({},Object(c["d"])(["SAVE_REMARK_LIST","SAVE_USED_REMARK"]),{select:function(e,t,s){var a=this.selectedRemarks[e]||[];void 0!=a[t]?a.splice(t,1):(a=[],a[t]=s),this.selectedRemarks[e]=a,this.selectedRemarks=Object(i["a"])(this.selectedRemarks)},submit:function(){this.SAVE_USED_REMARK({inputed:this.inputedRemark,selected:this.selectedRemarks}),this.$router.go(-1)}})},l=m,d=(s("e8c5"),s("2877")),k=Object(d["a"])(l,a,n,!1,null,"1495ff72",null);k.options.__file="Remark.vue";t["default"]=k.exports},e8c5:function(e,t,s){"use strict";var a=s("d34b"),n=s.n(a);n.a}}]);
//# sourceMappingURL=remark.b1cb3378.js.map