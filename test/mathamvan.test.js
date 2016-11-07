'use strict'

const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const mathamvan = require('../mathamvan');

const add = mathamvan.add;

describe('add', () => {
  it('should sum first parameter and second parameter', () => {
    expect(add(1,2)).eql(3);
  })
})
describe('power', () => {
  it('should return values first param power second param', () => {
    expect(power(2, 4).eql(16));
  })
})
describe('sqrt', () => {
  it('should return the square root of the parameter', () => {
    expect(sqrt(16).eql(4));
  })
})
describe('sum', () => {
  it('should sum all values in an array', () => {
    expect(sum([1,2,3,4,5])).eql(15);
  })
})
describe('avg', ()=>{
  it('should return the avarage of all values in an array', () => {
    expect(avg([1,2,3,4,5])).eql(3);
  })
})
