// console.log("I am popup !!");

let changeImageBtn = document.querySelector("#change");

changeImageBtn.addEventListener("click" , function(){
    // console.log("Change Images !!!!");

    // find active tab !!
    chrome.tabs.query( {active: true, currentWindow: true} , function(tabs){
        let tab = tabs[0];
        
        // send message to that active tab !!
        chrome.tabs.sendMessage( tab.id , "hello from popup" , function(response) {
            console.log(response);
          });

    });
})