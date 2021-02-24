// time : { type : Date, default: Date.now }
// create post => caption , pimage , uid , multer
// get all myfollowing posts => feeds posts
// update posts => edit post => caption edit
// delete posts => delete post by id
// get my posts => get only my posts => profile page !!! 

const multer = require("multer");
const { createPost, getAllPosts } = require("../controller/postController");
const postRouter = require("express").Router();
const path = require("path");



const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'public/images/posts');
    },
    filename: function(req, file, cb){
        cb(null, Date.now() + path.extname(file.originalname));
    }
  });
const fileFilter = function(req, file, cb){
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png' || file.mimetype == 'image/jpg'  ) {
        cb(null, true); // accept file is true passed 
    } else {
        cb(null, false); // reject fileb
    }
}
const upload = multer({ storage: storage , fileFilter : fileFilter });
  


postRouter.route("").get(getAllPosts).post( upload.single('post') , createPost);



module.exports = postRouter;