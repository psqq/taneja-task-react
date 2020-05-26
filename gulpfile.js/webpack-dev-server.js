const gulp = require('gulp');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfigMaker = require('./webpack-config-maker');

const PORT = 8088;

gulp.task("webpack-dev-server", function () {
    // Start a webpack-dev-server
    var compiler = webpack(webpackConfigMaker('webpack_dev_server'));
    new WebpackDevServer(compiler, {
        // server and middleware options
    }).listen(PORT, "localhost", function (err) {
        if (err) throw err;
        console.log("[webpack-dev-server]", `http://localhost:${PORT}/webpack-dev-server/index.html`);
    });
});
