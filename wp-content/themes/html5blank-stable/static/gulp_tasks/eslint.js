var $             = require('gulp-load-plugins')();
var config        = require('./../gulp-config');

module.exports = function (gulp) {
  return gulp.src(config.filesLocation.scripts.watch)
    .pipe($.eslint())
    .pipe($.plumber({ errorHandler : $.notify.onError('Scripts: <%= error.message %>') }))
    .pipe($.eslint.format())
    .pipe($.eslint.failAfterError());
};
