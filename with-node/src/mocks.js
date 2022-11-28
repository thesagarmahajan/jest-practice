function myForEach(arr, callback){
    for(i=0;i<arr.length;i++){
        if(i%2==0){
            callback(arr[i])
        }
    }
}


function isValidPhone(str){
    if(String(str)
    .toLowerCase()
    .match(/^\d{10}$/))
    {
        return true
    }
    else{
        return false
    }
}

function isValidPhoneCalback(numbers, callback){
    for(i=0;i<numbers.length;i++){
        if(String(numbers[i])
        .toLowerCase()
        .match(/^\d{10}$/))
        {
            callback(numbers[i])
        }
    }
}

/* let phones = ["1231231231", "121212"];
let checkCount = 0
isValidPhone(phones, (val)=>{
    if(val){
        checkCount++
    }
})
if(checkCount==phones.length){
    console.log("all Ok")
}
else{
    console.log("Some phones are not correct")
} */

module.exports = {myForEach, isValidPhone, isValidPhoneCalback}