/**
 *
 * ---------------------------------
 *
 *    ARCHITECTURE EXPLANATION
 *
 * ---------------------------------
 *
 * This is an example on how to produce your Javascript
 * The goal of this architecture is to organize your javascripts files
 * as modules. Those modules are responsible for the events and actions they're doing on your page.
 *
 * Each modules contain methods which describe an action like 'open' or 'close'
 * and events which contain eventListeners like 'click' or 'mouseenter' that will trigger the 'open' or 'close' methods.
 * Those modules contain also a _init() method which launch the events you want to detect.
 *
 * The pages attribute contain a _common() method which contain the functions common to every pages
 * and all the other methods are supposed to represent the necessities for a specific page. For example _index()
 * will contain all the modules initializations for the index.html.twig page.
 *
 * Since your file will start becoming too big and/or difficult to maintain if you write everything in the same file,
 * you can use the require() function of Browserify to transform every modules and objects of this app
 * into separated files. You'll just have to call them in this main object to keep the same architecture.
 *
 */

window.app = {
// window.app = {

  /**
   * Pages initializations
   * @type {Object}
   */
  pages : {


    /**
     * Requirements common to every pages
     * @return {void}
     */
    _common : function () {
      $(document).ready(function () {
        $(document).foundation();
      });

      // console.log('Your app is called:', app.appName);
    },


    /**
     * Index page requirements
     * @return {void}
     */
    _index: function () {
      this._common();

      $(document).ready(function () {
        app.fn.getApi._init();
      });
    }


  },


  /**
   * Functions & Modules declarations
   * @type {Object}
   */
  fn : {

    getApi : require('./modules/getApi')

  }
};
