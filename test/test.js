'use strict'

// require function that want to test
const App = require('./unit');

var chai = require('chai')
  , expect = chai.expect
  , should = chai.should();



describe("test function isEmpty", function(){

  // test input empty array / ex: []
  it("it should return true if array is empty", function(){
    App.isEmpty([]).should.be.true
  })
  // test input array that have value / ex : [1,2,3]
  it("it should return false if array have a value", function(){
    App.isEmpty([1,2,3]).should.be.false
  })
  // test input single number or more then one / ex : 1,2,3
  it("it should return true if input are a single number", function(){
    App.isEmpty(1).should.be.true
  })
  // test input single character / ex : 'A'
  it("it should return false if input is a single character", function(){
    App.isEmpty('A').should.be.false
  })
  // test input empty / ex :
  it("it should return false if input is empty", function(){
    App.isEmpty().should.be.false
  })

}) // end testing function

console.log(App.isEmpty());
