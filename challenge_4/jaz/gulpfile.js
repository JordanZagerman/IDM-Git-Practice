const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const stylus = require('gulp-stylus');
var browserSync = require('browser-sync').create();

gulp.task('default', ['styles', 'html']);

gulp.task('styles', () => {
    return gulp.src('./src/stylus/screen.styl')
        .pipe(sourcemaps.init())
        .pipe(stylus())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/css/'))
        .pipe(browserSync.stream());
        });

gulp.task('html', () => {
    return gulp.src('./src/views/index.html')
        .pipe(gulp.dest('./dist/'));
});