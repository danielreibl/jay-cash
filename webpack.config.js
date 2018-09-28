/* eslint-disable import/no-extraneous-dependencies */

const path = require('path');
const WPAsyncDefine = require('webpack-async-define');
const merge = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const SUPPORTED_BROWSERS = ['>0.25%', 'not op_mini all'];

module.exports = (env) => {
  const defaultConfig = {
    output: {
      path: path.join(__dirname, 'dist', 'client'),
      filename: path.join('js', '[name].js'),
    },
    resolve: {
      modules: ['node_modules'],
      extensions: ['.js', '.jsx', '.json', '.scss', '.svg'],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: path.join('css', '[name].css'),
      }),
      new WPAsyncDefine(),
    ],
    devtool: !env === 'prod' ? 'inline-source-map' : false,
    module: {
      rules: [
        { test: /\.json$/, enforce: 'pre', use: { loader: 'json-loader' } },
        {
          test: /\.svg$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              useRelativePath: true,
              outputPath: 'img/',
            },
          },
        },
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            { loader: 'css-loader', options: { sourceMap: true, importLoaders: 1 } },
            { loader: 'postcss-loader', options: { sourceMap: true, plugins: [autoprefixer({ browsers: SUPPORTED_BROWSERS })] } },
            'sass-loader',
          ],
        },
        {
          test: /\.jsx?/,
          exclude: /node_modules|(\.story\.js[x]?)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                ['env', { loose: true, modules: false, targets: { browsers: SUPPORTED_BROWSERS } }],
                'react',
              ],
              plugins: ['transform-object-rest-spread', 'transform-class-properties', ['transform-builtin-extend', { globals: ['Error'] }]],
            },
          },
        },
      ],
    },
  };
  return merge.smart(defaultConfig, {
    entry: { 'monte-carlo': './src/client/app.jsx' },
    output: {
      library: 'monte-carlo',
    },
    plugins: env === 'analyse' ? [new BundleAnalyzerPlugin()] : [],
    externals: {
    },
  });
};