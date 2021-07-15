var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src(['./sass/**/*.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));;
});

gulp.task('watch:sass', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('default', ['watch:sass', 'sass']);