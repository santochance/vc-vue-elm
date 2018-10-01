import pathToRegexp from 'path-to-regexp'

export function parseImgHash(hash) {
  if (typeof hash !== 'string') {
    hash = String(hash)
  }
  if (!hash) return ''
  return ['/', hash.slice(0,1), '/', hash.slice(1,3), '/', hash.slice(3), '.', hash.slice(32)].join('')
}

export function formatImgParams(paramList) {
  if (!Array.isArray(paramList)) {
    throw new TypeError('argument 1 must be array!')
  }
  if (!paramList.length) return ''
  return `?imageMogr/${paramList.reduce((rst, pair) => [...rst, pair.join('/')], []).join('/')}/`
}

export function matchPathBy(sPath, pattern) {
  const keys = []
  const re = pathToRegexp(pattern, keys)
  const matched = re.exec(sPath, keys)

  let result = {}
  if (matched) {
    result = keys.reduce((rst, key, idx) => {
      const value = matched[idx + 1]
      if (value !== undefined) {
        rst[key.name] = value
      }
      return rst
    }, {})
    return { params: result }
  } else {
    return null
  }
}