var webpack = require('webpack');
var path = require('path');

// var BUILD_DIR = path.resolve(__dirname, 's');
// var APP_DIR = path.resolve(__dirname, '');

var config = {
  devtool : 'source-map',
   entry: './app.js',

   output: {
     path: '/build/js/',
     publicPath: '/build/js/',
     filename: 'index.js'
   },

   devServer: {
      inline: true,
      port: 8080
   },

   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react', 'env']
            }
         }
      ]
   }
}

module.exports = config;
