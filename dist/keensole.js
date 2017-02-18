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

var configs = exports.configs = {
  colors: _colors.colors,
  typography: _typography.typography,
  themes: _themes.themes
}; // Import Needed Configuration

},{"./colors":1,"./themes":3,"./typography":4}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _configs = require('./configs/configs');

var keensole = {},
    style = [];

// Build Themes
_configs.configs.themes.forEach(function (theme) {
  var method = function method() {
    style.push('background-color: ' + theme.backgroundColor + '; color: ' + theme.color);
    return keensole;
  };
  keensole['' + theme.name] = method;
});

// Build Color Related Methods
_configs.configs.colors.forEach(function (color) {
  // Build a new method with a color
  var method = function method() {
    style.push('color: ' + color.code);
    return keensole;
  };
  keensole['' + color.name] = method;
});

// Build Typography Related Methods
_configs.configs.typography.forEach(function (typography) {
  // Build a new method with a typography
  var method = function method() {
    style.push('' + typography.style);
    return keensole;
  };
  keensole['' + typography.name] = method;
});

// Finally Log Message to Console 😊
keensole.log = function (message) {
  console.log('%c' + message, style.join(';'));
  style = [];
};

if (!window.keensole) {
  window.keensole = keensole;
}

exports.default = keensole;

},{"./configs/configs":2}]},{},[5]);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJrZWVuc29sZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSh7MTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG4vLyBDb2xvcnMgTGlzdFxudmFyIGNvbG9ycyA9IGV4cG9ydHMuY29sb3JzID0gW3tcbiAgbmFtZTogJ3JlZCcsXG4gIGNvZGU6ICcjRUM0MDdBJ1xufSwge1xuICBuYW1lOiAnZ3JlZW4nLFxuICBjb2RlOiAnIzY2QkI2QSdcbn0sIHtcbiAgbmFtZTogJ3llbGxvdycsXG4gIGNvZGU6ICcjRkREODM1J1xufV07XG5cbn0se31dLDI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jb25maWdzID0gdW5kZWZpbmVkO1xuXG52YXIgX2NvbG9ycyA9IHJlcXVpcmUoJy4vY29sb3JzJyk7XG5cbnZhciBfdHlwb2dyYXBoeSA9IHJlcXVpcmUoJy4vdHlwb2dyYXBoeScpO1xuXG52YXIgX3RoZW1lcyA9IHJlcXVpcmUoJy4vdGhlbWVzJyk7XG5cbnZhciBjb25maWdzID0gZXhwb3J0cy5jb25maWdzID0ge1xuICBjb2xvcnM6IF9jb2xvcnMuY29sb3JzLFxuICB0eXBvZ3JhcGh5OiBfdHlwb2dyYXBoeS50eXBvZ3JhcGh5LFxuICB0aGVtZXM6IF90aGVtZXMudGhlbWVzXG59OyAvLyBJbXBvcnQgTmVlZGVkIENvbmZpZ3VyYXRpb25cblxufSx7XCIuL2NvbG9yc1wiOjEsXCIuL3RoZW1lc1wiOjMsXCIuL3R5cG9ncmFwaHlcIjo0fV0sMzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG4vLyBUaGVtZXMgTGlzdFxudmFyIHRoZW1lcyA9IGV4cG9ydHMudGhlbWVzID0gW3tcbiAgbmFtZTogJ2Vycm9yJyxcbiAgYmFja2dyb3VuZENvbG9yOiAnI0VDNDA3QScsXG4gIGNvbG9yOiAnI0ZGRkZGRidcbn0sIHtcbiAgbmFtZTogJ3N1Y2Nlc3MnLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjNjZCQjZBJyxcbiAgY29sb3I6ICcjRkZGRkZGJ1xufSwge1xuICBuYW1lOiAnd2FybmluZycsXG4gIGJhY2tncm91bmRDb2xvcjogJyNGREQ4MzUnLFxuICBjb2xvcjogJyMyMjIyMjInXG59LCB7XG4gIG5hbWU6ICdpbmZvJyxcbiAgYmFja2dyb3VuZENvbG9yOiAnI0RERERERCcsXG4gIGNvbG9yOiAnIzIyMjIyMidcbn1dO1xuXG59LHt9XSw0OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbi8vIHR5cG9ncmFwaHkgTGlzdFxudmFyIHR5cG9ncmFwaHkgPSBleHBvcnRzLnR5cG9ncmFwaHkgPSBbe1xuICBuYW1lOiAndW5kZXJsaW5lJyxcbiAgc3R5bGU6ICd0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSdcbn0sIHtcbiAgbmFtZTogJ2xpbmVUaHJvdWdoJyxcbiAgc3R5bGU6ICd0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaCdcbn0sIHtcbiAgbmFtZTogJ292ZXJsaW5lJyxcbiAgc3R5bGU6ICd0ZXh0LWRlY29yYXRpb246IG92ZXJsaW5lJ1xufV07XG5cbn0se31dLDU6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NvbmZpZ3MgPSByZXF1aXJlKCcuL2NvbmZpZ3MvY29uZmlncycpO1xuXG52YXIga2VlbnNvbGUgPSB7fSxcbiAgICBzdHlsZSA9IFtdO1xuXG4vLyBCdWlsZCBUaGVtZXNcbl9jb25maWdzLmNvbmZpZ3MudGhlbWVzLmZvckVhY2goZnVuY3Rpb24gKHRoZW1lKSB7XG4gIHZhciBtZXRob2QgPSBmdW5jdGlvbiBtZXRob2QoKSB7XG4gICAgc3R5bGUucHVzaCgnYmFja2dyb3VuZC1jb2xvcjogJyArIHRoZW1lLmJhY2tncm91bmRDb2xvciArICc7IGNvbG9yOiAnICsgdGhlbWUuY29sb3IpO1xuICAgIHJldHVybiBrZWVuc29sZTtcbiAgfTtcbiAga2VlbnNvbGVbJycgKyB0aGVtZS5uYW1lXSA9IG1ldGhvZDtcbn0pO1xuXG4vLyBCdWlsZCBDb2xvciBSZWxhdGVkIE1ldGhvZHNcbl9jb25maWdzLmNvbmZpZ3MuY29sb3JzLmZvckVhY2goZnVuY3Rpb24gKGNvbG9yKSB7XG4gIC8vIEJ1aWxkIGEgbmV3IG1ldGhvZCB3aXRoIGEgY29sb3JcbiAgdmFyIG1ldGhvZCA9IGZ1bmN0aW9uIG1ldGhvZCgpIHtcbiAgICBzdHlsZS5wdXNoKCdjb2xvcjogJyArIGNvbG9yLmNvZGUpO1xuICAgIHJldHVybiBrZWVuc29sZTtcbiAgfTtcbiAga2VlbnNvbGVbJycgKyBjb2xvci5uYW1lXSA9IG1ldGhvZDtcbn0pO1xuXG4vLyBCdWlsZCBUeXBvZ3JhcGh5IFJlbGF0ZWQgTWV0aG9kc1xuX2NvbmZpZ3MuY29uZmlncy50eXBvZ3JhcGh5LmZvckVhY2goZnVuY3Rpb24gKHR5cG9ncmFwaHkpIHtcbiAgLy8gQnVpbGQgYSBuZXcgbWV0aG9kIHdpdGggYSB0eXBvZ3JhcGh5XG4gIHZhciBtZXRob2QgPSBmdW5jdGlvbiBtZXRob2QoKSB7XG4gICAgc3R5bGUucHVzaCgnJyArIHR5cG9ncmFwaHkuc3R5bGUpO1xuICAgIHJldHVybiBrZWVuc29sZTtcbiAgfTtcbiAga2VlbnNvbGVbJycgKyB0eXBvZ3JhcGh5Lm5hbWVdID0gbWV0aG9kO1xufSk7XG5cbi8vIEZpbmFsbHkgTG9nIE1lc3NhZ2UgdG8gQ29uc29sZSDwn5iKXG5rZWVuc29sZS5sb2cgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xuICBjb25zb2xlLmxvZygnJWMnICsgbWVzc2FnZSwgc3R5bGUuam9pbignOycpKTtcbiAgc3R5bGUgPSBbXTtcbn07XG5cbmlmICghd2luZG93LmtlZW5zb2xlKSB7XG4gIHdpbmRvdy5rZWVuc29sZSA9IGtlZW5zb2xlO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBrZWVuc29sZTtcblxufSx7XCIuL2NvbmZpZ3MvY29uZmlnc1wiOjJ9XX0se30sWzVdKTtcbiJdLCJmaWxlIjoia2VlbnNvbGUuanMifQ==
