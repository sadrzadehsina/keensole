(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Colors List
var colors = exports.colors = [{
  name: 'red',
  code: '#F40000'
}, {
  name: 'green',
  code: '#44B51B'
}, {
  name: 'orange',
  code: '#DD7D16'
}, {
  name: 'purple',
  code: '#45056E'
}, {
  name: 'blue',
  code: '#0E91F4'
}, {
  name: 'purple',
  code: '#45056E'
}];

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configs = undefined;

var _colors = require('./colors');

var _typography = require('./typography');

// Import Needed Configuration
var configs = exports.configs = {
  colors: _colors.colors,
  typography: _typography.typography
};

},{"./colors":1,"./typography":3}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// typography List
var typography = exports.typography = [{
  name: 'underline',
  style: 'text-decoration: underline'
}, {
  name: 'lineThrough',
  style: 'text-decoration: line-through'
}, {
  name: 'overline',
  style: 'text-decoration: overline'
}];

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _configs = require('./configs/configs');

var keensole = {},
    style = [];

// Build Color Related Methods
_configs.configs.colors.forEach(function (color) {
  // Build a new method with Color Name
  var method = function method() {
    style.push('color: ' + color.code);
    return keensole;
  };
  keensole['' + color.name] = method;
});

// Build Typography Related Methods
_configs.configs.typography.forEach(function (typography) {
  // Build a new method with Color Name
  var method = function method() {
    style.push('' + typography.style);
    console.log('' + typography.style);
    return keensole;
  };
  keensole['' + typography.name] = method;
});

// Finally Log Message to Console 😊
keensole.log = function (message) {
  console.log('%c ' + message, style.join(';'));
  style = [];
};

keensole.underline();

if (!window.keensole) {
  window.keensole = keensole;
}

exports.default = keensole;

},{"./configs/configs":2}]},{},[4]);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJrZWVuc29sZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSh7MTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG4vLyBDb2xvcnMgTGlzdFxudmFyIGNvbG9ycyA9IGV4cG9ydHMuY29sb3JzID0gW3tcbiAgbmFtZTogJ3JlZCcsXG4gIGNvZGU6ICcjRjQwMDAwJ1xufSwge1xuICBuYW1lOiAnZ3JlZW4nLFxuICBjb2RlOiAnIzQ0QjUxQidcbn0sIHtcbiAgbmFtZTogJ29yYW5nZScsXG4gIGNvZGU6ICcjREQ3RDE2J1xufSwge1xuICBuYW1lOiAncHVycGxlJyxcbiAgY29kZTogJyM0NTA1NkUnXG59LCB7XG4gIG5hbWU6ICdibHVlJyxcbiAgY29kZTogJyMwRTkxRjQnXG59LCB7XG4gIG5hbWU6ICdwdXJwbGUnLFxuICBjb2RlOiAnIzQ1MDU2RSdcbn1dO1xuXG59LHt9XSwyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY29uZmlncyA9IHVuZGVmaW5lZDtcblxudmFyIF9jb2xvcnMgPSByZXF1aXJlKCcuL2NvbG9ycycpO1xuXG52YXIgX3R5cG9ncmFwaHkgPSByZXF1aXJlKCcuL3R5cG9ncmFwaHknKTtcblxuLy8gSW1wb3J0IE5lZWRlZCBDb25maWd1cmF0aW9uXG52YXIgY29uZmlncyA9IGV4cG9ydHMuY29uZmlncyA9IHtcbiAgY29sb3JzOiBfY29sb3JzLmNvbG9ycyxcbiAgdHlwb2dyYXBoeTogX3R5cG9ncmFwaHkudHlwb2dyYXBoeVxufTtcblxufSx7XCIuL2NvbG9yc1wiOjEsXCIuL3R5cG9ncmFwaHlcIjozfV0sMzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG4vLyB0eXBvZ3JhcGh5IExpc3RcbnZhciB0eXBvZ3JhcGh5ID0gZXhwb3J0cy50eXBvZ3JhcGh5ID0gW3tcbiAgbmFtZTogJ3VuZGVybGluZScsXG4gIHN0eWxlOiAndGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUnXG59LCB7XG4gIG5hbWU6ICdsaW5lVGhyb3VnaCcsXG4gIHN0eWxlOiAndGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2gnXG59LCB7XG4gIG5hbWU6ICdvdmVybGluZScsXG4gIHN0eWxlOiAndGV4dC1kZWNvcmF0aW9uOiBvdmVybGluZSdcbn1dO1xuXG59LHt9XSw0OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jb25maWdzID0gcmVxdWlyZSgnLi9jb25maWdzL2NvbmZpZ3MnKTtcblxudmFyIGtlZW5zb2xlID0ge30sXG4gICAgc3R5bGUgPSBbXTtcblxuLy8gQnVpbGQgQ29sb3IgUmVsYXRlZCBNZXRob2RzXG5fY29uZmlncy5jb25maWdzLmNvbG9ycy5mb3JFYWNoKGZ1bmN0aW9uIChjb2xvcikge1xuICAvLyBCdWlsZCBhIG5ldyBtZXRob2Qgd2l0aCBDb2xvciBOYW1lXG4gIHZhciBtZXRob2QgPSBmdW5jdGlvbiBtZXRob2QoKSB7XG4gICAgc3R5bGUucHVzaCgnY29sb3I6ICcgKyBjb2xvci5jb2RlKTtcbiAgICByZXR1cm4ga2VlbnNvbGU7XG4gIH07XG4gIGtlZW5zb2xlWycnICsgY29sb3IubmFtZV0gPSBtZXRob2Q7XG59KTtcblxuLy8gQnVpbGQgVHlwb2dyYXBoeSBSZWxhdGVkIE1ldGhvZHNcbl9jb25maWdzLmNvbmZpZ3MudHlwb2dyYXBoeS5mb3JFYWNoKGZ1bmN0aW9uICh0eXBvZ3JhcGh5KSB7XG4gIC8vIEJ1aWxkIGEgbmV3IG1ldGhvZCB3aXRoIENvbG9yIE5hbWVcbiAgdmFyIG1ldGhvZCA9IGZ1bmN0aW9uIG1ldGhvZCgpIHtcbiAgICBzdHlsZS5wdXNoKCcnICsgdHlwb2dyYXBoeS5zdHlsZSk7XG4gICAgY29uc29sZS5sb2coJycgKyB0eXBvZ3JhcGh5LnN0eWxlKTtcbiAgICByZXR1cm4ga2VlbnNvbGU7XG4gIH07XG4gIGtlZW5zb2xlWycnICsgdHlwb2dyYXBoeS5uYW1lXSA9IG1ldGhvZDtcbn0pO1xuXG4vLyBGaW5hbGx5IExvZyBNZXNzYWdlIHRvIENvbnNvbGUg8J+Yilxua2VlbnNvbGUubG9nID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgY29uc29sZS5sb2coJyVjICcgKyBtZXNzYWdlLCBzdHlsZS5qb2luKCc7JykpO1xuICBzdHlsZSA9IFtdO1xufTtcblxua2VlbnNvbGUudW5kZXJsaW5lKCk7XG5cbi8vIGlmICghd2luZG93LmtlZW5zb2xlKSB7XG4vLyAgIHdpbmRvdy5rZWVuc29sZSA9IGtlZW5zb2xlO1xuLy8gfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBrZWVuc29sZTtcblxufSx7XCIuL2NvbmZpZ3MvY29uZmlnc1wiOjJ9XX0se30sWzRdKTtcbiJdLCJmaWxlIjoia2VlbnNvbGUuanMifQ==
