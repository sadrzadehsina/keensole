import { configs } from './configs/configs';

let keensole = {},
  style = [],
  fns = [];

// Build Themes
configs.themes.forEach(function ( theme ) {
  let method = () => {
    style.push(`background-color: ${theme.backgroundColor}; color: ${theme.color}`);
    return keensole;
  };
  keensole[theme.name] = method;
});

configs.functions.forEach(function ( fn ) {
  let method = () => {
    fns.push(fn.fn);
    return keensole;
  };
  keensole[fn.name] = method;
});

// Build Color Related Methods
configs.colors.forEach(function (color) {
  // Build a new method with a color
  let method = () => {
    style.push(`color: ${color.code}`);
    return keensole;
  };
  keensole[color.name] = method;
});

// Build Typography Related Methods
configs.typography.forEach(function (typography) {
  // Build a new method with a typography
  let method = () => {
    style.push(`${typography.style}`);
    return keensole;
  };
  keensole[typography.name] = method;
});

// Finally Log Message to Console 😊
keensole.log = (message) => {
  var msg = message;
  fns.forEach(function( fn ) {
    msg = fn(msg);
  });
  console.log(`%c` + msg, style.join(`;`));
  style = [];
  fns = [];
};

if (!window.keensole) {
  window.keensole = keensole;
}

export default keensole;