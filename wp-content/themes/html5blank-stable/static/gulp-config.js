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
      dist  : '../css',
      watch : 'app/src/sass/**/*.scss'
    },
    twig    : {
      src   : ['app/src/views/**/templates/**/*.+(html|twig)', '!app/src/views/**/templates/**/_*.+(html|twig)'],
      dist  : '../',
      base  : 'app/src/views/',
      watch : ['app/src/views/**/*.twig', 'app/src/datas/**/*.json']
    },
    scripts : {
      src   : 'app/src/scripts/app.js',
      dist  : '../js',
      watch : 'app/src/scripts/**/*.js'
    },
    vendors : {
      dist  : '../js'
    },
    fonts   : {
      src   : 'app/src/fonts/**/*.*',
      dist  : '../fonts',
      watch : '../fonts'
    },
    images  : {
      src   : 'app/src/images',
      dist  : '../images',
      types : '{png,jpg,jpeg,gif,bmp,tif}',
      watch : 'app/src/images/**/*'
    },
    html    : {
      watch   : '../**/*.html'
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
