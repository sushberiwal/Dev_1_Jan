const fs = require("fs");

//javascript => sync language but async bna skte hain with the help of callbacks , promises , async await , setTimeout 


// B                 //A // promisfied way me readFile
let pendingPromise = fs.promises.readFile("./f1.txt");

console.log(pendingPromise);

// then se attach hoga success callback
pendingPromise.then(function (data) {
    console.log(pendingPromise);
    console.log(data + "");
});

// catch se fcb => failure callback attach hoga
pendingPromise.catch(function (error) {
  console.log(error);
});






