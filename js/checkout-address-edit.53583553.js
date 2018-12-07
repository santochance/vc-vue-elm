(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["checkout-address-edit"],{"25ec":function(e,t,a){},"2a55":function(e,t,a){"use strict";var s=a("e4fa"),r=a.n(s);r.a},"81e1":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("AddressEdit")},r=[],i=(a("4917"),a("fcc1")),d={name:"CheckoutAddressEdit",components:{AddressEdit:i["a"]},props:{},data:function(){return{}},beforeRouterEnter:function(e,t,a){if(!t.path.match("/checkout/address"))return a("/checkout");a(function(e){return function(){var e=this.$store.state.editingAddress;if(!e)return a("/checkout")}.call(e)})}},n=d,o=(a("dd69"),a("2877")),c=Object(o["a"])(n,s,r,!1,null,"ffb2eed0",null);c.options.__file="CheckoutAddressEdit.vue";t["default"]=c.exports},cebc:function(e,t,a){},dd69:function(e,t,a){"use strict";var s=a("cebc"),r=a.n(s);r.a},e4fa:function(e,t,a){},eeb9:function(e,t,a){"use strict";var s=a("25ec"),r=a.n(s);r.a},fcc1:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("page",{attrs:{title:"create"===e.mode?"添加地址":"编辑地址"}},[e.address?[a("div",{staticClass:"address-form"},[a("div",{staticClass:"address-form__content"},[a("div",{staticClass:"address-form__control"},[a("div",{staticClass:"label-wrap"},[e._v("联系人")]),a("div",{staticClass:"input-group-wrap"},[a("div",{staticClass:"input-wrap"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.address.name,expression:"address.name"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{type:"text",placeholder:"你的姓名",name:"name"},domProps:{value:e.address.name},on:{input:function(t){t.target.composing||e.$set(e.address,"name",t.target.value)}}})]),a("radio",{staticClass:"input-wrap",attrs:{options:["先生","女士"],checkedValue:["先生","女士"][e.address.sex-1]},on:{change:function(t){e.address.sex=Number(t.index)+1}}})],1)]),a("div",{staticClass:"address-form__control"},[a("div",{staticClass:"label-wrap"},[e._v("电话")]),a("div",{staticClass:"input-wrap"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.address.phone,expression:"address.phone"},{name:"validate",rawName:"v-validate",value:{required:!0,regex:/^1\d{10}$/},expression:"{ required: true, regex: /^1\\d{10}$/ }"}],attrs:{type:"text",placeholder:"你的手机号",name:"phone"},domProps:{value:e.address.phone},on:{input:function(t){t.target.composing||e.$set(e.address,"phone",t.target.value)}}})])]),a("div",{staticClass:"address-form__control"},[a("div",{staticClass:"label-wrap"},[a("p",[e._v("地址")]),a("p",[e._v("门牌号")])]),a("div",{staticClass:"input-group-wrap"},[a("div",{staticClass:"input-wrap"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.address.address,expression:"address.address"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{type:"text",placeholder:"小区/写字楼/学校等",name:"address"},domProps:{value:e.address.address},on:{input:function(t){t.target.composing||e.$set(e.address,"address",t.target.value)}}}),a("svg",[a("use",{attrs:{"xlink:href":"#arrow-right"}})])]),a("div",{staticClass:"input-wrap"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.address.address_detail,expression:"address.address_detail"}],attrs:{rows:"2",maxlength:"100",placeholder:"10号楼5层501室"},domProps:{value:e.address.address_detail},on:{input:function(t){t.target.composing||e.$set(e.address,"address_detail",t.target.value)}}}),a("svg",{staticStyle:{visibility:"hidden"}},[a("use",{attrs:{"xlink:href":"#edit"}})])])])]),a("div",{staticClass:"address-form__control"},[a("div",{staticClass:"label-wrap"},[e._v("标签")]),a("radio",{staticClass:"input-wrap",attrs:{cancelable:!0,options:["家","学校","公司"],checkedValue:["家","学校","公司"][e.address.tag_type-1]},on:{change:function(t){e.address.tag_type=Number(t.index)+1}}})],1)]),a("div",{staticClass:"form-button-wrap"},[a("button",{staticClass:"form-button",on:{click:e.onSave}},[e._v("确定")])])])]:e._e()],2)},r=[],i=a("c93e"),d=(a("7f7f"),a("28a5"),a("2f62")),n=a("4579"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"radio"},e._l(e.options,function(t,s){return a("div",{key:s,staticClass:"radio__item",class:{radio__item_checked:e.checkedOption===t},on:{click:function(a){e.onClick(t,s)}}},[e._v(e._s(t))])}))},c=[],l={name:"Radio",components:{},props:{options:{type:Array},cancelable:{type:Boolean},checkedValue:{type:String}},data:function(){return{checkedOption:""}},created:function(){this.checkedOption=this.checkedValue},methods:{onClick:function(e,t){var a=this.checkedOption,s=e;this.$emit("click",{value:s,index:t}),this.cancelable&&s===a&&(s="",t=-1),s!==a&&this.$emit("change",{value:s,index:t}),this.checkedOption=s}}},u=l,p=(a("2a55"),a("2877")),v=Object(p["a"])(u,o,c,!1,null,"1620bcd3",null);v.options.__file="Radio.vue";var m=v.exports,f=a("8393"),h=a("2b0e"),_=a("7bb1");h["a"].use(_["a"]);var g=!0,b={name:"AddressEdit",components:{Page:n["a"],Radio:m},props:{},data:function(){return{errorMsgs:{name:{required:"请输入联系人"},phone:{required:"请输入正确的手机号",regex:"请输入正确的手机号"},address:{required:"请输入确定的小区/写字楼/学校等地址信息"}}}},computed:{mode:function(){return this.$route.path.split("/").slice(-1)[0]},address:function(){return this.$store.state.editingAddress}},created:function(){g&&(window[this.$options.name]=this)},methods:Object(i["a"])({onSave:function(){var e=this;return this.$validator.validate().then(function(t){if(t)e.$emit("save"),e.SAVE_ADDRESS(e.address),e.$router.back();else{var a=e.errors.items[0];if(a){var s=e.errorMsgs[a.field]&&e.errorMsgs[a.field][a.rule];f["a"].open({content:s,mask:!1})}}})}},Object(d["d"])(["SAVE_ADDRESS","REMOVE_ADDRESS"]))},w=b,k=(a("eeb9"),Object(p["a"])(w,s,r,!1,null,"57f8be08",null));k.options.__file="AddressEdit.vue";t["a"]=k.exports}}]);
//# sourceMappingURL=checkout-address-edit.53583553.js.map