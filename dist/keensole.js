(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1]);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJrZWVuc29sZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSh7MTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBzdHlsZSA9IFtdO1xuXG52YXIga2VlbnNvbGUgPSB7XG4gIHJlZDogZnVuY3Rpb24gcmVkKCkge1xuICAgIHN0eWxlLnB1c2goXCJjb2xvcjogcmVkXCIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICBncmVlbjogZnVuY3Rpb24gZ3JlZW4oKSB7XG4gICAgc3R5bGUucHVzaChcImNvbG9yOiBncmVlblwiKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgYmx1ZTogZnVuY3Rpb24gYmx1ZSgpIHtcbiAgICBzdHlsZS5wdXNoKFwiY29sb3I6IGJsdWVcIik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIGJvbGQ6IGZ1bmN0aW9uIGJvbGQoKSB7XG4gICAgc3R5bGUucHVzaChcImZvbnQtd2VpZ2h0OiBib2xkXCIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICBzbWFsbDogZnVuY3Rpb24gc21hbGwoKSB7XG4gICAgc3R5bGUucHVzaChcImZvbnQtc2l6ZTogMTBweDtcIik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIG1lZGl1bTogZnVuY3Rpb24gbWVkaXVtKCkge1xuICAgIHN0eWxlLnB1c2goXCJmb250LXNpemU6IDE0cHg7XCIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICBsYXJnZTogZnVuY3Rpb24gbGFyZ2UoKSB7XG4gICAgc3R5bGUucHVzaChcImZvbnQtc2l6ZTogMjBweDtcIik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG4gIGxvZzogZnVuY3Rpb24gbG9nKG1lc3NhZ2UpIHtcbiAgICBjb25zb2xlLmxvZyhcIiVjIFwiICsgbWVzc2FnZSwgc3R5bGUuam9pbihcIjtcIikpO1xuICAgIHN0eWxlID0gW107XG4gIH1cbn07XG5cbmlmICghd2luZG93LmtlZW5zb2xlKSB7XG4gIHdpbmRvdy5rZWVuc29sZSA9IGtlZW5zb2xlO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBrZWVuc29sZTtcblxufSx7fV19LHt9LFsxXSk7XG4iXSwiZmlsZSI6ImtlZW5zb2xlLmpzIn0=
