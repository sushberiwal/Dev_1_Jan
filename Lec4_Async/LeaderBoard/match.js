// ek match pe kaam krne ka
// ek match ke dono innings ka data leke ana ata h isko

const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
// let link = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";
let count=1;
let leaderboard = [];

function getMatch(link){
    console.log("Sending request !!" , count);
    request(link , cb); // async function
    count++;
}

function cb(error , response , data){
    count--;
    console.log("Recieved Data !!" , count);
    parseData(data);
    if(count == 1){
        console.table(leaderboard);
    }
}

function parseData(data){
    let ch = cheerio.load(data);
    let bothInnings = ch('.card.content-block.match-scorecard-table .Collapsible');
    // console.log(bothInnings.length);
    // {   <div class="Collapsible">  </div> , <div class="Collapsible">  </div>     }
    for(let i=0 ; i<bothInnings.length ; i++){
        let teamName = ch(bothInnings[i]).find("h5").text();
        teamName = teamName.split("INNINGS")[0].trim();
        console.log(teamName);
        let allTrs = ch(bothInnings[i]).find(".table.batsman tbody tr");
        // console.log(allTrs.length);
        // loop on all the bastsmen
        for(let j=0 ; j<allTrs.length-1 ; j++){
            let allTds = ch(allTrs[j]).find("td");
            //  {  <td> </td , <td> </td , <td> </td , <td> </td , <td> </td , <td> </td , <td> </td }
            if(allTds.length > 1){
                let batsmanName = ch(allTds[0]).find("a").text().trim();
                let runs = ch(allTds[2]).text().trim();
                let balls = ch(allTds[3]).text().trim();
                let fours = ch(allTds[5]).text().trim(); 
                let sixes = ch(allTds[6]).text().trim();
                let strikeRate= ch(allTds[7]).text().trim();
                // String Interpolation
                // console.log(`Batsman = ${batsmanName} Runs = ${runs} Balls = ${balls} Fours = ${fours} Sixes = ${sixes} SR = ${strikeRate}`);
                processLeaderboard(teamName , batsmanName , runs , balls , fours , sixes , strikeRate);
            }
        }        
    }
    console.log("############################################");
}

// leaderboard
function processLeaderboard(teamName , batsmanName , runs , balls , fours , sixes){
    runs = Number(runs);
    balls = Number(balls);
    fours = Number(fours);
    sixes = Number(sixes);

    // loop on leaderboard and check if entry exists
    for(let i=0 ; i<leaderboard.length ; i++){
        let inning = leaderboard[i];
        if(inning.Team == teamName && inning.Batsman == batsmanName){
            inning.Runs += runs;
            inning.Balls += balls;
            inning.Fours += fours;
            inning.Sixes += sixes;
            return;
        }
    }

    // add new object/inning
    let inning = {
        Team : teamName,
        Batsman : batsmanName ,
        Runs : runs ,
        Balls : balls ,
        Fours : fours ,
        Sixes : sixes
    }
    leaderboard.push(inning);
}


module.exports = getMatch;