const puppeteer = require("puppeteer");
const id = "yejak47744@nonicamy.com";
const pw = "123456789";
let tab;
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
      console.log("clicked on warmup kit !!!");
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





