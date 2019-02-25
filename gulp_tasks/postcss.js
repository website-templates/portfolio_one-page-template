// Transforming styles with JS plugins
var gulp = require('gulp'),
    paths = require('./config/paths'),
    plumber = require('gulp-plumber'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    csso = require('postcss-csso');


gulp.task('postcss:dev', function () {
  var processors = [
    autoprefixer({
      browsers: [
        'last 4 versions'
      ],
      cascade: true
    })
  ];
  return gulp.src(paths.build.css + '/*.min.css')
    .pipe(plumber())
    .pipe(postcss(processors))
    .pipe(gulp.dest(paths.build.css));
});

gulp.task('postcss:build', function () {
  var processors = [
    csso({
      keepSpecialComments: '*',
      restructure: false
    })
  ];
  return gulp.src(paths.build.css + '/*.min.css')
    .pipe(plumber())
    .pipe(postcss(processors))
    .pipe(gulp.dest(paths.build.css));
});
