const gulp = require('gulp');
const webpack = require('webpack-stream');
const webpackConfigMaker = require('./webpack-config-maker');

function prodbuild() {
    return gulp.src('./src/index.ts')
        .pipe(webpack(webpackConfigMaker('prodbuild')))
        .pipe(gulp.dest('./dist/'));
}

gulp.task('prodbuild', prodbuild);
