let undo = document.querySelector("#undo");
let redo = document.querySelector("#redo");


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