const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: 'bundle.js'
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/template.html'
        }),

        new MiniCssExtractPlugin({
            filename: 'index.css'
        })
    ],

    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },

            {
                test: /\.(sass|scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },

            {
                test: /\.(png|jpg|svg)/,
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[ext]',
                }
            }
        ]
    }
}