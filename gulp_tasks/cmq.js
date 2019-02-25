// Combine matching media queries into one media query definition
var gulp = require('gulp'),
    paths = require('./config/paths'),
    plumber = require('gulp-plumber'),
    cmq = require('gulp-merge-media-queries');


//Combine media queries in result *.css files
gulp.task('cmq:main', function () {
  return gulp.src(paths.build.css + '/*.min.css')
    .pipe(plumber())
    .pipe(cmq({
      log: false
    }))
    .pipe(gulp.dest(paths.build.css));
});
