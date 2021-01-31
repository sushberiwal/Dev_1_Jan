const express = require("express");

// nodejs => code se server build hota tha => express nodejs ke code easy way me
const app = express();
const userRouter = require("./Router/userRouter");

// app . get method , route = localhost:3000/ , function( request , response  )


// adds data in req.body
app.use(  express.json() );



// localhost:3000/api/user
app.use("/api/user" , userRouter);

//localhost:3000/api/plans
// app.use("/api/plans" , planRouter);





// app has started
app.listen(3000  , function(){
    console.log("app is started at port 3000 !!");
})


 