var config = require('./../gulp-config');

module.exports = function (gulp, browserSync) {
  gulp.watch(config.filesLocation.twig.watch, ['twig:render']);
  gulp.watch(config.filesLocation.sass.watch, ['sass', 'fonts']);
  gulp.watch(config.filesLocation.scripts.watch, ['scripts']);
  gulp.watch(config.filesLocation.images.watch, { interval: 200 }, ['images:clean', 'images:move']).on('error', function (error) {
    if (error.code === 'ENOENT') {
      return;
    }
  });
  gulp.watch(config.filesLocation.html.watch, function () {
    browserSync.reload();
  });
};
