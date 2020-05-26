// All tasks
require('./dev-build');
require('./prod-build');
require('./cordova-clean');
require('./dev-build-for-cordova');
require('./prod-build-for-cordova');
require('./cordova-run-android');
require('./webpack-dev-server');

// Default task
const gulp = require('gulp');
gulp.task('default', gulp.series('devbuild'));
