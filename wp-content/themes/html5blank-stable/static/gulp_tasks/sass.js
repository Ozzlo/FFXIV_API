var $             = require('gulp-load-plugins')();
var config        = require('./../gulp-config');

module.exports = function (gulp, browserSync) {
  return gulp.src(config.filesLocation.sass.src)
  .pipe($.plumber({errorHandler: $.notify.onError('Error: <%= error.message %>')}))
  .pipe($.sourcemaps.init({loadMap: true}))
  .pipe($.sass.sync({
    includePaths: config.sassPaths,
    consoleLogError: true
  }))
  .pipe($.autoprefixer({
    browsers: ['last 2 versions', 'ie >= 9']
  }))
  .pipe($.rename('app.css'))
  .pipe($.sourcemaps.write('./'))
  .pipe(gulp.dest(config.filesLocation.sass.dist))
  .pipe(browserSync.reload({stream: true}))
  .pipe($.cleanCss())
  .pipe($.rename('app.min.css'))
  .pipe($.sourcemaps.write('./'))
  .pipe(gulp.dest(config.filesLocation.sass.dist))
  .pipe(browserSync.reload({stream: true}))
  .pipe($.notify('Style compiled!'));
};
