// Streaming concat middleware for gulp
var gulp = require('gulp'),
	paths = require('./config/paths'),
	plumber = require('gulp-plumber'),
	rigger = require('gulp-rigger'),
	rename = require('gulp-rename');


// Concatenate & Minify JS
gulp.task('rigger:main', function() {
	return gulp.src([
		paths.dev.js + '/*.js',
		'!' + paths.dev.js + '/*.min.js'
	])
		.pipe(plumber())
		.pipe(rigger())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest(paths.build.js));
});
