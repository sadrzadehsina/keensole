(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Colors List
var colors = exports.colors = [{
  name: 'red',
  code: '#EC407A'
}, {
  name: 'green',
  code: '#66BB6A'
}, {
  name: 'yellow',
  code: '#FDD835'
}];

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configs = undefined;

var _colors = require('./colors');

var _typography = require('./typography');

var _themes = require('./themes');

var _functions = require('./functions');

// Import Needed Configuration
var configs = exports.configs = {
  colors: _colors.colors,
  typography: _typography.typography,
  themes: _themes.themes,
  functions: _functions.functions
};

},{"./colors":1,"./functions":3,"./themes":4,"./typography":5}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// typography List
var functions = exports.functions = [{
  name: 'reverse',
  fn: function fn(string) {
    return string.split('').reverse().join('');
  }
}, {
  name: 'lower',
  fn: function fn(string) {
    return string.toLowerCase();
  }
}, {
  name: 'upper',
  fn: function fn(string) {
    return string.toUpperCase();
  }
}];

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Themes List
var themes = exports.themes = [{
  name: 'error',
  backgroundColor: '#EC407A',
  color: '#FFFFFF'
}, {
  name: 'success',
  backgroundColor: '#66BB6A',
  color: '#FFFFFF'
}, {
  name: 'warning',
  backgroundColor: '#FDD835',
  color: '#222222'
}, {
  name: 'info',
  backgroundColor: '#DDDDDD',
  color: '#222222'
}];

},{}],5:[function(require,module,exports){
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
}, {
  name: 'small',
  style: 'font-size: 10px'
}, {
  name: 'medium',
  style: 'font-size: 14px'
}, {
  name: 'large',
  style: 'font-size: 18px'
}];

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _configs = require('./configs/configs');

var keensole = {},
    style = [],
    fns = [];

// Build Themes
_configs.configs.themes.forEach(function (theme) {
  var method = function method() {
    style.push('background-color: ' + theme.backgroundColor + '; color: ' + theme.color);
    return keensole;
  };
  keensole[theme.name] = method;
});

_configs.configs.functions.forEach(function (fn) {
  var method = function method() {
    fns.push(fn.fn);
    return keensole;
  };
  keensole[fn.name] = method;
});

// Build Color Related Methods
_configs.configs.colors.forEach(function (color) {
  // Build a new method with a color
  var method = function method() {
    style.push('color: ' + color.code);
    return keensole;
  };
  keensole[color.name] = method;
});

// Build Typography Related Methods
_configs.configs.typography.forEach(function (typography) {
  // Build a new method with a typography
  var method = function method() {
    style.push('' + typography.style);
    return keensole;
  };
  keensole[typography.name] = method;
});

// Finally Log Message to Console 😊
keensole.log = function (message) {
  var msg = message;
  fns.forEach(function (fn) {
    msg = fn(msg);
  });
  console.log('%c' + msg, style.join(';'));
  style = [];
  fns = [];
};

if (!window.keensole) {
  window.keensole = keensole;
}

