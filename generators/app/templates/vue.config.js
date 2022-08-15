/**
 * 配置该文件可以参考:
 * https://cli.vuejs.org/zh/config/#%E7%9B%AE%E6%A0%87%E6%B5%8F%E8%A7%88%E5%99%A8
 *
 */
const config = require('./src/config/env');

const url = config.baseUrl; //请求接口基础地址
const fileURL = config.fileUrl; //文件基础地址
let publicPath = './';
let timeStamp = new Date().getTime();
module.exports = {
  publicPath: publicPath,
  lintOnSave: true,
  productionSourceMap: false,
  css: {
    // 忽略 CSS order 顺序警告
    extract: { ignoreOrder: true,
    filename:`css/[name].${timeStamp}.css`,
    chunkFilename: `css/[name].${timeStamp}.css`
   }
  },
  configureWebpack:{
    output:{
      filename:`js/[name].${timeStamp}.js`,
      chunkFilename: `js/[name].${timeStamp}.js`,
      globalObject:'this'
    }
  },
  chainWebpack: config => {
    const entry = config.entry('app')
    entry
      .add('babel-polyfill')
      .end()
    entry
      .add('classlist-polyfill')
      .end()
  },
  // 配置转发代理
  devServer: {
    proxy: {
      '/group1': { //用于音视频转文字跨域问题
        target: fileURL,
        ws: true,
        pathRewrite: {
          '^/': ''
        }
      },
      '/group2': { //用于音视频转文字跨域问题
        target: fileURL,
        ws: true,
        pathRewrite: {
          '^/': ''
        }
      },
      '/org': { //用于音视频转文字跨域问题
        target: url,
        ws: true,
        pathRewrite: {
          '^/org': '/org'
        }
      },
      '/': {
        target: url,
        ws: true,
        pathRewrite: {
          '^/': ''
        }
      },
    }
  }
}
