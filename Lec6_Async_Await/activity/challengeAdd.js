const puppeteer = require("puppeteer");
const challenges = require("./challenges");
const id = "yejak47744@nonicamy.com";
const pw = "123456789";



(async function(){
    try{
        let browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
            args: ["--start-maximized"],
          });
        let pages = await browser.pages();
        let tab = pages[0];
        await tab.goto('https://www.hackerrank.com/auth/login');
        await tab.type("#input-1" , id);
        await tab.type( "#input-2" , pw );
        await Promise.all([ tab.waitForNavigation({waitUntil:"networkidle2"}) , tab.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled") ]); // navigation
        // load => when client gets the data
        // domcontentloaded => when data in loaded on the dom on the client side
        // networkidle0 => first 500ms jaha pe client se at max 0 request
        // networkidle2 => first 500ms jaha pe apke client se at max 2 request 
        await tab.click('div[data-analytics="NavBarProfileDropDown"]');
        await tab.waitForSelector('a[data-analytics="NavBarProfileDropDownAdministration"]' , {visible:true});
        await Promise.all([ tab.waitForNavigation({waitUntil:"networkidle2"}) , tab.click('a[data-analytics="NavBarProfileDropDownAdministration"]') ]); // navigation
        let bothLis = await tab.$$(".nav-tabs.nav.admin-tabbed-nav li");
        let manageChallengeLi = bothLis[1];
        await Promise.all([ tab.waitForNavigation({waitUntil:"networkidle2"}) , manageChallengeLi.click() ]); // navigation
        let addChallengeBtn = await tab.$('.btn.btn-green.backbone.pull-right');
        let addChallengeLink = await tab.evaluate( function(element){   return element.getAttribute("href");  }  , addChallengeBtn);
        addChallengeLink = `https://www.hackerrank.com${addChallengeLink}`;
        // console.log(addChallengeLink);
        for(let i=0 ; i<challenges.length ; i++){
            let newTab = await browser.newPage();
            addChallenge(addChallengeLink , newTab);
        }

    }
    catch(error){
        console.log(error);
    }
})();


async function addChallenge(link , newTab){
    await newTab.goto(link);
}