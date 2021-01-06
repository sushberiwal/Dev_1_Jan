const fs = require("fs");


// callback hell 
fs.readFile( "./f1.txt" , function(err , data){
    console.log(data+"");
    fs.readFile( "./f3.txt" , function(err , data){
        console.log(data+"");
        fs.readFile( "./f3.txt" , function(err , data){
            console.log(data+"");
        });
    });
});
