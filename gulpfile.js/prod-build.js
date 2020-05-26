const gulp = require('gulp');
const path = require('path');
const webpack = require('webpack-stream');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function prodbuild() {
    return gulp.src('src/index.ts')
        .pipe(webpack({
            mode: 'production',
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
        }))
        .pipe(gulp.dest('dist/'));
}

gulp.task('prodbuild', prodbuild);
