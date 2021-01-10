const puppeteer = require("puppeteer");
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
        await addModerators(browser , tab); // add moderators to each ques of each page
        console.log("All moderators added !!!");
    }
    catch(error){
        console.log(error);
    }
})();


async function addModerators(browser , tab){
    await tab.waitForSelector('.backbone.block-center' , {visible:true});
    let allATags = await tab.$$('.backbone.block-center');
    let allLinks = [];

    // get links of all questions on the cureent page
    for(let i=0 ; i<allATags.length ; i++){
        let qLink = await tab.evaluate( function(elem){
            return elem.getAttribute('href');
        } , allATags[i]);
        let completeLink = `https://www.hackerrank.com${qLink}`;
        allLinks.push(completeLink);
    }

    console.log(allLinks);

    // call let modAddPromise = addModeratorToAsingleQues(newTab , qLinks); // dont use await
    // loop on all ques links
    let moderatorAddPromises = [];
    for(let i=0 ; i<allLinks.length ; i++){
        let newTab = await browser.newPage();
        let modAddPromise = addModeratorToASingleQues(newTab , allLinks[i]);
        moderatorAddPromises.push(modAddPromise);
    }
    await Promise.all(moderatorAddPromises);
    // console.log("moderator to all questions on one page added !!!");

    let allLis = await tab.$$('.pagination li');
    let nextBtn = allLis[allLis.length-2];
    let isDisabled = await tab.evaluate( function(elem){return elem.classList.contains("disabled"); } , nextBtn);
    if(isDisabled){
        return;
    }
    await nextBtn.click();
    await addModerators(browser , tab);
}

async function handleConfirmBtn(newTab){
    try{
        await newTab.waitForSelector('#confirm-modal' , {visible:true , timeout:5000});
        await newTab.click('#confirmBtn');
        console.log("confirm modal found !!");
    }
    catch(error){
        console.log("confirm modal not found !!");
        return;
    }
}

async function addModeratorToASingleQues(newTab , qLink){
    await newTab.goto(qLink);
    await handleConfirmBtn(newTab);
    await newTab.waitForSelector('li[data-tab="moderators"]' , {visible:true});
    await newTab.click('li[data-tab="moderators"]');
    await newTab.waitForSelector('#moderator' , {visible:true});
    await newTab.type('#moderator' , "sushant");
    await newTab.click('.btn.moderator-save');
    await newTab.click('.save-challenge.btn.btn-green');
    await newTab.close();
}
