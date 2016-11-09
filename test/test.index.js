'use strict'
/*
  * chai require
*/
const chai = require('chai')
const expect = chai.expect
const assert = chai.assert
const should = chai.should()

/*
  * require file testing
*/
const testing = require('../controllers/controller.index.js')

/*
  * testing the function subtraction
  * result must be the subtraction value of params x & y
*/
describe('Testing subtraction Function', () => {
  var number_x, number_y,
      char_x, char_y,
      char_no_number_x,
      char_no_number_y

  /*
    * assign variable before every testing
  */
  beforeEach(function() {
    console.log('please, assign variable before every testing!')
    number_x = 8
    number_y = 6
    char_x = '8'
    char_y = '6'
    char_no_number_x = 'x'
    char_no_number_y = 'y'
  });

  it('it should return the subtraction value of variables x & y --> (case : Both variables is number)', () => {
    expect(testing.subtraction(number_x, number_y)).to.equal(2)
  })

  it('it should return the subtraction value of variables x & y --> (case : Both variables is char)', () => {
    expect(testing.subtraction(char_x, char_y)).to.equal(2)
  })

  it('it should return the value of subtraction function --> (case : Both variables is empty)', () => {
    assert.strictEqual(testing.subtraction(), 'no parameter assigned on both variables')
  })

  it('it should return the value of subtraction function --> (case : Only 1 variable exist (number)) ', () => {
    expect(testing.subtraction(number_x)).to.equal('only 1 variable')
  })

  it('it should return the value of subtraction function --> (case : Only 1 variable exist (char)) ', () => {
    expect(testing.subtraction(char_x)).to.equal('only 1 variable')
  })

  it('it should return the value of subtraction function --> (case : Only 1 variable exist (char_no_number_a)) ', () => {
    expect(testing.subtraction(char_no_number_x)).to.equal('only 1 variable')
  })

  it('it should check if the return is NaN or number --> (case : Both variables is char : x & y)', () => {
    expect(isNaN(testing.subtraction(char_no_number_x, char_no_number_y))).to.equal(true)
  })

  it('it should check if the return is NaN or number --> (case : 1 Number, 1 Char)', () => {
    expect(isNaN(testing.subtraction(number_x, char_y))).to.equal(false)
  })

})
