var gulp = require('gulp');
var mocha = require('gulp-mocha');
var exit = require('gulp-exit');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

gulp.task('default', ['test'], function() {});

gulp.task('test', function() {
  return gulp
    .src('test/*.js')
    .pipe(mocha())
    .pipe(exit());
});

gulp.task('lint', function() {
  return gulp
    .src(['**/*.js', '!node_modules/**'])
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task('watch', function() {
  gulp.watch(['!./gulpfile.js', '**/*.js', '!node_modules/**', './package.json'], ['lint']);
  gulp.watch('./app/sass/**/*.scss', ['sass']);
});

gulp.task('webpackdev', function() {
  return gulp.src('./app/js/**/*.js')
    .pipe(webpack({
      output: {
        filename: './js/bundle.js'
      }
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./public/'));
});

gulp.task('copy', function() {
  var opts = {
    conditionals: true,
    spare:true
  };

  return gulp.src('./app/**/*.html')
  .pipe(gulp.dest('./public/'))
  .pipe(minifyHTML(opts))
  .pipe(gulp.dest('./public/'));
});

gulp.task('build', ['copy', 'webpackdev', 'sass']);
gulp.task('default', ['sass:watch']);
