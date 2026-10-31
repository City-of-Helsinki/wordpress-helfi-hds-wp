'use strict';

import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import gulp from 'gulp';
import rename from 'gulp-rename';
import cleanCSS from 'gulp-clean-css';
import prefix from 'gulp-autoprefixer';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import babel from 'gulp-babel';
import fs from 'node:fs';
import path from 'node:path';

const sass = gulpSass(dartSass);
const sassOptions = {
  outputStyle: 'compressed'
};

const cssOptions = {
  level: {
    2: {
      mergeMedia: false,
    }
  },
  format: {
    semicolonAfterLastProperty: true
  }
};

const DIST = {
  admin: {
    scripts: 'assets/admin/js',
    styles: 'assets/admin/css',
  },
  common: {
    scripts: 'assets/common/js',
    styles: 'assets/common/css',
  },
  public: {
    scripts: 'assets/public/js',
    styles: 'assets/public/css',
  },
};

const SOURCE = {
  admin: {
    scripts: 'src/admin/js/**/*.js',
    styles: 'src/admin/scss/**/*.scss',
  },
  common: {
    scripts: 'src/common/js/**/*.js',
    styles: 'src/common/scss/**/*.scss',
  },
  public: {
    scripts: 'src/public/js/**/*.js',
    styles: 'src/public/scss/**/*.scss',
  },
};

const ICONS = {
  source: 'node_modules/hds-core/lib/icons',
  exclude: ['icon', 'icons'],
  dest: 'config/icons/hds-icons.php',
};

function phpString(value) {
  return "'" + value.replace(/\\/g, '\\\\').replace(/'/g, "\\'") + "'";
}

function handleIcons(done) {
  const suffix = '.min.css';
  const entries = fs.readdirSync(ICONS.source)
    .filter(file => file.endsWith(suffix))
    .map(file => file.slice(0, -suffix.length))
    .filter(name => !ICONS.exclude.includes(name))
    .sort()
    .map(name => {
      const css = fs.readFileSync(path.join(ICONS.source, name + suffix), 'utf8')
        .replace(/\/\*#\s*sourceMappingURL=.*?\*\//g, '')
        .trim();

      return `\t${phpString(name)} => ${phpString(css)},`;
    });

  const php = [
    '<?php',
    '/**',
    '  * HDS icon styles by icon name.',
    '  * Generated from hds-core by the gulp icons task. Do not edit manually.',
    '  */',
    '',
    "if ( ! defined( 'ABSPATH' ) ) {",
    '\texit;',
    '}',
    '',
    'return array(',
    ...entries,
    ');',
    '',
  ].join('\n');

  fs.mkdirSync(path.dirname(ICONS.dest), { recursive: true });
  fs.writeFileSync(ICONS.dest, php);
  done();
}

function handleScripts(type) {
  return gulp.src(SOURCE[type].scripts)
		.pipe(concat('scripts.js'))
		.pipe(babel({
			presets: ["@babel/preset-env", "@babel/preset-react"]
		}))
    .pipe(gulp.dest(DIST[type].scripts))
		.pipe(uglify())
		.pipe(rename('scripts.min.js'))
		.pipe(gulp.dest(DIST[type].scripts));
}

function handleStyles(type) {
  return gulp.src(SOURCE[type].styles)
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(prefix())
    .pipe(cleanCSS(cssOptions))
    .pipe(gulp.dest(DIST[type].styles))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(DIST[type].styles))
}

gulp.task('icons', handleIcons);

gulp.task('adminScripts', () => handleScripts('admin'));
gulp.task('adminStyles', () => handleStyles('admin'));

gulp.task('commonScripts', () => handleScripts('common'));
gulp.task('commonStyles', () => handleStyles('common'));

gulp.task('publicScripts', () => handleScripts('public'));

gulp.task('publicStyles', () => handleStyles('public'));

gulp.task('watchAdmin',function() {
  gulp.watch(SOURCE.admin.styles, gulp.parallel('adminStyles'));
  gulp.watch(SOURCE.admin.scripts, gulp.parallel('adminScripts'));
});

gulp.task('watchCommon',function() {
  gulp.watch(SOURCE.common.styles, gulp.parallel('commonStyles'));
  gulp.watch(SOURCE.common.scripts, gulp.parallel('commonScripts'));
});

gulp.task('watchPublic',function() {
  gulp.watch(SOURCE.public.styles, gulp.parallel('publicStyles'));
  gulp.watch(SOURCE.public.scripts, gulp.parallel('publicScripts'));
});

gulp.task('watch',function() {
  gulp.watch(SOURCE.admin.styles, gulp.parallel('adminStyles'));
  gulp.watch(SOURCE.admin.scripts, gulp.parallel('adminScripts'));
  gulp.watch(SOURCE.common.styles, gulp.parallel('commonStyles'));
  gulp.watch(SOURCE.common.scripts, gulp.parallel('commonScripts'));
  gulp.watch(SOURCE.public.styles, gulp.parallel('publicStyles'));
  gulp.watch(SOURCE.public.scripts, gulp.parallel('publicScripts'));
});

gulp.task('default', gulp.parallel(
  'icons',
  'adminStyles',
  'adminScripts',
  'commonStyles',
  'commonScripts',
  'publicStyles',
  'publicScripts',
));
