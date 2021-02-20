// npm init -y
// npm i express nodemon mongoose
const express = require("express");
const requestRouter = require("./router/requestRouter");
const userRouter = require("./router/userRouter");

const app = express();

app.use(express.static("public"));

// dumps post data into req.body
app.use(  express.json() );


// for all the user related functions navigate to userRouter;
//localhost:3000/api/user post method
app.use("/api/user" , userRouter);

// for all the post related functions 
// app.use("/api/post" , postRouter);


// for all the functions
// localhost:3000/api/request
app.use("/api/request" , requestRouter);


// app.use("/api/posts" , postRouter);

app.listen(3000 , function(){
    console.log("server started at port 3000 !!");
})