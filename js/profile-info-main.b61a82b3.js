(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["profile-info-main"],{"3c00":function(t,a,s){},"6b4a":function(t,a,s){"use strict";var i=s("3c00"),n=s.n(i);n.a},"87ad":function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return t.user?s("div",{staticClass:"info__block"},[s("div",{staticClass:"info__group"},[s("div",{staticClass:"info__item info__avatar"},[s("b",[t._v("头像")]),s("span",{staticClass:"info__item-right info__avatar-right"},[s("input",{staticClass:"info__avatar-file",attrs:{type:"file",accept:"image/jpeg, image/jpg, image/png"}}),s("span",{staticClass:"info__avatar-value",style:{backgroundPosition:"0 "+t.$toRem(t.avatarPos)}}),s("span",[s("svg",[s("use",{attrs:{"xlink:href":"#arrow"}})])])])]),s("router-link",{staticClass:"info__item",attrs:{to:"/profile/info/username"}},[s("b",[t._v("用户名")]),s("span",[s("span",[t._v(t._s(t.user.username))]),s("span",{staticClass:"info__item-right"},[s("svg",[s("use",{attrs:{"xlink:href":"#arrow"}})])])])])],1),s("div",{staticClass:"info__group-title"},[t._v("账号绑定")]),s("div",{staticClass:"info__group"},[s("router-link",{staticClass:"info__item",attrs:{to:"/profile/rebind"}},[s("span",[s("i",{staticClass:"info__phone-icon"},[s("svg",[s("use",{attrs:{"xlink:href":"#info-mobile"}})])]),s("b",[t._v("手机")])]),s("span",{staticClass:"info__item-right"},[s("span",[t._v(t._s(t._f("mobileMask")(t.user.mobile)))]),s("span",[s("svg",[s("use",{attrs:{"xlink:href":"#arrow"}})])])])])],1),s("div",{staticClass:"info__group-title"},[t._v("安全设置")]),s("div",{staticClass:"info__group"},[s("router-link",{staticClass:"info__item",attrs:{to:"/profile/info/password"}},[s("span",[t._v("登录密码")]),s("span",{staticClass:"info__item-right"},[s("span",{staticClass:"info__password-value"},[t._v("未设置")]),s("span",[s("svg",[s("use",{attrs:{"xlink:href":"#arrow"}})])])])])],1),s("div",{staticClass:"info__group"},[s("button",{staticClass:"info__btn-logout",on:{click:t.onLogout}},[t._v("退出登录")])])]):t._e()},n=[],o=(s("a481"),s("c93e")),e=(s("cadf"),s("551c"),s("097d"),s("2f62")),r=s("408b"),f={name:"ProfileInfoMain",components:{},props:{},data:function(){return{extraProfile:null}},created:function(){this.loadData()},activated:function(){this.loadData()},computed:Object(o["a"])({},Object(e["e"])(["user"]),{avatarPos:function(){return 120*this.random(0,6)}}),methods:Object(o["a"])({loadData:function(){var t=this;this.fetchCurrentUser().then(function(a){var s=a.user_id;s&&Object(r["m"])({user_id:s}).then(function(a){t.extraProfile=a})})}},Object(e["b"])(["fetchCurrentUser","fetchUser","logout"]),{onLogout:function(){var t=this,a={user_id:this.user.user_id};return this.logout({payload:a}).then(function(){t.$router.replace("/profile")})},random:function(t,a){return Math.floor(t+Math.random()*(a-t))}})},l=f,c=(s("6b4a"),s("2877")),u=Object(c["a"])(l,i,n,!1,null,"35a377d8",null);u.options.__file="ProfileInfoMain.vue";a["default"]=u.exports}}]);
//# sourceMappingURL=profile-info-main.b61a82b3.js.map