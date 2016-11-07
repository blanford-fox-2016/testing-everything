const mocha = require('mocha')
const expect = require('chai').expect
const controller = require('../controller/index')

describe("Test if input string empty or not", function () {
    it("Return true if input string is empty", function () {
        expect(controller.isEmpty("")).to.be.true
        expect(controller.isEmpty("adsa")).to.be.false
        expect(controller.isEmpty("2131")).to.be.false
    })
})

describe("Test if input more than four char", function () {
    it("Return true if input string is more than four", function () {
        expect(controller.moreThanFour("abcde")).to.be.true
        expect(controller.moreThanFour("abcd")).to.be.false
        expect(controller.moreThanFour("")).to.be.false
    })
})

describe("Test is input only contains number", function () {
    it("Return true if input string is only contains number", function () {
        expect(controller.onlyNumber("123")).to.be.true
        expect(controller.onlyNumber("123abc")).to.be.false
    })
})

describe("Test is input like email format", function () {
    it("Return true if input like email format", function () {
        expect(controller.isEmail("")).to.be.false
        expect(controller.isEmail("123")).to.be.false
        expect(controller.isEmail("abc")).to.be.false
        expect(controller.isEmail("dharmadi@")).to.be.false
        expect(controller.isEmail("dharmadi@gmail")).to.be.false
        expect(controller.isEmail("dharmadi@gmailcom")).to.be.false
        expect(controller.isEmail("dharmadi93@gmail.com")).to.be.true
    })
})

describe("Test is input contains one symbol, capital letter, and number", function () {
    it("Return true if input contains one symbol, capital letter, and number", function () {
        expect(controller.hardPassword("@Abcde1")).to.be.true
    })
})