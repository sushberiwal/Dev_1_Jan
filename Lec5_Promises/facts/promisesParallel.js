const fs = require("fs");

let f1KaPromise = fs.promises.readFile("./f1.txt");
f1KaPromise.then(function (data) {
  console.log(data + "");
});
let f2KaPromise = fs.promises.readFile("./f2.txt");
f2KaPromise.then(function (data) {
  console.log(data + "");
});
let f3KaPromise = fs.promises.readFile("./f3.txt");
f3KaPromise.then(function (data) {
  console.log(data + "");
});


// f1KaPromise.catch(function (error) {
//   console.log(error);
// });


// f2KaPromise.catch(function (error) {
//   console.log(error);
// });


// f3KaPromise.catch(function (error) {
//   console.log(error);
// });
