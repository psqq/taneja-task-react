import * as gulp from 'gulp';
import * as clean from 'gulp-clean';

export function cordova_clean() {
    return gulp.src(['cordova-src/www'], { read: false, allowEmpty: true })
        .pipe(clean());
}
