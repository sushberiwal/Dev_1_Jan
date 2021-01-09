// async keyword => async keyword can be used with functions
// await keyword => await keyword can only be used inside async function

const axios  = require("axios");
const fs = require("fs");

// node api/ web api => async tasks
// IIFE => Immediately Invoked Function Expressions
// console.log("start");
async function sayHi(){
    try{
        let data = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        console.log(data.data);
    }
    catch(error){
        console.log(error);
    }
};
sayHi();
console.log("end");


// let pendingPromise = axios.get("https://jsonplaceholder.typicode.com/todos/1");
// pendingPromise.then(function(data){
//     console.log(data.data);
// })
