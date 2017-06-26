var gulp = require('gulp');
var less = require('gulp-less');
var cssmin = require('gulp-cssmin');
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('default', ['autoPrefixer', 'less', 'cssMin', 'htmlMin', 'imageMin', 'jsUglify'])


gulp.task('autoPrefixer', function() {
  gulp.src('./less/style.less')
  .pipe(autoprefixer({
    browsers: ['last 5 versions'],
    cascade: false
  }))
  .pipe(gulp.dest('./less/'))
});

gulp.task('less', function() {
  gulp.src('./less/*.less')
  .pipe(less())
  .pipe(gulp.dest('./css/'));

});

gulp.task('jsUglify', function() {
  gulp.src('./js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('./release/js'));
});

gulp.task('cssMin', function() {
  gulp.src('./css/*.css')
  .pipe(cssmin())
  .pipe(gulp.dest('./release/css'));
});

gulp.task('htmlMin', function() {
  gulp.src('./html/*.html')
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest('./release/html'));
});

gulp.task('imageMin', function() {
  gulp.src('./images/*.*')
  .pipe(imagemin())
  .pipe(gulp.dest('./release/images'))
});

gulp.task('watch', function() {
  gulp.watch('./less/*.less', ['less']);
  gulp.watch('./html/*.html', ['htmlMin']);
  gulp.watch('./css/*.css', ['cssMin']);
  gulp.watch('./*.js', ['jsUglify']);
});