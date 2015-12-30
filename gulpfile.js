// 
// Kelly Galvin (dev@betaverse.com)
// Gulpfile 1.0.5 - 2015-12-30
//
// -------------------------------------
//   Packages
// -------------------------------------
//
// gulp              		: The streaming build system
// gulp-postcss        		: PostCSS is a tool for transforming styles with JS plugins
// autoprefixer 			: Parse CSS and add vendor prefixes to rules
// lost						: PostCSS fractional grid system built with calc
// gulp-connect				: Run a webserver (with LiveReload)
// gulp-stylus				: Dynamic stylesheet language and that renders CSS
// poststylus				: PostCSS adapter for Stylus
//	
// npm install --save-dev
// gulp gulp-postcss autoprefixer lost gulp-connect gulp-stylus poststylus
//	
// -------------------------------------


var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var lost = require('lost');
var connect = require('gulp-connect');
var stylus = require('gulp-stylus');
var poststylus = require('poststylus');


// -------------------------------------
//   Task: Styles
// -------------------------------------

gulp.task('styles', function(){
	var processors = [
		autoprefixer({browsers: ['last 2 versions']}),
	];
	
	return gulp.src('./src/css/*.styl')
		.pipe(postcss(processors))		
		.pipe(stylus({
            use: [
                poststylus(['lost'])
            ]
		}))
		.pipe(gulp.dest('./dist/css/'))
		.pipe(connect.reload());
});

// -------------------------------------
//   Task: Watch
// -------------------------------------

gulp.task('watch:styles', function (){
	gulp.watch('**/*.styl', ['styles']); 
});

// -------------------------------------
//   Task: Connect (Live Reload)
// -------------------------------------

gulp.task('connect', function() {
	connect.server({
		livereload: true
	});
});

// -------------------------------------
//   Task: Default
// -------------------------------------
gulp.task('default', ['styles','watch:styles','connect']);
