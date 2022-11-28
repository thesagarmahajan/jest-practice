// JEST Matchers
// toBe Matchers Example

/* test("Comparing Values which are values", ()=>{
    let a = 10;
    let b = a;
    let c = 10;
    expect(10).toBe(10)
    expect(a).toBe(c)
    expect(a).toBe(b)
    expect(b).toBe(c)
}) */

/* test("Comparing Values which are Refrances", ()=>{
    let a = [1,2]
    let b = a
    let c = [1,2]
    expect(a).toBe(b) // Passes
    expect(a).toBe(c) // Fails
    expect(b).toBe(c) // Fails
}) */

test("Comparing Values using toEquals", ()=>{
    let a = [1,2]
    let b = a
    let c = [1,2]
    expect(a).toEqual([1,2])
    expect(a).toEqual(b)
    expect(a).toEqual(c)
    expect(b).toEqual(c)
})

/* test("Testing with toBeCloseTo", ()=>{
    let sum = 0.1+0.2;
    // "0.1"0000000000034768743
    // "0.2"0000000000007168732
    // expect(sum).toBe(0.3) // Fails
    expect(sum).toBeCloseTo(0.3) // Passes
}) */

/* test("Checking strings against regular expression", ()=>{
    expect("sagar@gmail.com").toMatch(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
})
 */

/* test("Checking with Arrays", ()=>{
    let myarr = ["one", "two", "three"]
    let myarr2 = [12,43,65,1]
    expect(myarr).toContain("one")
    expect(myarr2).toContain(12)
})
 */

/* test("Comparing Values using toStrictEquals", ()=>{
    let a = [undefined,2]
    let b = [,2]
    // expect(a).toEqual(b) // Passes
    expect(a).toStrictEqual(b) // Fails
}) */

/* test("Using toHaveProperty #1", ()=>{
    let response = {
        "payload":{}
    }
    expect(response).toHaveProperty("payload")
}) */

/* test("Using toHaveProperty #2", ()=>{
    let response = {
        "payload":{}
    }
    // let response = {
    //     "error":"SOME_ERROR"
    // }
    expect(response).not.toHaveProperty("error")
}) */


