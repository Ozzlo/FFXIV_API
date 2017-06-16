var argv          = require('yargs').argv;

module.exports = function (gulp, browserSync) {
  var port = argv.port || argv.p || 3000;

  return browserSync.init({
    server: {
      baseDir: 'app/dist/'
    },
    socket: {
      domain: 'http://localhost:' + port
    },
    ui : {
      port : port + 1
    },
    port: port
  });
};
