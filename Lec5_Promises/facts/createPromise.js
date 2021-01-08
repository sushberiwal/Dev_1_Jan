const fs = require("fs");

function readFilePromisfied(filePath){
    return new Promise( function(resolve , reject){

        fs.readFile(filePath , function(error , data){
            if(error){
                reject(error);
            }
            else{
                resolve(data);
            }
        });
    
    }); // creates a pending Promise;
}



// B                 //A // promisfied way me readFile
let pendingPromise = readFilePromisfied("./f1.txt");

// console.log(pendingPromise);

//scb
pendingPromise.then(function (data) {
    console.log(pendingPromise);
    console.log(data + "");
});
//fcb
pendingPromise.catch(function (error) {
  console.log(error);
});






