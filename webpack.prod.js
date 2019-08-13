const merge = require('webpack-merge') // eslint-disable-line import/no-extraneous-dependencies
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].bundle.js',
  },
  devtool: 'source-map',
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
})
