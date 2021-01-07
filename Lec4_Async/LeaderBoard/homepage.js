const request = require("request");
const cheerio = require("cheerio");
const getAllMatches  = require("./allMatches");
// web async => callbacks 
// request is a hof 

// 5 minute
request("https://www.espncricinfo.com/series/ipl-2020-21-1210595" , cb);

function cb(error , response , data){
    // console.log(response);
    if(error == null){
        parseData(data);
    }
    else if(response.statusCode == 404){
        console.log("Page not found !!!");
    }
    else{
        console.log(error);
    }
}


function parseData(data){
    let ch = cheerio.load(data);
    let link = ch(".widget-items.cta-link a").attr("href");
    let completeLink = `https://www.espncricinfo.com${link}`;
    // console.log(completeLink);
    getAllMatches(completeLink);
}