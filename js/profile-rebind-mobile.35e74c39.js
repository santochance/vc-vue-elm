(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["profile-rebind-mobile"],{"420d":function(e,t,o){},"622c":function(e,t,o){"use strict";o.r(t);var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("page",{staticClass:"b-moile__block",attrs:{title:"换绑手机"}},[o("div",{staticClass:"b-mobile__form-group"},[o("div",{staticClass:"b-mobile__form-item"},[o("label",{staticClass:"b-mobile__control-label"},[e._v("手机号")]),o("input",{staticClass:"b-mobile__input",attrs:{type:"text",readonly:"",maxlength:"11"},domProps:{value:e._f("mobileMask")(e.mobile)}}),o("button",{staticClass:"b-mobile__form-button b-mobile__btn-code"},[e._v("获取验证码")])]),o("div",{staticClass:"b-mobile__form-item"},[o("label",{staticClass:"b-mobile__control-label"},[e._v("验证码")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"}],staticClass:"b-mobile__input",attrs:{type:"text",placeholder:"请输入验证码"},domProps:{value:e.code},on:{input:function(t){t.target.composing||(e.code=t.target.value)}}})])]),o("div",{staticClass:"b-mobile__submit-wrap"},[o("button",{staticClass:"b-mobile__form-button b-modile__btn-sumbit"},[e._v("验证后绑定新手机")])])])},l=[],s=o("c93e"),a=o("2f62"),b=o("4579"),n={name:"ProfileRebindMobile",components:{Page:b["a"]},props:{},data:function(){return{code:""}},computed:Object(s["a"])({},Object(a["e"])({mobile:function(e){return e.user&&e.user.mobile||""}}))},c=n,r=(o("802f"),o("2877")),m=Object(r["a"])(c,i,l,!1,null,"cd4f9ee2",null);m.options.__file="ProfileRebindMobile.vue";t["default"]=m.exports},"802f":function(e,t,o){"use strict";var i=o("420d"),l=o.n(i);l.a}}]);
//# sourceMappingURL=profile-rebind-mobile.35e74c39.js.map