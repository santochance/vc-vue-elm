(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Checkout"],{"0a55":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("keep-alive",{attrs:{exclude:["AddressEdit"]}},[s("router-view")],1)},i=[],r={name:"Checkout",components:{},props:{},data:function(){return{}}},c=r,n=s("2877"),o=Object(n["a"])(c,a,i,!1,null,null,null);o.options.__file="Checkout.vue";var l=o.exports;s.d(e,"default",function(){return l})},5649:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Address",{attrs:{title:"选择地址",mode:"select",selectedAddressId:t.selectedAddressId,addressList:t.addressList},on:{select:t.selectAddr}})},i=[],r=(s("4917"),s("c93e")),c=s("c8a9"),n=s("5880"),o=s("408b"),l={name:"CheckoutAddress",components:{Address:c["a"]},props:{},data:function(){return{addressList:[]}},computed:Object(r["a"])({},Object(n["mapState"])(["userId","cartId","sig","currentRestaurantId","selectedAddressId"])),beforeRouteEnter:function(t,e,s){if(!e.path.match("/checkout"))return s("/checkout");s()},created:function(){var t=this,e={userId:this.userId,cartId:this.cartId,sig:this.sig,restaurantId:this.currentRestaurantId};Object(o["g"])(e).then(function(e){t.addressList=e})},methods:Object(r["a"])({},Object(n["mapMutations"])(["SAVE_SELECTED_ADDRESS_ID"]),{selectAddr:function(t){this.SAVE_SELECTED_ADDRESS_ID(t&&t.id),this.$router.go(-1)}})},d=l,u=s("2877"),_=Object(u["a"])(d,a,i,!1,null,null,null);_.options.__file="CheckoutAddress.vue";e["default"]=_.exports},"716e":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAiCAYAAAA+stv/AAAAAXNSR0IArs4c6QAABjNJREFUWAntVltsVUUUnZnetunLKi/F3tBYhMQQ0CAPiai1aXxUJEA0Gixq4gckEhJoCxoT0xCJGIo/1Q/FhA+CkEb8slWICB9ieBWbghBjSHiFSqHWlt7W9t6Zca095zRtDD/loR+e9pyZs2fPXmvtvee0Sv3Ll77T+LN+ry1IdbjlWvtVudnFC+4Ygemnaua6jH/DeVWtlC9WHtJ1Ynridmag3tebne3XX3He12TS7lFieQBr/HhM8Cy9bRkoa6tZppXb6J2aEQOL6IgEbcbot255Bsra187UVjd6559ygswHL2iFatHNEWzwW5IVFm/++bJvyhpcmnxPW7MLKS8jIEHiUeZ897ALHArh9ZlbUoIFF9fmXblm9jjnno+iC4QHWGARgZKFJjGMgciemy4BwTs61TfKu4qgmNgRCNkEuQGUdhwDuSjdqwkmvI3tybQDfI93GuCMSGDEJYioRxtiGjCjNfrgdtIg6u6b6oHUoilstuUEJjLB5YgRhO8yotuVHgCJQVhywhEcFtw35gyUttYu9c69TVCmOdSbygBDdaxxNFqv9sGvUGziK3yVdTp/TBkoO76h2LlMCxQWhaCUTsBopHopCcxGb0c2HobfxEA0Uh9IuzFlIJ2xNc6qyVQf7qCWKScISUXXSW/1CfTIQ+IXlYTz0BcqXzwfaK2tRvIWamWaVswuPFiv60OLxGFGjPy8fnGk5zxAkgEc0aBegOEXbJho7ZQzFVrbnSBWIj1BcrxkBGl4SwawqSRj/cq0tfu3H++9NOXYus1lR9ZND96jn9uP9s2HoiQVBLAAzq7mTRsBtFeN6L65sJVIX8ip4BqAR+wNBJybLwshyGRn/YYhp35NHl57IHm4rmokBZtRcyVABEiw6EhF4Dx6+lJurtnsM+4dSTVBMeG+mAxH7B00D554dyJS9IIssEYIPMzS6XJnbXPJT+vaZ/xSX0giVvk5w0rpGtVVSEQAWuuN/f12OV7Hk+BIxciNkAgYeiAxNJR+zXmXw0BI27AzwXiF2umZg4ODeXjtA0F0NIG5GB4ECDO2lD6bZwt39Knrv8XgwTGUCnmgjzQh5F5NAHwxj4ywxBIBoUDeGTTORmpgKF9ekV8GYBj6hngMzhRjr9GbUipVDqJJ+osv/aIrPp5CzukrBoZZ8XoYmSLEi+5QKqTeq6gpdT/+2klNhRwCiy9FKNOdm3P/bm9ddchcqLn4Sc+EPgj+ZOQvGDRHIQHjuqLDU4h0Lq4tSXED/sbPky1e9YqNdk4cs0VCWHVqR7rgMkUtiTNHxbEI2kQ5txHTm9NwVgMhTQwo6wVYbJTYDEpl3GDdMiHg9HEBEzuDc1MYfZbZlelUldb7AjFHyPSPRcYjMVHq0wZr5+UTyoDi6FVCZ53CvJlO8bFBRmZPOli7ALuaYlXhKAWFKH7XmvL8oyA0jyoJJH4yUgjfKQFZwEVMo7JbjbL6GIlSCUc6pp2rKlBF1QA9KEq4jkVr1QdXn97SBp+99BPlsJM47gP8guI1fCewHu+VLMKHe/CNCf5a//zHs5suGmX8bjrEd5SFFYnkuIHSomnPYNNq3K1Yt4heMX5/3Zs5iexV6JXrAsATgcA4wm2AAIKaGtSTQFQ+OLCnKBC/0dx/TXfz5BOPQaW+TOrytWKKvB7357kLa1rnrEx3VX78aVfl1jnZk3Qxvtzl+BKpjvIPz6MUryKuFfUM7PwZBkRjFTDNQo7AXJPyjph7fy0nv+gT+ktBJv1Q9zjk7YdvLjfIpVUa/0hUdVU2fB9Z/jEUt9S8hEPwJQhnJ5Re2F215VBhc20HEO8LJBgMZLhTAkfZ0n5l/+Ktn9Msfws6K7Ycwv/or8Onh96iyqrsjFV779lX23jXd+vn3bu3FspGXz1VW7/SOrEUwXu9MX1hVZ9lqiWjUQkks5izNIjfkHqxYVscafj/gasVDU1KJUpRq/fBug1p60ZgY61fjc/Q4b+8Oln0bd224pa6qfFmjr3PfdRsEvqRIZXVKXY0o/RTVIZAhCu62xi1amBJQx2OnyRFrLLpBo8JP64vykq5vOT4ad3shxu4jTLntaxPqiF71GtTqL0f8lq3A25fTiLrs55Fm7tHOf//8l/IwN9eHlxiYJPYiwAAAABJRU5ErkJggg=="},8145:function(t,e,s){},"81e1":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("AddressEdit")},i=[],r=(s("4917"),s("fcc1")),c={name:"CheckoutAddressEdit",components:{AddressEdit:r["a"]},props:{},data:function(){return{}},beforeRouterEnter:function(t,e,s){if(!e.path.match("/checkout/address"))return s("/checkout");s(function(t){return function(){var t=this.$store.state.editingAddress;if(!t)return s("/checkout")}.call(t)})}},n=c,o=(s("dd69"),s("2877")),l=Object(o["a"])(n,a,i,!1,null,"ffb2eed0",null);l.options.__file="CheckoutAddressEdit.vue";e["default"]=l.exports},"8d1b":function(t,e,s){},ad59:function(t,e,s){"use strict";var a=s("8d1b"),i=s.n(a);i.a},ca03:function(t,e,s){"use strict";var a=s("8145"),i=s.n(a);i.a},cebc:function(t,e,s){},dd69:function(t,e,s){"use strict";var a=s("cebc"),i=s.n(a);i.a},de38:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("page",{attrs:{title:"订单备注"}},[s("section",[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.inputedRemark,expression:"inputedRemark"}],attrs:{placeholder:"填写额外对餐厅和骑手小哥备注的信息",maxlength:"100"},domProps:{value:t.inputedRemark},on:{input:function(e){e.target.composing||(t.inputedRemark=e.target.value)}}}),t.remarkList?s("div",t._l(t.remarkList.remarks,function(e,a){return s("div",{key:a,staticClass:"switch"},t._l(e,function(e,i){return s("span",{key:i,staticClass:"switch-item",class:{"switch-item_selected":t.selectedRemarks[a]&&i in t.selectedRemarks[a]},on:{click:function(s){s.stopPropagation(),s.preventDefault(),t.select(a,i,e)}}},[t._v(t._s(e))])}))})):t._e()]),s("button",{staticClass:"submit-btn",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.submit(e)}}},[t._v("确定")])])},i=[],r=s("8afe"),c=s("c93e"),n=s("5880"),o=s("408b"),l=s("4579"),d={name:"Remark",components:{Page:l["a"]},data:function(){return{inputedRemark:"",selectedRemarks:[]}},computed:Object(c["a"])({},Object(n["mapState"])(["remarkList","usedRemark","cartId","sig","currentRestaurantId"])),created:function(){var t=this;if(!this.remarkList){var e={cartId:this.cartId,sig:this.sig,restaurantId:this.currentRestaurantId};return Object(o["p"])(e).then(function(e){t.SAVE_REMARK_LIST(e)})}Promise.resolve().then(function(){var e=t.usedRemark;e&&(t.inputedRemark=e.inputed,t.selectedRemarks=e.selected)})},methods:Object(c["a"])({},Object(n["mapMutations"])(["SAVE_REMARK_LIST","SAVE_USED_REMARK"]),{select:function(t,e,s){var a=this.selectedRemarks[t]||[];void 0!=a[e]?a.splice(e,1):(a=[],a[e]=s),this.selectedRemarks[t]=a,this.selectedRemarks=Object(r["a"])(this.selectedRemarks)},submit:function(){this.SAVE_USED_REMARK({inputed:this.inputedRemark,selected:this.selectedRemarks}),this.$router.go(-1)}})},u=d,_=(s("ca03"),s("2877")),v=Object(_["a"])(u,a,i,!1,null,"bdd188da",null);v.options.__file="Remark.vue";e["default"]=v.exports},f716:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("page",{attrs:{title:"确认订单",loading:t.loading}},[t.checkout?a("div",{staticClass:"checkout-body"},[a("section",{staticClass:"cart-address",on:{click:t.selectAddr}},[t.current_address?a("div",{staticClass:"cart-address__item"},[a("div",{staticClass:"cart-address__title"},[a("span",[t._v("订单配送至")]),t.current_address.tag_type?a("span",{staticClass:"cart-address__address-tag"},[t._v(t._s({1:"家",2:"公司",3:"学校"}[t.current_address.tag_type]))]):t._e()]),a("div",{staticClass:"cart-address__address-detail"},[a("span",{staticClass:"ellipsis"},[t._v(t._s(t.current_address.address+t.current_address.address_detail))]),a("svg",[a("use",{attrs:{"xlink:href":"#arrow-right-bold"}})])]),a("div",{staticClass:"cart-address__address-name"},[a("span",[t._v(t._s(t.current_address.name))]),a("span",[t._v("("+t._s(1===t.current_address.sex?"先生":"女士")+")")]),a("span",{staticClass:"cart-address__address-phone"},[t._v(t._s(t.current_address.phone))])])]):a("div",{staticClass:"cart-address__item"},[a("div",{staticClass:"cart-address__title"},[a("span",[t._v("订单配送至")])]),a("div",{staticClass:"cart-address__address-detail"},[a("span",{staticClass:"ellipsis"},[t._v("马上选择地址")]),a("svg",[a("use",{attrs:{"xlink:href":"#arrow-right-bold"}})])])])]),a("section",{staticClass:"checkout-section"},[a("div",{staticClass:"checkout-item delivery"},[a("div",{staticClass:"delivery__left"},[a("div",{staticClass:"checkout-item__title"},[a("span",[t._v("送达时间")])]),t.delivery_type?a("div",{staticClass:"delivery__delivery-type"},[a("span",[t._v(t._s(t.delivery_type&&t.delivery_type.name))])]):t._e()]),a("div",{staticClass:"delivery__right"},[a("div",{staticClass:"delivery__select"},[t.deliver_times?[a("span",{on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.deliverTimesVisible=!0}}},[t._v("\n                "+t._s(""===t.selectedDeliverDateTime?"选择送达时间":t.selectedDeliverDateTime)+"\n              ")]),a("svg",[a("use",{attrs:{"xlink:href":"#arrow-right"}})])]:[a("span",[t._v("尽快送达("+t._s(t.checkout.delivery_reach_time)+"送达)")])]],2)])]),a("div",{staticClass:"checkout-item pay-method"},[a("div",{staticClass:"checkout-item__title"},[a("span",[t._v("支付方式")])]),a("div",{staticClass:"pay-method__text"},[a("span",[t._v(t._s(t.checkout.pay_methods[0].name))])])])]),a("section",{staticClass:"checkout-section cart-group"},[a("div",{staticClass:"cart-group__header"},[a("span",{staticClass:"cart-group__shop-name"},[t._v(t._s(t.shopNames[0]))]),a("span",{staticClass:"cart-group__branch-name"},[t._v(t._s(t.shopNames[1]?"("+t.shopNames[1]+")":""))])]),a("ul",{staticClass:"cart-group__list"},t._l(t.checkout.cart.group[0],function(e){return a("li",{key:e.id+e.attrs,staticClass:"checkout-item food-item"},[a("div",{staticClass:"food-item__img"},[a("img",{attrs:{src:t.$getImage(e.image_hash,t.foodImgParam),alt:""}})]),a("div",{staticClass:"food-item__info"},[a("div",{staticClass:"food-item__name ellipsis"},[t._v(t._s(e.name))]),a("div",{staticClass:"food-item__attr"},t._l(e.attrs,function(e,s){return a("span",{key:s},[t._v(t._s(e.value))])}))]),a("div",{staticClass:"food-item__quantity"},[t._v("× "+t._s(e.quantity))]),a("div",{staticClass:"food-item__price"},[t._v(t._s(t._f("toPrice")(e.quantity*e.price)))])])})),t.packing_fee?a("div",{staticClass:"checkout-item cart-group__item"},[a("div",[a("span",{staticClass:"cart-group__tag cart-group__packing-fee"},[t._v(t._s(t.packing_fee.icon.name))]),a("span",{staticClass:"cart-group__item-title ellipsis"},[t._v(t._s(t.packing_fee.name))])]),a("div",{staticClass:"cart-group__price"},[t._v(t._s(t._f("toPrice")(t.packing_fee.price)))])]):t._e(),t.agent_fee?a("div",{staticClass:"checkout-item cart-group__item"},[a("div",[a("span",{staticClass:"cart-group__tag cart-group__agent-fee"},[t._v(t._s(t.agent_fee.icon.name))]),a("span",{staticClass:"cart-group__item-title ellipsis"},[t._v(t._s(t.agent_fee.name))])]),a("div",{staticClass:"cart-group__price"},[t._v(t._s(t._f("toPrice")(t.agent_fee.price)))])]):t._e(),a("div",{staticClass:"checkout-item cart-group__discount"},[t._v("新用户立减与其他优惠不能同享")]),t.checkout.hongbao_info?a("div",{staticClass:"checkout-item cart-group__item"},[a("div",{staticClass:"cart-group__item-title"},[t._v("红包")]),a("div",{staticClass:"cart-group__hongbao"},[a("svg",[a("use",{attrs:{"xlink:href":"#red-packet"}})]),a("span",[t._v(t._s(t.checkout.hongbao_info.status_text||"暂时只在饿了么 APP 中支持"))])])]):t._e(),a("div",{staticClass:"checkout-item cart-group__footer"},[a("a",{staticClass:"cart-group__discount-intro",attrs:{href:"javascript:"}},[a("span",[t._v("优惠说明")]),a("svg",[a("use",{attrs:{"xlink:href":"#tip"}})])]),a("div",{staticClass:"cart-group__total-price-wrap"},[a("span",[t._v("小计 ¥")]),a("span",{staticClass:"cart-group__total-price"},[t._v(t._s(t._f("toPrice")(t.checkout.cart.original_total)))])])])]),a("section",{staticClass:"checkout-section checkout-misc"},[a("div",{staticClass:"checkout-item checkout-misc__tableware",on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.tablewareVisible=!0}}},[a("span",[t._v("餐具份数")]),a("a",{staticClass:"checkout-misc__content",attrs:{href:"javascript:"}},[""===t.selectedTableware?a("span",{staticClass:"checkout-misc__tableware_unselected"},[t._v("\n            未选择")]):"0"===t.selectedTableware?a("span",{staticClass:"checkout-misc__tableware_selected"},[t._v("\n            无需餐具")]):a("span",{staticClass:"checkout-misc__tableware_selected"},[t._v("\n            "+t._s(t.selectedTableware)+"餐具")]),a("svg",[a("use",{attrs:{"xlink:href":"#arrow-right"}})])]),a("div",{staticClass:"checkout-misc__slogan"},[a("img",{attrs:{src:s("716e"),alt:""}}),a("span",[t._v("马上助力环保")])])]),a("div",{staticClass:"checkout-item",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.inputRemark(e)}}},[t.remarkText?a("span",{staticClass:"checkout-misc__remark"},[t._v(t._s(t.remarkText))]):a("span",[t._v("订单备注")]),a("a",{staticClass:"checkout-misc__content",attrs:{href:"javascript:"}},[t.remarkText?t._e():a("span",[t._v("口味、偏好")]),a("svg",[a("use",{attrs:{"xlink:href":"#arrow-right"}})])])]),a("div",{staticClass:"checkout-item"},[a("span",[t._v("发票信息")]),a("span",{staticClass:"checkout-misc__content"},[t._v("商家不支持开发票")])])])]):t._e(),t.checkout?a("footer",{staticClass:"action-bar"},[a("span",{staticClass:"action-bar__total-price"},[t._v("¥"+t._s(t._f("toPrice")(t.checkout.cart.original_total)))]),a("a",{staticClass:"action-bar__submit-btn",attrs:{href:"javascript:"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.submit(e)}}},[t._v("去支付")])]):t._e(),a("modal",{attrs:{visible:t.deliverTimesVisible,panel:"bottom",closable:!1},on:{close:function(e){t.deliverTimesVisible=!1},change:function(e){t.deliverTimesVisible=e}}},[t.checkout?a("div",{staticClass:"deliver-times__container"},[a("h3",{staticClass:"deliver-times__head"},[t._v("选择送达时间")]),a("div",{staticClass:"deliver-times__content"},[a("nav",{staticClass:"deliver-times__tabs"},t._l(t.checkout.deliver_times,function(e,s){return a("div",{key:e.tab,staticClass:"deliver-times__tab",class:{"deliver-times__tab_active":t.activeDeliverDayIdx===s},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.activeDeliverDayIdx=s}}},[t._v(t._s(e.tab))])})),a("ul",{staticClass:"deliver-times__panels"},[t._l(t.checkout.deliver_times,function(e,s){return t.activeDeliverDayIdx===s?t._l(e.time_points,function(s){return a("li",{key:s.time,staticClass:"deliver-times__panel",on:{click:function(a){a.stopPropagation(),a.preventDefault(),t.selectDeliverTime(e,s)}}},[a("span",{staticClass:"deliver-times__time"},[t._v(t._s(s.time))]),a("span",{staticClass:"deliver-times__description"},[t._v("（"+t._s(s.delivery_fee_description)+"）")]),t.selectedDeliverDateTime===e.tab+s.time?a("svg",[a("use",{attrs:{"xlink:href":"#select"}})]):t._e()])}):t._e()})],2)])]):t._e()]),a("modal",{attrs:{visible:t.tablewareVisible,panel:"bottom"},on:{close:function(e){t.tablewareVisible=!1},change:function(e){t.tablewareVisible=e}}},[a("div",{staticClass:"tableware__container"},[a("h2",{staticClass:"tableware__head"},[t._v("餐具份数")]),a("ul",{staticClass:"tableware__list"},[a("li",{key:0,staticClass:"tableware__item",on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.selectTableware("0")}}},[a("img",{attrs:{src:s("716e"),alt:""}}),a("span",[t._v("无需餐具")])]),t._l(10,function(e){return a("li",{key:e,staticClass:"tableware__item",on:{click:function(s){s.stopPropagation(),s.preventDefault(),t.selectTableware(e+"份")}}},[t._v(t._s(e)+"\n        ")])}),a("li",{key:11,staticClass:"tableware__item",on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.selectTableware("10份以上")}}},[t._v("10份以上")])],2)])])],1)},i=[],r=(s("a481"),s("28a5"),s("7f7f"),s("ac6a"),s("456d"),s("c93e")),c=(s("c5f6"),s("5880")),n=s("408b"),o=s("d50a"),l=s("4579"),d={name:"ConfirmOrder",components:{Tag:o["c"],Modal:o["a"],Toast:o["d"],Page:l["a"]},props:{},filters:{toPrice:function(t,e){return Number((t||0).toFixed(e||2))}},data:function(){return{loading:!1,checkout:null,tablewareVisible:!1,selectedTableware:"",deliverTimesVisible:!1,activeDeliverDayIdx:0,selectedDeliverDateTime:"",verifyFailedMsg:"",foodImgParam:"?imageMogr/format/webp/thumbnail/!72x72r/gravity/Center/crop/72x72/"}},computed:Object(r["a"])({},Object(c["mapState"])({restaurantId:"currentRestaurantId",entities:function(t){return(t.cartMap[this.restaurantId]||{}).entities||[]}}),Object(c["mapState"])(["addressList","selectedAddressId"]),Object(c["mapGetters"])(["remarkText"]),{current_address:function(){var t;try{t=this.checkout.current_address}catch(t){}return t&&Object.keys(t).length?t:null},delivery_type:function(){var t;try{t=this.checkout.cart.restaurant.delivery_type}catch(t){}return t},shopNames:function(){var t=this.checkout,e=t.cart&&t.cart.restaurant&&t.cart.restaurant.name||"";return e.split(/[()（）]/)},packing_fee:function(){var t;try{t=this.checkout.cart.extra.packing_fee}catch(t){}return t},agent_fee:function(){var t;try{t=this.checkout.cart.extra.agent_fee}catch(t){}return t},deliver_times:function(){var t;try{t=this.checkout.cart.extra.agent_fee}catch(t){}return t&&t.length&&(!t[0]||t[0].time_points.length)||(t=null),t}}),created:function(){if(!this.restaurantId)return o["d"].open({content:"当前还没有任何下单信息",duration:4}),this.$router.replace("/");this.doCheckout()},methods:{doCheckout:function(){var t=this,e=this.$store.state,s=e.userId,a=e.selectedAddressId,i=e.geohash,r=e.sig,c={userId:s,restaurantId:this.restaurantId,addressId:a,entities:this.entities,deliverTime:this.selectedDeliverDateTime,tableware:this.selectedTableware,remark:this.remarkText,geohash:i,sig:r};return console.log("payload:",c),this.loading=!0,Object(n["x"])(c).then(function(e){t.$store.commit("SAVE_SIG",e.cart&&e.cart.sig),t.$store.commit("SAVE_CART_ID",e.cart&&e.cart.id),t.checkout=e,t.loading=!1},function(e){if(o["d"].open({content:e.message}),"NOT_AVAILABLE_ENTITIES"===e.name)return t.$router.replace("/")})},submit:function(){this.verify()},verify:function(){return this.selectedAddressId?this.deliver_times&&!this.selectedDeliverDateTime?(o["d"].open({content:"请选择送达时间！",mask:!1}),this.verifyFailedMsg="请选择送达时间！"):this.verifyFailedMsg="":(o["d"].open({content:"请选择配送地址！",mask:!1}),this.verifyFailedMsg="请选择配送地址！")},selectAddr:function(){this.$router.push(this.$route.path+"/address")},selectDeliverTime:function(t,e){this.selectedDeliverDateTime=t.tab+e.time,this.deliverTimesVisible=!1,this.refresh()},selectTableware:function(t){this.selectedTableware=t,this.tablewareVisible=!1,this.refresh()},inputRemark:function(){this.$router.push(this.$route.path+"/remark")},refresh:function(){this.verifyFailedMsg=""}},watch:{selectedAddressId:function(){this.doCheckout()},selectedDeliverDateTime:function(){this.doCheckout()},selectedTableware:function(){this.doCheckout()},remarkText:function(){this.doCheckout()}}},u=d,_=(s("ad59"),s("2877")),v=Object(_["a"])(u,a,i,!1,null,"23f8bc38",null);v.options.__file="ConfirmOrder.vue";e["default"]=v.exports}}]);
//# sourceMappingURL=Checkout.f831aea9.js.map