(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["checkout-address~profile-address"],{"0ae9":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABCFJREFUWAnNmUtsU0cUhs9cQkKCAwgJpxgJqWqXEQS84CHaIpZsKAhKu2JNUwISsAWFLSBBxGPNihYqqmxYIqCIx8I8qi5bIVXCYLdSW2ISHIiH84091sW5wQ8w10e69r3jmTnfnczj/CdGWrT0WO6zkpVt2jwt1qbEmJTec2FZLctqWVbvM4GR8czIwJ/ulyY/TDP1N56fSE5NT/5gxG63VgabaWuM/G7F/NLb3Xfm9t7+fKNtGwLcfDafeP7aHrQih3RkEnTevyCwX37aY9av7JZP+ufJsoWBu7SO/POiJH/r9WxiRu7+NS03HxftxMtS2ZcxBb05sajLnLw+nCzUA60LuHYst0NH65yCDdDZls8XyLer+2TNivkyr27rsvsZpX7w5JX8+GhSrv3xslxoTE5H9fv7IwNXygXRn3O6sNaa9Fj+iPZ9VOHMUKpbDmxKyKrl86N7arD0t6ev5NStgjzMTovOUasAo5mR5DGj91FdRAJuuGR7i9n8BSt2VxAYe/CLhPluqC+qfctlFx9OyslfC7ZUsjqQ5nJPKrnnzjdmqrbDoLaAkfNwiZ7Ant225IPD4ZMXpm98MBDOp/qu5ZkFWP6z2l00vLB7qVmni6BdRt/48JD4rvX1FnFlQfys+5Z7u3bChUHu6UofHv/P6r6q01J2hhdOdQTZSiqr1TDnWoFbezonXM0avvDJYoQBFt9HFZB9jq2E1fqhF4R39q5vfOIbBsdSqewAOSF0dA9RxlYSl3nfsMAEhwMsFqf2KXmCTfh997n3eTl8wwALR2oV0JrS1zxwQsRtnoHzHpaAqEQn5iBnK8dX3AYDLDDBFlRCJvlKD/5Gz9Z2vgQMsOADNuZgmodWthXatcNCLOlAJ6QLMgmZOsWqLMoWVCJhF8t1CiCxpTON0rv0xo1gtTCCstnTodH69/e7EHOWxxBLSoMpcXGY+5hVNZ4CzwJblwY4TxWxnzB95ZLoeTjXm9bi+5FrtH5te/8MCwYbiwTl5TQE351g6BlnysYicYAInE6xKouysVwygBGTdYqhBCuWUckh4zzcUGmI+orbYECmwgFbgOJHVKNbkYZxGwywwASb2xFR/IChW+M2z+CZHCDpCF0sBUQ1ujUuw7cT9srimBTEAZIr0fDhBGCI6rjM+4bF528cIEDkSnQUcyh+RPXHNnxWsg05x1IBcHGXh+lo2QkkelSJR0lHHL76v338b/s3b3zgq5wCkdGwJobprRGkwCWNTud/Ih2B4j++dXFLGpm+6hmHA3CFom4rmp/J7E/urk0iVeeg74wKJHJoQEMUfzvmJH3St4dzPiMyXLNG0IN2dPrNQ/LdsQnMMORcKWDUFwInnAKmHeGSTwEzzzjn25YCDoOSjiALgdBHt4Z/q3fP2dq2JHqU84/1b4g3B4s+pKLE0ioAAAAASUVORK5CYII="},"0d54":function(t,e,s){},4579:function(t,e,s){"use strict";s("cadf"),s("551c"),s("097d");var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page__container"},[s("page-header",{attrs:{title:t.title,"back-btn":t.backBtn},on:{back:t.onBack}}),s("div",{staticClass:"page__main"},[t._t("default")],2),s("loading-image",{attrs:{visible:t.loading}})],1)},n=[],a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",{staticClass:"page-header"},[t.backBtn?i("span",{staticClass:"page-header__left",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.onBack(e)}}},[i("img",{attrs:{src:s("baa7"),alt:""}})]):t._e(),i("h1",{staticClass:"page-header__title ellipsis"},[t._v(t._s(t.title))])])},o=[],r={name:"PageHeader",components:{},props:{title:{type:String},backBtn:{type:Boolean,default:!0}},data:function(){return{}},methods:{onBack:function(){this.$emit("back")}}},c=r,d=(s("f73e"),s("2877")),l=Object(d["a"])(c,a,o,!1,null,"2137bcb2",null);l.options.__file="PageHeader.vue";var u=l.exports,f=s("7be6"),A={name:"Page",components:{PageHeader:u,LoadingImage:f["a"]},props:{title:{type:String},backBtn:{type:Boolean,default:!0},backDefault:{type:Boolean,default:!0},loading:{type:Boolean,default:!1}},data:function(){return{}},methods:{onBack:function(){this.$emit("back"),this.backDefault&&this.$router.back()}}},p=A,h=(s("e249"),Object(d["a"])(p,i,n,!1,null,"dbc569be",null));h.options.__file="Page.vue";var b=h.exports;s.d(e,"a",function(){return b})},"51a9":function(t,e,s){},"5acf":function(t,e,s){},"5b14":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABVhJREFUWAm9mV1oXFUQgGfO3aQJBgMFIyRSkWQTf0p9SF4UrFRpEUk2rRAriqQPzaYNDVLbJx/MKogKLYqUkJ+C+lCxJDTJRqtthbZ5Emn1pRbsbixEkthSsdFg1mTvGWeuucvN2d27N+kmF8K558ycOV/mzpnzswhrfHYnorVpoFYkaiSAaiCsRi4JoQSA/kLA22z6OiBctQCHR8MDk2sZim0Gf/YkD1SldfoQA+0Bgq3BewJzwhUE9eUm/htq6JsO2jcQYNvtroqFucUjqPEoAVUENZ5TDyGlSH24ubT6g88eiaVy6ngaCwJGbnS+RGD3EsGDnn73/IqIk6Cge7xu8Bs/YyqfkIiwObG/R4M9XGw4GZPt15JNZ1sS+4/lY5D2nB5s++1weWph/nM20ubXuWgyhYNNdTUHYhjTps0sD4rnNhROiDR1XElMn4pRLGQCZjW0JDve5hm6MZ7z0HC6Sv8Mj3OCWPms8KBMCIbrWamy/jVEGGisf6h9CF+2zdEyMSipJHV3MbkeE8Ic1FtHVB+P1w8c9rZ53zMelDy38XDwnh+cgDoedFYI25685yTs/dcLvCvAt+INg++bavtuxsruLE2fVmWbDsa3nJhxPGhru3vD4JBXbVRv5IJ7/fej9/2xOH2Wk2SEUqkugXcANdBu8z9ZjzqvHprhovxZPzHtv5bovv/Pubnz7KgdIiPAfZLy0NmVaJ00OxS/jmkGbGe4L0zbvDBsTv3z9znOMU1eWciCppBsmbyN6/HOgb7In+qVsfqBEdO+xD/DXWC4baZM27hLyX7OFBSzzl5bQMtqHWsYzIKLTB2qXtLpS7nghIE/95OKhdWBgRDP8YBzQfV50zpvofVivK7/W7NPy2R0C6X+nWCKx0xZpo64VclOONPg88JgQ03hmmaLrF1BIHl1uAuKdo6G+y6ZZiXuKa0nZEdjyoz6A4rjoyCgwDWGa17l3UZ6tKHvh0KQ7Lk7iKHnxsMnvzcGhJab0UdtrSe4/WFTZtb561Zy7PL64fPwYBddOFfND5L1Z5VSz8bDfT+5+m4Z+fXgNliiy0HDiufHIscgzroGcpWE9NSPiVknN3nluSDZ01NolWwfC/df9+rKe2Sys0kvLV3kz1plyvLVhY1XHJrJp+C0E5TxrjrOO52dpp4XkmMuCRY+E6/rzcqprcmOp8nW33H/zaYN3zqzSQz6A4qFQpCKni8pVdvHawemzAEjyegO26bz7LlKU1aoLmx87uh4k3e0xwspO3I5kYEVidf3XwiiH0l2vkBan2G48iD6WToKj6gQ4FiWIF+DjyfNLnwYaiXbHlszHBsUNuWc+BGumQPkrQeAbE527iWNwzxbS/PaKSRgJmHjNONsCrOWId/+PpCRX6LtqO1THLhZ5x1fm4aQ489hcgBDKnRCliVDx7+aA7LlRrRTo/6UM6vl39lfKizCJFoM+v8jh3TQEHPrgcvliUNoP0EaPgrcz09RQeyr8Ml3RMXxoLyUV5Ye51x2S95X9bAnifTXxYITBmFxGTKAQ1W98whWF/vUd+lzO3pL3hbxlVsRHjkOMIOwuNYygNLA+e0MAzqudRU2tOSxHQbPoJkYdNs4b2EkET3N5YbeLsiOKR4e2Mvlii+4woMCKQpl5RXt0sGFXu9SxloecwWcw5NvcPHk8j1ND0dllqfz9VtVu8Q7f1a+I3zX9Jxrp+DA63eBCbdkQpgx54K5ZUFAUSzmFbAkYVJ0TFKJd7a6QGYZCNDtJEdEuYVwDvqrvETnT3mNBxuRFWKkrk9+AQj0rArQazHfzxCiw5E+IxthNj7DdwNXZVey1p8h/gM30j51BxSfeAAAAABJRU5ErkJggg=="},7800:function(t,e,s){"use strict";var i=s("51a9"),n=s.n(i);n.a},"7be6":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"load-fade"}},[t.visible?s("div",{staticClass:"loading__wrapper"},[s("div",{staticClass:"loading__main"},[s("div",{staticClass:"loading__icon"})])]):t._e()])},n=[],a={props:{visible:{type:Boolean,default:!1}},data:function(){return{localVisible:!1}},watch:{visible:function(t){var e=this;requestAnimationFrame(function(){e.localVisible=t})}}},o=a,r=(s("b6ca"),s("2877")),c=Object(r["a"])(o,i,n,!1,null,"3b66a32e",null);c.options.__file="LoadingImage.vue";var d=c.exports;s.d(e,"a",function(){return d})},b6ca:function(t,e,s){"use strict";var i=s("5acf"),n=s.n(i);n.a},baa7:function(t,e,s){t.exports=s.p+"img/arrow-left.267c91c0.svg"},c8a9:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("page",{staticClass:"address__container",attrs:{title:t.title}},[i("div",{staticClass:"address__main"},[i("a",{staticClass:"address__btn-add",attrs:{href:"javascript:"},on:{click:function(e){t.openEditor()}}},[i("img",{staticClass:"address__icon-add",attrs:{src:s("0ae9"),alt:""}}),i("span",{},[t._v("新增收货地址")])]),i("ul",t._l(t.addressList,function(e){return i("li",{key:e.id,staticClass:"address__addr-item",on:{click:function(s){s.stopPropagation(),s.preventDefault(),"select"===t.mode&&t.selectAddr(e)}}},["select"===t.mode?i("div",{staticClass:"address__select"},[t.selectedAddress&&e.id===t.selectedAddress.id?i("img",{attrs:{src:s("5b14"),alt:""}}):t._e()]):t._e(),i("div",{staticClass:"address__body"},[i("div",{staticClass:"address__title ellipsis"},[i("span",{staticClass:"address__name"},[t._v(t._s(e.name))]),i("span",{staticClass:"address__sex"},[t._v(t._s(["","先生","女士"][e.sex]))]),i("span",{staticClass:"address__phone"},[t._v(t._s(e.phone))])]),i("div",{staticClass:"address__detail"},[e.tag_type?i("span",{staticClass:"address__tag",attrs:{content:["","家","学校","公司"][e.tag_type]}},[t._v(t._s(["","家","学校","公司"][e.tag_type]))]):t._e(),t._v("\n            "+t._s(e.address+e.address_detail)+"\n          ")])]),i("div",{staticClass:"address__btn-edit",on:{click:function(s){s.stopPropagation(),s.preventDefault(),t.openEditor(e)}}},[i("svg",[i("use",{attrs:{"xlink:href":"#edit"}})])]),i("div",{staticClass:"address__btn-delete",on:{click:function(s){s.stopPropagation(),s.preventDefault(),t.openConfirm(e)}}},[i("svg",[i("use",{attrs:{"xlink:href":"#delete"}})])])])})),i("modal",{attrs:{visible:t.confirmShow,closable:!1},on:{close:t.closeConfirm}},[i("div",{staticClass:"confirm-delete"},[i("h2",{staticClass:"confirm-delete__title"},[t._v("删除地址")]),i("p",{staticClass:"confirm-delete__content"},[t._v("确定删除该地址")]),i("div",{staticClass:"confirm-delete__btns"},[i("button",{staticClass:"confirm-delete__btn confirm-delete__btn-cancel",on:{click:t.closeConfirm}},[t._v("取消")]),i("button",{staticClass:"confirm-delete__btn confirm-delete__btn-ok",on:{click:t.submitConfirm}},[t._v("确认")])])])])],1)])},n=[],a=s("c93e"),o=s("2f62"),r=s("408b"),c=s("4579"),d=s("d50a"),l={name:"Address",components:{Page:c["a"],Modal:d["a"]},props:{title:{type:String},mode:{type:String,default:"normal"}},data:function(){return{editorShow:!1,editingEntity:null,confirmShow:!1,confirmingEntity:null}},created:function(){var t=this;Object(r["a"])().then(function(e){t.SAVE_ADDRESS_LIST(e)})},computed:Object(a["a"])({},Object(o["e"])(["addressList","selectedAddressId"]),Object(o["c"])(["selectedAddress"])),methods:Object(a["a"])({},Object(o["d"])(["SAVE_ADDRESS_LIST","ADD_ADDRESS","SAVE_ADDRESS","REMOVE_ADDRESS","SAVE_SELECTED_ADDRESS","SAVE_EDITING_ADDRESS"]),{getUid:function(){var t=0;return function(){return t++}}(),selectAddr:function(t){this.SAVE_SELECTED_ADDRESS(t),this.$router.go(-1)},addAddr:function(t){var e={id:this.getUid(),location:t.location,name:"家",phone:"13812345678"};this.ADD_ADDRESS(e)},saveAddr:function(t){this.SAVE_ADDRESS(t)},removeAddr:function(t){this.REMOVE_ADDRESS(t)},openEditor:function(t){this.editingEntity=Object(a["a"])({},t)||{},this.editorShow=!0,this.SAVE_EDITING_ADDRESS(this.editingEntity),t?this.$router.push("".concat(this.$route.path,"/edit")):this.$router.push("".concat(this.$route.path,"/create"))},closeEditor:function(){this.editingEntity=null,this.editorShow=!1},saveEditor:function(t){null==t.id?this.addAddr(t):this.saveAddr(t),this.closeEditor()},openConfirm:function(t){console.log("debug - openConfirm"),this.confirmingEntity=Object(a["a"])({},t)||{},this.confirmShow=!0},closeConfirm:function(){this.confirmingEntity=null,this.confirmShow=!1},submitConfirm:function(){this.removeAddr(this.confirmingEntity),this.closeConfirm()}})},u=l,f=(s("7800"),s("2877")),A=Object(f["a"])(u,i,n,!1,null,"6f775836",null);A.options.__file="Address.vue";e["a"]=A.exports},e011:function(t,e,s){},e249:function(t,e,s){"use strict";var i=s("0d54"),n=s.n(i);n.a},f73e:function(t,e,s){"use strict";var i=s("e011"),n=s.n(i);n.a}}]);
//# sourceMappingURL=checkout-address~profile-address.7e009fc0.js.map