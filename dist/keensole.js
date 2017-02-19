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
}, {
  name: 'bold',
  style: 'font-weight: bold'
}, {
  name: 'italic',
  style: 'font-style: italic'
}];

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; // Import Configs


var _configs = require('./configs/configs');

// Define Variables
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

// Attach Helper Functions to keensole
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
keensole.log = function (configObject) {
  if (typeof configObject === 'string') {
    var msg = configObject;
    fns.forEach(function (fn) {
      return msg = fn(msg);
    });
    console.log('%c' + msg, style.join(';'));
  } else {
    for (var option in configObject) {
      /* eslint-disable indent */
      switch (option) {
        case 'color':
          {
            var _ret = function () {
              // Get Color Value in Config Object
              var color = configObject[option];
              // Find Color in ./configs/colors Config File
              var findColor = function findColor(colorsObject) {
                return colorsObject.name === color;
              };
              // If color exists add its style to style variable
              if (_configs.configs.colors.find(findColor)) {
                style.push('color: ' + _configs.configs.colors.find(findColor).code);
              }
              return 'break';
            }();

            if (_ret === 'break') break;
          }
        case 'typography':
          {
            (function () {
              // Get typography Value in Config Object
              var typography = configObject[option];
              // Find typography in ./configs/typography Config File
              if ((typeof typography === 'undefined' ? 'undefined' : _typeof(typography)) === 'object') {
                typography.forEach(function (option) {
                  var findTypography = function findTypography(typographyObject) {
                    return typographyObject.name === option;
                  };
                  if (_configs.configs.typography.find(findTypography)) {
                    style.push('' + _configs.configs.typography.find(findTypography).style);
                  }
                });
              } else {
                var findTypography = function findTypography(typographyObject) {
                  return typographyObject.name === typography;
                };
                if (_configs.configs.typography.find(findTypography)) {
                  style.push('' + _configs.configs.typography.find(findTypography).style);
                }
              }
            })();
          }
        case 'theme':
          {
            var _ret3 = function () {
              // Get theme Value in Config Object
              var theme = configObject[option];
              // Find Theme in ./configs/themes Config File
              var findTheme = function findTheme(themeObject) {
                return themeObject.name === theme;
              };
              // If theme exists add its style to style variable
              if (_configs.configs.themes.find(findTheme)) {
                style.push('background-color: ' + _configs.configs.themes.find(findTheme).backgroundColor + '; color: ' + _configs.configs.themes.find(findTheme).color);
              }
              return 'break';
            }();

            if (_ret3 === 'break') break;
          }
        default:
          break;
      }
      /* eslint-enable indent */
    }
    var _msg = configObject.message;
    fns.forEach(function (fn) {
      return _msg = fn(_msg);
    });
    console.log('%c' + _msg, style.join(';'));
  }
  // Clean Style and fns anyway
  style = [];
  fns = [];
};

if (!window.keensole) {
  window.keensole = keensole;
}

