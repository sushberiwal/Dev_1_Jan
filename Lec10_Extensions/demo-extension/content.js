let localImages = ["./images/download (1).jpg" , "./images/download.jpg" , "./images/shih-tzu-dog-breed-info.jpg"];

function changeImages(){
    let images = document.querySelectorAll("img");
    // let absolutePath = chrome.extension.getURL(localImages[1]);
    // console.log(absolutePath);
    // chrome.extension.getURL();
    for(let i=0 ; i<images.length ; i++){
        let idx = Math.floor(Math.random() * localImages.length);
        let absolutePath = chrome.extension.getURL(localImages[idx]);
        images[i].src = absolutePath;
    }
}


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
   changeImages();
   sendResponse("images have been changed !!");
});