const webpack = require("webpack");
const merge = require("webpack-merge");
const FtpOutputPlugin = require("ftp-output-webpack-plugin");

const baseConfig = require("./webpack.base.js");
const ftpOptions = require("../ftpOptions");

module.exports = merge(baseConfig, {
  output: {
    path: "/portfolio-react", // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: "/portfolio-react/",
    filename: "bundle.js",
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new FtpOutputPlugin(ftpOptions), // ftpOptions see as above description
  ],
});
