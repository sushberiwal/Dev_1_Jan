const fs = require("fs");
let file = [];

let obj = {
    name:"Sushant"
}

file.push(obj);




// fs.writeFileSync("./demo.json" , JSON.stringify(file));

// JSON.stringify( JSobject ) => stringified object

let data = fs.readFileSync("./demo.json");
console.log(data+"");


// JSON.parse(stringified object) => original object 
data = JSON.parse(data);

console.log(data);

