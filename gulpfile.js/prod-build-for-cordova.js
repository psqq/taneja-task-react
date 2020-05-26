const gulp = require('gulp');
const webpack = require('webpack-stream');
const webpackConfigMaker = require('./webpack-config-maker');

function prodbuild_for_cordova() {
    return gulp.src('./src/index.ts')
        .pipe(webpack(webpackConfigMaker('prodbuild_for_cordova')))
        .pipe(gulp.dest('cordova-src/www'));
}

gulp.task('prodbuild-for-cordova', prodbuild_for_cordova);
