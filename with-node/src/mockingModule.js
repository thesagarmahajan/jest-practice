let {doSomething, getUers, getProducts, getUsersReq} = require("./mockingModule2")
function askToDoSomething(){
    return doSomething()
}

function getData(which){
    if(which=="users"){
        return getUsersReq().then(res=>console.log(res.data)).catch(err=>console.log(err))
    }
    else{
        return getProducts()
    }
}


module.exports = {askToDoSomething, getData}