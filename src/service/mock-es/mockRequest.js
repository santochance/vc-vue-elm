import { matchPathBy } from '../../util/utils'
import { parse } from 'qs'
import mockApis from './index'

// 响应延迟
const delay = 500
const debug = true

export default function mockRequest(url, options) {

  return new Promise((resolve, reject) => {
    const { method = 'GET' } = options || {}
    const [ pathStr, queryStr ] = url.split('?')
    const reqStr = `${method} ${pathStr}`

    debug && console.log('% mock Request %: %s %s', method, url)

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

      debug && console.log('request succeed:', apiRes)

      setTimeout(() => resolve(apiRes), delay)
    } else {
      debug && console.warn('reqeust fail')
      reject()
    }

    // debug && console.groupEnd()
  })
}