const fs = require("fs");

// facts =>
// promisified function se we always get a pending promise !
// then is called immediately on pending Promise and callback which is passed inside then is known as
// success callback
// catch is called immediately on pending promise and callback passed inside catch is known as
// failure callback
// initially state of promise is <pending>
// then and catch can only be called on pending promise

// then also gives a pending promise called generally as then ka promise

let f1KaPromise = fs.promises.readFile("./f1.txt");

f1KaPromise.then(function (data) {
  console.log(data + "");
  let f2KaPromise = fs.promises.readFile("./f2.txt");
  return f2KaPromise;
})
.then(function(data){
    console.log(data+"");
})
