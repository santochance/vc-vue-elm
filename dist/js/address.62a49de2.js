(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["address"],{"0da5":function(t,e,s){},"0e5d":function(t,e,s){},"2a55":function(t,e,s){"use strict";var a=s("e4fa"),i=s.n(a);i.a},"448d":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABCFJREFUWAnNmUtsU0cUhs9cQkKCAwgJpxgJqWqXEQS84CHaIpZsKAhKu2JNUwISsAWFLSBBxGPNihYqqmxYIqCIx8I8qi5bIVXCYLdSW2ISHIiH84091sW5wQ8w10e69r3jmTnfnczj/CdGWrT0WO6zkpVt2jwt1qbEmJTec2FZLctqWVbvM4GR8czIwJ/ulyY/TDP1N56fSE5NT/5gxG63VgabaWuM/G7F/NLb3Xfm9t7+fKNtGwLcfDafeP7aHrQih3RkEnTevyCwX37aY9av7JZP+ufJsoWBu7SO/POiJH/r9WxiRu7+NS03HxftxMtS2ZcxBb05sajLnLw+nCzUA60LuHYst0NH65yCDdDZls8XyLer+2TNivkyr27rsvsZpX7w5JX8+GhSrv3xslxoTE5H9fv7IwNXygXRn3O6sNaa9Fj+iPZ9VOHMUKpbDmxKyKrl86N7arD0t6ev5NStgjzMTovOUasAo5mR5DGj91FdRAJuuGR7i9n8BSt2VxAYe/CLhPluqC+qfctlFx9OyslfC7ZUsjqQ5nJPKrnnzjdmqrbDoLaAkfNwiZ7Ant225IPD4ZMXpm98MBDOp/qu5ZkFWP6z2l00vLB7qVmni6BdRt/48JD4rvX1FnFlQfys+5Z7u3bChUHu6UofHv/P6r6q01J2hhdOdQTZSiqr1TDnWoFbezonXM0avvDJYoQBFt9HFZB9jq2E1fqhF4R39q5vfOIbBsdSqewAOSF0dA9RxlYSl3nfsMAEhwMsFqf2KXmCTfh997n3eTl8wwALR2oV0JrS1zxwQsRtnoHzHpaAqEQn5iBnK8dX3AYDLDDBFlRCJvlKD/5Gz9Z2vgQMsOADNuZgmodWthXatcNCLOlAJ6QLMgmZOsWqLMoWVCJhF8t1CiCxpTON0rv0xo1gtTCCstnTodH69/e7EHOWxxBLSoMpcXGY+5hVNZ4CzwJblwY4TxWxnzB95ZLoeTjXm9bi+5FrtH5te/8MCwYbiwTl5TQE351g6BlnysYicYAInE6xKouysVwygBGTdYqhBCuWUckh4zzcUGmI+orbYECmwgFbgOJHVKNbkYZxGwywwASb2xFR/IChW+M2z+CZHCDpCF0sBUQ1ujUuw7cT9srimBTEAZIr0fDhBGCI6rjM+4bF528cIEDkSnQUcyh+RPXHNnxWsg05x1IBcHGXh+lo2QkkelSJR0lHHL76v338b/s3b3zgq5wCkdGwJobprRGkwCWNTud/Ih2B4j++dXFLGpm+6hmHA3CFom4rmp/J7E/urk0iVeeg74wKJHJoQEMUfzvmJH3St4dzPiMyXLNG0IN2dPrNQ/LdsQnMMORcKWDUFwInnAKmHeGSTwEzzzjn25YCDoOSjiALgdBHt4Z/q3fP2dq2JHqU84/1b4g3B4s+pKLE0ioAAAAASUVORK5CYII="},4917:function(t,e,s){s("214f")("match",1,function(t,e,s){return[function(s){"use strict";var a=t(this),i=void 0==s?void 0:s[e];return void 0!==i?i.call(s,a):new RegExp(s)[e](String(a))},s]})},"4b96":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("page",{staticClass:"address__container",attrs:{title:"normal"===t.mode?"收货地址":"选择地址"}},[a("div",{staticClass:"address__main"},[a("a",{staticClass:"address__btn-add",attrs:{href:"javascript:"},on:{click:function(e){t.openEditor()}}},[a("img",{staticClass:"address__icon-add",attrs:{src:s("448d"),alt:""}}),a("span",{},[t._v("新增收货地址")])]),a("ul",t._l(t.addressList,function(e){return a("li",{key:e.id,staticClass:"address__addr-item",on:{click:function(s){s.stopPropagation(),s.preventDefault(),"normal"===t.mode?t.openEditor(e):t.selectAddr(e)}}},[a("div",{staticClass:"address__select"},[t.selectedAddress&&e.id===t.selectedAddress.id?a("img",{attrs:{src:s("cc8b"),alt:""}}):t._e()]),a("div",{staticClass:"address__body"},[a("div",{staticClass:"address__title ellipsis"},[a("span",{staticClass:"address__name"},[t._v(t._s(e.name))]),a("span",{staticClass:"address__sex"},[t._v(t._s(["","先生","女士"][e.sex]))]),a("span",{staticClass:"address__phone"},[t._v(t._s(e.phone))])]),a("div",{staticClass:"address__detail"},[e.tag_type?a("span",{staticClass:"address__tag",attrs:{content:["","家","学校","公司"][e.tag_type]}},[t._v(t._s(["","家","学校","公司"][e.tag_type]))]):t._e(),t._v("\n            "+t._s(e.address+e.address_detail)+"\n          ")])]),a("div",{staticClass:"address__btn-edit",on:{click:function(s){s.stopPropagation(),s.preventDefault(),t.openEditor(e)}}},[a("svg",[a("use",{attrs:{"xlink:href":"#edit"}})])]),a("div",{staticClass:"address__btn-delete",on:{click:function(s){s.stopPropagation(),s.preventDefault(),t.openConfirm(e)}}},[a("svg",[a("use",{attrs:{"xlink:href":"#delete"}})])])])})),a("modal",{attrs:{visible:t.confirmShow,closable:!1},on:{close:t.closeConfirm}},[a("div",{staticClass:"confirm-delete"},[a("h2",{staticClass:"confirm-delete__title"},[t._v("删除地址")]),a("p",{staticClass:"confirm-delete__content"},[t._v("确定删除该地址")]),a("div",{staticClass:"confirm-delete__btns"},[a("button",{staticClass:"confirm-delete__btn confirm-delete__btn-cancel",on:{click:t.closeConfirm}},[t._v("取消")]),a("button",{staticClass:"confirm-delete__btn confirm-delete__btn-ok",on:{click:t.submitConfirm}},[t._v("确认")])])])])],1)])},i=[],n=s("c93e"),r=(s("4917"),s("2f62")),o=s("408b"),d=s("9973"),c=s("d50a"),l={name:"Address",components:{Page:d["a"],Modal:c["a"]},props:{},data:function(){return{editorShow:!1,editingEntity:null,confirmShow:!1,confirmingEntity:null,mode:"select"}},created:function(){var t=this;this.mode=this.$route.meta.mode||"select",Object(o["a"])().then(function(e){t.SAVE_ADDRESS_LIST(e)})},beforeRouteEnter:function(t,e,s){if(!e.path.match("/checkout"))return s("/checkout");s()},computed:Object(n["a"])({},Object(r["d"])(["addressList","selectedAddressId"]),Object(r["b"])(["selectedAddress"])),methods:Object(n["a"])({},Object(r["c"])(["SAVE_ADDRESS_LIST","ADD_ADDRESS","SAVE_ADDRESS","REMOVE_ADDRESS","SAVE_SELECTED_ADDRESS","SAVE_EDITING_ADDRESS"]),{switchMode:function(){this.mode="normal"===this.mode?"select":"normal"},getUid:function(){var t=0;return function(){return t++}}(),selectAddr:function(t){this.SAVE_SELECTED_ADDRESS(t),this.$router.go(-1)},addAddr:function(t){var e={id:this.getUid(),location:t.location,name:"家",phone:"13812345678"};this.ADD_ADDRESS(e)},saveAddr:function(t){this.SAVE_ADDRESS(t)},removeAddr:function(t){this.REMOVE_ADDRESS(t)},openEditor:function(t){this.editingEntity=Object(n["a"])({},t)||{},this.editorShow=!0,this.SAVE_EDITING_ADDRESS(this.editingEntity),t?this.$router.push("/checkout/address/edit"):this.$router.push("/checkout/address/create")},closeEditor:function(){this.editingEntity=null,this.editorShow=!1},saveEditor:function(t){null==t.id?this.addAddr(t):this.saveAddr(t),this.closeEditor()},openConfirm:function(t){console.log("debug - openConfirm"),this.confirmingEntity=Object(n["a"])({},t)||{},this.confirmShow=!0},closeConfirm:function(){this.confirmingEntity=null,this.confirmShow=!1},submitConfirm:function(){this.removeAddr(this.confirmingEntity),this.closeConfirm()}})},u=l,p=(s("8917"),s("2877")),f=Object(p["a"])(u,a,i,!1,null,"af89b558",null);f.options.__file="Address.vue";e["default"]=f.exports},"5acf":function(t,e,s){},"7be6":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"load-fade"}},[t.visible?s("div",{staticClass:"loading__wrapper"},[s("div",{staticClass:"loading__main"},[s("div",{staticClass:"loading__icon"})])]):t._e()])},i=[],n={props:{visible:{type:Boolean,default:!1}},data:function(){return{localVisible:!1}},watch:{visible:function(t){var e=this;requestAnimationFrame(function(){e.localVisible=t})}}},r=n,o=(s("b6ca"),s("2877")),d=Object(o["a"])(r,a,i,!1,null,"3b66a32e",null);d.options.__file="LoadingImage.vue";var c=d.exports;s.d(e,"a",function(){return c})},"7d05":function(t,e,s){"use strict";var a=s("920f"),i=s.n(a);i.a},8315:function(t,e,s){"use strict";var a=s("0da5"),i=s.n(a);i.a},8917:function(t,e,s){"use strict";var a=s("0e5d"),i=s.n(a);i.a},"920f":function(t,e,s){},9973:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page__container"},[s("page-header",{attrs:{title:t.title,"back-btn":t.backBtn}}),s("div",{staticClass:"page__main"},[t._t("default")],2),s("loading-image",{attrs:{visible:t.loading}})],1)},i=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"page-header"},[t.backBtn?a("span",{staticClass:"page-header__left",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.onBack(e)}}},[a("img",{attrs:{src:s("c94c"),alt:""}})]):t._e(),a("h1",{staticClass:"page-header__title ellipsis"},[t._v(t._s(t.title))])])},r=[],o={name:"PageHeader",components:{},props:{title:{type:String},backBtn:{type:Boolean,default:!0}},data:function(){return{}},methods:{onBack:function(){this.$router.back()}}},d=o,c=(s("7d05"),s("2877")),l=Object(c["a"])(d,n,r,!1,null,"42dcd31e",null);l.options.__file="PageHeader.vue";var u=l.exports,p=s("7be6"),f={name:"Page",components:{PageHeader:u,LoadingImage:p["a"]},props:{title:{type:String},backBtn:{type:Boolean,default:!0},loading:{type:Boolean,default:!1}},data:function(){return{}}},v=f,m=(s("8315"),Object(c["a"])(v,a,i,!1,null,"406afc08",null));m.options.__file="Page.vue";e["a"]=m.exports},a3fb:function(t,e,s){"use strict";var a=s("d71a"),i=s.n(a);i.a},b066:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.address?s("page",{attrs:{title:"create"===t.mode?"添加地址":"编辑地址"}},[s("div",{staticClass:"address-form"},[s("div",{staticClass:"address-form__content"},[s("div",{staticClass:"address-form__control"},[s("div",{staticClass:"label-wrap"},[t._v("联系人")]),s("div",{staticClass:"input-group-wrap"},[s("div",{staticClass:"input-wrap"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.address.name,expression:"address.name"}],attrs:{type:"text",placeholder:"你的姓名"},domProps:{value:t.address.name},on:{input:function(e){e.target.composing||t.$set(t.address,"name",e.target.value)}}})]),s("radio",{staticClass:"input-wrap",attrs:{options:["先生","女士"],checkedValue:["先生","女士"][t.address.sex-1]},on:{change:function(e){t.address.sex=Number(e.index)+1}}})],1)]),s("div",{staticClass:"address-form__control"},[s("div",{staticClass:"label-wrap"},[t._v("电话")]),s("div",{staticClass:"input-wrap"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.address.phone,expression:"address.phone"}],attrs:{type:"text",placeholder:"你的手机号"},domProps:{value:t.address.phone},on:{input:function(e){e.target.composing||t.$set(t.address,"phone",e.target.value)}}})])]),s("div",{staticClass:"address-form__control"},[s("div",{staticClass:"label-wrap"},[s("p",[t._v("地址")]),s("p",[t._v("门牌号")])]),s("div",{staticClass:"input-group-wrap"},[s("div",{staticClass:"input-wrap"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.address.address,expression:"address.address"}],attrs:{type:"text",placeholder:"小区/写字楼/学校等"},domProps:{value:t.address.address},on:{input:function(e){e.target.composing||t.$set(t.address,"address",e.target.value)}}}),s("svg",[s("use",{attrs:{"xlink:href":"#arrow-right"}})])]),s("div",{staticClass:"input-wrap"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.address.address_detail,expression:"address.address_detail"}],attrs:{rows:"2",maxlength:"100",placeholder:"10号楼5层501室"},domProps:{value:t.address.address_detail},on:{input:function(e){e.target.composing||t.$set(t.address,"address_detail",e.target.value)}}}),s("svg",[s("use",{attrs:{"xlink:href":"#edit"}})])])])]),s("div",{staticClass:"address-form__control"},[s("div",{staticClass:"label-wrap"},[t._v("标签")]),s("radio",{staticClass:"input-wrap",attrs:{cancelable:!0,options:["家","学校","公司"],checkedValue:["家","学校","公司"][t.address.tag_type-1]},on:{change:function(e){t.address.tag_type=Number(e.index)+1}}})],1)]),s("div",{staticClass:"form-button-wrap"},[s("button",{staticClass:"form-button",on:{click:t.onSave}},[t._v("确定")])])])]):t._e()},i=[],n=s("c93e"),r=(s("28a5"),s("4917"),s("2f62")),o=s("9973"),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"radio"},t._l(t.options,function(e,a){return s("div",{key:a,staticClass:"radio__item",class:{radio__item_checked:t.checkedOption===e},on:{click:function(s){t.onClick(e,a)}}},[t._v(t._s(e))])}))},c=[],l={name:"Radio",components:{},props:{options:{type:Array},cancelable:{type:Boolean},checkedValue:{type:String}},data:function(){return{checkedOption:""}},created:function(){this.checkedOption=this.checkedValue},methods:{onClick:function(t,e){var s=this.checkedOption,a=t;this.$emit("click",{value:a,index:e}),this.cancelable&&a===s&&(a="",e=-1),a!==s&&this.$emit("change",{value:a,index:e}),this.checkedOption=a}}},u=l,p=(s("2a55"),s("2877")),f=Object(p["a"])(u,d,c,!1,null,"1620bcd3",null);f.options.__file="Radio.vue";var v=f.exports,m={name:"AddressEdit",components:{Page:o["a"],Radio:v},props:{},data:function(){return{address:null,mode:""}},beforeRouteEnter:function(t,e,s){if(!e.path.match("/checkout/address"))return s("/checkout");var a=t.path.split("/").slice(-1)[0];s(function(t){return function(){var t=this.$store.state.editingAddress;if(!t)return s("/checkout");this.mode=a,this.address=t}.call(t)})},computed:{},methods:Object(n["a"])({onSave:function(){this.$emit("save"),this.SAVE_ADDRESS(this.address),this.$router.back()}},Object(r["c"])(["SAVE_ADDRESS","REMOVE_ADDRESS"]))},h=m,_=(s("a3fb"),Object(p["a"])(h,a,i,!1,null,"4679eb86",null));_.options.__file="AddressEdit.vue";e["default"]=_.exports},b6ca:function(t,e,s){"use strict";var a=s("5acf"),i=s.n(a);i.a},c94c:function(t,e,s){t.exports=s.p+"img/arrow-left.267c91c0.svg"},cc8b:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABVhJREFUWAm9mV1oXFUQgGfO3aQJBgMFIyRSkWQTf0p9SF4UrFRpEUk2rRAriqQPzaYNDVLbJx/MKogKLYqUkJ+C+lCxJDTJRqtthbZ5Emn1pRbsbixEkthSsdFg1mTvGWeuucvN2d27N+kmF8K558ycOV/mzpnzswhrfHYnorVpoFYkaiSAaiCsRi4JoQSA/kLA22z6OiBctQCHR8MDk2sZim0Gf/YkD1SldfoQA+0Bgq3BewJzwhUE9eUm/htq6JsO2jcQYNvtroqFucUjqPEoAVUENZ5TDyGlSH24ubT6g88eiaVy6ngaCwJGbnS+RGD3EsGDnn73/IqIk6Cge7xu8Bs/YyqfkIiwObG/R4M9XGw4GZPt15JNZ1sS+4/lY5D2nB5s++1weWph/nM20ubXuWgyhYNNdTUHYhjTps0sD4rnNhROiDR1XElMn4pRLGQCZjW0JDve5hm6MZ7z0HC6Sv8Mj3OCWPms8KBMCIbrWamy/jVEGGisf6h9CF+2zdEyMSipJHV3MbkeE8Ic1FtHVB+P1w8c9rZ53zMelDy38XDwnh+cgDoedFYI25685yTs/dcLvCvAt+INg++bavtuxsruLE2fVmWbDsa3nJhxPGhru3vD4JBXbVRv5IJ7/fej9/2xOH2Wk2SEUqkugXcANdBu8z9ZjzqvHprhovxZPzHtv5bovv/Pubnz7KgdIiPAfZLy0NmVaJ00OxS/jmkGbGe4L0zbvDBsTv3z9znOMU1eWciCppBsmbyN6/HOgb7In+qVsfqBEdO+xD/DXWC4baZM27hLyX7OFBSzzl5bQMtqHWsYzIKLTB2qXtLpS7nghIE/95OKhdWBgRDP8YBzQfV50zpvofVivK7/W7NPy2R0C6X+nWCKx0xZpo64VclOONPg88JgQ03hmmaLrF1BIHl1uAuKdo6G+y6ZZiXuKa0nZEdjyoz6A4rjoyCgwDWGa17l3UZ6tKHvh0KQ7Lk7iKHnxsMnvzcGhJab0UdtrSe4/WFTZtb561Zy7PL64fPwYBddOFfND5L1Z5VSz8bDfT+5+m4Z+fXgNliiy0HDiufHIscgzroGcpWE9NSPiVknN3nluSDZ01NolWwfC/df9+rKe2Sys0kvLV3kz1plyvLVhY1XHJrJp+C0E5TxrjrOO52dpp4XkmMuCRY+E6/rzcqprcmOp8nW33H/zaYN3zqzSQz6A4qFQpCKni8pVdvHawemzAEjyegO26bz7LlKU1aoLmx87uh4k3e0xwspO3I5kYEVidf3XwiiH0l2vkBan2G48iD6WToKj6gQ4FiWIF+DjyfNLnwYaiXbHlszHBsUNuWc+BGumQPkrQeAbE527iWNwzxbS/PaKSRgJmHjNONsCrOWId/+PpCRX6LtqO1THLhZ5x1fm4aQ489hcgBDKnRCliVDx7+aA7LlRrRTo/6UM6vl39lfKizCJFoM+v8jh3TQEHPrgcvliUNoP0EaPgrcz09RQeyr8Ml3RMXxoLyUV5Ye51x2S95X9bAnifTXxYITBmFxGTKAQ1W98whWF/vUd+lzO3pL3hbxlVsRHjkOMIOwuNYygNLA+e0MAzqudRU2tOSxHQbPoJkYdNs4b2EkET3N5YbeLsiOKR4e2Mvlii+4woMCKQpl5RXt0sGFXu9SxloecwWcw5NvcPHk8j1ND0dllqfz9VtVu8Q7f1a+I3zX9Jxrp+DA63eBCbdkQpgx54K5ZUFAUSzmFbAkYVJ0TFKJd7a6QGYZCNDtJEdEuYVwDvqrvETnT3mNBxuRFWKkrk9+AQj0rArQazHfzxCiw5E+IxthNj7DdwNXZVey1p8h/gM30j51BxSfeAAAAABJRU5ErkJggg=="},d71a:function(t,e,s){},e4fa:function(t,e,s){}}]);
//# sourceMappingURL=address.62a49de2.js.map