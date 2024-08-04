const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/drop-down-menu.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
              test: /\.css$/,
              use: ['style-loader', 'css-loader'],
            },
            {
              test: /\.(png|svg|jpg|jpeg|gif)$/,
              use: [
                {
                  loader: 'file-loader',
                  options: {
                    name: '[name].[ext]',
                    outputPath: 'images/',
                    publicPath: 'images/',
                  },
                },
              ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './src/drop-down-menu.html',
          filename: 'index.html',
        }),
    ],
    resolve: {
        extensions: ['.js', '.css'],
    },
    mode: 'development',
};