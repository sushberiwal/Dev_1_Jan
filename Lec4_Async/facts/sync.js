const fs = require("fs");


console.log("start");

           // sync // 30 mins
let data = fs.readFileSync("./f1.txt"); //100gb
console.log(data+"");


console.log("end");
