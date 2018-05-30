const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const mod = `${__dirname.includes(process.cwd()) ? process.cwd() : __dirname}/node_modules/`;

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    path.join(__dirname, 'src/index.jsx'),
  ],
  output: {
    publicPath: '/dist/',
    path: path.join(__dirname, 'public/dist/'),
    filename: 'bundle.[hash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public/template.html'),
      filename: path.join(__dirname, 'public/index_bundle.html'),
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('staging'),
      'process.env.API_URL': JSON.stringify('http://localhost:3000'),
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [`${mod}babel-preset-env`, 'react'],
        },
      },
    }, {
      test: /\.js?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [`${mod}babel-preset-env`],
        },
      },
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader',
    }, {
      test: /\.(png|jpg|jpeg|svg|ttf|mp4)$/i,
      loader: 'file-loader',
    }],
  },
};
