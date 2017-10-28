"use strict";

const debug = process.env.NODE_ENV !== "production";

const webpack = require('webpack');
const path = require('path');

var fs = require('fs');
var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });


module.exports = {
  devtool: debug ? 'inline-sourcemap' : null,
  entry: path.join(__dirname, 'src', 'server.js'),
  devServer: {
    inline: true,
    port: 3333,
    contentBase: "src/static/",
    historyApiFallback: {
      index: '/index.html'
    }
  },
  output: {
    path: path.join(__dirname, 'src', 'static', 'js'),
    publicPath: "/js/",
    filename: 'server.js'
  },
  module: {
    loaders: [{
      test: path.join(__dirname, 'src'),
      loader: 'babel-loader',
      query: {
        cacheDirectory: 'babel_cache',
        presets: debug ? ['react', 'es2015', 'react-hmre'] : ['react', 'es2015']
      }
    }]
  },
  plugins: debug ? [] : [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      mangle: true,
      sourcemap: false,
      beautify: false,
      dead_code: true
    }),
  ]
};
