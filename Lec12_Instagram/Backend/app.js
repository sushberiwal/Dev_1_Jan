// npm init -y
// npm i express nodemon mongoose
const express = require("express");
const userRouter = require("./router/userRouter");

const app = express();

// dumps post data into req.body
app.use(  express.json() );


// for all the user related functions navigate to userRouter;
//localhost:3000/api/user post method
app.use("/api/user" , userRouter);




// app.get("/api/user/:id" , function(req , res){
//     console.log(req.params.id);
// })





app.listen(3000 , function(){
    console.log("server started at port 3000 !!");
})