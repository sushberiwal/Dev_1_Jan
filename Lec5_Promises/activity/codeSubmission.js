const puppeteer = require("puppeteer");
const id = "yejak47744@nonicamy.com";
const pw = "123456789";
let tab;
let idx;
let gCode;
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
     let linkPromise =  tab.evaluate( function(elem){  return elem.getAttribute("href");  }  ,  allATags[i]  );
     allLinksPromises.push(linkPromise);
    }
    let pendingPromise = Promise.all(allLinksPromises);
    return pendingPromise;
  })
  .then(function(allLinks){
    let completeLinks = allLinks.map(  function(link){
      return `https://www.hackerrank.com${link}`;
    });

    let oneQuesSolvePromise = solveQuestion(completeLinks[0]);
    
    // console.log(completeLinks);
    for(let i=1 ; i<completeLinks.length ; i++){
      oneQuesSolvePromise = oneQuesSolvePromise.then(function(){
        let nextQuesPromise = solveQuestion(completeLinks[i]);
        return nextQuesPromise;
      })
    }
    return oneQuesSolvePromise;
  })
  .then(function(){
    console.log("All Questions Solved !!");
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
        // console.log(code);
        gCode = code;
        resolve();
      })
      .catch(function(error){
        reject(error);
      })
    })
  }

  function pasteCode(){
    return new Promise(function(resolve , reject){
      let waitAndClickPromise = waitAndClick('.custom-input-checkbox');
      waitAndClickPromise.then(function(){
        let codeTypePromise = tab.type(".custominput" , gCode);
        return codeTypePromise;
      })
      .then(function(){
        let ctrlDownPromise = tab.keyboard.down("Control");
        return ctrlDownPromise;
      })
      .then(function(){
        let aKeyPromise = tab.keyboard.press("A");
        return aKeyPromise;
      })
      .then(function(){
        let xKeyPromise = tab.keyboard.press("X");
        return xKeyPromise;
      })
      .then(function(){
        let clickPromise = tab.click('.monaco-scrollable-element.editor-scrollable.vs');
        return clickPromise;
      })
      .then(function(){
        let aKeyPromise = tab.keyboard.press("A");
        return aKeyPromise;
      })
      .then(function(){
        let vKeyPromise = tab.keyboard.press("V");
        return vKeyPromise;
      })
      .then(function(){
        let ctrlUpPromise = tab.keyboard.up("Control");
        return ctrlUpPromise;
      })
      .then(function(){
        resolve();
      })
      .catch(function(error){
        reject(error);
      })
    })
  }

  function handleLockBtn(){
    return new Promise(function(resolve , reject){
      let waitPromise = tab.waitForSelector('.editorial-content-locked' , {visible:true , timeout:5000});
      waitPromise.then(function(){
        let lockBtnClickPromise = tab.click('.ui-btn.ui-btn-normal.ui-btn-primary.ui-btn-styled');
        return lockBtnClickPromise;
      })
      .then(function(){
        // lock btn found !!
        console.log("Lock btn found !!!");
        resolve();
      })
      .catch(function(error){
        // lock btn not found !
        console.log("Lock btn not found !!!");
        resolve();gotoQuesPromoisegotoQuesPromoisegotoQuesPromoisegotoQuesPromoisegotoQuesPromoise
      })
    });
  }

  function solveQuestion(qLink){
    return new Promise(function(resolve , reject){
      let gotoQuesPromoise = tab.goto(qLink);
      gotoQuesPromoise.then(function(){
        console.log("Reached question !!");
        let waitAndClickPromise = waitAndClick('div[data-attr2="Editorial"]');
        return waitAndClickPromise;
      }).then(function(){
        // handle lock btn
        let lockBtnPromise = handleLockBtn();
        return lockBtnPromise;
      })
      .then(function(){
        let getCodePromise = getCode();
        return getCodePromise;
      })
      .then(function(){
        let quesClickedPromise = tab.click('div[data-attr2="Problem"]');
        return quesClickedPromise;
      })
      .then(function(){
        let pasteCodePromise = pasteCode();
        return pasteCodePromise;
      })
      .then(function(){
        let quesSubmitPromise = tab.click('.pull-right.btn.btn-primary.hr-monaco-submit');
        return quesSubmitPromise;
      })
      .then(function(){
        resolve();
      })
      .catch(function(error){
        reject(error);
      })
    })
  }




