const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin
const PrerenderSPAPlugin = require('prerender-spa-plugin')
// const Renderer = PrerenderSPAPlugin.PuppeteerRenderer
// const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin')

const path = require('path')
// const fs = require('fs')
const useMock = require('./src/service/mock/useMock')

module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? '/vc-vue-elm/' : '/',
  devServer: {
    before: useMock,
    quiet: false,
    stats: {
      colors: true,
      assets: false,
      excludeAssets: /\.(jpe?g|png|gif|svg)$/,
      assetsSort: '!size', // 以 size 字段降序排序
      children: false,
      // chunks: false,
      modules: false,
    }
  },
  configureWebpack: {
    externals: {
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'vuex': 'Vuex',
    }
  },
  chainWebpack: config => {
    // automatic imports style assets
    // See: https://cli.vuejs.org/guide/css.html#automatic-imports
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
        types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))

    // exclude some path from rule('svg')
    config.resolve.alias
      .set('@svg-sprite', path.resolve(__dirname, './src/assets/sprite'))

    config.module.rule('svg')
      .exclude
        .add(path.resolve(__dirname, './src/assets/sprite'))
        .end()
    // include some path to rule('svg-sprite') to create svg spirtes with svg-sprite-loader
    config.module.rule('svg-sprite')
      .test(/\.(svg)(\?.*)?$/)
      .include
        .add(path.resolve(__dirname, './src/assets/sprite'))
        .end()
      .use('svg-sprite')
        .loader('svg-sprite-loader')

    // webpack bundle analyzer
    if (process.env.NODE_ENV === 'production' && process.env.ANALYZE === 'true') {
      config.plugin('webpack-report')
        .use(BundleAnalyzerPlugin, [{
          analyzerPort: 9999
        }])
    }

    // 删除 code splitting 自动生成的 prefetch
    config.plugins.delete('prefetch')

    /* production only */

    /*
     * prerender
     */
    // if (process.env.NODE_ENV === 'production') {
    //   // 使用 prerender
    //   config.plugin('prerender-spa')
    //     .use(PrerenderSPAPlugin, [{
    //       staticDir: path.join(__dirname, '/dist'),
    //       routes: [
    //         '/',
    //         // '/discover',
    //         // '/order',
    //         // '/profile',
    //         // '/shop',
    //         // '/checkout'
    //       ],
    //       renderer: new Renderer({
    //         headless: false,
    //         // 注意只设置 injectProperty 不会产生效果，需要同时设置 inject
    //         injectProperty: '__PRERENDER__',
    //         inject: {
    //           foo: 'bar'
    //         },
    //         renderAfterDocumentEvent: 'prerender-trigger',
    //         // renderAfterElementExists: '#app',
    //       }),
    //       // postProcess (renderedRoute) {
    //       //   // Ignore any redirects.
    //       //   renderedRoute.route = renderedRoute.originalRoute
    //       //   renderedRoute.html = renderedRoute.html.replace(/<link href="\/(css\/app\.\w+\.css)" rel="stylesheet">/, function (match, group) {
    //       //     const filePath = path.join(__dirname, 'dist', group)
    //       //     const styleContent = fs.readFileSync(filePath).toString()
    //       //     return `<style>${styleContent}</style>`
    //       //   })
    //       //   return renderedRoute
    //       // }
    //     }])
    //   // 从 preload 插件中排除 app.[hash].css 文件
    //   config.plugin('preload')
    //     .tap(options => {
    //       options[0].fileBlacklist = options[0].fileBlacklist || []
    //       options[0].fileBlacklist.push(/app([^/])*?\.css$/)
    //       return options
    //     })
    //   // plugin('html-inline-source')
    //   config.plugin('html').tap(args => {
    //       args[0].inlineSource = '.css$'
    //       return args
    //   })
    //   config.plugin('inline').use(HtmlWebpackInlineSourcePlugin)
    // }
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