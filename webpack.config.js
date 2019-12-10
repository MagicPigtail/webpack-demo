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
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],    //require和import的后缀名优先级设置（从左到右）
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      'components': path.resolve(__dirname,'src/components/'),
      'assets': path.resolve(__dirname,'src/assets/'),
    },
    modules: ['./src/components','node_modules']   //组件内引入优先级  例如：import 'button'
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
      chunkFilename: path.join(`css/[name].chunk.[contenthash:8].css?`),
    }),
    new OptimizeCssAssetsPlugin()
  ],
  devServer: {
    // headers: {
    //   cookie: "123"  //此处可注入响应头
    // },
    // contentBase: path.join(__dirname, "dist"),    //设置DevServer服务器的文件根目录
    host: "0.0.0.0",
    port: 8081,
    // historyApiFallback: {
    //   rewrites: [     //路由匹配规则
    //     // { from: /^\/user/,to: '/user.html' },
    //     // { from: /^\/game/,to: '/game.html' },
    //     { from: /^\/home/,to: '/index.html' },
    //     { from: /./,to: '/index.html' },  //其他所有返回index.html
    //   ]
    // },
    // https: true   //默认使用https服务
  }
};
