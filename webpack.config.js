'use strict';

const path = require('path');
const htmlPlugin = require('html-webpack-plugin');
const openBrowserPlugin = require('open-browser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  entry: './src/app.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[contenthash:8].js?',
  },
  mode: "development",
  // mode: "production",
  module: {
    rules: [
      {
        test:/\.jsx$/,
        exclude:/node_modules/,
        loader:"babel-loader" 
      },
      {
        test:/\.css$/,
        use: [
          {loader: "style-loader"},
          {loader: "css-loader",options:{ minimize: true }}
        ],
      },
      {
        test: /\.(png|jpg|gif|jpeg|svg)$/,
        loader:"url-loader"
      },
      {
        test:/\.scss$/,
        use: [
          {loader: MiniCssExtractPlugin.loader},
          {loader: "css-loader"},
          {loader: "sass-loader"},
        ],
        // loader:"style-loader!css-loader!sass-loader"
      }
    ]
  },
  // optimization: {
	// 	minimizer: [new OptimizeCSSAssetsPlugin({})]
	// },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    }
  },
  devtool: 'source-map',
  plugins: [
    new htmlPlugin({
      template:"./src/index.html"
    }),
    new openBrowserPlugin({
      url:"http://0.0.0.0:8081"
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: path.join(`css/[name].[contenthash:8].css?`),
      chunkFilename: path.join(`css/[name].[contenthash:8].css?`),
    }),
    new OptimizeCssAssetsPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    host: "0.0.0.0",
    port: 8081
  }
};
