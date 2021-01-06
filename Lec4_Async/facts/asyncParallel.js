const fs = require("fs");


fs.readFile( "./f1.txt" , function(err , data){
    console.log(data+"");
});
console.log("end")

fs.readFile( "./f2.txt" , function(err , data){
    console.log(data+"");
});
console.log("end")

fs.readFile( "./f3.txt" , function(err , data){
    console.log(data+"");
});
console.log("end")