const gulp = require('gulp');
const webpack = require('webpack-stream');
const webpackConfigMaker = require('./webpack-config-maker');

function devbuild() {
    return gulp.src('./src/index.ts')
        .pipe(webpack(webpackConfigMaker('devbuild')))
        .pipe(gulp.dest('./dist/'));
}

gulp.task('devbuild', devbuild);
