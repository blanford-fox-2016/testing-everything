module.exports = {
    isEmpty: function (input) {
        if (input.length == 0) return true
        else return false
    },

    moreThanFour: function (input) {
        string = input.split("")
        if (input.length > 4) return true
        else return false
    },

    onlyNumber: function (input) {
        if (isNaN(input) == false) return true
        else return false
    }
}