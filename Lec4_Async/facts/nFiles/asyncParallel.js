const fs = require("fs");
const files = ["../f1.txt" , "../f2.txt" , "../f3.txt"];



for(let i=0 ; i<files.length ; i++){
    
    fs.readFile(files[i] , function(error , data){
        console.log(data+"");
    })
}
    
    // console.log("end")
    // console.log("end")
    // console.log("end")
    // console.log("end")
    // console.log("end")
    // console.log("end")
    // console.log("end")
    // console.log("end")
    // console.log("end")
    // console.log("end")
    // console.log("end")
    // console.log("end")
    // console.log("end")
    // console.log("end")
    // console.log("end")
    // console.log("end")
