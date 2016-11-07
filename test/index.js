const mocha = require('mocha')
const expect = mocha.expect
const controller = require('../controller/index')

describe("Test if input string empty or not", function () {
    it("Return true if input string is empty", function () {
        expect(controller.isEmpty().to.be.true)
    })
})

describe("Test if input more than four char", function () {
    it("Return true if input string is more than four", function () {
        expect(controller.moreThanFour("abcde").to.be.true)
    })
})

describe("Test is input only contains number", function () {
    it("Return true if input string is only contains number", function () {
        expect(controller.onlyNumber("123").to.be.true)
    })
})

describe("Test is input like email format", function () {
    it("Return true if input like email format", function () {
        expect(controller.isEmail("dharmadi93@gmail.com").to.be.true)
    })
})

describe("Test is input contains one symbol, capital letter, and number", function () {
    it("Return true if input contains one symbol, capital letter, and number", function () {
        expect(controller.hardPassword("@Abcde1").to.be.true)
    })
})