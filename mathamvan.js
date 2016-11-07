'use strict'

let add = (a, b) => {
  if (a === undefined || b === undefined) {
    return 'It needs two parameters';
  } else if (isNaN(a) === true || isNaN(b) === true) {
    return 'Parameters are not valid, both must be a number';
  } else{
    return a + b;
  }
}

module.exports = {
  add: add
}
