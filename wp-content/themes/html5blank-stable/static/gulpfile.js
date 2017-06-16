var $                 = require('gulp-load-plugins')();
var browserSync       = require('browser-sync').create();

$.requireTasks({
  path      : process.cwd() + '/gulp_tasks',
  arguments : [browserSync]
});
