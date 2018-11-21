function eq(a, b) {
  // 从 `===` 为 true 情况中区分出 0 和 -0
  if (a === b) return a !== 0 || 1 / a === 1 / b;

  // 让 undefined 和 null 尽早返回
  if (a == null || b == null) return false;

  // 判断 NaN
  if (a !== a) return b !== b;

  // 双原始值，或 a 为原始值，b 为函数，可以确定 false
  if (typeof a !== 'object' && typeof a !== 'function' && typeof b !== 'object' /* && typeof b !== 'function'*/) return false

  return deepEq(a, b)
}

function deepEq(a, b, aStack, bStack) {
  // 对象类型不同，返回 false
  var className = Object.prototype.toString(a)
  if (className !== Object.prototype.toString(b)) return false

  // 内建对象类型, 转化为原始值比较
  switch(className) {
    case '[object Number]':
    case ['object Boolean']:
    case ['object Date']:
      return eq(+a, +b);
    case '[object String]':
    case '[object RegExp]':
    case '[object Function]':
      return eq('' + a, '' + b);
  }

  // 判断循环引用
  aStack = aStack || [];
  bStack = bStack || [];
  var index = bStack.indexOf(b)
  if (index !== -1) {
    return aStack[index] === a;
  }

  var length;
  // 数组类型
  if (className === '[object Array]') {
    length = a.length;
    if (length !== b.length) return false;
    while (length--) {
      if (!eq(a[length], b[length], aStack, bStack)) return false;
    }
  } else {
    // 自定义对象类型
    // 如果构造函数明显不相等，返回 false
    var aCtor = a.constructor
    var bCtor = b.constructor
    if (aCtor !== bCtor &&
      typeof aCtor === 'function' && a instanceof aCtor &&
      typeof bCtor === 'function' && b instanceof bCtor
    ) {
      return false
    }
    // 非自定义对象类型
    var keys, key;
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;
    while (length--) {
      key = keys[length];
      if (!eq(a[key], b[key], aStack, bStack)) return false;
    }
  }

  aStack.pop();
  bStack.pop();

  return true;
}

export default eq