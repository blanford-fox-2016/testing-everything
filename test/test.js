'use strict'

const chai = require('chai');
const expect = chai.expect
const should = chai.should()
const generator = require('../index')
const isEven = generator.isEven
const isOdd = generator.isOdd

describe('Function isEven(4)', () => {
    it('must return true', () => {
        expect(isEven(4)).to.be.true
    })
})

describe('Function isEven(7)', () => {
    it('must return true', () => {
        expect(isEven(7)).to.be.false
    })
})

describe('Function isOdd(7)', () => {
    it('must return true', () => {
        expect(isOdd(7)).to.be.true
    })
})

describe('Function isOdd(8)', () => {
    it('must return true', () => {
        expect(isOdd(8)).to.be.false
    })
})
