const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || '9000';

module.exports = merge(common('development'), {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    host: HOST,
    port: PORT,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: { handlebars: 'handlebars/dist/handlebars.js' },
  },
});
