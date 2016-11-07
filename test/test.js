'use strict'

const chai = require('chai');
const expect = chai.expect
const should = chai.should()
const generator = require('../index')
const isEven = generator.isEven
const isOdd = generator.isOdd

describe('Function isEven(4)', function() {
    it('must return true', function() {
        expect(isEven(4)).to.be.true
    })
})

describe('Function isEven(7)', function() {
    it('must return false', function() {
        expect(isEven(7)).to.be.false
    })
})

describe(`Function isEven(' 7 ')`, function() {
    it('must return false', function() {
        expect(isEven('7')).to.be.false
    })
})

describe(`Function isEven([7])`, function() {
    it('must return false', function() {
        expect(isEven([7])).to.be.false
    })
})

describe(`Function isEven()`, function() {
    it('must return false', function() {
        expect(isEven()).to.be.false
    })
})

describe('Function isOdd(7)', function() {
    it('must return true', function() {
        expect(isOdd(7)).to.be.true
    })
})

describe('Function isOdd(8)', function() {
    it('must return false', function() {
        expect(isOdd(8)).to.be.false
    })
})

describe(`Function isOdd(' 7 ')`, function() {
    it('must return false', function() {
        expect(isOdd('7')).to.be.false
    })
})

describe(`Function isOdd([7])`, function() {
    it('must return false', function() {
        expect(isOdd([7])).to.be.false
    })
})

describe(`Function isOdd()`, function() {
    it('must return false', function() {
        expect(isOdd()).to.be.false
    })
})
