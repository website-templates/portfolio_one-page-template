// SASS plugin for gulp
var gulp = require('gulp'),
	paths = require('./config/paths'),
	changed = require('gulp-changed'),
	sass = require('gulp-sass'),
	rename = require('gulp-rename');

//Compile *.scss files
gulp.task('sass:main', function () {
	return gulp.src(paths.dev.sass + '/*.{sass,scss}')
		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest(paths.build.css));
});

//Compile *.scss files within watch task
gulp.task('sass:main:changed', function () {
	return gulp.src(paths.dev.sass + '/*.{sass,scss}')
		.pipe(changed(paths.build.css, {extension: '.min.css'}))
		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest(paths.build.css));
});
