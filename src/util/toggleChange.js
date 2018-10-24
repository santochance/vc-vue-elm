const defaultOptions = {
  toggle: true, // 值相同时是否切换为空值
  nullValue: null, // 使用的空值
  // type, // 期望数据类型
  // fromType,
  // toType,
}

// 当前只是简单地使用 `===` 比较
function eq(a, b) {
  return a === b
}

/**
 * 值相同时返回指定空值
 * @param  {any} oldValue    源值
 * @param  {any} newValue      目标值
 * @param  {Object} options 配置对象
 * @return {any}         返回值
 */
export default function toggleChange(oldValue, newValue, options) {
  if (typeof options === 'boolean') {
    options = { toggle: false }
  }
  const { toggle, nullValue } = { ...defaultOptions, ...options }
  return toggle && eq(oldValue, newValue) ? nullValue : newValue;
}