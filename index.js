module.exports = {
        isOdd: function(n) {
            var status = false
            if (isNaN(n)) {
                return status
            } else if (n % 2 !== 0) {
                status = true
            } else if (n % 2 === 0) {
                return status
            }
            return status
        }
    }
    // console.log(isOdd("A"))
    // console.log(isOdd(5))