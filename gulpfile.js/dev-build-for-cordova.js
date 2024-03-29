const gulp = require('gulp');
const webpack = require('webpack-stream');
const webpackConfigMaker = require('./webpack-config-maker');

function devbuild_for_cordova() {
    return gulp.src('./src/index.ts')
        .pipe(webpack(webpackConfigMaker('devbuild_for_cordova')))
        .pipe(gulp.dest('cordova-src/www'));
}

gulp.task('devbuild-for-cordova', devbuild_for_cordova);
