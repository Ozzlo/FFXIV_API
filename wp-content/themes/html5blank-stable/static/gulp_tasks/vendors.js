var bowerFiles    = require('bower-files')();
var $             = require('gulp-load-plugins')();
var config        = require('./../gulp-config');

module.exports = function (gulp) {
  var bowerFilesSrc = bowerFiles.ext('js').files;
  bowerFilesSrc =  (config.missingBowerFilesSrc) ? bowerFilesSrc.concat(config.missingBowerFilesSrc) : '';

  /** Activate this console log to see every detected script files **/
  console.log('Found sources from Bower:', bowerFilesSrc);

  return gulp.src(bowerFilesSrc)
  .pipe($.plumber({errorHandler: $.notify.onError('Error: <%= error.message %>')}))
  .pipe($.uglify()) // Minify unminified files
  .pipe($.concat('vendors.js')) // Concat all files into one file
  .pipe($.plumber.stop())
  .pipe(gulp.dest(config.filesLocation.vendors.dist)); // Write to destination folder
};
