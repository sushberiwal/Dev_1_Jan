let myPenSize;
let myPenColor;
socket.on("mousedown" , function(pointObject){
    myPenSize = ctx.lineWidth;
    myPenColor = ctx.strokeStyle;
    ctx.lineWidth = pointObject.lineWidth;
    ctx.strokeStyle = pointObject.strokeStyle;
    ctx.beginPath();
    ctx.moveTo(pointObject.x , pointObject.y);
})

socket.on("mousemove" , function(pointObject){
    ctx.lineTo(pointObject.x , pointObject.y);
    ctx.stroke();
})

socket.on("mouseup" , function(){
    ctx.lineWidth = myPenSize;
    ctx.strokeStyle = myPenColor;
})