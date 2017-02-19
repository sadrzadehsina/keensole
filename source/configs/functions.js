// typography List
export const functions = [
  {
    name: 'reverse',
    fn: ( string ) => {
      return string.split('').reverse().join('');
    }
  },
  {
    name: 'lower',
    fn: ( string ) => {
      return string.toLowerCase();
    }
  },
  {
    name: 'upper',
    fn: ( string ) => {
      return string.toUpperCase();
    }
  }
];