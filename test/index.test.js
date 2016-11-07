'use strict'
/*
  * chai require
*/
const chai = require('chai')
const expect = chai.expect
const assert = chai.assert
const should = chai.should()
/*
  * require file test
*/
// const Test = require('../controller/controller.index.js')

/*
  * test the function multiple
  * result must be the multiple value of params a & b
*/
describe('Testing Multiple Function', () => {
  it('it should return the multiple value of params a & b', () => {
    // assert.equal(12, Test.multiple(3, 4))
    expect(Test.multiple(3, 4)).to.equal(12)
  })
})

/*
  * test the function isArray
  * result must be the type of params
*/
describe('Testing isArray Function', () => {
  it('it should return the type of params', () => {
    expect(Test.isArray([3, 4])).be.a('object')
  })
})
