let undo = document.querySelector("#undo");
let redo = document.querySelector("#redo");
let pencil = document.querySelector("#pencil");
let eraser = document.querySelector("#eraser");
let pencilOptions = document.querySelector("#pencil-options");
let eraserOptions = document.querySelector("#eraser-options");

pencil.addEventListener("click" , function(){
    // console.log("pencil clicked !!");
    if(pencil.classList.contains("active-tool")){
        // pencil active hai
        // pencil options toggle
        if(pencilOptions.classList.contains("hide")){
            // pencil options are hidden
            pencilOptions.classList.remove("hide")
        }
        else{
            // pencil options active hain
            pencilOptions.classList.add("hide")
        }
    }
    else{
        // pencil active nhi hai
        eraser.classList.remove("active-tool");
        eraserOptions.classList.add("hide");
        pencil.classList.add("active-tool");
    }
})

eraser.addEventListener("click" , function(){
    // console.log("eraser clicked !!!"    );
    if(eraser.classList.contains("active-tool")){
        // eraser active hai
        // eraser options toggle
        if(eraserOptions.classList.contains("hide")){
            eraserOptions.classList.remove("hide");
        }
        else{
            eraserOptions.classList.add("hide");
        }
    }
    else{
        // eraser active nhi h
        pencil.classList.remove("active-tool");
        pencilOptions.classList.add("hide");
        eraser.classList.add("active-tool");

    }
})





undo.addEventListener("click" , function(){
    undoLine();
    
})

redo.addEventListener("click" , function(){
    redoLines();
})


function redoLines(){
    if(redoDB.length){
        let line = redoDB.pop();
        for(let j=0 ; j<line.length ; j++){
            let pointObject = line[j];
            if(pointObject.id == "md"){
                ctx.beginPath();
                ctx.moveTo(pointObject.x , pointObject.y);
            }
            else{
                ctx.lineTo(pointObject.x , pointObject.y);
                ctx.stroke();
            }
        }
        db.push(line);
    }
}

function undoLine(){
    // pop latest line from the db
    // clear Canvas
    // redraw lines();
    if(db.length){
        let latestLine = db.pop();
        redoDB.push(latestLine);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        redrawLines();
        console.log(db);
    }
}
function redrawLines(){
    for(let i=0 ; i<db.length ; i++){
        let line = db[i];

        for(let j=0 ; j<line.length ; j++){
            let pointObject = line[j];
            if(pointObject.id == "md"){
                ctx.beginPath();
                ctx.moveTo(pointObject.x , pointObject.y);
            }
            else{
                ctx.lineTo(pointObject.x , pointObject.y);
                ctx.stroke();
            }
        }
    }
}