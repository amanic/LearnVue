const { resolve } = require('path')
const path = require('path')
const webpack = require('webpack')
const htmlwebpackplugin = require('html-webpack-plugin')
const uglifyjs = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js',
        // publicPath: 'dist/'
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            // css-loader只负责将css文件进行加载
            // style-loader负责将样式添加到DOM中
            // 使用多个loader时, 是从右向左
            use: [ 'style-loader','css-loader' ]
          },
          {
            test: /\.less$/,
            use: [{
              loader: "style-loader", // creates style nodes from JS strings
            }, {
              loader: "css-loader" // translates CSS into CommonJS
            }, {
              loader: "less-loader", // compiles Less to CSS
            }]
          },
          {
            test: /\.(png|jpg|gif|jpeg)$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  // 当加载的图片, 小于limit时, 会将图片编译成base64字符串形式.
                  // 当加载的图片, 大于limit时, 需要使用file-loader模块进行加载.
                  limit: 14000,
                  //  图片在dist目录下面的路径自己命名
                  name: 'img/[name].[hash:8].[ext]'
                },
              }
            ]
          },
          {
            test: /\.vue$/,
            use: ['vue-loader']
          }
        ]
    },
    resolve: {
      // extensions: ['.js', '.css', '.vue'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    },
    plugins: [
      new webpack.BannerPlugin('最终版权归amanic所有'),
      new htmlwebpackplugin({
        template: 'index.html'
      }),
    //   new uglifyjs()
    ],
    // devServer: {
    //   inline: true,
    //   contentBase: './dist'
    // }
}