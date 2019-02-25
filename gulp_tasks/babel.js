// Compile ES6 code
var gulp = require('gulp'),
    paths = require('./config/paths'),
    plumber = require('gulp-plumber'),
    babel = require('gulp-babel');


// Compile ES6
gulp.task('babel:main', function() {
  return gulp.src([
    paths.build.js + '/*.min.js'
  ])
    .pipe(plumber())
    .pipe(babel({
      presets: ['@babel/preset-env'],
      babelrc: false
    }))
    .pipe(gulp.dest(paths.build.js));
});
