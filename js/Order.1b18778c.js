(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Order"],{"55e2":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("Page",{attrs:{title:"订单","back-btn":!1}},[t.user&&t.user.user_id?e("NoDataTip",{staticClass:"p-order__no-data",attrs:{data:t.emptyTip}}):e("NoDataTip",{staticClass:"p-order__no-data",attrs:{data:t.unauthorizedTip}})],1)},r=[],i=e("c93e"),o=e("2f62"),s=e("6213"),u={name:"Order",components:{NoDataTip:s["a"]},props:{},data:function(){var t=this;return{unauthorizedTip:{img:"https://fuss10.elemecdn.com/d/60/70008646170d1f654e926a2aaa3afpng.png",title:"登录后查看外卖订单",button:{text:"立即登录",handler:function(){t.$router.push({path:"/login",query:{redirect:t.$route.fullPath}})}}},emptyTip:{img:"https://fuss10.elemecdn.com/6/87/4efda8c6bf4734d39faf86fe190c3gif.gif",title:"近三个月无订单记录"}}},computed:Object(i["a"])({},Object(o["e"])(["user"]))},c=u,d=(e("cea5"),e("2877")),p=Object(d["a"])(c,n,r,!1,null,"50937b14",null);p.options.__file="Order.vue";var f=p.exports;e.d(a,"default",function(){return f})},6213:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.data?e("div",{staticClass:"b-no-data b-no-data__box"},[t.data.img?e("img",{attrs:{src:t.imgUrl,alt:""}}):t._e(),e("h3",[t._v(t._s(t.data.title))]),e("p",[t._v(t._s(t.data.content))]),t.data.button?e("button",{on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.data.button.handler(a)}}},[t._v(t._s(t.data.button.text))]):t._e()]):t._e()},r=[],i=(e("7f7f"),e("6bde")),o=(e("cadf"),e("551c"),e("097d"),!1),s={name:"NoDataTip",components:{},props:{data:{type:Object}},data:function(){return{}},computed:{imgUrl:function(){var t=this.data.img;return"object"!==Object(i["a"])(t)||t?t:this.$getImage(t.hash,t.param)}},created:function(){o&&(window[this.$options.name]=this)},methods:{}},u=s,c=(e("9708"),e("2877")),d=Object(c["a"])(u,n,r,!1,null,"69b11149",null);d.options.__file="NoDataTip.vue";var p=d.exports;e.d(a,"a",function(){return p})},"71d9":function(t,a,e){},9708:function(t,a,e){"use strict";var n=e("71d9"),r=e.n(n);r.a},cea5:function(t,a,e){"use strict";var n=e("dabb"),r=e.n(n);r.a},dabb:function(t,a,e){}}]);
//# sourceMappingURL=Order.1b18778c.js.map