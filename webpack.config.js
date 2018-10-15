const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './src/index.jsx'
    ]
  },
  output: {
    path:  path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: '/'
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
    publicPath: '/'
  },
  resolve: {
    alias: {
      modules: path.resolve(__dirname, './src/modules'),
      core: path.resolve(__dirname, './src/core')
    },
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      { test: /\.(png|svg|woff|woff2|ttf|eot)/, loader: 'file-loader' },
      { test: /\.(css|scss)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          // { loader: 'sass-loader',
          //   options: {
          //     data: '@import "variables";',
          //     includePaths: [path.resolve(__dirname, './src/core/style/')]
          //   }
          // }]
        ]
      },
      { test: /\.js(x)?$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Locadora-Olé',
      template: './src/index.ejs',
      config: process.env.CONFIG_FILE || 'local',
      minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true
      }
    })
  ]
}
