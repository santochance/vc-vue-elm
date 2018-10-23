export default {
  setItem(key, value, type = 'localStorage') {
    window[type].setItem(key, JSON.stringify(value))
  },
  getItem(key, type = 'localStorage') {
    let value
    try {
      value = JSON.parse(window[type].getItem(key))
    } catch(e) {
      value = null
    }
    return value
  }
}