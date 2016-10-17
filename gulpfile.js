'use strict';

var gulp = require('gulp');
var watch = require('gulp-watch');
var connect = require('gulp-connect')
// var tsb = require('gulp-tsb');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('./app/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./wwwroot'));
});

gulp.task('copy', function() {
    gulp.src('./app/**/*.html')
    // Perform minification tasks, etc here
    .pipe(gulp.dest('./wwwroot'));
});

gulp.task('watch', function(){
    watch('./app/**/*.html', function(){ gulp.start('copy'); });
});

gulp.task('default', ['sass','copy','watch']);