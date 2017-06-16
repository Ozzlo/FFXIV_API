var $             = require('gulp-load-plugins')();
var babelify      = require('babelify');
var browserify    = require('browserify');
var buffer        = require('vinyl-buffer');
var source        = require('vinyl-source-stream');
var config        = require('./../gulp-config');


module.exports = {
  dep : ['eslint'],
  fn  : function (gulp) {
    const bundler = browserify({
      entries: config.filesLocation.scripts.src,
      debug: true
    }).transform(babelify, {
      presets: ['es2015'],
      sourceMaps: true
    });

    return bundler
      .bundle()
      .on('error', function (err) {
        $.notify().write(err);
        // console.error(err);
        this.emit('end');
      })
      .pipe(source(config.filesLocation.scripts.src))
      .pipe(buffer())
      .pipe($.plumber({ errorHandler : $.notify.onError('Scripts: <%= error.message %>') }))
      .pipe($.sourcemaps.init({loadMaps: true}))
      .pipe($.rename('app.js'))
      .pipe(gulp.dest(config.filesLocation.scripts.dist))
      .pipe($.uglify())
      .pipe($.rename('app.min.js'))
      .pipe($.sourcemaps.write('./'))
      .pipe(gulp.dest(config.filesLocation.scripts.dist))
      .pipe($.notify({ title: 'Scripts', message: 'Scripts task complete' }));
  }
}
