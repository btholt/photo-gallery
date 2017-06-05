const path = require('path');
const cssNext = require('postcss-cssnext');
const cssImport = require('postcss-import');
const cssNano = require('cssnano');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FlowtypePlugin = require('flowtype-loader/plugin');
const webpack = require('webpack');

const isDev = process.env.NODE_ENV === 'development';

const config = {
  context: __dirname,
  entry: {
    bundle: './src/BrowserEntry.jsx'
  },
  devtool: isDev ? 'cheap-eval-source-map' : false,
  output: {
    path: path.resolve(__dirname, 'public/assets'),
    filename: '[name].js',
    publicPath: '/assets/'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    publicPath: '/assets/',
    historyApiFallback: true,
    proxy: {
      '/flickr': 'http://localhost:3000'
    }
    // headers: {
    //   'Service-Worker-Allowed': '/flickr/'
    // }
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  plugins: [new FlowtypePlugin(), new ExtractTextPlugin('styles.css')],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'flowtype-loader'
      },
      {
        test: /\.jsx?$/,
        loaders: 'babel-loader',
        include: [path.resolve('src'), path.resolve('node_modules/preact-compat/src')]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: {
            loader: 'postcss-loader',
            options: {
              plugins: () => [cssImport({ addDependencyTo: webpack }), cssNext(), cssNano()],
              sourceMap: isDev ? 'inline' : false
            }
          }
        })
      }
    ]
  }
};

// const swConfig = Object.assign({}, config, {
//   entry: {
//     sw: './src/serviceWorker.js'
//   },
//   target: 'webworker'
// });

// module.exports = [config, swConfig];
module.exports = config;
