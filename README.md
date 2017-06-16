# Frontend Starter 1.5.1

## javascript

The starter uses the Airbnb Styleguide for ES5 as its eslint. Please take a loot at it: https://github.com/airbnb/javascript/tree/es5-deprecated/es5
**Do not force me to activate the option that will fail the build if you don't respect it :) PLOX.**

There is a **browserify** to modularize your code. There is a complete explanation of it in the app.js file.

## Sass

The starter runs with Foundation 6.3.1. Documentation is here: http://foundation.zurb.com/sites/docs/.

**PLEASE. USE. IT.**

This starter is also mobile first as Foundation itself, so remember to use the small breakpoint to start your project, even in desktop.


### Installation
```
	$ cd static
	$ npm i && bower i
```


## Gulp tasks


### Available tasks

``` gulp ```	: (default.js) Run these dependecies : 'browser-sync', 'twig:render', 'sass', 'images:move', 'scripts', 'vendors', 'watch'. You can specify the port your want to use for browserSync by using the -p or --port parameter.

``` gulp build```	: (build.js) Run these dependecies : 'twig:render', 'sass', 'images:move', 'scripts', 'vendors' and then 'images:optimize'

``` gulp module:create ```	: (module/create.js) Allows you to create a twig view and all corresponding sass files in just 3 questions.

``` gulp sass ```	: (sass.js) Compile everything located in the selected sass directory (see gulp-config.js) and create autoprefixed, and minified versions.

``` gulp scripts ```	: (scripts.js) browserify, uglify and jshint the app.js file located in the selected script directory (see gulp-config.js).

``` gulp fonts ```	: (fonts.js) copy all the fonts contained in the selected font directory (see gulp-config.js) to the selected dist folder.

``` gulp vendors ```	: (vendors.js) Get every JS file downloaded with Bower (in app/src/libs/) and uglify it in the selected dist folder. If a source is missing when you start this task, you can manually add a source via the gulp-config.js file in the missingBowerFilesSrc property.

``` gulp images:move ```	: (images/move.js) Move every images contained in the selected image directory (see gulp-config.js) to the selected dist folder

``` gulp images:optmize ```	: (images/optimize.js) Uses resmush.it API to compress every images contained in the selected image dist directory (see gulp-config.js). It will not consume resources from your computer but will require a certain amount of time to upload, compress, then redownload the compressed image. Launch it with fiber or directly from the server if you have a bad internet connection.

``` gulp twig:render ```	: (twig/render.js) Render every twig templates in the selected twig directory (see gulp-config.js), with optional datas from the json associated in the selected data directory, prettify it.

``` gulp watch ```	: (watch.js) Watch changes in twig, scss, json and images and launch related dependecies

``` gulp browser-sync ```	: (browser-sync.js) Launch a browser-sync instance for the app/dist folder. You can specify the port your want to use for browserSync by using the -p or --port parameter.

``` gulp symfony:move ```	: (symfony/move.js) Move every assets and views to the bundle selected in the gulp-config.js file. Works only if the isSymfony attribut is set to true.


### Create a task

Every tasks are located in the directory static/gulp_tasks. To create a new one, add a file name "taskName.js", then create a module export as below:

```javascript
  var $  = require('gulp-load-plugins')();

  module.exports = function(gulp, browserSync, callback){

        return gulp.src('myFile')
          .pipe($.notify('myFile compiled!'));
  }
```

or if you have a synchonous task or depedencies, as below:


```javascript
  var $  = require('gulp-load-plugins')();

  module.exports = {
  	dep : ['task1', 'task2'],
    // if it's a classic pipe with gulp
    fn : function(gulp, browserSync, callback){
    	return gulp.src('myFile')
          .pipe($.notify('myFile compiled!'));
    }
    // Or if you want a native task (synchronous)
    nativeTask : $.shell.task('echo Hello')
  }
```


## Styleguide

(Soon).
(Already in place, you can see the Documentation here : https://holidaypirates.github.io/nucleus/annotation-reference.html and use the gulp task : ``` gulp styleguide:run ```)

## Config

Options will be configurated in the gulp-config.js file:

```javascript
module.exports = {
  //--- Here is your configuration for your gulp modules ---//


  /**
   * Chose the directories you want for each of
   * your resources as source and destination folder.
   * If needed it can be an array to select multiple files of directories
   */
  filesLocation : {

    sass    : {
        src   : 'app/src/sass/app.scss',
        dist  : 'app/dist/css',
        watch : 'app/src/sass/**/*.scss'
    },
    twig    : {
        src   : ['app/src/views/**/templates/**/*.+(html|twig)', '!app/src/views/**/templates/**/_*.+(html|twig)'],
        dist  : 'app/dist/',
        base  : 'app/src/views/',
        watch : ['app/src/views/**/*.twig', 'app/src/datas/**/*.json']
    },
    scripts : {
        src   : ['app/src/scripts/app.js'],
        dist  : 'app/dist/js',
        watch : 'app/src/scripts/**/*.js',
    },
    vendors : {
        dist  : 'app/dist/js'
    },
    fonts   : {
        src   : 'app/src/fonts/**/*.*',
        dist  : 'app/dist/fonts',
        watch : 'app/dist/fonts'
    },
    images  : {
        src   : 'app/src/images',
        dist  : 'app/dist/images',
        types : '{png,jpg,jpeg,gif,bmp,tif}',
        watch : 'app/src/images/**/*'
    },
    html    : {
      watch   : 'app/dist/**/*.html'
    }

  },


  /**
   * Determine here what is your website type. Its only
   * purpose as of now is to determine where to put your assets
   * when you use the move symfony:move task.
   */
  isSymfony             : true,
  bundlesPath           : '../src/Disko/',
  bundleName            : 'FrontBundle',


  /**
   * Add here every path you want your sass module to know,
   * it allows you to never have to copy paste data from the libs
   * you download via bower for example
   * @type {Array}
   */
  sassPaths             : [
    'app/src/libs/foundation-sites/scss',
    'app/src/libs/motion-ui/src',
    'app/src/sass/app',
    'app/src/libs'
  ],


  /**
   * Here you can add eventual libs that wouldn't be automatically
   * detected by the bower-files module. It happens maybe 25% of the time
   * @type {Array}
   */
  missingBowerFilesSrc  : [
    // 'myLib/location/with/directories/lib.js'
  ]


};
```
