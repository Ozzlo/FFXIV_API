var $             = require('gulp-load-plugins')();
var config        = require('./../gulp-config');
var argv          = require('yargs');
var imageOptim    = argv.option('image-optim', {
  alias: 'i'
}).argv.i;


module.exports = {
  fn: function (gulp, browserSync, callback) {
    if (imageOptim) {
      $.sequence(['sass', 'images:move', 'scripts', 'vendors'], 'images:optimize')(callback);
    } else {
      $.sequence('sass', 'images:move', 'scripts', 'vendors')(callback);
    }
  }
};
