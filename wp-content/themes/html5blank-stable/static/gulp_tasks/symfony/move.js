var config        = require('./../../gulp-config');

module.exports = function (gulp) {
  if (config.isSymfony) {
    var publicBundlePath  = config.bundlesPath + config.bundleName + '/Resources/public/';
    var viewsBundlePath   = config.bundlesPath + config.bundleName + '/Resources/views/';

    // Move every assets from the dist dir to the public dir of the chosen Bundle
    gulp.src('../**/*')
        .pipe(gulp.dest(publicBundlePath));

    // Move the views to the chosen Bundle
    gulp.src(config.filesLocation.twig.base + config.bundleName + '/**/*')
        .pipe(gulp.dest(viewsBundlePath));
  }
};
