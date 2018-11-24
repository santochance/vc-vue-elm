const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer

const path = require('path')
const useMock = require('./src/service/mock/useMock')

module.exports = {
  baseUrl: process.env.BASE_URL || '',
  devServer: {
    before: useMock,
    quiet: false,
    stats: {
      colors: true,
      assets: true,
      excludeAssets: /\.(jpe?g|png|gif|svg)$/,
      assetsSort: '!size', // 以 size 字段降序排序
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

    // 删除 code splitting 自动生成的 prefetch
    config.plugins.delete('prefetch')

    // 使用 prerender
    config.plugin('prerender-spa')
      .use(PrerenderSPAPlugin, [{
        staticDir: path.join(__dirname, '/dist'),
        routes: ['/', '/discover', '/order', '/profile'],
        renderer: new Renderer({
          // headless: false,
        })

      }])

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