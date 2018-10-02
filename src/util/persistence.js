export default {
  setItem(key, value, type = 'localStorage') {
    window[type].setItem(key, JSON.stringify(value))
  },
  getItem(key, type = 'localStorage') {
    return JSON.parse(window[type].getItem(key))
  }
}