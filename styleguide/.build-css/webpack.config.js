const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: [
    'babel-polyfill',
    './src/js/app.js',
    './src/css/app.css'
  ],
  output: {
    filename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'ejs-render-loader!./src/index.ejs'
    }),
    new ExtractTextPlugin({
      filename: '[name].[hash].bundle.css',
      allChunks: true,
    }),
    new CopyWebpackPlugin([
      {from: 'src/images', to: 'images/'},
      {from: 'src/fonts', to: 'fonts/'},
      {from: 'src/data', to: 'data/'},
      {from: 'src/pdf', to: 'pdf/'},
    ]),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
              }
            },
            {
              loader: 'postcss-loader'
            }
          ],
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
              }
            },
            {
              loader: 'postcss-loader'
            }
          ]
        })
      },
      {
        test: /\.(jpg|png|woff|woff2|eot|ttf|svg|mp4|webm|json|pdf)$/,
        use: 'url-loader?limit=100000'
      },
      {
        test: /\.ejs$/,
        loader: 'ejs-html-loader'
      }
    ]
  },
  devtool: "source-map",
  devServer: {
    contentBase: './dist',
    historyApiFallback: true
  },
};