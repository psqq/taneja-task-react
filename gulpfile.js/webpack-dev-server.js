const gulp = require('gulp');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackDevServer = require('webpack-dev-server');

const PORT = 8088;

gulp.task("webpack-dev-server", function () {
    // Start a webpack-dev-server
    var compiler = webpack({
        mode: 'development',
        devtool: "inline-source-map",
        entry: './src/index.ts',
        module: {
            rules: [
                {
                    test: /\.ts?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: ['.ts', '.js'],
        },
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, '../dist'),
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, '../src/assets/index.html')
            })
        ]
    });
    new WebpackDevServer(compiler, {
        // server and middleware options
    }).listen(PORT, "localhost", function (err) {
        if (err) throw err;
        console.log("[webpack-dev-server]", `http://localhost:${PORT}/webpack-dev-server/index.html`);
    });
});