exports.default = keensole;

},{"./configs/configs":2}]},{},[6]);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJrZWVuc29sZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSh7MTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG4vLyBDb2xvcnMgTGlzdFxudmFyIGNvbG9ycyA9IGV4cG9ydHMuY29sb3JzID0gW3tcbiAgbmFtZTogJ3JlZCcsXG4gIGNvZGU6ICcjRUM0MDdBJ1xufSwge1xuICBuYW1lOiAnZ3JlZW4nLFxuICBjb2RlOiAnIzY2QkI2QSdcbn0sIHtcbiAgbmFtZTogJ3llbGxvdycsXG4gIGNvZGU6ICcjRkREODM1J1xufV07XG5cbn0se31dLDI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jb25maWdzID0gdW5kZWZpbmVkO1xuXG52YXIgX2NvbG9ycyA9IHJlcXVpcmUoJy4vY29sb3JzJyk7XG5cbnZhciBfdHlwb2dyYXBoeSA9IHJlcXVpcmUoJy4vdHlwb2dyYXBoeScpO1xuXG52YXIgX3RoZW1lcyA9IHJlcXVpcmUoJy4vdGhlbWVzJyk7XG5cbnZhciBfZnVuY3Rpb25zID0gcmVxdWlyZSgnLi9mdW5jdGlvbnMnKTtcblxuLy8gSW1wb3J0IE5lZWRlZCBDb25maWd1cmF0aW9uXG52YXIgY29uZmlncyA9IGV4cG9ydHMuY29uZmlncyA9IHtcbiAgY29sb3JzOiBfY29sb3JzLmNvbG9ycyxcbiAgdHlwb2dyYXBoeTogX3R5cG9ncmFwaHkudHlwb2dyYXBoeSxcbiAgdGhlbWVzOiBfdGhlbWVzLnRoZW1lcyxcbiAgZnVuY3Rpb25zOiBfZnVuY3Rpb25zLmZ1bmN0aW9uc1xufTtcblxufSx7XCIuL2NvbG9yc1wiOjEsXCIuL2Z1bmN0aW9uc1wiOjMsXCIuL3RoZW1lc1wiOjQsXCIuL3R5cG9ncmFwaHlcIjo1fV0sMzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG4vLyB0eXBvZ3JhcGh5IExpc3RcbnZhciBmdW5jdGlvbnMgPSBleHBvcnRzLmZ1bmN0aW9ucyA9IFt7XG4gIG5hbWU6ICdyZXZlcnNlJyxcbiAgZm46IGZ1bmN0aW9uIGZuKHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmcuc3BsaXQoJycpLnJldmVyc2UoKS5qb2luKCcnKTtcbiAgfVxufSwge1xuICBuYW1lOiAnbG93ZXInLFxuICBmbjogZnVuY3Rpb24gZm4oc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cmluZy50b0xvd2VyQ2FzZSgpO1xuICB9XG59LCB7XG4gIG5hbWU6ICd1cHBlcicsXG4gIGZuOiBmdW5jdGlvbiBmbihzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nLnRvVXBwZXJDYXNlKCk7XG4gIH1cbn1dO1xuXG59LHt9XSw0OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbi8vIFRoZW1lcyBMaXN0XG52YXIgdGhlbWVzID0gZXhwb3J0cy50aGVtZXMgPSBbe1xuICBuYW1lOiAnZXJyb3InLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjRUM0MDdBJyxcbiAgY29sb3I6ICcjRkZGRkZGJ1xufSwge1xuICBuYW1lOiAnc3VjY2VzcycsXG4gIGJhY2tncm91bmRDb2xvcjogJyM2NkJCNkEnLFxuICBjb2xvcjogJyNGRkZGRkYnXG59LCB7XG4gIG5hbWU6ICd3YXJuaW5nJyxcbiAgYmFja2dyb3VuZENvbG9yOiAnI0ZERDgzNScsXG4gIGNvbG9yOiAnIzIyMjIyMidcbn0sIHtcbiAgbmFtZTogJ2luZm8nLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjREREREREJyxcbiAgY29sb3I6ICcjMjIyMjIyJ1xufV07XG5cbn0se31dLDU6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuLy8gdHlwb2dyYXBoeSBMaXN0XG52YXIgdHlwb2dyYXBoeSA9IGV4cG9ydHMudHlwb2dyYXBoeSA9IFt7XG4gIG5hbWU6ICd1bmRlcmxpbmUnLFxuICBzdHlsZTogJ3RleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lJ1xufSwge1xuICBuYW1lOiAnbGluZVRocm91Z2gnLFxuICBzdHlsZTogJ3RleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoJ1xufSwge1xuICBuYW1lOiAnb3ZlcmxpbmUnLFxuICBzdHlsZTogJ3RleHQtZGVjb3JhdGlvbjogb3ZlcmxpbmUnXG59LCB7XG4gIG5hbWU6ICdzbWFsbCcsXG4gIHN0eWxlOiAnZm9udC1zaXplOiAxMHB4J1xufSwge1xuICBuYW1lOiAnbWVkaXVtJyxcbiAgc3R5bGU6ICdmb250LXNpemU6IDE0cHgnXG59LCB7XG4gIG5hbWU6ICdsYXJnZScsXG4gIHN0eWxlOiAnZm9udC1zaXplOiAxOHB4J1xufSwge1xuICBuYW1lOiAnYm9sZCcsXG4gIHN0eWxlOiAnZm9udC13ZWlnaHQ6IGJvbGQnXG59LCB7XG4gIG5hbWU6ICdpdGFsaWMnLFxuICBzdHlsZTogJ2ZvbnQtc3R5bGU6IGl0YWxpYydcbn1dO1xuXG59LHt9XSw2OltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyAvLyBJbXBvcnQgQ29uZmlnc1xuXG5cbnZhciBfY29uZmlncyA9IHJlcXVpcmUoJy4vY29uZmlncy9jb25maWdzJyk7XG5cbi8vIERlZmluZSBWYXJpYWJsZXNcbnZhciBrZWVuc29sZSA9IHt9LFxuICAgIHN0eWxlID0gW10sXG4gICAgZm5zID0gW107XG5cbi8vIEJ1aWxkIFRoZW1lc1xuX2NvbmZpZ3MuY29uZmlncy50aGVtZXMuZm9yRWFjaChmdW5jdGlvbiAodGhlbWUpIHtcbiAgdmFyIG1ldGhvZCA9IGZ1bmN0aW9uIG1ldGhvZCgpIHtcbiAgICBzdHlsZS5wdXNoKCdiYWNrZ3JvdW5kLWNvbG9yOiAnICsgdGhlbWUuYmFja2dyb3VuZENvbG9yICsgJzsgY29sb3I6ICcgKyB0aGVtZS5jb2xvcik7XG4gICAgcmV0dXJuIGtlZW5zb2xlO1xuICB9O1xuICBrZWVuc29sZVt0aGVtZS5uYW1lXSA9IG1ldGhvZDtcbn0pO1xuXG4vLyBBdHRhY2ggSGVscGVyIEZ1bmN0aW9ucyB0byBrZWVuc29sZVxuX2NvbmZpZ3MuY29uZmlncy5mdW5jdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoZm4pIHtcbiAgdmFyIG1ldGhvZCA9IGZ1bmN0aW9uIG1ldGhvZCgpIHtcbiAgICBmbnMucHVzaChmbi5mbik7XG4gICAgcmV0dXJuIGtlZW5zb2xlO1xuICB9O1xuICBrZWVuc29sZVtmbi5uYW1lXSA9IG1ldGhvZDtcbn0pO1xuXG4vLyBCdWlsZCBDb2xvciBSZWxhdGVkIE1ldGhvZHNcbl9jb25maWdzLmNvbmZpZ3MuY29sb3JzLmZvckVhY2goZnVuY3Rpb24gKGNvbG9yKSB7XG4gIC8vIEJ1aWxkIGEgbmV3IG1ldGhvZCB3aXRoIGEgY29sb3JcbiAgdmFyIG1ldGhvZCA9IGZ1bmN0aW9uIG1ldGhvZCgpIHtcbiAgICBzdHlsZS5wdXNoKCdjb2xvcjogJyArIGNvbG9yLmNvZGUpO1xuICAgIHJldHVybiBrZWVuc29sZTtcbiAgfTtcbiAga2VlbnNvbGVbY29sb3IubmFtZV0gPSBtZXRob2Q7XG59KTtcblxuLy8gQnVpbGQgVHlwb2dyYXBoeSBSZWxhdGVkIE1ldGhvZHNcbl9jb25maWdzLmNvbmZpZ3MudHlwb2dyYXBoeS5mb3JFYWNoKGZ1bmN0aW9uICh0eXBvZ3JhcGh5KSB7XG4gIC8vIEJ1aWxkIGEgbmV3IG1ldGhvZCB3aXRoIGEgdHlwb2dyYXBoeVxuICB2YXIgbWV0aG9kID0gZnVuY3Rpb24gbWV0aG9kKCkge1xuICAgIHN0eWxlLnB1c2goJycgKyB0eXBvZ3JhcGh5LnN0eWxlKTtcbiAgICByZXR1cm4ga2VlbnNvbGU7XG4gIH07XG4gIGtlZW5zb2xlW3R5cG9ncmFwaHkubmFtZV0gPSBtZXRob2Q7XG59KTtcblxuLy8gRmluYWxseSBMb2cgTWVzc2FnZSB0byBDb25zb2xlIPCfmIpcbmtlZW5zb2xlLmxvZyA9IGZ1bmN0aW9uIChjb25maWdPYmplY3QpIHtcbiAgaWYgKHR5cGVvZiBjb25maWdPYmplY3QgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIG1zZyA9IGNvbmZpZ09iamVjdDtcbiAgICBmbnMuZm9yRWFjaChmdW5jdGlvbiAoZm4pIHtcbiAgICAgIHJldHVybiBtc2cgPSBmbihtc2cpO1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKCclYycgKyBtc2csIHN0eWxlLmpvaW4oJzsnKSk7XG4gIH0gZWxzZSB7XG4gICAgZm9yICh2YXIgb3B0aW9uIGluIGNvbmZpZ09iamVjdCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgaW5kZW50ICovXG4gICAgICBzd2l0Y2ggKG9wdGlvbikge1xuICAgICAgICBjYXNlICdjb2xvcic6XG4gICAgICAgICAge1xuICAgICAgICAgICAgdmFyIF9yZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIC8vIEdldCBDb2xvciBWYWx1ZSBpbiBDb25maWcgT2JqZWN0XG4gICAgICAgICAgICAgIHZhciBjb2xvciA9IGNvbmZpZ09iamVjdFtvcHRpb25dO1xuICAgICAgICAgICAgICAvLyBGaW5kIENvbG9yIGluIC4vY29uZmlncy9jb2xvcnMgQ29uZmlnIEZpbGVcbiAgICAgICAgICAgICAgdmFyIGZpbmRDb2xvciA9IGZ1bmN0aW9uIGZpbmRDb2xvcihjb2xvcnNPYmplY3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29sb3JzT2JqZWN0Lm5hbWUgPT09IGNvbG9yO1xuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAvLyBJZiBjb2xvciBleGlzdHMgYWRkIGl0cyBzdHlsZSB0byBzdHlsZSB2YXJpYWJsZVxuICAgICAgICAgICAgICBpZiAoX2NvbmZpZ3MuY29uZmlncy5jb2xvcnMuZmluZChmaW5kQ29sb3IpKSB7XG4gICAgICAgICAgICAgICAgc3R5bGUucHVzaCgnY29sb3I6ICcgKyBfY29uZmlncy5jb25maWdzLmNvbG9ycy5maW5kKGZpbmRDb2xvcikuY29kZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuICdicmVhayc7XG4gICAgICAgICAgICB9KCk7XG5cbiAgICAgICAgICAgIGlmIChfcmV0ID09PSAnYnJlYWsnKSBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIGNhc2UgJ3R5cG9ncmFwaHknOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIC8vIEdldCB0eXBvZ3JhcGh5IFZhbHVlIGluIENvbmZpZyBPYmplY3RcbiAgICAgICAgICAgICAgdmFyIHR5cG9ncmFwaHkgPSBjb25maWdPYmplY3Rbb3B0aW9uXTtcbiAgICAgICAgICAgICAgLy8gRmluZCB0eXBvZ3JhcGh5IGluIC4vY29uZmlncy90eXBvZ3JhcGh5IENvbmZpZyBGaWxlXG4gICAgICAgICAgICAgIGlmICgodHlwZW9mIHR5cG9ncmFwaHkgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHR5cG9ncmFwaHkpKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICB0eXBvZ3JhcGh5LmZvckVhY2goZnVuY3Rpb24gKG9wdGlvbikge1xuICAgICAgICAgICAgICAgICAgdmFyIGZpbmRUeXBvZ3JhcGh5ID0gZnVuY3Rpb24gZmluZFR5cG9ncmFwaHkodHlwb2dyYXBoeU9iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHlwb2dyYXBoeU9iamVjdC5uYW1lID09PSBvcHRpb247XG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgaWYgKF9jb25maWdzLmNvbmZpZ3MudHlwb2dyYXBoeS5maW5kKGZpbmRUeXBvZ3JhcGh5KSkge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZS5wdXNoKCcnICsgX2NvbmZpZ3MuY29uZmlncy50eXBvZ3JhcGh5LmZpbmQoZmluZFR5cG9ncmFwaHkpLnN0eWxlKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgZmluZFR5cG9ncmFwaHkgPSBmdW5jdGlvbiBmaW5kVHlwb2dyYXBoeSh0eXBvZ3JhcGh5T2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdHlwb2dyYXBoeU9iamVjdC5uYW1lID09PSB0eXBvZ3JhcGh5O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaWYgKF9jb25maWdzLmNvbmZpZ3MudHlwb2dyYXBoeS5maW5kKGZpbmRUeXBvZ3JhcGh5KSkge1xuICAgICAgICAgICAgICAgICAgc3R5bGUucHVzaCgnJyArIF9jb25maWdzLmNvbmZpZ3MudHlwb2dyYXBoeS5maW5kKGZpbmRUeXBvZ3JhcGh5KS5zdHlsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgY2FzZSAndGhlbWUnOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHZhciBfcmV0MyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgLy8gR2V0IHRoZW1lIFZhbHVlIGluIENvbmZpZyBPYmplY3RcbiAgICAgICAgICAgICAgdmFyIHRoZW1lID0gY29uZmlnT2JqZWN0W29wdGlvbl07XG4gICAgICAgICAgICAgIC8vIEZpbmQgVGhlbWUgaW4gLi9jb25maWdzL3RoZW1lcyBDb25maWcgRmlsZVxuICAgICAgICAgICAgICB2YXIgZmluZFRoZW1lID0gZnVuY3Rpb24gZmluZFRoZW1lKHRoZW1lT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoZW1lT2JqZWN0Lm5hbWUgPT09IHRoZW1lO1xuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAvLyBJZiB0aGVtZSBleGlzdHMgYWRkIGl0cyBzdHlsZSB0byBzdHlsZSB2YXJpYWJsZVxuICAgICAgICAgICAgICBpZiAoX2NvbmZpZ3MuY29uZmlncy50aGVtZXMuZmluZChmaW5kVGhlbWUpKSB7XG4gICAgICAgICAgICAgICAgc3R5bGUucHVzaCgnYmFja2dyb3VuZC1jb2xvcjogJyArIF9jb25maWdzLmNvbmZpZ3MudGhlbWVzLmZpbmQoZmluZFRoZW1lKS5iYWNrZ3JvdW5kQ29sb3IgKyAnOyBjb2xvcjogJyArIF9jb25maWdzLmNvbmZpZ3MudGhlbWVzLmZpbmQoZmluZFRoZW1lKS5jb2xvcik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuICdicmVhayc7XG4gICAgICAgICAgICB9KCk7XG5cbiAgICAgICAgICAgIGlmIChfcmV0MyA9PT0gJ2JyZWFrJykgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgLyogZXNsaW50LWVuYWJsZSBpbmRlbnQgKi9cbiAgICB9XG4gICAgdmFyIF9tc2cgPSBjb25maWdPYmplY3QubWVzc2FnZTtcbiAgICBmbnMuZm9yRWFjaChmdW5jdGlvbiAoZm4pIHtcbiAgICAgIHJldHVybiBfbXNnID0gZm4oX21zZyk7XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coJyVjJyArIF9tc2csIHN0eWxlLmpvaW4oJzsnKSk7XG4gIH1cbiAgLy8gQ2xlYW4gU3R5bGUgYW5kIGZucyBhbnl3YXlcbiAgc3R5bGUgPSBbXTtcbiAgZm5zID0gW107XG59O1xuXG5pZiAoIXdpbmRvdy5rZWVuc29sZSkge1xuICB3aW5kb3cua2VlbnNvbGUgPSBrZWVuc29sZTtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0ga2VlbnNvbGU7XG5cbn0se1wiLi9jb25maWdzL2NvbmZpZ3NcIjoyfV19LHt9LFs2XSk7XG4iXSwiZmlsZSI6ImtlZW5zb2xlLmpzIn0=
