const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: 'bundle.js'
    },

    devServer: {
        contentBase: './docs',
        open: true
    },
}