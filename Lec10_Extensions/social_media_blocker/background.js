// [ {site:facebook , time:10} , {site:youtube , time:10}  ]

let blockedSiteList = [];

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if(message.type == "Add"){
        let blockObject = {site: message.site , time : 10};
        blockedSiteList.push(blockObject);
        sendResponse("Blocked");
    }
    else if(message.type == "Get"){
        sendResponse(blockedSiteList);
    }
    else if(message.type == "Unblock"){
        let filteredBlockSiteList = blockedSiteList.filter(function(blockedSiteObject){
            return blockedSiteObject.site != message.site
        });
        blockedSiteList = filteredBlockSiteList;
        sendResponse("Unblocked");
    }
});


async function polling(){
    // getActiveTab
    let tab = await getTab();
    // console.log(tab);
    if(tab && tab.status == "complete"){
        for(let i=0 ; i<blockedSiteList.length ; i++){
            // check if that tab is present in block list
            if(tab.url.includes(blockedSiteList[i].site) && blockedSiteList[i].time == 0){
                await deleteTab(tab.id);
                return;
            }
            else if(tab.url.includes(blockedSiteList[i].site) ){
                blockedSiteList[i].time = blockedSiteList[i].time-1;
                return;
            }
        }
    }
    // if in block time == 0 => delete tab
    // else decrement time by 1
}
setInterval(polling , 1000);



function getTab(){
    return new Promise(function(resolve , reject){
        chrome.tabs.query({active:true , currentWindow:true} , function(tabs){
            resolve(tabs[0]);
        })
    })
}

function deleteTab(tabId){
return new Promise(function(resolve , reject){
    chrome.tabs.remove(tabId, function(){
        resolve();
    })
})
}



