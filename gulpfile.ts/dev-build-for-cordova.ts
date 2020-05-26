import * as gulp from 'gulp';
import * as path from 'path';
import * as webpack from 'webpack-stream';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';

export function devbuild_for_cordova() {
    return gulp.src('src/index.ts')
        .pipe(webpack({
            mode: 'development',
            devtool: "inline-source-map",
            entry: './src/index.cordova.ts',
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
                    template: path.resolve(__dirname, '../src/assets/index.cordova.html')
                })
            ]
        }))
        .pipe(gulp.dest('cordova-src/www'));
}
