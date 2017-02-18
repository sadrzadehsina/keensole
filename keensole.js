+(function() {

  'use strict';

  var style = [];

  var keensole = {
    red: function() {
      style.push('color: red');
      return this;
    },
    green: function() {
      style.push('color: green');
      return this;
    },
    blue: function() {
      style.push('color: blue');
      return this;
    },
    bold: function() {
      style.push('font-weight: bold');
      return this;
    },
    small: function() {
      style.push('font-size: 10px;');
      return this;
    },
    medium: function() {
      style.push('font-size: 14px;');
      return this;
    },
    large: function() {
      style.push('font-size: 20px;');
      return this;
    },
    log: function( message ) {
      console.log('%c ' + message, style.join(';'));
      style = [];
    }
  }

  if (!window.keensole) {
    window.keensole = keensole;
  }

})();