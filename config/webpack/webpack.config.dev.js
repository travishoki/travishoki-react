const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

const baseConfig = require('./webpack.base.js');

const rootDir = path.resolve(__dirname, '../../');
const srcPath = path.resolve(rootDir, 'src');

module.exports = merge(baseConfig, {
    output: {
        path: path.resolve(rootDir, 'dist'), // Note: Physical files are only output by the production build task `npm run build`.
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: srcPath,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
});