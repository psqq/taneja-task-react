import * as gulp from 'gulp';
import * as shell from 'gulp-shell';

gulp.task('just-cordova-run-android', shell.task('cordova run android', {
    cwd: 'cordova-src'
}));

gulp.task('cordova-run-android', gulp.series(
    'cordova-clean',
    'devbuild-for-cordova',
    'just-cordova-run-android',
));
