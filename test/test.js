'use strict'

var chai = require('chai'),
expect = chai.expect,
app = require('../index.js')

chai.should()

var oddNumber, evenNumber

describe("Checks if number",()=> {
  beforeEach(function(){
    oddNumber = 3
  })
  it("is odd",()=>{
    app.isOdd(oddNumber).should.be.true
  })
  beforeEach(function(){
    evenNumber = 4
  })
  it("is even",()=>{
    app.isEven(evenNumber).should.be.true
  })
})