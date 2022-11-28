var axios = require('axios');

function doSomething(){
    return "Something is getting done"
}

async function getUsersReq(){
    return axios.get("https://reqres.in/api/user")
}

function getUers(){
    return [
        {
            "id":1,
            "name":"Sagar Mahajan",
            "email":"sagar.mahajan@citiustech.com"
        }
    ]
}

function getProducts(){
    return [
        {
            "id":1,
            "name":"Laptop",
            "price":50000
        }
    ]
}

module.exports = {doSomething, getUers, getProducts, getUsersReq}