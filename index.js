'use strict'

let isEven = (value) => {
    if (value % 2 === 0) {
        return true
    } else {
        return false
    }
}

let isOdd = (value) => {
    if (value % 2 != 0) {
        return true
    } else {
        return false
    }
}

module.exports = {
    isEven: isEven,
    isOdd: isOdd
}
