const webpack = require('webpack');
const path = require('path');

const vendor = ['react', 'react-dom']

module.exports = {
  entry: {
    vendor,
  },
  output: {
    path: path.join(__dirname, 'dll'),
    filename: '[name].js',
    library: '[name]',
  },
  plugins: [
    new webpack.DllPlugin({
      context: __dirname,
      path: path.join(__dirname, 'dll', '[name]-manifest.json'),
      name: '[name]_[hash]',
    }),
  ]
};