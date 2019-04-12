const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const extractTextWebpackPlugin = require('extract-text-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production';

const extractCss = new extractTextWebpackPlugin('stylesheets/[name]-one.css');
const extractSass = new extractTextWebpackPlugin('stylesheets/[name]-two.css');
module.exports = {
  entry: {
    // app: './src/index.js',
    // // another: './src/print.js'
    // vendor: ['./src/comm.js', 'jquery'],
    a: './src/a.js',
    b: './src/b.js'
  },
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].chunk.js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, '../src'),
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, '../src'),
        // use: [devMode ? 'style-loader' : miniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
        use: devMode ? ['style-loader', 'css-loader', 'postcss-loader'] : extractCss(['css-loader', 'post-loader'])        
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, '../src'),
        // use: [devMode ? 'style-loader' : miniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
        // use: devMode ? ['style-loader', 'css-loader', 'postcss-loader'] : extractSass(['css-loader', 'post-loader', 'sass-loader'])        
        use: ['style-loader', {loader:'css-loader',options:{modules:true,localIdentName:'[hash:5]'}}, 'sass-loader']
        // use: extractTextWebpackPlugin.extract({
        //   fallback: 'style-loader',
        //   use: [{loader:'css-loader',options:{modules:true,localIdentName:'[hash:5]'}}, 'sass-loader']
        // })
      },
      {
        test: /\.(png|jpeg|gif|jpg|svg)$/,
        include: path.resolve(__dirname, '../src'),
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        include: path.resolve(__dirname, '../src'),
        use: ['file-loader']
      },
      {
        test: /^\.\/static\//,
        include: path.resolve(__dirname, '../static/'),
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'new output',
      template: './src/index.html'
    }),
    new extractTextWebpackPlugin('style.css')
    // extractCss,
    // extractSass
    // new miniCssExtractPlugin({
    //   filename: '[hash].css',
    //   chunkFilename: '[id].[hash].css'
    // })
    // new webpack.HashedModuleIdsPlugin(),
    // new webpack.NamedModulesPlugin()
  ]
}