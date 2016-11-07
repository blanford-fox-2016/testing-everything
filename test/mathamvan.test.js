'use strict'

const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const mathamvan = require('../mathamvan');

const add = mathamvan.add;

describe('add', () => {
  it('should sum first parameter and second parameter', () => {
    expect(add(1,2)).eql(3);
  });
  it('should give message that add function need 2 number as parameters', () => {
    expect(add('a', 1)).eql('Parameters are not valid, both must be a number');
  });
  it('should give message that the function need 2 parameters', () => {
    expect(add()).eql('It needs two parameters');
  });
  it('should give message that the function need 2 parameters', () => {
    expect(add(1)).eql('It needs two parameters');
  });
})
