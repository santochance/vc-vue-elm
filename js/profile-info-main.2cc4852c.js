(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["profile-info-main"],{"754f":function(t,s,a){},"87ad":function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return t.user?a("div",{staticClass:"info__block"},[a("div",{staticClass:"info__group"},[a("div",{staticClass:"info__item info__avatar"},[a("b",[t._v("头像")]),a("span",{staticClass:"info__item-right info__avatar-right"},[a("input",{staticClass:"info__avatar-file",attrs:{type:"file",accept:"image/jpeg, image/jpg, image/png"}}),a("span",{staticClass:"info__avatar-value",style:{backgroundPosition:"0 "+t.$toRem(120*t.random(0,6))}}),a("span",[a("svg",[a("use",{attrs:{"xlink:href":"#arrow"}})])])])]),a("router-link",{staticClass:"info__item",attrs:{to:"/profile/info/username"}},[a("b",[t._v("用户名")]),a("span",[a("span",[t._v(t._s(t.user.username))]),a("span",{staticClass:"info__item-right"},[a("svg",[a("use",{attrs:{"xlink:href":"#arrow"}})])])])])],1),a("div",{staticClass:"info__group-title"},[t._v("账号绑定")]),a("div",{staticClass:"info__group"},[a("router-link",{staticClass:"info__item",attrs:{to:"/profile/rebind"}},[a("span",[a("i",{staticClass:"info__phone-icon"},[a("svg",[a("use",{attrs:{"xlink:href":"#info-mobile"}})])]),a("b",[t._v("手机")])]),a("span",{staticClass:"info__item-right"},[a("span",[t._v(t._s(t._f("mobileMask")(t.user.mobile)))]),a("span",[a("svg",[a("use",{attrs:{"xlink:href":"#arrow"}})])])])])],1),a("div",{staticClass:"info__group-title"},[t._v("安全设置")]),a("div",{staticClass:"info__group"},[a("router-link",{staticClass:"info__item",attrs:{to:"/profile/info/password"}},[a("span",[t._v("登录密码")]),a("span",{staticClass:"info__item-right"},[a("span",{staticClass:"info__password-value"},[t._v("未设置")]),a("span",[a("svg",[a("use",{attrs:{"xlink:href":"#arrow"}})])])])])],1),a("div",{staticClass:"info__group"},[a("button",{staticClass:"info__btn-logout",on:{click:t.onLogout}},[t._v("退出登录")])])]):t._e()},n=[],o=(a("a481"),a("c93e")),e=a("2f62"),r=a("408b"),f={name:"ProfileInfoMain",components:{},props:{},data:function(){return{extraProfile:null}},created:function(){this.loadData()},activated:function(){this.loadData()},computed:Object(o["a"])({},Object(e["e"])(["user"])),methods:Object(o["a"])({loadData:function(){var t=this;this.fetchCurrentUser().then(function(s){var a=s.user_id;a&&Object(r["l"])({user_id:a}).then(function(s){t.extraProfile=s})})}},Object(e["b"])(["fetchCurrentUser","fetchUser","logout"]),{onLogout:function(){var t=this,s={user_id:this.user.user_id};return this.logout({payload:s}).then(function(){t.$router.replace("/profile")})},random:function(t,s){return Math.floor(t+Math.random()*(s-t))}})},l=f,_=(a("f10b"),a("2877")),u=Object(_["a"])(l,i,n,!1,null,"1550ca12",null);u.options.__file="ProfileInfoMain.vue";s["default"]=u.exports},f10b:function(t,s,a){"use strict";var i=a("754f"),n=a.n(i);n.a}}]);
//# sourceMappingURL=profile-info-main.2cc4852c.js.map