const fs = require("fs");


console.log("start");

// order => 
fs.readFile("./f1.txt" , cb);

function cb(errr ,data){
    console.log(data+"");
}


console.log("end");

while(true){

}