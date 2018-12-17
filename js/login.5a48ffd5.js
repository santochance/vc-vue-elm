(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{"37d4":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"b-login__block"},[n("div",{staticClass:"b-login__wrap"},[n("header",{staticClass:"b-login__header"},[n("div",{staticClass:"b-login__logo"},[n("svg",[n("use",{attrs:{"xlink:href":"#logo"}})])]),t._m(0)]),n("div",{staticClass:"b-login__content"},[n("form",[n("div",{staticClass:"b-login__form-item"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.phoneItem.value,expression:"phoneItem.value"},{name:"validate",rawName:"v-validate",value:{required:!0,regex:/^1\d{10}$/},expression:"{ required: true, regex: /^1\\d{10}$/ }"}],staticClass:"b-login__form-control",attrs:{type:"tel",maxlength:"11",placeholder:"手机号",name:"phone"},domProps:{value:t.phoneItem.value},on:{input:function(e){e.target.composing||t.$set(t.phoneItem,"value",e.target.value)}}}),n("button",{staticClass:"b-login__get-code",attrs:{disabled:t.countButtonDisabled},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.onCountClick(e)}}},[t._v(t._s(this.countTimeout?"已发送("+t.countValue+"s)":this.countButtonDirty?"重新获取":"获取验证码"))])]),n("div",{staticClass:"b-login__form-item"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.codeItem.value,expression:"codeItem.value"},{name:"validate",rawName:"v-validate",value:{required:!0,regex:/^\w{6}$/},expression:"{ required: true, regex: /^\\w{6}$/ }"}],staticClass:"b-login__form-control",attrs:{type:"tel",maxlength:"6",placeholder:"验证码",name:"code"},domProps:{value:t.codeItem.value},on:{input:function(e){e.target.composing||t.$set(t.codeItem,"value",e.target.value)}}})]),n("div",{staticClass:"b-login__form-desc"},[n("span",[t._v("温馨提示：未注册饿了么账号的手机号，登录时将自动注册，且代表您已同意")]),n("router-link",{staticClass:"b-login__user-agreement",attrs:{to:""}},[t._v("《用户服务协议》")])],1),n("div",{staticClass:"b-login__form-submit"},[n("button",{staticClass:"b-login__submit-btn",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.onLogin(e)}}},[t._v("登录")])])]),n("router-link",{staticClass:"b-login__about",attrs:{to:"",tag:"p"}},[t._v("关于我们")])],1)]),n("modal",{attrs:{visible:t.captchaShow,closable:!1},on:{close:function(e){t.captchaShow=!1},change:function(e){t.captchaShow=e}}},[n("div",{staticClass:"captcha-panel"},[n("h2",{staticClass:"captcha-panel__title"},[t._v("请填写图形验证码")]),n("div",{staticClass:"captcha-panel__content"},[n("div",{staticClass:"captcha-panel__form-item"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.captchaValue,expression:"captchaValue"}],attrs:{type:"text"},domProps:{value:t.captchaValue},on:{input:function(e){e.target.composing||(t.captchaValue=e.target.value)}}}),n("img",{attrs:{src:t.captchaImage,alt:""},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.onRequestCaptcha(e)}}})]),n("p",{staticClass:"captcha-panel__error"},[t.captchaError?n("span",[n("img",{attrs:{src:a("5a7e"),alt:""}}),t._v("验证码错误，请重新填写\n          ")]):t._e()])]),n("div",{staticClass:"captcha-panel__btns"},[n("button",{staticClass:"captcha-panel__btn captcha-panel__btn-cancel",on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.captchaShow=!1}}},[t._v("取消")]),n("button",{staticClass:"captcha-panel__btn captcha-panel__btn-ok",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.onSubmitCaptcha(e)}}},[t._v("确定")])])])])],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"b-login__header-title"},[a("a",{staticClass:"b-login__mobile-login",attrs:{href:"javascript;"}},[a("span",[t._v("短信登录")])])])}],i=(a("a481"),a("c93e")),c=(a("7f7f"),a("5880")),l=a("d50a"),s=a("408b"),r=a("8bbf"),u=a.n(r),h=a("7bb1");u.a.use(h["a"]);var p=!0;p&&console.warn("[Debug] Login debug is activating");var d={name:"Login",components:{Modal:l["a"]},props:{},data:function(){return{phoneItem:{value:""},codeItem:{value:""},countButtonDisabled:!0,countButtonDirty:!1,countValue:"",countTimeout:null,captchaShow:!1,captchaError:!1,captchaValue:"",captchaHash:"",captchaImage:"",validateToken:"",errorMsgs:{phone:{required:"请输入正确的手机号",regex:"请输入正确的手机号"},code:{required:"请输入6位短信验证码",regex:"请输入6位短信验证码"}}}},watch:{"phoneItem.value":function(t){t.length>=11&&!this.countTimeout?this.countButtonDisabled=!1:this.countButtonDisabled=!0}},created:function(){p&&(window[this.$options.name]=this)},methods:Object(i["a"])({fetchMobileCode:function(){var t={mobile:this.phoneItem.value,captcha_hash:this.captchaHash,captcha_value:this.captchaValue};return Object(s["n"])(t).then(this.fetchMobileCodeFulfilled).catch(this.fetchMobileCodeRejected)},fetchCaptcha:function(){var t={captcha_str:this.phoneItem.value};return Object(s["f"])(t).then(this.fetchCaptchaFulfilled)}},Object(c["mapActions"])(["loginByMobile"]),{onCountClick:function(){this.setCount(),this.fetchMobileCode()},onRequestCaptcha:function(){this.fetchCaptcha()},onSubmitCaptcha:function(){this.fetchMobileCode()},onLogin:function(){var t=this;return this.$validator.validate().then(function(e){if(e){var a={mobile:t.phoneItem.value,validate_code:t.codeItem.value,validate_token:t.validateToken};return t.loginByMobile(a).then(t.loginByMobileFulfilled).catch(t.loginByMobileRejected)}var n=t.errors.items[0];if(n){var o=t.errorMsgs[n.field]&&t.errorMsgs[n.field][n.rule];return l["d"].open({content:o,mask:!1})}})},fetchMobileCodeFulfilled:function(t){var e=t.validate_token;this.validateToken=e,this.captchaValue="",this.captchaError=!1,this.captchaShow=!1},fetchMobileCodeRejected:function(t){var e=t.name,a=t.message;return"NEED_CAPTCHA"===e?this.fetchCaptcha():"CAPTCHA_CODE_ERROR"===e?(this.captchaError=!0,this.fetchCaptcha()):"HERMES_CLIENT_ERROR"===e?(this.captchaShow=!1,l["d"].open({content:a,mask:!1})):"INVALID_MOBILE"===e?(this.captchaShow=!1,l["d"].open({content:a,mask:!1})):void 0},fetchCaptchaFulfilled:function(t){var e=t.captcha_hash,a=t.captcha_image;this.captchaHash=e,this.captchaImage=a,this.captchaShow=!0},loginByMobileFulfilled:function(){this.redirect()},loginByMobileRejected:function(t){var e=t.name,a=t.message;this.code="";var n=a;return"INVALID_VALIDATE_TOKEN"===e&&(n+="，请尝试重新获取验证码"),l["d"].open({content:n,mask:!1,duration:4})},redirect:function(){this.$router.replace(this.$route.query.redirect||"/")},setCount:function(){var t=this;this.countButtonDirty=!0,this.countValue=30,this.countButtonDisabled=!0;var e=function e(){t.countValue--?t.countTimeout=setTimeout(e,1e3):t.cancelCount()};e()},cancelCount:function(){clearTimeout(this.countTimeout),this.countValue="",this.countButtonDisabled=!1,this.countTimeout=null}})},v=d,m=(a("e6c7"),a("2877")),f=Object(m["a"])(v,n,o,!1,null,"77e5f7e1",null);f.options.__file="Login.vue";var b=f.exports;a.d(e,"default",function(){return b})},"5a7e":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAxZJREFUSA21V8tqFEEUPdUGYXytfKCILvQbMkjyAQoqbnThKhkwqB8g7jJRF+IHaFDIZBniwkcSdC1R7Fm7040ulMSAoBLBR8pzb1cz7Ux1T/VMW1DTNVX3nlOPW/feMihRbAO7YTCKPzjA7yFVtfiIbViDRdvM4VsonOknaJvYjveYotxp1jHWNknWEZFQyhYnYLCfrVHWl6zLOIr7pomfbOeWXGJrCdfABEma1I75bxE1PDd38d2HZq9iF37gJOUvcLxO+SbmMG8MezzFS2ynsAO/sED5vQS4xi1c9ejmdvFIxkl3hwIbnOxF32R7iHXmmzwrgyXTwtlc9IABO4lZTmCcx3Ki+/yjrL4jfU3SW8OSCi4xLhPrEe3gq+5ilixty5lyhkt2AvfSvqIvZVcou1wkk45R9qlWsZvuQpAGa/BZUtZK7cbJ+0/iV6yT6bhutV4ZYJpncT0dqPxLI+U0m46LVFI+4BJ/47LWq7qBPw47dj7BEVuc4e4vBmIMLpZwiCNCpG5QPBKdw+CIgZoJx5hwRlypuLq275IHwgWLOY62cEa8Y+JnPwdrDysofp5BRlYsUSZx+MOChuhLcCHnP54rRK8qmYh3S1abxNaqUItwJIySc4QXap3nvK9INmdsJae/uFtid4Q1o9dJVl3Dwf9t2S5mf9Iz1nBl6aM3cap4qhWMSqLALEU4E+OKNMqcrwC6GCLJTjSiJcRH8IAadc0cilV1lLH1GCPNW61sB6jAYdclHxN5JXaJ2QyN7HYICH7jHC3zuFZphxRJhZiHpUlg5x630OLAF67iSV+cETym7Dut0u5TiDlLkQ1J/ryikp64AH/DKzBAJ0lvEvONWnRGvycVcSYfcxtfmHlcyciWburuWSaMEfbo7ckgdLbadepdrmlefJgzXQ01uAymGpLosi/ic2BnN6nI9qw4BdCEPsmRptkXsz5ktv0sz8m4neok9MAMraZVKqFPyeWrOZKkRlt8whjmyPKEScJoGtHEz4vLTZ4wzMfB65laL/u9JXfFPml1r5I4SAzPPtrE35d8tP0F950EOn4oQmQAAAAASUVORK5CYII="},a807:function(t,e,a){},e6c7:function(t,e,a){"use strict";var n=a("a807"),o=a.n(n);o.a}}]);
//# sourceMappingURL=login.5a48ffd5.js.map