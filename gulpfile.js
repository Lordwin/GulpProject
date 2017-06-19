var gulp = require('gulp');
var	concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify');

gulp.task('jsUglify', function() {
  gulp.src('./scripts/*.js')
  	.pipe(concat('all.js'))
  	.pipe(uglify())
  	.pipe(gulp.dest('./out/'));
});

gulp.task('cssConcat', function() {
  gulp.src('./**/*.css')
  	.pipe(concat('all.css'))
  	.pipe(gulp.dest('./out/'));
});

gulp.task('cssMin', function() {
  gulp.src('./**/*.css')
  	.pipe(cssmin())
  	.pipe(concat('all.min.css'))
  	.pipe(gulp.dest('./out/'));
});