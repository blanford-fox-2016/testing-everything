'use strict'

const mocha = require('mocha');
let chai = require('chai');
let assert = chai.assert;
let expect = chai.expect;
const test = require('./index');


//===============
// testing ======
//===============

describe('#isEven()',()  => {
  it('it should return true if input even number',() => {
    assert.equal(true,test.isEven(2));
  })
})

describe('#isOdd()',() => {
  it('it should return true if input odd number',() => {
    assert.equal(true,test.isOdd(3))
  })
})

//===============
// curry test ===
//===============
expect(test.calculate(2)(6)).to.equal(8);
expect(test.calculate(2)(2)).to.equal(4);
expect(test.calculate(2)(6)).to.equal(8);
expect(test.calculate(10)(2)).to.not.equal(10);
