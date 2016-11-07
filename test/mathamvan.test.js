'use strict'

const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const mathamvan = require('../mathamvan');

const add = mathamvan.add;

describe('add function will return the sum result of both parameter', () => {

  let a;

  beforeEach(() => {
    a = 5;
  });

  it('should sum first parameter and second parameter', () => {
    expect(add(a,2)).eql(7);
  });
  it('should give message that add function need 2 number as parameters', () => {
    expect(add('a', a)).eql('Parameters are not valid, both must be a number');
  });
  it('should give message that the function need 2 parameters', () => {
    expect(add()).eql('It needs two parameters');
  });
  it('should give message that the function need 2 parameters', () => {
    expect(add(a)).eql('It needs two parameters');
  });
})
