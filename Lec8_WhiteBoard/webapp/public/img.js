let photoUpload = document.querySelector("#photo-upload");
let download = document.querySelector("#download");
let photoIcon = document.querySelector("#photo");

photoIcon.addEventListener("click" , function(){
    photoUpload.click();
})

photoUpload.addEventListener("change" , function(e){
    let fileObject = e.target.files[0];
    console.log(fileObject);

    let url = URL.createObjectURL(fileObject);
    // console.log(src);

    let img = document.createElement("img");
    img.src = url;
    img.classList.add("sticky-image");

    createSticky(img);
})


download.addEventListener("click" , function(){
    let aTag = document.createElement("a");
    aTag.download = 'canvas.png';
    aTag.href = canvas.toDataURL("image/png");
    aTag.click();
    // document.body.append(aTag);
})