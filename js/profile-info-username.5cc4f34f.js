(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["profile-info-username"],{"122c":function(e,s,t){},"4c6c":function(e,s,t){"use strict";t.r(s);var n=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"username__block"},[t("div",{staticClass:"username__item"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"username__input",attrs:{type:"text",placeholder:"用户名"},domProps:{value:e.username},on:{input:function(s){s.target.composing||(e.username=s.target.value)}}})]),t("div",{staticClass:"username__submit-wrap"},[t("div",{staticClass:"username__submit-desc"},[e._v("用户名只能修改一次（5-24个字）")]),t("button",{staticClass:"username__submit-btn",attrs:{disabled:!e.username},on:{click:function(s){e.username&&!e.processing&&e.onSubmit()}}},[e._v("确认修改"),e.processing?t("span",[e._v("加载中...")]):e._e()])])])},a=[],i=t("408b"),r={name:"ProfileInfoUsername",components:{},props:{},data:function(){return{username:"",processing:!1}},methods:{onSubmit:function(){var e=this;this.$emit("submit");var s=this.$store.state;Object(i["s"])({userId:s.userId,username:this.username}).then(function(){e.processing=!1})}}},u=r,o=(t("f10b"),t("2877")),c=Object(o["a"])(u,n,a,!1,null,"b55e8d9e",null);c.options.__file="ProfileInfoUsername.vue";s["default"]=c.exports},f10b:function(e,s,t){"use strict";var n=t("122c"),a=t.n(n);a.a}}]);
//# sourceMappingURL=profile-info-username.5cc4f34f.js.map