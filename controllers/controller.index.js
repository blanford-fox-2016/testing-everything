'use strict'

module.exports = {

  let multiplication = (a, b) => {

    if(typeof a === 'undefined' && typeof b === 'undefined'){
      // parameter a & b are not exist
      return 'no parameter assigned on both base (params)'
    }else if(a && !b || b && !a){
      // only 1 params exist
      return 'only 1 param'
    }else{
      return a * b
    }
  }

}
