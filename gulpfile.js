var gulp = require('gulp');
var postcss = require('gulp-postcss');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var postcssSimpleVars = require('postcss-simple-vars');
var postcssNesting = require('postcss-nesting');


gulp.task('css', function () {
  var processors = [
    autoprefixer({browsers: ['last 4 version']}),
    postcssSimpleVars,
    precss,
    postcssNesting
  ];
  return gulp.src('./src/css/style.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dist/css'));
});