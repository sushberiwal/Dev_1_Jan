// const cheerio = require("cheerio");
// const fs = require("fs");
// const puppeteer = require("puppeteer");

// // fetch("https://leetcode.com/tag/array/").then(function(data){
// //     console.log(data);
// //     // console.log(data.json());
// // })

// (async function(){
//    const browser = await puppeteer.launch();
//    const pages = await browser.pages();
//    const tab = pages[0];
//    await tab.goto("https://leetcode.com/tag/array/");
// //    let html = await tab.content();
// //    console.log(html);
// //            fs.writeFileSync("./array.html" , html +"");
// await tab.waitForSelector(".reactable-data tr");
// let allTrs = await tab.$$(".reactable-data tr");
// // console.log(allTrs);
// for(let i=0 ; i<allTrs.length ; i++){
//     let name = await tab.evaluate( function(elem){
//         let allTds = elem.querySelectorAll("td");
//         return allTds[2].textContent;
//     } , allTrs[i]);
//     console.log(name);
// }



// })();




// // axios.get("https://leetcode.com/tag/array/").then(function(data){
// //         // console.log(data.data);
// // })





let links  = ["akjs" , "alskfna" , "ajsfa"];



let modifiedLinks = links.map( function(link){
    return link+" added value";
});

console.log(modifiedLinks);