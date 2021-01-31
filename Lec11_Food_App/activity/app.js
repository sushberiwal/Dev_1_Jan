const express = require("express");

// nodejs => code se server build hota tha => express nodejs ke code easy way me
const app = express();


// app . get method , route = localhost:3000/ , function( request , response  )



app.get("/home" , function(req , res){
    // req.body => client se request

    res.send("<h1>Welcome to home page !!</h1>");
})




// app has started
app.listen(3000  , function(){
    console.log("app is started at port 3000 !!");
})


 