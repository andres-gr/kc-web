const path = require('path');
const webpack = require('webpack');
const rootPath = require('./path');

const port = process.env.PORT || 3000;

const config = {
  mode: 'development',
  output: {
    filename: '[name].js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.ProgressPlugin(),
  ],
  devServer: {
    clientLogLevel: 'silent',
    contentBase: path.join(rootPath, 'src/static'),
    historyApiFallback: true,
    host: '0.0.0.0',
    hot: true,
    open: false,
    overlay: {
      errors: true,
      warnings: true
    },
    port,
    stats: 'minimal',
    watchContentBase: true,
  },
};

module.exports = config;
