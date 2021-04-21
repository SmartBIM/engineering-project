const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const htmlplugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, 'src', 'web', 'index.html')
})



module.exports = {
  entry: path.join(__dirname, 'src', 'web', 'index.js'),
  mode: 'development',
  output: {
    publicPath: '/',
    path: path.join(__dirname, 'public'),
    filename: 'index.bundle.js'
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  devServer: {
    contentBase: path.join(__dirname, 'src', 'web'),
    compress: true,
    port: 9000,
    historyApiFallback: true
  },
  plugins: [
    htmlplugin
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}
