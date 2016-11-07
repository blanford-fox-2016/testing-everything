'use strict'

const chai = require('chai');
const expect = chai.expect
const should = chai.should()

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
