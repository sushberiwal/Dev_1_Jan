const express = require("express");
const multer = require("multer"); // it handles multipart form data 
const app = express();
const path = require("path");

app.use(express.static("public"));

// to see json data in req.body;
app.use(express.json());

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'public/images');
    },
    filename: function(req, file, cb){
        console.log("Inside multer");
        console.log(file);                     
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const fileFilter = function(req, file, cb){
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png' || file.mimetype == 'image/jpg'  ) {
        cb(null, true); // accept file is true passed 
    } else {
        cb(null, false); // reject file
    }
}

const upload = multer({ storage: storage , fileFilter : fileFilter });


app.post("/imageUpload" , upload.single('photo') , function(req , res){
    console.log("Inside callback function");
    console.log(req.file);
    console.log(req.body);
});



app.listen(3000 , function(){
    console.log("app started at port 3000 !!");
})