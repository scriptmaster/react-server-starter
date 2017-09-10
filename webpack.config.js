const path = require('path');

module.exports = {
  entry: {
    app: './src/browser.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ ".jsx", ".js", ".json" ]
  },
  devtool: '',
  devServer: {
    contentBase: './public',
    hot: true
  },
  plugins: [
  ],
  output: {
    filename: 'static/app.bundle.js',
    path: path.resolve(__dirname, './public/')
  }
};
