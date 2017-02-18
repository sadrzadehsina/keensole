import { configs } from './configs/configs';

let keensole = {},
  style = [];

// Build Themes
configs.themes.forEach(function ( theme ) {
  let method = () => {
    style.push(`background-color: ${theme.backgroundColor}; color: ${theme.color}`);
    return keensole;
  };
  keensole[`${theme.name}`] = method;
});

// Build Color Related Methods
configs.colors.forEach(function (color) {
  // Build a new method with a color
  let method = () => {
    style.push(`color: ${color.code}`);
    return keensole;
  };
  keensole[`${color.name}`] = method;
});

// Build Typography Related Methods
configs.typography.forEach(function (typography) {
  // Build a new method with a typography
  let method = () => {
    style.push(`${typography.style}`);
    return keensole;
  };
  keensole[`${typography.name}`] = method;
});

// Finally Log Message to Console 😊
keensole.log = (message) => {
  console.log(`%c` + message, style.join(`;`));
  style = [];
};

if (!window.keensole) {
  window.keensole = keensole;
}

export default keensole;