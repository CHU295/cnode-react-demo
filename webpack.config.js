const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path')

module.exports = {
  devtool: 'source-map',
  entry: path.resolve(__dirname, './src/main.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },

  resolve: {
    alias: {
      'asset': path.resolve(__dirname,"src/asset/")
    }
  },
  
  module: {
  	rules: [
  		{
  			test: /\.jsx?$/,
  			exclude: /node_modules/, 
        use: 'babel-loader',
  		},
  		{
        test: /\.css$/,
        use: [
        'style-loader',
        'css-loader'
        ]
      }, 
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader",'sass-loader']
        })
      }, 
      {
        test: /\.(png|jpg)$/,
        use: [
        'url-loader',
        ]
      }
  	]
  },

  devServer: {
        contentBase: './dist', //默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到"build"目录）
        historyApiFallback: true, //在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        inline: true, //设置为true，当源文件改变时会自动刷新页面
        port: 9999, //设置默认监听端口，如果省略，默认为"8080"
    },

  plugins: [
        new HtmlWebpackPlugin({
            title: "",
            filename: __dirname + "/dist/index.html",
            template: __dirname + "/index.html",
            hash: true,
            chunks: ['main']
        }),
        new ExtractTextPlugin('style.css'),
    ]
};