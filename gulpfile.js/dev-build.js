const gulp = require('gulp');
const path = require('path');
const webpack = require('webpack-stream');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function devbuild() {
    return gulp.src('./src/index.ts')
        .pipe(webpack({
            mode: 'development',
            devtool: "inline-source-map",
            entry: './src/index.ts',
            module: {
                rules: [
                    {
                        test: /\.ts(x?)$/,
                        exclude: /node_modules/,
                        use: [
                            {
                                loader: "ts-loader"
                            }
                        ]
                    },
                    // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
                    // {
                    //     enforce: "pre",
                    //     test: /\.js$/,
                    //     loader: "source-map-loader"
                    // }
                ]
            },
            resolve: {
                extensions: [".ts", ".tsx", ".js", ".jsx"]
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
        }))
        .pipe(gulp.dest('./dist/'));
}

gulp.task('devbuild', devbuild);
