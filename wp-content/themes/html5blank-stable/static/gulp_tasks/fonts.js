var $             = require('gulp-load-plugins')();
var config        = require('./../gulp-config');

module.exports = function (gulp) {
  gulp.src(config.filesLocation.fonts.src)
  .pipe($.sourcemaps.init())
  .pipe(gulp.dest(config.filesLocation.fonts.dist));

  return gulp.src(config.filesLocation.fonts.src)
  .pipe($.sourcemaps.init())
  .pipe(gulp.dest('app/styleguide/styles/fonts'));
};
