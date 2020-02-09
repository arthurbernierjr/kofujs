const path = require('path')
const webpack = require('webpack');
const WebpackMd5Hash = require('webpack-md5-hash');

module.exports = env => {
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
