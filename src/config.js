module.exports = {
  /* 图片服务器域名 */
  "imageHost": "//fuss10.elemecdn.com",
  /* 跨域代理服务器域名 */
  "proxyServer": "https://cors-proxy.leanapp.cn",
  "tabBar": {
    /**
     * tab 文字默认颜色
     * @type {CSSColor}
     * @required
     */
    "color": "#8e8e93",
    /**
     * tab 文字选中时的颜色
     * @type {CSSColor}
     * @required
     */
    "selectedColor": '#0089dc',
    /**
     * tab 背景颜色
     * @type {CSSColor}
     * @required
     */
    "backgroundColor": '#fff',
    /**
     * tab 上边框样式
     * @type {CSSStyle}
     * @required
     */
    "borderStyle": {
      "box-shadow": "0 -2px 4px rgba(0, 0, 0, .1)"
    },
    /**
     * 图标目录路径, 相对路径 base 为项目根目录, '@' 是 './src' 的 alias
     * @type {String}
     * @default "./src/assets/tabbar"
     * @optional
     */
    "iconDir": "@/assets/tabbar",
    /**
     * tab 列表，最少2个，最多5个 tab
     * @type {Array}
     * @required
     */
    list: [{
      /**
       * 唯一key
       * @type {String}
       * @required
       */
      key: 'index',
      /**
       * 跳转路径
       * @type {String}
       * @required
       */
      path: '/',
      /**
       * tab 按钮文字
       * @type {String}
       * @required
       */
      text: '首页',
      /**
       * 图标相对路径（暂时仅支持 svg）
       * 指定路径
       * @type {String}
       * @optional
       */
      iconPath: '#indexRegular',
      /**
       * 选中时图标相对路径（暂时仅支持 svg）
       * @type {String}
       * @optional
       */
      activeIconPath: '#index',
    }, {
      key: 'discover',
      text: '发现',
      iconPath: '#discoverRegular',
      activeIconPath: '#discover',
      path: '/discover',
    }, {
      key: 'order',
      text: '订单',
      iconPath: '#orderRegular',
      activeIconPath: '#order',
      path: '/order',
    }, {
      key: 'profile',
      text: '我的',
      iconPath: '#profileRegular',
      activeIconPath: '#profile',
      path: '/profile',
    }],
  }
}