exports.default = keensole;

},{"./configs/configs":2}]},{},[6]);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJrZWVuc29sZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSh7MTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG4vLyBDb2xvcnMgTGlzdFxudmFyIGNvbG9ycyA9IGV4cG9ydHMuY29sb3JzID0gW3tcbiAgbmFtZTogJ3JlZCcsXG4gIGNvZGU6ICcjRUM0MDdBJ1xufSwge1xuICBuYW1lOiAnZ3JlZW4nLFxuICBjb2RlOiAnIzY2QkI2QSdcbn0sIHtcbiAgbmFtZTogJ3llbGxvdycsXG4gIGNvZGU6ICcjRkREODM1J1xufV07XG5cbn0se31dLDI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jb25maWdzID0gdW5kZWZpbmVkO1xuXG52YXIgX2NvbG9ycyA9IHJlcXVpcmUoJy4vY29sb3JzJyk7XG5cbnZhciBfdHlwb2dyYXBoeSA9IHJlcXVpcmUoJy4vdHlwb2dyYXBoeScpO1xuXG52YXIgX3RoZW1lcyA9IHJlcXVpcmUoJy4vdGhlbWVzJyk7XG5cbnZhciBfZnVuY3Rpb25zID0gcmVxdWlyZSgnLi9mdW5jdGlvbnMnKTtcblxuLy8gSW1wb3J0IE5lZWRlZCBDb25maWd1cmF0aW9uXG52YXIgY29uZmlncyA9IGV4cG9ydHMuY29uZmlncyA9IHtcbiAgY29sb3JzOiBfY29sb3JzLmNvbG9ycyxcbiAgdHlwb2dyYXBoeTogX3R5cG9ncmFwaHkudHlwb2dyYXBoeSxcbiAgdGhlbWVzOiBfdGhlbWVzLnRoZW1lcyxcbiAgZnVuY3Rpb25zOiBfZnVuY3Rpb25zLmZ1bmN0aW9uc1xufTtcblxufSx7XCIuL2NvbG9yc1wiOjEsXCIuL2Z1bmN0aW9uc1wiOjMsXCIuL3RoZW1lc1wiOjQsXCIuL3R5cG9ncmFwaHlcIjo1fV0sMzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG4vLyB0eXBvZ3JhcGh5IExpc3RcbnZhciBmdW5jdGlvbnMgPSBleHBvcnRzLmZ1bmN0aW9ucyA9IFt7XG4gIG5hbWU6ICdyZXZlcnNlJyxcbiAgZm46IGZ1bmN0aW9uIGZuKHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmcuc3BsaXQoJycpLnJldmVyc2UoKS5qb2luKCcnKTtcbiAgfVxufSwge1xuICBuYW1lOiAnbG93ZXInLFxuICBmbjogZnVuY3Rpb24gZm4oc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cmluZy50b0xvd2VyQ2FzZSgpO1xuICB9XG59LCB7XG4gIG5hbWU6ICd1cHBlcicsXG4gIGZuOiBmdW5jdGlvbiBmbihzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nLnRvVXBwZXJDYXNlKCk7XG4gIH1cbn1dO1xuXG59LHt9XSw0OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbi8vIFRoZW1lcyBMaXN0XG52YXIgdGhlbWVzID0gZXhwb3J0cy50aGVtZXMgPSBbe1xuICBuYW1lOiAnZXJyb3InLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjRUM0MDdBJyxcbiAgY29sb3I6ICcjRkZGRkZGJ1xufSwge1xuICBuYW1lOiAnc3VjY2VzcycsXG4gIGJhY2tncm91bmRDb2xvcjogJyM2NkJCNkEnLFxuICBjb2xvcjogJyNGRkZGRkYnXG59LCB7XG4gIG5hbWU6ICd3YXJuaW5nJyxcbiAgYmFja2dyb3VuZENvbG9yOiAnI0ZERDgzNScsXG4gIGNvbG9yOiAnIzIyMjIyMidcbn0sIHtcbiAgbmFtZTogJ2luZm8nLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjREREREREJyxcbiAgY29sb3I6ICcjMjIyMjIyJ1xufV07XG5cbn0se31dLDU6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuLy8gdHlwb2dyYXBoeSBMaXN0XG52YXIgdHlwb2dyYXBoeSA9IGV4cG9ydHMudHlwb2dyYXBoeSA9IFt7XG4gIG5hbWU6ICd1bmRlcmxpbmUnLFxuICBzdHlsZTogJ3RleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lJ1xufSwge1xuICBuYW1lOiAnbGluZVRocm91Z2gnLFxuICBzdHlsZTogJ3RleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoJ1xufSwge1xuICBuYW1lOiAnb3ZlcmxpbmUnLFxuICBzdHlsZTogJ3RleHQtZGVjb3JhdGlvbjogb3ZlcmxpbmUnXG59LCB7XG4gIG5hbWU6ICdzbWFsbCcsXG4gIHN0eWxlOiAnZm9udC1zaXplOiAxMHB4J1xufSwge1xuICBuYW1lOiAnbWVkaXVtJyxcbiAgc3R5bGU6ICdmb250LXNpemU6IDE0cHgnXG59LCB7XG4gIG5hbWU6ICdsYXJnZScsXG4gIHN0eWxlOiAnZm9udC1zaXplOiAxOHB4J1xufV07XG5cbn0se31dLDY6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NvbmZpZ3MgPSByZXF1aXJlKCcuL2NvbmZpZ3MvY29uZmlncycpO1xuXG52YXIga2VlbnNvbGUgPSB7fSxcbiAgICBzdHlsZSA9IFtdLFxuICAgIGZucyA9IFtdO1xuXG4vLyBCdWlsZCBUaGVtZXNcbl9jb25maWdzLmNvbmZpZ3MudGhlbWVzLmZvckVhY2goZnVuY3Rpb24gKHRoZW1lKSB7XG4gIHZhciBtZXRob2QgPSBmdW5jdGlvbiBtZXRob2QoKSB7XG4gICAgc3R5bGUucHVzaCgnYmFja2dyb3VuZC1jb2xvcjogJyArIHRoZW1lLmJhY2tncm91bmRDb2xvciArICc7IGNvbG9yOiAnICsgdGhlbWUuY29sb3IpO1xuICAgIHJldHVybiBrZWVuc29sZTtcbiAgfTtcbiAga2VlbnNvbGVbdGhlbWUubmFtZV0gPSBtZXRob2Q7XG59KTtcblxuX2NvbmZpZ3MuY29uZmlncy5mdW5jdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoZm4pIHtcbiAgdmFyIG1ldGhvZCA9IGZ1bmN0aW9uIG1ldGhvZCgpIHtcbiAgICBmbnMucHVzaChmbi5mbik7XG4gICAgcmV0dXJuIGtlZW5zb2xlO1xuICB9O1xuICBrZWVuc29sZVtmbi5uYW1lXSA9IG1ldGhvZDtcbn0pO1xuXG4vLyBCdWlsZCBDb2xvciBSZWxhdGVkIE1ldGhvZHNcbl9jb25maWdzLmNvbmZpZ3MuY29sb3JzLmZvckVhY2goZnVuY3Rpb24gKGNvbG9yKSB7XG4gIC8vIEJ1aWxkIGEgbmV3IG1ldGhvZCB3aXRoIGEgY29sb3JcbiAgdmFyIG1ldGhvZCA9IGZ1bmN0aW9uIG1ldGhvZCgpIHtcbiAgICBzdHlsZS5wdXNoKCdjb2xvcjogJyArIGNvbG9yLmNvZGUpO1xuICAgIHJldHVybiBrZWVuc29sZTtcbiAgfTtcbiAga2VlbnNvbGVbY29sb3IubmFtZV0gPSBtZXRob2Q7XG59KTtcblxuLy8gQnVpbGQgVHlwb2dyYXBoeSBSZWxhdGVkIE1ldGhvZHNcbl9jb25maWdzLmNvbmZpZ3MudHlwb2dyYXBoeS5mb3JFYWNoKGZ1bmN0aW9uICh0eXBvZ3JhcGh5KSB7XG4gIC8vIEJ1aWxkIGEgbmV3IG1ldGhvZCB3aXRoIGEgdHlwb2dyYXBoeVxuICB2YXIgbWV0aG9kID0gZnVuY3Rpb24gbWV0aG9kKCkge1xuICAgIHN0eWxlLnB1c2goJycgKyB0eXBvZ3JhcGh5LnN0eWxlKTtcbiAgICByZXR1cm4ga2VlbnNvbGU7XG4gIH07XG4gIGtlZW5zb2xlW3R5cG9ncmFwaHkubmFtZV0gPSBtZXRob2Q7XG59KTtcblxuLy8gRmluYWxseSBMb2cgTWVzc2FnZSB0byBDb25zb2xlIPCfmIpcbmtlZW5zb2xlLmxvZyA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gIHZhciBtc2cgPSBtZXNzYWdlO1xuICBmbnMuZm9yRWFjaChmdW5jdGlvbiAoZm4pIHtcbiAgICBtc2cgPSBmbihtc2cpO1xuICB9KTtcbiAgY29uc29sZS5sb2coJyVjJyArIG1zZywgc3R5bGUuam9pbignOycpKTtcbiAgc3R5bGUgPSBbXTtcbiAgZm5zID0gW107XG59O1xuXG5pZiAoIXdpbmRvdy5rZWVuc29sZSkge1xuICB3aW5kb3cua2VlbnNvbGUgPSBrZWVuc29sZTtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0ga2VlbnNvbGU7XG5cbn0se1wiLi9jb25maWdzL2NvbmZpZ3NcIjoyfV19LHt9LFs2XSk7XG4iXSwiZmlsZSI6ImtlZW5zb2xlLmpzIn0=
