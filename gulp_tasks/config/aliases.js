// Include gulp
var gulp = require('gulp'),
	runSequence = require('run-sequence');

// Install bower dependencies and place them to dev folders
gulp.task('start', function() {
	runSequence(
		'shell:bower',
		'bower:main',
		'clean:gitkeep'
	);
});

// Dev task with static server
gulp.task('dev', function() {
	runSequence(
		// 'coffee:main',
		'rigger:main',
		'sass:main',
		// 'stylus:main',
		'postcss:dev',
		'cmq:main',
		'pug:main',
		'sync:helpers',
		'sync:fonts',
		'sync:images',
		'browserSync:server',
		'watch'
	);
});

// Build task
gulp.task('build', function() {
	runSequence(
		'imagemin:main',
		'uglify:main',
		'postcss:build',
		'htmlmin:main',
		'browserSync:server'
	);
});

// Regenerate and build project by running all tasks
gulp.task('rebuild', function() {
	runSequence(
		// 'coffee:main',
		'rigger:main',
		'sass:main',
		// 'stylus:main',
		'postcss:dev',
		'cmq:main',
		'pug:main',
		'sync:helpers',
		'sync:fonts',
		'sync:images',
		'imagemin:main',
		'uglify:main',
		'postcss:build',
		'htmlmin:main'
	);
});

// Run server without watching for changes
gulp.task('server', ['browserSync:server']);
