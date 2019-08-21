const merge = require('webpack-merge') // eslint-disable-line import/no-extraneous-dependencies
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer') // eslint-disable-line import/no-extraneous-dependencies
const sass = require('sass') // eslint-disable-line import/no-extraneous-dependencies
const fibers = require('fibers') // eslint-disable-line import/no-extraneous-dependencies
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true,
  },
  output: {
    publicPath: '/',
  },
  plugins: [
    new BundleAnalyzerPlugin({ analyzerMode: 'disabled' }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          { loader: 'vue-style-loader' },
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'sass-loader',
            options: {
              implementation: sass,
              fiber: fibers,
            },
          },
        ],
      },
    ],
  },
})
