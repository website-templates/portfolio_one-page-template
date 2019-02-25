// Grunt task for converting a set of images into a spritesheet and corresponding CSS variables
var gulp = require('gulp'),
    paths = require('./config/paths'),
    plumber = require('gulp-plumber'),
    spritesmith = require('gulp.spritesmith'),
    merge = require('merge-stream');


// Minify image files
gulp.task('sprite:sass', function () {
  var spriteData = gulp.src([
    paths.dev.images + '/sprite/*.png',
    '!' + paths.dev.images + '/sprite/sprite.png'
  ])
    .pipe(plumber())
    .pipe(spritesmith({
      imgName: 'sprite.png',
      imgPath: '../images/sprite/sprite.png',
      cssName: 'sprite.sass',
      algorithm: 'left-right',
      algorithmOpts: {sort: false},
      padding: 5
    }))

  var imgStream = spriteData.img
    .pipe(gulp.dest(paths.dev.images + '/sprite'));

  var cssStream = spriteData.css
    .pipe(gulp.dest(paths.dev.sass + '/helpers'));

  return merge(imgStream, cssStream);
});

gulp.task('sprite:stylus', function () {
  var spriteData = gulp.src([
    paths.dev.images + '/sprite/*.png',
    '!' + paths.dev.images + '/sprite/sprite.png'
  ])
    .pipe(plumber())
    .pipe(spritesmith({
      imgName: 'sprite.png',
      imgPath: '../images/sprite/sprite.png',
      cssName: 'sprite.styl',
      algorithm: 'left-right',
      algorithmOpts: {sort: false},
      padding: 5
    }))

  var imgStream = spriteData.img
    .pipe(gulp.dest(paths.dev.images + '/sprite'));

  var cssStream = spriteData.css
    .pipe(gulp.dest(paths.dev.stylus + '/helpers'));

  return merge(imgStream, cssStream);
});
