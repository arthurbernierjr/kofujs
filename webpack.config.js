const path = require('path')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const CleanWebpackPlugin = require('clean-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Start with set up here and then set up a version to work with this as a node module

module.exports = env => {
  return {
    entry: {
      App: './src/example/index.js',
      framework:'./lib/kofu-framework/index.js'
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
