"use strict";
const webpack = require('webpack');
const path = require('path');
const loadersConf = require('./webpack.loaders');
const DashboardPlugin = require('webpack-dashboard/plugin');

const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || "8888";

module.exports = {
  // If you pass an array: All modules are loaded upon startup.
  // The last one is exported.
  entry: [
    './src/app.jsx' // app's entry point (exported module)
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './'),
    publicPath: 'http://localhost:8888/public/',
  },
  module: {
    loaders: loadersConf
  },
  resolve: {
    extensions: ['.js', '.jsx'],
     modules: [
      path.join(__dirname, "src"),
      path.join(__dirname, "node_modules"), // this was the 'fallback' option (For npm link-ed packages)
    ],
  },
  devtool: '#inline-source-map', // or '#source-map' or 'eval-cheap-source-map'
  devServer: {
    contentBase: path.join(__dirname, "./"),
    publicPath: "http://localhost:8888/public/",
    noInfo: true,               // do not print bundle build stats
    hot: true,                  // enable HMR
    inline: true,               // embed the webpack-dev-server runtime into the bundle
    historyApiFallback: true,   // serve index.html in place of 404 responses to allow HTML5 history
    port: PORT,
    host: HOST
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(), // enable HMR globally
    new webpack.NamedModulesPlugin(),         // prints more readable module names in the browser console on HMR updates
    new DashboardPlugin(),                    // cool console output
  ]
};
