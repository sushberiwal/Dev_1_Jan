console.log("I am content.js file !!!");

let images = document.querySelectorAll("img");

// console.log(images);

let localImages = ["./images/download (1).jpg" , "./images/download.jpg" , "./images/shih-tzu-dog-breed-info.jpg"];


// let absolutePath = chrome.extension.getURL(localImages[1]);
// console.log(absolutePath);
// chrome.extension.getURL();

for(let i=0 ; i<images.length ; i++){
    let idx = Math.floor(Math.random() * localImages.length);
    let absolutePath = chrome.extension.getURL(localImages[idx]);
    images[i].src = absolutePath;
}