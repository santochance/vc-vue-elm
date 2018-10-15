import ('es6-promise/auto')
import fetch from 'isomorphic-fetch'
import mockRequest from '../service/mock-es/mockRequest'


const request = function (url, options) {
  // fetch 默认不发送 cookie
  const defaultOptions = {
    credientials: 'include',
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
        'Content-Type': 'application/json; charset=utf-8',
        ...newOptions.headers,
      }
      newOptions.body = JSON.stringify(newOptions.body)
    } else {
      // newOptions.body is FormData
      newOptions.headers = {
        Accept: 'application/json',
        ...newOptions.headers,
      }
    }
  }

  return fetch(url, newOptions)
    // fetch 不会根据响应状态码判断请求是否成功
    // 这里状态码表示请求失败时主动 reject
    .then(res => {
      if (res.status >= 200 && res.status < 300 || res.status === 304) {
        return res
      }
      const error = new Error(res.status + ' ' + res.statusText)
      error.name = res.status
      error.response = res
      throw error
    })
    .then(res => {
      // DELETE 请求按惯例是返回 204 请求
      // 204 请求的响应为空，如果调用 json() 会报
      if (newOptions.method === 'DELETE' || res.status === 204) {
        return res.text()
      }
      return res.json()
    })
}

// 是否使用代理
const noProxy = process.env.NO_PROXY === 'true'

const mockRequestWrapper = (url, options) =>
  mockRequest(url, options)
    .catch(() => request(url, options))

export default noProxy ? request : mockRequestWrapper