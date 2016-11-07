'use strict'

var chai = require('chai'),
    expect = chai.expect


chai.should()

var App = require('./index.js')

describe("test description", () => {
    it("should return true if number is odd", () => {
        App.isOdd(5).should.be.isTrue
    })
    it("should return false if number is even", () => {
        expect(App.isOdd(4)).to.be.false
    })
    it("should return false if number is zero", () => {
        App.isOdd(0).should.be.false
    })
    it("should return false if not a number", () => {
        App.isOdd("A").should.be.false
    })
})