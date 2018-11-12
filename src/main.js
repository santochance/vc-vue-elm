import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import VueLazyload from 'vue-lazyload'
import VeeValidate from 'vee-validate'

import { parseImgHash } from '@/util/utils'
import Sticker from '@/util/Sticker'
// import ScrollLocker from '@/util/ScrollLocker'
import { HoldUpScroll, LazyLocalScroll } from '@/util/VuePlugins'
import { preventPullToRefresh } from '@/util/togglePullToRefresh'
import '@/util/autoBlurInput'
import persistence from '@/util/persistence'

import '@/util/flexible';
import '@/assets/styles/base.scss';
import '@/assets/styles/util.scss';

Vue.config.productionTip = false;

Vue.use(VueLazyload, {
  preload: 3,
  attempt: 5,
})
Vue.use(VeeValidate)
Vue.use(HoldUpScroll)
Vue.use(LazyLocalScroll)


// 应用范围内阻止下拉刷新
preventPullToRefresh()

// 应用页面卸载前询问
// window.addEventListener('beforeunload', (ev) => {
//   console.log('beforeunload')
//   ev.preventDefault()
//   return (ev.returnValue = '')
// })

Vue.prototype.$persistence = persistence

const host = '//fuss10.elemecdn.com'
Vue.prototype.$getImage = function (hash, param) {
  if (!hash) return ''
  return host + parseImgHash(hash) + (param || '')
}
Vue.prototype.$toRem = function (px) {
  if (!px) return 0
  return px / 750 * 10  + 'rem'
}
Vue.prototype.$toRpx = function (px) {
  return px / 750 * window.innerWidth
}

Vue.directive('stick', {
  inserted(el, binding, vnode) {
    vnode.context.sticker = new Sticker(el)
  },
  unbind(el, binding, vnode) {
    const sticker = vnode.context.sticker;
    if (sticker) sticker.destory()
  },
})

Vue.filter('mobileMask', function (value) {
  return String(value).split('').map((v, i) => i >= 3 && i < 7 ? '*' : v).join('')
})


window.Vue = Vue

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
