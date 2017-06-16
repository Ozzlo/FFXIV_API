var gulp          = require('gulp');
var config        = require('./../../gulp-config');
var fs            = require('fs');
var path          = require('path');
var mkdirp        = require('mkdirp');
var $             = require('gulp-load-plugins')();

var directoryFiltering = function (answer) {
  // Create an array of everyword separated by a /
  var answerSlashSplitted         = answer.split('/');
  // Uppercase every first letter of each word then implode it with / separators
  var answerCapitalized           = (function () {
    var answerSlashSplittedCopy = [];
    for (i = 0; i < answerSlashSplitted.length; i++) {
      answerSlashSplittedCopy[i] = answerSlashSplitted[i].charAt(0).toUpperCase() + answerSlashSplitted[i].slice(1);
    }
    return answerSlashSplittedCopy.join('/');
  })();
  // Remove first slash if it exists
  var answerWithoutFirstSlash     = answerCapitalized.replace(/^[\/]/g, '');
  // Remove eventual mention of partials folder
  var answerWithoutPartials       = answerWithoutFirstSlash.replace(/[\/]*(partials|Partials)*$/g, '');

  return answerWithoutPartials;
};

module.exports = function () {
  return  gulp.src('')
  .pipe(
    $.prompt.prompt([

      // First ask what kind of module when want to create
      {
        type    : 'list',
        name    : 'moduleType',
        message : 'What type of module would you like to create?',
        choices : ['partial', 'module', 'template']
      },

      // If the type is a module, then ask the name
      {
        type    : 'input',
        name    : 'moduleName',
        message : 'What\'s your module name?',
        when    : function (moduleTypeResponse) {
          if (moduleTypeResponse.moduleType === 'module') return true;
          return false;
        }
      },

      // If the type is a partial, then ask the directory corresponding
      {
        type    : 'input',
        name    : 'partialDirectory',
        message : 'For which directory are you creating this partial?',
        filter  : function (answer) {
          return directoryFiltering(answer);
        },
        when    : function (moduleTypeResponse) {
          if (moduleTypeResponse.moduleType === 'partial') return true;
          return false;
        }
      },

      // If the type is a partial and directory is entered, then ask its name
      {
        type    : 'input',
        name    : 'partialName',
        message : 'What\'s your partial name?',
        when    : function (moduleTypeResponse) {
          if (moduleTypeResponse.moduleType === 'partial') return true;
          return false;
        }
      },

      // If the type is a template, then ask the directory
      {
        type    : 'input',
        name    : 'templateDirectory',
        message : 'For which directory are you creating this template?',
        filter  : function (answer) {
          return directoryFiltering(answer);
        },
        when    : function (moduleTypeResponse) {
          if (moduleTypeResponse.moduleType === 'template') return true;
          return false;
        }
      },

      // If the type is a template and directory is entered, then ask its name
      {
        type    : 'input',
        name    : 'templateName',
        message : 'What\'s your template name?',
        when    : function (moduleTypeResponse) {
          if (moduleTypeResponse.moduleType === 'template') return true;
          return false;
        }
      }
    ],

    function (finalReponses) {
      var breakpoints = fs.readdirSync('app/src/sass/app/breakpoints').filter(function (file) {
        return fs.statSync(path.join('app/src/sass/app/breakpoints', file)).isDirectory();
      });
      var partialDirPath;
      var twigPath;
      var filesToCreate;
      var templateDirPath;
      var sassBreakpointDir;

      var createFile = function (filePath) {
        fs.open(filePath, 'r', function (err) {
          if (err) {
            fs.writeFile(filePath, '', function (writeErr) {
              if (writeErr) {
                console.log(err);
              }
            });
          } else {
            console.log('This file already exists!');
          }
        });
      };

      var createDir = function (filePath, callback) {
        mkdirp.sync(filePath);
        if (callback && typeof callback === 'function') {
          callback();
        }
      };

      // If it's a module
      if (finalReponses.moduleType === 'module') {
        partialDirPath  = 'app/src/views/' + config.bundleName + '/templates/modules';
        twigPath        = 'app/src/views/' + config.bundleName + '/templates/modules/_' + finalReponses.moduleName + '.html.twig';
        filesToCreate   = [twigPath];

        for (i = 0; i < breakpoints.length; i++) {
          sassBreakpointDir = 'app/src/sass/app/breakpoints/' + breakpoints[i] + '/modules/';

          createDir(sassBreakpointDir);
          filesToCreate.push(sassBreakpointDir + '_' + finalReponses.moduleName + '.scss');
        }

        createDir(partialDirPath, function () {
          for (i = 0; i < filesToCreate.length; i++) {
            createFile(filesToCreate[i]);
          }
        });
      } else if (finalReponses.moduleType === 'partial') {
        // If it's a partial
        partialDirPath  = 'app/src/views/' + config.bundleName + '/templates/' + finalReponses.partialDirectory + '/partials';
        twigPath        = partialDirPath + '/_' + finalReponses.partialName + '.html.twig';
        filesToCreate   = [twigPath];

        for (i = 0; i < breakpoints.length; i++) {
          sassBreakpointDir = 'app/src/sass/app/breakpoints/' + breakpoints[i] + '/' + finalReponses.partialDirectory + '/partials/';
          createDir(sassBreakpointDir);
          filesToCreate.push(sassBreakpointDir + '_' + finalReponses.partialName + '.scss');
        }

        createDir(partialDirPath, function () {
          for (i = 0; i < filesToCreate.length; i++) {
            createFile(filesToCreate[i]);
          }
        });
      } else if (finalReponses.moduleType === 'template') {
        // If it's a template
        templateDirPath = 'app/src/views/' + config.bundleName + '/templates/' + finalReponses.templateDirectory + '/';
        twigPath        = templateDirPath + '/' + finalReponses.templateName + '.html.twig';


        var sassCreateDirCallback = function () {
          createFile('app/src/sass/app/breakpoints/' + breakpoints[i] + '/' + finalReponses.templateDirectory + '/_' + finalReponses.templateName + '.scss');
        };
        for (i = 0; i < breakpoints.length; i++) {
          createDir('app/src/sass/app/breakpoints/' + breakpoints[i] + '/' + finalReponses.templateDirectory + '/', sassCreateDirCallback());
        }

        createDir(templateDirPath, function () {
          createFile(twigPath);
        });
      }
    })
  );
};
