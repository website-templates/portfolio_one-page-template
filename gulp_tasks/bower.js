// Manage bower dependencies
var gulp = require('gulp'),
	paths = require('./config/paths'),
	plumber = require('gulp-plumber'),
	mainBowerFiles = require('main-bower-files');


// Copy bower files into js vendor folder
gulp.task('bower:main', function() {
	return gulp.src(mainBowerFiles({
		overrides: {
			jquery: {
				main: "dist/jquery.js"
			}
		}
	}))
		.pipe(plumber())
		.pipe(gulp.dest(paths.dev.js + '/vendor'));
});
