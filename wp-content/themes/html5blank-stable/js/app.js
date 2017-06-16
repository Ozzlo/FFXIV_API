(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

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
  pages: {

    /**
     * Requirements common to every pages
     * @return {void}
     */
    _common: function _common() {
      $(document).ready(function () {
        $(document).foundation();
      });

      // console.log('Your app is called:', app.appName);
    },

    /**
     * Index page requirements
     * @return {void}
     */
    _index: function _index() {
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
  fn: {

    getApi: require('./modules/getApi')

  }
};

},{"./modules/getApi":2}],2:[function(require,module,exports){
'use strict';

var getApi = {
  _init: function _init() {
    this.character();
  },
  character: function character() {
    var getInfo = 'https://api.xivdb.com/character/2909256';
    console.log(getInfo);
    $.ajax({
      dataType: 'json',
      url: getInfo
    }).done(function (data) {
      console.log(data[data]);
    });
  }
};
module.exports = getApi;

},{}]},{},[1])

