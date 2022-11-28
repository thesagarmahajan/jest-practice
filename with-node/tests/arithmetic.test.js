let subtraction = require('../src/arithmetic').subtraction
let addition = require('../src/arithmetic').addition

test("subtraction two numbers", ()=>{
    expect(
        subtraction(1, 2)
    ).toBe(-1)
})

test("Addition two numbers", ()=>{
    expect(
        addition(1, 2)
    ).toBe(3)
})