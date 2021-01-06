const fs = require("fs");
const files = ["../f1.txt" , "../f2.txt" , "../f3.txt"];

let idx = 0;
while(idx < files.length){
    
    fs.readFile(files[idx] , function(err , data){
        console.log(data+"");
    })
    
    idx++;

}


// recursive solution



