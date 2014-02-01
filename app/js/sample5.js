(function (exports) {
  'use strict';

  function Sample () {
    this.target = '#sample5';
    this.message = 'Hello World!';
  }

  Sample.prototype = {

    greet: function () {
      return this.message;
    },

    show: function () {
      var target = document.querySelector(this.target),
      label = document.createElement('label');

      label.innerHTML = this.greet();
      target.appendChild(label);
    }

  };

  exports.Sample5 = Sample;

})(this);