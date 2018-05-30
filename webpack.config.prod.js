const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const mod = `${__dirname.includes(process.cwd()) ? process.cwd() : __dirname}/node_modules/`;

module.exports = {
  devtool: 'source-map',
  entry: [
    path.join(__dirname, 'src/index.jsx'),
  ],
  output: {
    publicPath: '/dist/',
    path: path.join(__dirname, 'public/dist/'),
    filename: 'bundle.[hash].js',
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true,
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public/template.html'),
      filename: path.join(__dirname, 'public/index_bundle.html'),
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.API_URL': JSON.stringify('https://localhost:3000'),
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
      test: /\.json$/,
      loader: 'json-loader',
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader',
    }, {
      test: /\.(png|jpg|ttf)$/i,
      loader: 'file-loader',
    }],
  },
};
