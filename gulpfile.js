var gulp = require('gulp');
var postcss = require('gulp-postcss');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var postcssSimpleVars = require('postcss-simple-vars');
var postcssNesting = require('postcss-nesting');


gulp.task('css', function () {
  var processors = [
    autoprefixer,
    postcssSimpleVars,
    precss,
    postcssNesting
  ];
  return gulp.src('./src/css/style.css')
    .pipe(postcss(processors))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dist/css'));
});

gulp.watch('./src/css/*.css', ['css']);