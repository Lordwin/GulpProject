var gulp = require('gulp'),
    minifyCSS = require('gulp-css-condense'),
    notify = require("gulp-notify"),
    autoprefixer = require('gulp-autoprefixer');
  
 
gulp.task('default', function() {
    return gulp.src('./style.css')
        .pipe(gulp.dest('./out'))
        .pipe(minifyCSS('minify.css'))   
        .pipe(notify('Attention! Write changes'))
        .pipe(autoprefixer('last 15 version'));
});

gulp.task('watch', function() {
    gulp.watch('/*.css', ['default']) 
});