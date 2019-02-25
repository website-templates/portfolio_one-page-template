// Compile pug/jade templates with gulp build tool
var gulp = require('gulp'),
    paths = require('./config/paths'),
    plumber = require('gulp-plumber'),
    changed = require('gulp-changed'),
    data = require('gulp-data'),
    fs = require('fs'),
    pug = require('gulp-pug'),
    dataObject = function() {
      var files = fs.readdirSync(paths.dev.data),
          obj = {};

      for (var i in files) {
        var key = files[i].substr(0, files[i].lastIndexOf('.')),
            val = JSON.parse(fs.readFileSync(paths.dev.data + '/' + files[i]));

        obj[key] = val;
      }

      return obj;
    };


//Compile *.pug files
gulp.task('pug:main', function() {
  return gulp.src([paths.dev.jade + '/pages/*.jade', paths.dev.pug + '/pages/*.pug'])
    .pipe(plumber())
    .pipe(data(dataObject))
    .pipe(pug({
      client: false,
      pretty: true
    }).on('error', function(err) {
      console.log(err);
    }))
    .pipe(gulp.dest(paths.build.html));
});

//Compile *.pug files within watch task
gulp.task('pug:main:changed', function() {
  return gulp.src([paths.dev.jade + '/pages/*.jade', paths.dev.pug + '/pages/*.pug'])
    .pipe(plumber())
    .pipe(changed(paths.build.html, {extension: '.html'}))
    .pipe(data(dataObject))
    .pipe(pug({
      client: false,
      pretty: true
    }).on('error', function(err) {
      console.log(err);
    }))
    .pipe(gulp.dest(paths.build.html));
});
