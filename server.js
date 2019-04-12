const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const cfg = require('./webpack.config.js');
const cpl = webpack(cfg);

app.use(webpackDevMiddleware(cpl, {
  publicPath: cfg.output.publicPath
}));

app.listen(3000, ()=>{
  console.log('example app listening on port 3000!\n');
})