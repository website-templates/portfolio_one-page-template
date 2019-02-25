// Next-generation ES6 module bundler
var gulp = require('gulp'),
    paths = require('./config/paths'),
    plumber = require('gulp-plumber'),
    rollup = require('gulp-rollup'),
    babel = require('rollup-plugin-babel'),
    rename = require('gulp-rename');


// Bundle ES6 modules.
gulp.task('rollup:main', function() {
  return gulp.src(paths.dev.js + '/**/*.js')
    .pipe(plumber())
    .pipe(rollup({
      format: 'umd',
      entry: [
        paths.dev.js + '/body.js',
        paths.dev.js + '/head.js'
      ],
      plugins: [
        babel({
          exclude: 'node_modules/**',
          presets: ['@babel/preset-env'],
          babelrc: false
        })
      ]
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(paths.build.js));
});
