const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const merge = require('./webpack.base.config')
const { absPath } = require('./utils')
const { appName, devSourceMap } = require('./config')

module.exports = merge({
  mode: 'development',
  target: 'electron-renderer',
  devtool: devSourceMap,
  entry: './src/renderer/main.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: {
          loader: 'eslint-loader',
          options: { formatter: require('eslint-friendly-formatter') }
        }
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: 'defaults'
                }
              ]
            ],
            plugins: ['@babel/transform-runtime']
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: 'images/[name].[ext]',
            esModule: false
          }
        }
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  },
  output: {
    filename: 'renderer.js',
    path: absPath('dist')
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: absPath('src/index.html'),
      title: appName
    })
  ],
  resolve: {
    alias: {
      '@': absPath('src/renderer')
    }
  }
})