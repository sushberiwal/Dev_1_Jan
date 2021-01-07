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
      let waitPromise = tab.waitForSelector('#base-card-1-link'); // max wait 30 sec
      return waitPromise;
  })
  .then(function(){
      let ipKitClickedPromise = tab.click('#base-card-1-link');
      return ipKitClickedPromise;
  })
  .then(function(){
      let waitPromise = tab.waitForSelector('a[data-attr1="warmup"]');
      return waitPromise;
  })
  .then(function(){
    let warmupClickedPromise = tab.click('a[data-attr1="warmup"]');
    return warmupClickedPromise;
   })
  .then(function(){
      console.log("clicked on warmup kit !!!");
  })

