var $             = require('gulp-load-plugins')();
var config        = require('./../../gulp-config');

module.exports = function (gulp) {
  return gulp.src([
    config.filesLocation.images.dist + '/**/*.' + config.filesLocation.images.types
  ])
  .pipe($.smushit({
    verbose : true
  }))
  .pipe(gulp.dest(function (file) {
    return file.base;
  }));
};
