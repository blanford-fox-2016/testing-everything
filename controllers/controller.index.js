'use strict'

  let subtraction = (x, y) => {
    if(typeof x === 'undefined' && typeof y === 'undefined'){
      // variables x & y are not exist
      return 'no parameter assigned on both variables'
    }else if(x && !y || y && !x){
      // only 1 variable exist
      return 'only 1 variable'
    }else{
      return x - y
    }
  }

  module.exports = {
    subtraction: subtraction
  }
