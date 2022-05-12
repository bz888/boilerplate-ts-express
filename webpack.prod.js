const path = require('path')
// const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

console.log('prod webpack loaded')

module.exports = {
  entry: './dist/src/client/index.js',
  mode: 'production',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        options: {
          // disable type checker - we will use it in fork plugin
          transpileOnly: true
        }
      }
    ]
  },
  // plugins: [new ForkTsCheckerWebpackPlugin()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  devtool: 'source-map'
}
