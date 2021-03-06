'use strict';

const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const del = require('del');
const colors = require('colors');

const app_source = path.resolve(__dirname, 'app');
const app_entry = path.resolve(app_source, 'index.jsx');
const app_template = path.resolve(app_source, 'index.html');

const mock_entry = path.resolve(__dirname, 'mock', 'index.js');

const dist_base = path.resolve(__dirname, 'dist');
const dist_page = path.resolve(dist_base, 'index.html');

del.sync(dist_base);
console.warn(`DELETE: ${ dist_base }\n`.cyan);

const WebpackDevEnvironment = process.env.NODE_ENV === 'dev';
const WebpackMockEnvironment = process.env.NODE_ENV === 'mock';

let WebpackConfig = {
  entry: {
    'app': app_entry
  },
  output: {
    path: dist_base,
    publicPath: '/',
    filename: `[name]-[chunkhash:8].min.js`,
    chunkFilename: `[name]-[chunkhash:8].min.js`
  },
  module : {
    rules: [
      {
          enforce: 'pre',
          test: /\.js|\.jsx$/,
          use: 'source-map-loader'
      },
      {
          test: /\.js|\.jsx$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              query: {
                presets: ['es2015', 'stage-3', 'react'],
                plugins: ['transform-class-properties', 'transform-decorators-legacy']
              }
            }
          ]
      },
      {
          test: /\.scss$/,
          use: ExtractTextWebpackPlugin.extract('css-loader?sourceMap!sass-loader?sourceMap'),
      }
    ]
  },
  plugins: [
    new ExtractTextWebpackPlugin(`[name]-[contenthash:8].min.css`),
    new HtmlWebpackPlugin({
      filename: dist_page,
      template: app_template,
      inject: true,
      minify: {
          collapseWhitespace: true
      }
    })
  ],
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'react-router-dom': 'ReactRouterDOM'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: "source-map"
}

if (WebpackDevEnvironment || WebpackMockEnvironment) {
  WebpackConfig.output.filename = WebpackConfig.output.chunkFilename = `[name]-[hash:8].min.js`;
}

if (WebpackMockEnvironment) {
  WebpackConfig.entry.mock = mock_entry;
}

module.exports = WebpackConfig;
