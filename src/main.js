import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import { parseImgHash } from '@/util/utils'
import Sticker from '@/util/Sticker'
// import ScrollLocker from '@/util/ScrollLocker'
import { HoldUpScroll, LazyLocalScroll } from '@/util/VuePlugins'
import persistence from '@/util/persistence'

import '@/util/flexible';
import '@/assets/styles/base.scss';
import '@/assets/styles/util.scss';

Vue.config.productionTip = false;

Vue.use(HoldUpScroll)
Vue.use(LazyLocalScroll)

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
Vue.directive('stick', {
  inserted(el, binding, vnode) {
    vnode.context.sticker = new Sticker(el)
  },
  unbind(el, binding, vnode) {
    const sticker = vnode.context.sticker;
    if (sticker) sticker.destory()
  },
})


window.Vue = Vue

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
