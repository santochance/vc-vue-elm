// import ('es6-promise/auto')
// import fetch from 'isomorphic-fetch'
// import mockRequest from '../service/mock-es/mockRequest'

const debug = false
const proxyServer = process.env.PROXY_SERVER || 'https://cors-proxy.leanapp.cn'

const request = function (url, options) {
  // fetch 默认不发送 cookie
  const defaultOptions = {
    credentials: 'include',
  }
  const newOptions = { ...defaultOptions, ...options }

  if (
    newOptions.method === 'POST' ||
    newOptions.method === 'PUT' ||
    newOptions.method === 'PATCH'  ||
    newOptions.method === 'DELETE'
  ) {
    // 统一设置 header
    if (!(newOptions.body instanceof FormData)) {
      newOptions.headers = {
        Accept: 'application/json',
        // 由于不明原因，设置 Content-Type 导致 CORS prefight 请求异常
        // 下面在使用 CORS 时移除 fetch options 中的 headers
        'Content-Type': 'application/json;charset=utf-8',
        ...newOptions.headers,
      }
      if (typeof newOptions.body === 'object') {
        newOptions.body = JSON.stringify(newOptions.body)
      }
    } else {
      // newOptions.body is FormData
      newOptions.headers = {
        Accept: 'application/json',
        ...newOptions.headers,
      }
    }
  }

  // 解析 url
  let reqUrl = url
  const urlObj = new URL(url, location.origin)
  if (
    urlObj.origin !== location.origin &&
    newOptions.proxy !== false
  ) {
    // 使用 cors proxy

    // 不在 fetch 设置 headers，而是发送给代理设置，避免 CORS prefight 请求失败
    const proxyHeaders = newOptions.headers
    newOptions.headers = {}

    const proxyConfig = {
      origin: urlObj.origin,
      scheme: urlObj.protocol.match(/[^:]+/)[0],
      host: urlObj.host,
      referrer: newOptions.referrer ? newOptions.referrer : urlObj.origin,
      ...{ ...newOptions.proxy },
      headers: {
        ...proxyHeaders,
        ...(newOptions.proxy && newOptions.proxy.headers),
      },
    }
    debug && console.log('proxyConfig:', proxyConfig)

    // 添加 proxy target host 到路径开头作为标识以方便和调试
    urlObj.pathname = `/proxy/${urlObj.host}` + urlObj.pathname

    debug && console.log('proxy used path:', urlObj.pathname)

    // 添加 proxy 参数到 queryString
    urlObj.search = [
      urlObj.search || '',
      urlObj.search ? '&' : '?',
      `x-proxy=${JSON.stringify(proxyConfig)}`
    ].join('')

    debug && console.log('proxy used quersy string:', urlObj.search)

    // 组装请求 url
    reqUrl = proxyServer + urlObj.pathname + urlObj.search
  }

  return fetch(reqUrl, newOptions)
    .then(res => {
      if (res.status >= 200 && res.status < 300 || res.status === 304) {
        if (newOptions.method === 'DELETE' || res.status === 204) {
          return res.text()
        }
        return res.json()
      } else {
        return res.json().then(err => { throw err })
      }
    })
    // fetch 不会根据响应状态码判断请求是否成功
    // 这里状态码表示请求失败时主动 reject
    // .then(res => {
    //   if (res.status >= 200 && res.status < 300 || res.status === 304) {
    //     return res
    //   }
    //   // const error = new Error(res.status + ' ' + res.statusText)
    //   // error.name = res.status
    //   // error.response = res
    //   throw res
    // })
    // .then(res => {
    //   // DELETE 请求按惯例是返回 204 请求
    //   // 204 请求的响应为空，如果调用 json() 会报
    //   if (newOptions.method === 'DELETE' || res.status === 204) {
    //     return res.text()
    //   }
    //   return res.json()
    // })
    // .catch(res => {
    //   // 注意从失败请求中取出 json, 需要调用一次 then()
    //   return res.json().then(err => { throw err })
    // })
}

// 是否使用代理
// const noProxy = process.env.NO_PROXY === 'true'
// debug && console.warn('[mock service] 当前正在使用 mock service')

// const mockRequestWrapper = (url, options) =>
//   mockRequest(url, options)
//     .catch((err) => {
//       debug && console.warn('[mock service]尝试通过 network 请求...')
//       throw err
//     })
//     .catch(() => request(url, options))

// const usedRequest = noProxy ? request : mockRequestWrapper
// debug && (window['request'] = usedRequest)

export default request