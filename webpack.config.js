const path = require('path');

module.exports = {
  entry: './app/script/index.js',
  output: {
    path: path.resolve(__dirname, 'app/script/dist'),
    filename: 'index_bundle.js'
  }
}