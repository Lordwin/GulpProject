var gulp = require('gulp');
var	concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
//var watch = require('gulp-watch');

gulp.task('default', ['cssConcat', 'cssMin', 'jsUglify'])

gulp.task('watch', function() {
	gulp.watch('.GulpProject/**/*.css', ['cssConcat']);
	gulp.watch('.GulpProject/**/*.js', ['jsUglify']);

});

gulp.task('less', function() {
	 gulp.src('./*.less')
  	.pipe(less())
    .pipe(gulp.dest('./out/css'));

});

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