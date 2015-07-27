'use strict';

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
});
