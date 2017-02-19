// Import Configs
import {
  configs
} from './configs/configs';

// Define Variables
let keensole = {},
  style = [],
  fns = [];

// Build Themes
configs.themes.forEach((theme) => {
  let method = () => {
    style.push(`background-color: ${theme.backgroundColor}; color: ${theme.color}`);
    return keensole;
  };
  keensole[theme.name] = method;
});

// Attach Helper Functions to keensole
configs.functions.forEach((fn) => {
  let method = () => {
    fns.push(fn.fn);
    return keensole;
  };
  keensole[fn.name] = method;
});

// Build Color Related Methods
configs.colors.forEach((color) => {
  // Build a new method with a color
  let method = () => {
    style.push(`color: ${color.code}`);
    return keensole;
  };
  keensole[color.name] = method;
});

// Build Typography Related Methods
configs.typography.forEach((typography) => {
  // Build a new method with a typography
  let method = () => {
    style.push(`${typography.style}`);
    return keensole;
  };
  keensole[typography.name] = method;
});

// Finally Log Message to Console 😊
keensole.log = (configObject) => {
  if (typeof configObject === 'string') {
    let msg = configObject;
    fns.forEach((fn) => msg = fn(msg));
    console.log(`%c` + msg, style.join(`;`));
  } else {
    for (let option in configObject) {
      /* eslint-disable indent */
      switch (option) {
        case 'color':
          {
            // Get Color Value in Config Object
            let color = configObject[option];
            // Find Color in ./configs/colors Config File
            let findColor = (colorsObject) => colorsObject.name === color;
            // If color exists add its style to style variable
            if (configs.colors.find(findColor)) {
              style.push(`color: ${configs.colors.find(findColor).code}`);
            }
            break;
          }
        case 'typography':
          {
            // Get typography Value in Config Object
            let typography = configObject[option];
            // Find typography in ./configs/typography Config File
            if (typeof typography === 'object') {
              typography.forEach((option) => {
                let findTypography = (typographyObject) => typographyObject.name === option;
                if (configs.typography.find(findTypography)) {
                  style.push(`${configs.typography.find(findTypography).style}`);
                }
              });
            } else {
              let findTypography = (typographyObject) => typographyObject.name === typography;
              if (configs.typography.find(findTypography)) {
                style.push(`${configs.typography.find(findTypography).style}`);
              }
            }
          }
        case 'theme':
          {
            // Get theme Value in Config Object
            let theme = configObject[option];
            // Find Theme in ./configs/themes Config File
            let findTheme = (themeObject) => themeObject.name === theme;
            // If theme exists add its style to style variable
            if (configs.themes.find(findTheme)) {
              style.push(`background-color: ${configs.themes.find(findTheme).backgroundColor}; color: ${configs.themes.find(findTheme).color}`);
            }
            break;
          }
        default:
          break;
      }
      /* eslint-enable indent */
    }
    let msg = configObject.message;
    fns.forEach((fn) => msg = fn(msg));
    console.log(`%c` + msg, style.join(`;`));
  }
  // Clean Style and fns anyway
  style = [];
  fns = [];
};

if (!window.keensole) {
  window.keensole = keensole;
}

export default keensole;