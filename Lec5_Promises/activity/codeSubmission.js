const puppeteer = require("puppeteer");
const id = "yejak47744@nonicamy.com";
const pw = "123456789";
let tab;
let idx;
// temp-mail
// launch browser
// all functions of puppeteer are promisified => pending promise

let browserOpenPromise = puppeteer.launch({
  headless: false,
  defaultViewport: null,
  args: ["--start-maximized"],
});

browserOpenPromise
  .then(function (browser) {
    // console.log("Browser opened !!!");
    let pagesPromise = browser.pages();
    return pagesPromise;
  })
  .then(function(pages) {
    let page = pages[0];
    tab = page;
    let gotoPromise = page.goto("https://www.hackerrank.com/auth/login");
    return gotoPromise;
  })
  .then(function() {
      let idTypedPromise = tab.type("#input-1" , id);
      return idTypedPromise;
  })
  .then(function(){
      let pwTypedPromise = tab.type( "#input-2" , pw );
      return pwTypedPromise;
  })
  .then(function(){
      let loginPromise = tab.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled"); //navigation
      return loginPromise;
  })
  .then(function(){
      let waitAndClickPromise = waitAndClick('#base-card-1-link');
      return waitAndClickPromise;
  })
  .then(function(name){
      console.log(name);
      let waitAndClickPromise =  waitAndClick('a[data-attr1="warmup"]');
      return waitAndClickPromise;
  })
  .then(function(){
      let waitPromise = tab.waitForSelector('.js-track-click.challenge-list-item' , {visible:true});
      return waitPromise;
  })
  .then(function(){
    let allATagsPromise = tab.$$('.js-track-click.challenge-list-item');
    return allATagsPromise;
  })
  .then(function(allATags){
    //[ <a  /> , <a  /> , <a  />, <a  /> ];
    let allLinksPromises = [];
    // let allLinksPromises = [ Promise<Pending> , Promise<Pending> , Promise<Pending> , Promise<Pending>  ];
    for(let i=0 ; i<allATags.length ; i++){
     let linkPromise =  tab.evaluate( function(elem){  return elem.getAttribute("href");    }      ,   allATags[i]  );
     allLinksPromises.push(linkPromise);
    }

    let pendingPromise = Promise.all(allLinksPromises);
    return pendingPromise;
  })
  .then(function(allLinks){
    let completeLinks = allLinks.map(  function(link){
      return `https://www.hackerrank.com${link}`;
    });
    // console.log(completeLinks);

    let oneQuesSolvePromise = solveQuestion(completeLinks[0]);
    return oneQuesSolvePromise;
  })
  .then(function(){
    console.log("One Question Solved !!");
  })
  .catch(function(error){
    console.log(error);
  })


  function waitAndClick(selector){
    //wait for selector
    //click on element
    return new Promise( function(resolve , reject){
      let waitPromise = tab.waitForSelector(selector , {visible:true}); // max wait 30 sec
      waitPromise.then(function(){
        let clickPromise = tab.click(selector);
        return clickPromise;
      })
      .then(function(){
        // wait bhi ho chuka hai click bhi ho chuka succesfully
        resolve("sushant");
      })
      .catch(function(error){
        // wait fail hua ya click fail hua hia
        reject(error);
      })
    });
  }


  function getCode(){
    return new Promise(function(resolve , reject){
      let waitPromise = tab.waitForSelector('.hackdown-content h3' , {visible:true});
      waitPromise.then(function(){
        let allCodeNamesPromise = tab.$$('.hackdown-content h3');
        return allCodeNamesPromise;
      })
      .then(function(allCodeNamesElements){
        //[ <h3>C++</h3> , <h3>Python</h3> , <h3>Java</h3>  ]
        let allNamesPromise = [];
        for(let i=0 ; i<allCodeNamesElements.length ; i++){
          let namePromise = tab.evaluate( function(element){ return element.textContent;    }   ,   allCodeNamesElements[i] )
          allNamesPromise.push(namePromise);
        }

        let getNamesPromise = Promise.all(allNamesPromise);
        return getNamesPromise;
      })
      .then(function(codeNames){
        // [ "C++" , "Python" , "java"];
        for(let i=0 ; i<codeNames.length ; i++){
          if(codeNames[i] == "C++"){
            idx = i;
            break;
          }
        }
        let allCodesPromise = tab.$$('.hackdown-content .highlight');
        return allCodesPromise;
      })
      .then(function(allCodeDivs){
        //[ <div class="highlight"> </div> , <div class="highlight"> </div> , <div class="highlight"> </div>  ]
        let codeDiv = allCodeDivs[idx];
        let codePromise = tab.evaluate( function(element){ return element.textContent;  }  , codeDiv);
        return codePromise;
      })
      .then(function(code){
        console.log(code);
      })
      .catch(function(error){

      })
    })
  }

  function solveQuestion(qLink){
    return new Promise(function(resolve , reject){
      let gotoQuesPromoise = tab.goto(qLink);
      gotoQuesPromoise.then(function(){
        console.log("Reached question !!");
        let waitAndClickPromise = waitAndClick('div[data-attr2="Editorial"]');
        return waitAndClickPromise;
      })
      .then(function(){
        let getCodePromise = getCode();
        return getCodePromise;
      })
      .then(function(){

      })
      .catch(function(error){
        console.log(error);
      })
    })
  }



