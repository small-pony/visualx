const path = require('path');


module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'hydrioner.min.js',
    libraryTarget: "umd"
  },
  target: "node",
  resolve: {
    extensions: ['.js', 'jsx', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'ts-loader'
      },
    ]
  },
};