import config from '@/config'
import { parseImgHash } from '@/util/utils'
import checkWebFeature from '@/util/checkWebpFeature'

let host = config.imageHost

// For browsers not support webp, such as Firefox
let webpSupported = false
checkWebFeature('lossy', function (feature, result) {
  webpSupported = result
})
function getImage(hash, param) {
  if (!hash) return ''
  if (!webpSupported) {
    param = param.replace(/\/format\/webp/, '')
  }
  return host + parseImgHash(hash) + (param || '')
}

export default {
  install(Vue,/* options */) {
    Vue.prototype.$getImage = getImage
  }
}