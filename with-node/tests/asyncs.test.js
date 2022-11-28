let {asyncFun, asyncCallback} = require('../src/asyncs')
test("File Reading", ()=>{
    return asyncFun().then(res=>expect(res).toBe(12)).catch(err=>expect(err).toBe("SOMEERROR"))
})

test("File Reading", (done)=>{
    asyncCallback("readme.txt", (contentLength)=>{
        console.log("Callback Triggered")
        expect(contentLength).toBe(12)
        done()
    })
})