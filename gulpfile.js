var fs = require('fs'),
	path = require('path'),
	merge = require('merge-stream'),
	gulp = require('gulp'),
	sass = require('gulp-sass')(require('sass')),
	rename = require('gulp-rename'),
	cleanCSS = require('gulp-clean-css');
	prefix = require('gulp-autoprefixer'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	babel = require('gulp-babel');

const ASSETS = 'assets';
const SOURCE = 'src';

var sassOptions = {
  outputStyle: 'compressed'
};

var cssOptions = {
  level: 2,
  format: {
    semicolonAfterLastProperty: true
  }
};

// https://stackoverflow.com/questions/45446626/concatenate-and-rename-files-based-on-directory-name-with-gulp
// https://github.com/gulpjs/gulp/blob/v3.9.1/docs/recipes/running-task-steps-per-folder.md
function getFolders(dir) {
  return fs.readdirSync(dir)
    .filter(function(file) {
      return fs.statSync(path.join(dir, file)).isDirectory();
    });
}

function mapFolders(callback) {
	return merge(
		getFolders(SOURCE).map(callback)
	);
}

gulp.task('scripts', function () {
	return mapFolders(function(folder) {
    return gulp.src(path.join(SOURCE, folder, '/js/**/*.js'))
      .pipe(concat(folder + '/js/scripts.js'))
			.pipe(babel({
	      presets: ["@babel/preset-env"]
	    }))
      .pipe(gulp.dest(ASSETS))
      .pipe(uglify())
      .pipe(rename(folder + '/js/scripts.min.js'))
      .pipe(gulp.dest(ASSETS));
   });
});

gulp.task('styles', function () {
	return mapFolders(function(folder) {
		return gulp.src(path.join(SOURCE, folder, '/scss/**/*.scss'))
			.pipe(sass(sassOptions))
			.pipe(concat(folder + '/css/styles.css'))
			.pipe(prefix())
      .pipe(gulp.dest(ASSETS))
			.pipe(cleanCSS(cssOptions))
			.pipe(rename(folder + '/css/styles.min.css'))
			.pipe(gulp.dest(ASSETS));
	});
});

gulp.task('watch', function () {
  gulp.watch(SOURCE, gulp.parallel('styles'));
  gulp.watch(SOURCE, gulp.parallel('scripts'));
});

gulp.task('default', gulp.parallel('styles', 'scripts'));
