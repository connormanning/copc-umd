const path = require('path')
module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'lib'),
    library: 'Copc'
  },
  resolve: {
    alias: {
      fs: false
    }
  }
}
