"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var style = [];

var keensole = {
  red: function red() {
    style.push("color: red");
    return this;
  },
  green: function green() {
    style.push("color: green");
    return this;
  },
  blue: function blue() {
    style.push("color: blue");
    return this;
  },
  bold: function bold() {
    style.push("font-weight: bold");
    return this;
  },
  small: function small() {
    style.push("font-size: 10px;");
    return this;
  },
  medium: function medium() {
    style.push("font-size: 14px;");
    return this;
  },
  large: function large() {
    style.push("font-size: 20px;");
    return this;
  },
  log: function log(message) {
    console.log("%c " + message, style.join(";"));
    style = [];
  }
};

if (!window.keensole) {
  window.keensole = keensole;
}

exports.default = keensole;
