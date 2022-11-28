let {myForEach, isValidPhone,isValidPhoneCalback} = require("../src/mocks")

/* test("Mock Function with Iterable Example", ()=> {
    // The problem
    // myForEach([1,2], (num)=>{
    //     expect(num).tobe()
    // })
    const mockCallback = jest.fn(num=>{
        return num
    })
    myForEach(["one","two", "three"], mockCallback)
    console.log(mockCallback.mock.results)
    console.log(mockCallback.mock.calls)
    expect(mockCallback.mock.calls.length).toBe(2)
}) */

/* test("Mock Function with Non Iterable Example", ()=>{
    let mock = jest.fn((val)=>{
        console.log(val)
        return val
    })
    isValidPhone(["1231231232", "1010"], mock)
    expect(mock.mock.calls.length).toBe(1)
}) */

/* let mockFun = jest.fn((str)=>{
    return isValidPhone(str)
})

let phoneNumbers = ["9920649337", "8104046942"]
phoneNumbers.forEach(num=>mockFun(num))

console.log(mockFun.mock.calls)
console.log(mockFun.mock.results)
// console.log(mockFun.mock.contexts)
mockFun.mock.results.forEach((obj, index)=>{
    test(`Mock without callback #${index}`, ()=>{
        expect(obj.value).toBe(true)
    })
}) */


/* test("isValidPhoneCalback", ()=>{
    let mockFun = jest.fn()
    isValidPhoneCalback(["9920649337", "810404694"], mockFun)
    expect(mockFun).toHaveBeenCalledTimes(1)
}) */





