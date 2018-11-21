import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import imageHash from '@/util/imageHash'

import Sticker from '@/util/Sticker'
import { HoldUpScroll, LazyLocalScroll } from '@/util/scrollHelpers'
import '@/util/autoBlurInput'

import '@/util/flexible';
import '@/util/preventPullToRefresh';
import '@/assets/styles/base.scss';
import '@/assets/styles/util.scss';

Vue.config.productionTip = false;

// for imageHash
Vue.use(imageHash)

Vue.use(HoldUpScroll)
Vue.use(LazyLocalScroll)

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

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
