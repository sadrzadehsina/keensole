let style = [];

let keensole = {
  red() {
    style.push(`color: red`);
    return this;
  },
  green() {
    style.push(`color: green`);
    return this;
  },
  blue() {
    style.push(`color: blue`);
    return this;
  },
  bold() {
    style.push(`font-weight: bold`);
    return this;
  },
  small() {
    style.push(`font-size: 10px;`);
    return this;
  },
  medium() {
    style.push(`font-size: 14px;`);
    return this;
  },
  large() {
    style.push(`font-size: 20px;`);
    return this;
  },
  log(message) {
    console.log(`%c ` + message, style.join(`;`));
    style = [];
  }
};

if (!window.keensole) {
  window.keensole = keensole;
}

export default keensole;