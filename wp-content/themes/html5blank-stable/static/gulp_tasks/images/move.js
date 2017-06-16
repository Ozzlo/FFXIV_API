var $             = require('gulp-load-plugins')();
var config        = require('./../../gulp-config');


module.exports = function (gulp) {
  return gulp.src(config.filesLocation.images.src + '/**/*.*')
  .pipe(gulp.dest(config.filesLocation.images.dist))
  .pipe($.notify('Images moved!'));
};
