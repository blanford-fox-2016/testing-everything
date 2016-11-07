'use strict'

var chai = require('chai')
  , expect = chai.expect
  , should = chai.should();

function isEmpty (array){
  if(array == undefined){
    return false;
  }else if (array.length > 0){
    return false;
  }else{
    return true;
  }
}

describe("test function isEmpty", function(){

  // test input empty array / ex: []
  it("it should return true if array is empty", function(){
    isEmpty([]).should.be.true
  })
  // test input array that have value / ex : [1,2,3]
  it("it should return false if array have a value", function(){
    isEmpty([1,2,3]).should.be.false
  })
  // test input single number or more then one / ex : 1,2,3
  it("it should return true if input are a single number", function(){
    isEmpty(1).should.be.true
  })
  // test input single character / ex : 'A'
  it("it should return false if input is a single character", function(){
    isEmpty('A').should.be.false
  })
  // test input empty / ex :
  it("it should return false if input is empty", function(){
    isEmpty().should.be.false
  })

}) // end testing function

console.log(isEmpty());
