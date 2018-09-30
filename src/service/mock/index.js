/* eslint no-console: 0, no-debugger: 0 */

import { matchPathBy } from '../../util/utils'
import { parse } from 'qs'

import shopDetails from './shopDetails'
import menu from './menu'

import commentsOverview from './comments/overview'
import tagAll from './comments/tag-all'
import tagSatisfied from './comments/tag-satisfied'
import tagUnsatisfied from './comments/tag-unsatisfied'
import tagWithPic from './comments/tag-with-pic'
import tagTasteGood from './comments/tag-taste-good'
import tagFastDelivery from './comments/tag-fast-delivery'

import addressList from './address'
import checkout from './checkout'
import remarkList from './remarkList'

const tagMap = {
  '全部': tagAll,
  '满意': tagSatisfied,
  '不满意': tagUnsatisfied,
  '有图': tagWithPic,
  '味道好': tagTasteGood,
  '送货快': tagFastDelivery,
}

export const mockApis = {
  'GET /users/current': { id: 123456, username: 'Vincent' },
  'GET /restaurants/:id': shopDetails,
  'GET /restaurant/:id/menu': menu,
  'GET /restaurant/:id/ratings': function () {
    const overview = Object.keys(commentsOverview).reduce((rst, field) => {
      let entity = commentsOverview[field];
      return {
        ...rst,
        [field]: entity.code === 200 ? JSON.parse(entity.body) : null,
      }
    }, {})

    return overview
  },
  'GET /restaurant/:id/comments': function (req) {
    const { tag_name: tagName, offset } = req.query

    const tags = JSON.parse(commentsOverview.tags.body);
    const source = tagMap[tagName]

    const tag = tags.find(tag => tag.name === tagName)
    const count = tag ? tag.count : 0

    let result
    // offset大于或等于总数是返回 []
    result = offset < count ? source : []

    return result
  },
  'GET /restaurant/:id/remarks': remarkList,
  'GET /addresses': addressList,
  'POST /checkout': checkout,

}
const delay = 500

export const mockRequest = function (url, options) {


  return new Promise((resolve, reject) => {
    const { method = 'GET' } = options || {}
    const [ pathStr, queryStr ] = url.split('?')
    const reqStr = `${method} ${pathStr}`

    console.log('% mock Request %: %s %s', method, url)

    let req = { ...options, url, method }
    let foundPath
    let params

    const found = Object.keys(mockApis).some(p => {
      const matched = matchPathBy(reqStr, p)
      if (!matched) return false

      // 匹配路径成功，组装路径 params
      foundPath = p
      params = matched.params
      return true
    })
    req.params = params || {}
    req.query = parse(queryStr)

    if (found) {
      const api = mockApis[foundPath]
      const apiRes = typeof api === 'function' ? api(req) : api
      setTimeout(() => resolve(apiRes), delay)
    } else {
      setTimeout(() => reject({ name: 404, message: 'Not Found' }), delay)
    }
  })
}
