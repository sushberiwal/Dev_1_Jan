// in dev_1_jan folder
// npm init -y
// npm install cheerio
// .gitignore
// node_modules

const fs = require("fs");
const cheerio = require("cheerio");

// fs => low level data (buffer data or binary data);
// let f1KaData = fs.readFileSync("./f1.txt");
// stringified => plain text bn jaega
// console.log(f1KaData+"");


let htmlKaData = fs.readFileSync("./index.html");

let ch = cheerio.load(htmlKaData);


let h1KaData = ch("h1").text();
//  <h1>Heading 1</h1>
// console.log(h1KaData);


let pkaData = ch("ul p").text();
// console.log(pkaData);

// let abcd = ch(".outer").text();
// console.log(abcd);


// let outerPkaData = ch(".outer.main").text();
// console.log(outerPkaData);

let innerPKaData = ch("ul .outer").text();
console.log(innerPKaData);



// ids => #


// let h1KaText = ch("#unique").text();
// console.log(h1KaText);



