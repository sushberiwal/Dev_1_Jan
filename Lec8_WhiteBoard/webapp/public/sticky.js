{/* <div class="sticky">
<div class="sticky-nav">
    <div class="minimize"></div>
    <div class="close"></div>
</div>
<div class="sticky-content">
    <textarea id="sticky-text"></textarea>
</div>
</div> */}

let stickyIcon = document.querySelector("#sticky");

stickyIcon.addEventListener("click" , function(){
    let stickyText = document.createElement("textarea");
    stickyText.setAttribute("id" , "sticky-text");
    //<textarea id="sticky-text"></textarea>
    createSticky(stickyText);
})