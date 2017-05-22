var webpack = require('webpack');
var path = require('path');
var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: [APP_DIR + '/index.jsx'],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test: /\.jsx$/,
        include: APP_DIR,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'es2016', 'react'],
          plugins: [
            'babel-plugin-syntax-trailing-function-commas',
            'babel-plugin-transform-class-properties',
            'babel-plugin-transform-object-rest-spread'
          ]
        },
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "src/client"),
    compress: true,
    port: 8080,
    publicPath: '/public'
  }
};

module.exports = config;