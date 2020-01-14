const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const config = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash:8].js',
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        terserOptions: { ecma: 6 },
      }),
      new OptimizeCSSAssetsPlugin(),
    ],
  },
};

module.exports = config;
