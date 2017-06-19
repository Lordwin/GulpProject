var gulp = require('gulp'),
    minifyCSS = require('gulp-css-condense'),
    notify = require("gulp-notify");
  
 
gulp.task('default', function() {
    return gulp.src('./style.css')
        .pipe(gulp.dest('./out'))
        .pipe(minifyCSS('minify.css'))   
        .pipe(notify('Attention! Write changes'));
});

gulp.task('watch', function() {
    gulp.watch('/*.css', ['default']) 
});