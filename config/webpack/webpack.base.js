const path = require('path');

const rootDir = path.resolve(__dirname, '../../');
const srcPath = path.resolve(rootDir, 'src');

module.exports = {
    debug: true,
    devtool: 'inline-source-map',
    noInfo: false,
    target: 'web',
    entry: [
        'eventsource-polyfill', // necessary for hot reloading with IE
        'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
        path.resolve(srcPath, 'index.js')
    ],
    resolve: {
        alias: {
            '~actions': path.resolve(__dirname, `${srcPath}/redux/actions`),
            '~components': path.resolve(__dirname, `${srcPath}/components`),
            '~images': path.resolve(__dirname, `${srcPath}/images`),
            '~reducers': path.resolve(__dirname, `${srcPath}/redux/reducers`),
        },
    },
    module: {
        loaders: [
            {test: /\.js$/, include: srcPath, loaders: ['babel']},
            {test: /\.(jpg|png)$/, loaders: ['file']},
            {test: /(\.less)$/, loaders: ['style', 'css', 'less']},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
            {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
            //font-awesome
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
        ]
    }
};