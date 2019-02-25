// Gulp plugin to minify HTML
var gulp = require('gulp'),
    paths = require('./config/paths'),
    plumber = require('gulp-plumber'),
    htmlmin = require('gulp-htmlmin');


//Minify *.html files
gulp.task('htmlmin:main', function() {
  return gulp.src(paths.build.main + '/*.html')
    .pipe(plumber())
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(paths.build.main));
});
