'use strict';

var path = require('path');
var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'uglify-save-license', 'del']
});

/**
 *  The main paths of your project handle these with care
 */
var conf = {
    paths: {
        src: 'src',
        dist: 'dist',
        tmp: '.tmp'
    }
};

/**
 *  Common implementation for an error handler of a Gulp plugin
 */
var errorHandler = function(title) {
  return function(err) {
    $.util.log($.util.colors.red('[' + title + ']'), err.toString());
    this.emit('end');
  };
};

/**
 *  Remove none-source folders
 */
gulp.task('clean', function (done) {
  $.del([path.join(conf.paths.dist, '/'), path.join(conf.paths.tmp, '/')], done);
});

/**
 *  Lint, concatenate and minimise the Javascripts files
 */
gulp.task('build', function () {
  return gulp.src([
      path.join(conf.paths.src, '/module.js'),
      path.join(conf.paths.src, '/service.js'),
      path.join(conf.paths.src, '/directive.js')
    ])
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.concat('ng-lipsum.js'))
    .pipe(gulp.dest(path.join(conf.paths.dist, '/')))
    .pipe($.ngAnnotate())
    .pipe($.uglify({ preserveComments: $.uglifySaveLicense })).on('error', errorHandler('Uglify'))
    .pipe($.concat('ng-lipsum.min.js'))
    .pipe(gulp.dest(path.join(conf.paths.dist, '/')));
});

/**
 *  Default task clean temporaries directories and launch the
 *  main optimization build task
 */
gulp.task('default', ['clean'], function () {
  gulp.start('build');
});