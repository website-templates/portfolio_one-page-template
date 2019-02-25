// Delete files/folders using globs
var gulp = require('gulp'),
    paths = require('./config/paths'),
    del = require('del'),
    vinylPaths = require('vinyl-paths');


gulp.task('clean:gitkeep', function() {
  return gulp.src([paths.dev.main + '/**/.gitkeep', paths.build.main + '/**/.gitkeep'], { read: false })
    .pipe(vinylPaths(del));
});
