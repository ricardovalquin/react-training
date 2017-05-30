var webpack = require('webpack');
var path = require('path');
var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: ['bootstrap-loader', APP_DIR + '/index.jsx'],
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
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: (loader) => [
                require('autoprefixer')()
              ]
            }
          }
        ]
      },
      {
        test: /bootstrap[\/\\]dist[\/\\]js[\/\\]umd[\/\\]/,
        loader: 'imports-loader?jQuery=jquery'
      },
      {
        test: /\.(woff2?|svg)$/,
        loader: 'url-loader?limit=10000'
      },
      {
        test: /\.(jpg|png|gif|eot|ttf|woff)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?name=[hash:6].[ext]'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "src/client"),
    compress: true,
    port: 8080,
    publicPath: '/',
    historyApiFallback: true
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      Tether: "tether",
      "window.Tether": "tether",
      Alert: "exports-loader?Alert!bootstrap/js/dist/alert",
      Button: "exports-loader?Button!bootstrap/js/dist/button",
      Carousel: "exports-loader?Carousel!bootstrap/js/dist/carousel",
      Collapse: "exports-loader?Collapse!bootstrap/js/dist/collapse",
      Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
      Modal: "exports-loader?Modal!bootstrap/js/dist/modal",
      Popover: "exports-loader?Popover!bootstrap/js/dist/popover",
      Scrollspy: "exports-loader?Scrollspy!bootstrap/js/dist/scrollspy",
      Tab: "exports-loader?Tab!bootstrap/js/dist/tab",
      Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
      Util: "exports-loader?Util!bootstrap/js/dist/util",
    })
  ]
};

module.exports = config;