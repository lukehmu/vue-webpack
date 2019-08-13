const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') // eslint-disable-line import/no-extraneous-dependencies
const { CleanWebpackPlugin } = require('clean-webpack-plugin') // eslint-disable-line import/no-extraneous-dependencies

module.exports = {
  entry: {
    app: './src/js/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'PROD',
    }),
  ],
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
      ],
    }],
  },
}
