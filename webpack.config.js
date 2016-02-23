var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist/static'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  /*plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],*/
  plugins: [
    new ExtractTextPlugin("styles.css")
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: [ 'babel' ],
        //exclude: /node_modules/,
        include: path.join(__dirname, 'src')
      },
      { test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      }
    ]
  }
}
