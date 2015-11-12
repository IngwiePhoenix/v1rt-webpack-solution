var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var bowerModulesPath = path.resolve(__dirname, 'bower_components');

var mainPath = path.resolve(__dirname, 'app', 'src', 'index.js');
var testPath = path.resolve(__dirname, 'tests.bundle.js');

var buildPath = path.resolve(__dirname, 'app', 'dist', 'assets');

module.exports = {
  devtool: 'source-map',
  debug: true,
  entry: {
    vision: mainPath
  },
  output: {
    path: buildPath,
    publicPath: 'dist/assets/',
    filename: 'js/[name].main.js'
  },

  plugins: [
    new ExtractTextPlugin('css/[name].main.css'),
    // I dont have these. So...
    /*
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      _: 'lodash',
      Backbone: 'backbone',
      Marionette: 'backbone.marionette',
      Promise: 'bluebird'
    })
    */
  ],
  module: {
    loaders: [
      // CSS loaders
      {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
      {test: /\.less$/, loader: ExtractTextPlugin.extract(
              // activate source maps via loader query
              'css-loader?sourceMap!' +
              'less-loader?sourceMap'
          )
      },
      {test: /\.js$/, loader: "babel" }
    ]
  },
  resolve: {
    extensions: [ '', '.js', '.json'],
    moduleDirectories: [
      'node_modules',
      'bower_components'
    ],

    root: [
      path.join(__dirname, 'node_modules'),
      path.join(__dirname, 'bower_components'),
    ]
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};
