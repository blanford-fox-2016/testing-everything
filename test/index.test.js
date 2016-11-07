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
const Test = require('../controller/controller.index.js')

/*
  * test the function multiple
  * result must be the multiple value of params a & b
*/
describe('Testing Multiple Function', () => {
  it('it should return the multiple value of params a & b (BOTH NUMBER)', () => {
    // assert.equal(12, Test.multiple(3, 4))
    expect(Test.multiple(3, 4)).to.equal(12)
  })

  it('it should return the multiple value of params a & b (BOTH STRING)', () => {
    expect(Test.multiple('3','4')).to.equal(12)
  })

  it('it should return the value of function multiple (BOTH EMPTY)', () => {
    assert.strictEqual(Test.multiple(), 'no params')
  })

  it('it should return the value of function multiple (ONLY 1 PARAM) ', () => {
    expect(Test.multiple(3)).to.equal('only 1 param')
  })

  it('it should return the value of function multiple (BOTH CHAR)', () => {
    expect(isNaN(Test.multiple('a', 'b'))).to.equal(true)
  })

})
