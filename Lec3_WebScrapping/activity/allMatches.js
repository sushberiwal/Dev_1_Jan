const request = require("request");
const cheerio = require("cheerio");
const getMatch = require("./match");


function getAllMatches(link){
    request( link , cb );
}

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
    let allATags = ch('a[data-hover="Scorecard"]');
    // console.log(allATags.length);
    // console.log(allATags);
// { <a href="" /> , <a href="" /> , <a href="" /> , <a href="" /> , <a href="" /> , <a href="" /> }
// 60 times    
for(let i=0 ; i<allATags.length ; i++){
        let link = ch(allATags[i]).attr("href");
        let completeLink = `https://www.espncricinfo.com${link}`;
        // console.log(completeLink);
        getMatch(completeLink);
    }
    
}

module.exports= getAllMatches;