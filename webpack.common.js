const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') // eslint-disable-line import/no-extraneous-dependencies
const { CleanWebpackPlugin } = require('clean-webpack-plugin') // eslint-disable-line import/no-extraneous-dependencies
const VueLoaderPlugin = require('vue-loader/lib/plugin') // eslint-disable-line import/no-extraneous-dependencies

module.exports = {
  entry: {
    app: './src/js/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/public/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js', // 'vue/dist/vue.common.js' for webpack 1
    },
  },
}
