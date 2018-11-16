const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin
const path = require('path')
const useMock = require('./src/service/mock/useMock')

module.exports = {
  baseUrl: process.env.BASE_URL || '',
  devServer: {
    before: useMock,
    quiet: false,
    stats: {
      colors: true,
      assets: false,
      children: false,
      // chunks: false,
      modules: false,
    }
  },
  chainWebpack: config => {
    // automatic imports style assets
    // See: https://cli.vuejs.org/guide/css.html#automatic-imports
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
        types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))

    if (process.env.NODE_ENV === 'production' && process.env.ANALYZE === 'true') {
      config.plugin('webpack-report')
        .use(BundleAnalyzerPlugin, [{
          analyzerPort: 9999
        }])
    }
  }
}

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/styles/mixin.scss'),
        path.resolve(__dirname, './src/assets/styles/variable.scss'),
      ],
    })
}