var $             = require('gulp-load-plugins')();
var config        = require('./../../gulp-config');


module.exports = function (gulp) {
  return gulp.src(config.filesLocation.images.dist + '/**/*.*', {read: false})
  .pipe($.clean({force: true}));
};
