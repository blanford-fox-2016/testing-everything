'use strict'

const chai = require('chai');
const expect = chai.expect
const should = chai.should()
const generator = require('../index')
const isEven = generator.isEven
const isOdd = generator.isOdd

describe('Function isEven', function() {
    it('isEven(4) must return true', function() {
        expect(isEven(4)).to.be.true
    })

    it('isEven(7) must return false', function() {
        expect(isEven(7)).to.be.false
    })

    it(`isEven('7') must return false`, function() {
        expect(isEven('7')).to.be.false
    })

    it('isEven([7]) must return false', function() {
        expect(isEven([7])).to.be.false
    })

    it('isEven() must return false', function() {
        expect(isEven()).to.be.false
    })
})

describe('Function isOdd', function() {
    it('isOdd(7) must return true', function() {
        expect(isOdd(7)).to.be.true
    })

    it('isOdd(8) must return false', function() {
        expect(isOdd(8)).to.be.false
    })

    it(`isOdd('7') must return false`, function() {
        expect(isOdd('7')).to.be.false
    })

    it('isOdd([7]) must return false', function() {
        expect(isOdd([7])).to.be.false
    })

    it('isOdd() must return false', function() {
        expect(isOdd()).to.be.false
    })
})
