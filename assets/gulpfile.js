var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');

gulp.task('css', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./dist/'))
});

gulp.task('font-awesome', function() {
    gulp.src('bower_components/font-awesome/fonts/**/*')
        .pipe(gulp.dest('./fonts/'));
});

gulp.task('default', ['css','font-awesome']);