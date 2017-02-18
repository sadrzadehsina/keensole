import { configs } from './configs/configs';

let keensole = [],
  style = [];

// Build Color Related Methods
configs.colors.forEach(function (color) {
  // Build a new method with Color Name
  let method = () => {
    style.push(`color: ${color.code}`);
    return this;
  };
  keensole[`${color.name}`] = method;
});

// Build Typography Related Methods
configs.typography.forEach(function (typography) {
  // Build a new method with Color Name
  let method = () => {
    style.push(`${typography.style}`);
    console.log(`${typography.style}`);
    return this;
  };
  keensole[`${typography.name}`] = method;
});

// Finally Log Message to Console 😊
keensole.log = (message) => {
  console.log(`%c ` + message, style.join(`;`));
  style = [];
};

keensole.underline();

if (!window.keensole) {
  window.keensole = keensole;
}

export default keensole;