const gulp = require('gulp');
const clean = require('gulp-clean');

function cordova_clean() {
    return gulp.src(['cordova-src/www'], { read: false, allowEmpty: true })
        .pipe(clean());
}

gulp.task('cordova-clean', cordova_clean);
