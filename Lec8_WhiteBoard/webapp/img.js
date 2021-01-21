let photoUpload = document.querySelector("#photo-upload");
photoUpload.addEventListener("change" , function(e){
    let fileObject = e.target.files[0];
    console.log(fileObject);

    let url = URL.createObjectURL(fileObject);
    // console.log(src);

    let img = document.createElement("img");
    img.src = url;
    document.body.append(img);
    // <img src="" alt="">

})