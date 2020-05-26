// All tasks
import './dev-build';
import './prod-build';
import './cordova-clean';
import './dev-build-for-cordova';
import './cordova-run-android';

// Default task
import * as gulp from 'gulp';
gulp.task('default', gulp.series('devbuild'));
