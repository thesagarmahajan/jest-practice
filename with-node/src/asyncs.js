let fs = require('fs')
async function asyncFun(arg="readme.txt"){
     return new Promise((resolve, reject)=>{
        fs.readFile("src/readme.txt", (err, data)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(data.length)
            }
        })
    })
}

function asyncCallback(arg, callback){
    console.log(callback)
    fs.readFile("src/readme.txt", "utf-8",(err, data)=>{
        console.log("Inside Readfile")
        if(err){
            callback(err)
        }
        else{
            console.log(data)
            callback(data.length)
        }
    })

}
// asyncFun().then(data=>console.log(data)).catch(err=>console.log(err))
module.exports = {asyncFun, asyncCallback};