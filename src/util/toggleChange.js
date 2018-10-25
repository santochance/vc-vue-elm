import eq from 'lodash-es/eq'
import findIndex from 'lodash/findIndex'
// import findKey from 'lodash/findKey'

const debug = true

debug && (window.findIndex = findIndex)

export function toggleValue(source, input, options) {
  const toggle = options && options.toggle || true
  
  if (eq(source, input)) {
    toggle && (source = null)
  } else {
    source = input
  }

  return source
}

export function toggleArray(source, input, options) {
  if (!Array.isArray(source)) {
    throw new TypeError('first argument must be an array!')
  }

  const toggle = options && options.toggle || true
  const index = findIndex(source, (o) => eq(o, input))
  
  source = [...source]
  if (index !== -1) {
    toggle && source.splice(index, 1)
  } else {
    source.push(input)
  }

  return source
}

export function toggleEntity(source, input, predicate, options) {
  if (source != null && typeof source !== 'object' && typeof source !== 'function') {
    throw new TypeError('first argument must be an object')
  }
  if (source != null && typeof input !== 'object' && typeof input !== 'function') {
    throw new TypeError('second argument must be an object')
  }

  const toggle = options && options.toggle || true
  const index = findIndex([source], predicate || input)
  if (index !== -1) {
    toggle && (source = null)
  } else {
    source = input
  }

  return source
}

export function toggleEntities(source, input, predicate, options) {
  if (!Array.isArray(source)) {
    throw new TypeError('first argument must be an array!')
  }
  if (source != null && typeof input !== 'object' && typeof input !== 'function') {
    throw new TypeError('second argument must be an object')
  }

  const toggle = options && options.toggle || true
  const index = findIndex(source, predicate || input)

  source = [...source]
  if (index !== -1) {
    toggle && source.splice(index, 1)
  } else {
    source.push(input)
  }

  return source
}

// function toggleBooleanDict(dict, input, options) {
//   const toggle = options.toggle

//   if (input in dict) {
//     toggle && (dict[input] = false)
//   } else {
//     dict[input] = true
//   }
// }

// function toggleObject(object, input, predicate, options) {
//   const toggle = options.toggle
  
//   // is input in object?
//   if (typeof input !== 'object' && typeof input !== 'function') {
//     predicate = (o) => o === input
//   }
//   const key = findKey(object, predicate || input)
  
//   debug && console.log('key:', key)

//   if (key) {
//     // remove
//     toggle && delete object[key]
//   } else {
//     // add
//     object[key] = input
//   }
//   return object
// }

/**
 * 值相同时返回指定空值
 * @param  {any} source    数据源值
 * @param  {any} input      目标值
 * @param  {Object} options 配置对象
 * @return {any}         返回值
 */
// export default function toggleChange(source, input, predicate, options) {
//   options = { ...defaultOptions, ...options }

//   if (Array.isArray(source)) {
//     debug && console.log('mode: array')
//     return toggleArray(source, input, predicate, options)
//   }
//   if (typeof source === 'object' && source || typeof source === 'function') {
//   debug && console.log('mode: object')
//     return toggleObject(source, input, predicate, options)
//   }
  
//   debug && console.log('mode: value')
//   return toggleValue(source, input, options)
// }