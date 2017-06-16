var modal = {

  /**
   * Parameters
   *
   * @return {void}
   */
  _params: function () {
    this.selector      = 'modal';
    this.openSelector  = this.selector + '-open';
    this.closeSelector = this.selector + '-close';
  },


  /**
  * Initialize modal
  *
  * @return {void}
  */
  _init: function () {
    this.events.openClick();
  },


  /**
  * Open modal
  *
  * @return {void}
  */
  open : function () {
    console.log('modal is open');
  },


  /**
  * Close modal
  *
  * @return {void}
  */
  close : function () {
    console.log('modal is closed');
  },


  events : {


    /**
    * On click on data-open-modal
    * open the modal
    *
    * @return {void}
    */
    openClick : function () {
      var $elementContainer  = $('body');
      var openSelector = modal.openSelector;

      $elementContainer.on('click tap', '[data-' + openSelector + ']', function () {
        modal.open();
      });
    }


  }

};

module.exports = modal;
