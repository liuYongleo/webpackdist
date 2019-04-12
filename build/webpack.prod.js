const webpack = require('webpack');
const merge = require('webpack-merge');
const common =require('./webpack.common.js');
const uglifyJsPlugin = require('uglifyjs-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new uglifyJsPlugin({
      sourceMap: true,
      uglifyOptions: {
        ecma: 8
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.BannerPlugin({
      banner: '版权所有 侵权必究'
      // banner: 'hash:[hash],chunkhash:[chunkhash],name:[name],filebase:[filebase],file:[file]'
    }),
    new copyWebpackPlugin([
      {
        from: 'static/',
        to: 'static/',
      }
    ])
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        // commons: {
        //   name: 'comm',
        //   chunks: 'all',
        //   minChunks: 1,
        // },
        vendors: {
          test: /jquery/,
          name: "vendor-jquery",
          chunks: "all"
        },
        comm: {
            test: /comm/,
            name: "comm",
            chunks: "all"
        }
      }
    }
  }
})