'use strict'

let isEven = (number) => {
  return (number%2 === 0) ? true:false
}

let isOdd = (number) => {
  return (number%2 === 1) ? true:false
}


let calculate = (number1) => (number2) =>  {
    return number1+number2
}

module.exports = {
  isEven:isEven,
  isOdd:isOdd,
  calculate:calculate
}
