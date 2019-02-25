// Copy assets
var gulp = require('gulp'),
    paths = require('./config/paths'),
    plumber = require('gulp-plumber');


// Copy some helpers and devtools.
// Credits to @jbdemonte https://github.com/gulpjs/gulp/issues/151
gulp.task('sync:fonts', function() {
  return gulp.src([paths.dev.fonts + '/**/*.{eot,svg,ttf,otf,woff,woff2}'], {base: paths.dev.fonts})
    .pipe(plumber())
    .pipe(gulp.dest(paths.build.fonts));
});

gulp.task('sync:helpers', function() {
  return gulp.src([
    paths.dev.helpers + '/**/',
    paths.dev.helpers + '/.htaccess'
  ], {base: paths.dev.helpers})
    .pipe(plumber())
    .pipe(gulp.dest(paths.build.main));
});

gulp.task('sync:images', function() {
  return gulp.src([paths.dev.images + '/**/*.*'], {base: paths.dev.images})
    .pipe(plumber())
    .pipe(gulp.dest(paths.build.images));
});


// Copy some helpers and devtools within watch task
gulp.task('sync:fonts:changed', function() {
  return gulp.src([paths.dev.fonts + '/**/*.{eot,svg,ttf,otf,woff,woff2}'], {base: paths.dev.fonts})
    .pipe(plumber())
    .pipe(gulp.dest(paths.build.fonts));
});

gulp.task('sync:helpers:changed', function() {
  gulp.src([
    paths.dev.helpers + '/**/',
    paths.dev.helpers + '/.htaccess'
  ], {base: paths.dev.helpers})
    .pipe(plumber())
    .pipe(gulp.dest(paths.build.main));
});

gulp.task('sync:images:changed', function() {
  return gulp.src([paths.dev.images + '/**/*.*'], {base: paths.dev.images})
    .pipe(plumber())
    .pipe(gulp.dest(paths.build.images));
});
