import * as gulp from 'gulp';
import * as path from 'path';
import * as webpack from 'webpack-stream';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';

export function prodbuild() {
    return gulp.src('src/index.ts')
        .pipe(webpack({
            mode: 'production',
            entry: './src/index.ts',
            module: {
                rules: [
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
