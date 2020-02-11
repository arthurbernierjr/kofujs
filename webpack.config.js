const path = require('path')
const webpack = require('webpack');
const WebpackMd5Hash = require('webpack-md5-hash');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = env => {
  if (env['NODE_ENV'] === "dev"){
    return {
  entry: {
    App: './src/example/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename:'[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
    ]
  },
  plugins:[
    new CleanWebpackPlugin('public/js', {}),
    new WebpackMd5Hash(),
    new HtmlWebpackPlugin({ template: './src/templates/template.html', filename: '../index.html' })
  ]
}
  }
  if (env['NODE_ENV'] === "prod") {
  return {
    mode: 'production',
    entry: {
      index: './kofu.js'
    },
    output: {
      path: path.resolve(__dirname),
      filename:'[name].js'
    },
    module: {
      rules: [
        {
              test: /\.js$/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env']
                }
              }
            }
      ]
    },
    plugins:[
      new WebpackMd5Hash()
    ]
  }
}
}
