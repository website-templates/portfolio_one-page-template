// Minify JavaScript with UglifyJS2
var gulp = require('gulp'),
	paths = require('./config/paths'),
	plumber = require('gulp-plumber'),
	uglify = require('gulp-uglify');


gulp.task('uglify:main', function() {
	return gulp.src(paths.build.js + '/*.min.js')
		.pipe(plumber())
		.pipe(uglify())
		.pipe(gulp.dest(paths.build.js));
});
