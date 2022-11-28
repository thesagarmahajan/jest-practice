let isValidEmail = require("../src/validations.js").isValidEmail
let isValidPhone = require("../src/validations.js").isValidPhone

/* test("Checking if the email is valid", ()=>{
    expect(
        isValidEmail("sagar@gmail.com")
    ).toBe(true)

    expect(
        isValidEmail("sagar@gmail.")
    ).toBe(false)

    expect(
        isValidEmail("sagargmail.com")
    ).toBe(false)
})

test("Checking if the phone is valid", ()=>{
    expect(
        isValidPhone("9920649337")
    ).toBe(true)
    expect(
        isValidPhone("99206493377")
    ).toBe(false)
    expect(
        isValidPhone("992064933")
    ).toBe(false)
    expect(
        isValidPhone("99206493as3")
    ).toBe(false)
}) */

describe("Form Validation", ()=>{
    
    let user = {
        email:"sagar@gmail.com",
        phone:"9920649337"
    }
    test("Check Properties", ()=>{
        expect(user).toHaveProperty("email")
        expect(user).toHaveProperty("phone")
    })
    
    test("For Email", ()=>{
        expect(isValidEmail(user.email)).toBe(true)
    })

    test("For Phone", ()=>{
        expect(isValidPhone(user.phone)).toBe(true)
    })
})