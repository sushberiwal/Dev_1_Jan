const fs = require("fs");
const express = require("express");

// nodejs => code se server build hota tha => express nodejs ke code easy way me
const app = express();
const usersDb = require("./Model/usersDb.json");

// app . get method , route = localhost:3000/ , function( request , response  )

// adds data in req.body
app.use(  express.json() );



// users
function createUser(req , res){
    //console.log("inside create user !!!");
    let userData = req.body;    
    if(userData.name){
        usersDb.push(userData);
        // console.log(usersDb);
        fs.writeFileSync("./Model/usersDb.json" , JSON.stringify(usersDb));
        res.status(200).json({
            message:"User Created Succesfully !!!"
        })
    }else{
        res.status(204).json({
            message:"User Data is empty can't create user !!!"
        })
    }
}
app.post( "/api/user"  , createUser);







// app has started
app.listen(3000  , function(){
    console.log("app is started at port 3000 !!");
})


 