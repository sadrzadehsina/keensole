// typography List
export const functions = [
  {
    name: 'reverse',
    fn: function( string ) {
      return string.split('').reverse().join('');
    }
  },
  {
    name: 'lower',
    fn: function( string ) {
      return string.toLowerCase();
    }
  },
  {
    name: 'upper',
    fn: function( string ) {
      return string.toUpperCase();
    }
  }
];