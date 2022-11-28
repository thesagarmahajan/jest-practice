let mockingModule = require("../src/mockingModule")
let mockingModule2 = require("../src/mockingModule2")
var axios = require('axios');

/* 
    Creates mocks for all functions like:
    let doSomething = jest.fn() 
*/
jest.mock("../src/mockingModule2.js")


/* beforeAll(()=>{console.log("I am before All")})
beforeEach(()=>{console.log("I am before Each")})
afterAll(()=>{console.log("I am after All")})
afterEach(()=>{console.log("I am after Each")}) */

/* describe.skip("skipped tests", ()=>{
    test("Module Mocking", ()=>{
        console.log(mockingModule.askToDoSomething())
        // expect(mockingModule2.doSomething).toHaveBeenCalled()
    })
})

test("Module Mocking", ()=>{
    console.log(mockingModule.askToDoSomething())
    // expect(mockingModule2.doSomething).toHaveBeenCalled()
}) */

/* 
    mockingModule2.js
    getUsersReq = jest.fn(()=>{
        return Promise.resolve()
    })
*/
 
mockingModule2.getUsersReq.mockImplementation(()=>{
    // return axios.get("https://reqres.in/api/user")
    return Promise.resolve({data:""})
})
test("Mocking Data Sources", ()=>{
    console.log(mockingModule.getData("users"))
    expect(mockingModule2.getUsersReq).toHaveBeenCalled()
})