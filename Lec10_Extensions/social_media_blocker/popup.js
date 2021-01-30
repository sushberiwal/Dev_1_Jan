let siteName = document.querySelector("#site-name");
let blockedList = document.querySelector("#blocked-list");
let blockBtn = document.querySelector("#block-site");


siteName.addEventListener("keyup" , function(e){
    // console.log(e.keyCode);
    if(e.keyCode == "13"){
        blockBtn.click();
    }
})

blockBtn.addEventListener("click" , function(){
    let site = siteName.value;
    if(site){
        // <li class="list-group-item d-flex justify-content-between">Youtube  <button class="btn btn-danger">UNBLOCK</button></li>
        let li = document.createElement("li");
        li.classList.add("list-group-item");
        li.classList.add("d-flex");
        li.classList.add("justify-content-between");
        li.innerHTML = site;

        let button = document.createElement("button");
        button.classList.add("btn");
        button.classList.add("btn-danger");
        button.innerHTML = "UNBLOCK";

        
        button.addEventListener("click" , function(){
            li.remove();
        })


        li.append(button);
        blockedList.append(li);
        siteName.value = "";

    }
})