// eslint-disable-next-line @typescript-eslint/naming-convention
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
  entry: './index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },

  target: 'node',

  node: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    __dirname: false,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    __filename: false,
  },

  externalsPresets: {
    node: true,
  },
  externals: [nodeExternals()],

  module: {
    rules: [{
      test: /\.ts?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    }],
  },

  resolve: {
    extensions: ['.ts'],
  },

  plugins: [
    new CleanWebpackPlugin(),
  ],
};
