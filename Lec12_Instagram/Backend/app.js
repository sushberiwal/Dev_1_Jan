// npm init -y
// npm i express nodemon mongoose
const express = require("express");
const userRouter = require("./router/userRouter");

const app = express();




// for all the user related functions navigate to userRouter;
app.use("/api/user" , userRouter);








app.listen(3000 , function(){
    console.log("server started at port 3000 !!");
})