// A handy command line interface for gulp
var gulp = require('gulp'),
	paths = require('./config/paths'),
    shell = require('gulp-shell');

gulp.task('shell:bower', function () {
  return gulp.src('', {read: false})
    .pipe(shell([
      'bower install'
    ]));
});
