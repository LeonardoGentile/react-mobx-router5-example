"use strict";
var webpack = require('webpack');
var path = require('path');
var loadersConf = require('./webpack.loaders');
var DashboardPlugin = require('webpack-dashboard/plugin');

const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || "8888";

module.exports = {
  // If you pass an array: All modules are loaded upon startup. The last one is exported.
  entry: [
    'babel-polyfill',         // emulate a full ES2015 (Promise, WeakMap, ectr)
    'react-hot-loader/patch', // needed for hot loader v3
    './src/app.jsx'           // your app's entry point (exported module)
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:8888/public/',
  },
  module: {
    loaders: loadersConf
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  devtool: '#inline-source-map', // 'eval-cheap-source-map',
  devServer: {
    contentBase: "./",
    publicPath: "http://localhost:8888/public/",
    // do not print bundle build stats
    noInfo: true,
    // enable HMR
    hot: true,
    // embed the webpack-dev-server runtime into the bundle
    inline: true,
    // serve index.html in place of 404 responses to allow HTML5 history
    historyApiFallback: true,
    port: PORT,
    host: HOST,
    colors: true,
    // proxy to my local dev server running at 8000 port for anything starting with 'api' (then stripped)
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        pathRewrite: {'^/api' : ''},
        secure: false,
        changeOrigin: true,
        logLevel: 'debug',
      }
    }
  },
  // These files will imported in every sass file (imported)
  sassResources: [
    './src/styles/abstracts/_variables.sass',
    './src/styles/abstracts/_mixins.sass',
  ],
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin(), // cool console output
  ]
};
