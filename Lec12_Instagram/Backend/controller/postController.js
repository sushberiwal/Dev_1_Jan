const postModel = require("../model/postsModel");

async function createPost(req, res) {
  try {
    let postObject = req.body;
    if (req.file) {
      let postPicPath =
        req.file.destination.substring(6) + "/" + req.file.filename;
      postObject.postImage = postPicPath;
    }
    console.log(postObject);
    let postCreated = await postModel.create(postObject);
    res.json({
      message: "Succesfully created post !",
      postCreated,
    });
  } catch (error) {
    res.json({
      message: "Failed to create Post !!",
      error,
    });
  }
  console.log("Inside create Post !!!");
}

async function getAllPosts(req, res) {
  try {
    let posts = await postModel.find();
    res.json({
      message: "succesfully got all posts !!",
      posts,
    });
  } catch (error) {
    res.json({
      message: "Failed to get all posts !!",
      error,
    });
  }
}


async function getMyPosts(req , res){
  try{
    let uid = req.params.uid;
    let posts = await postModel.find({uid:uid}).exec();
    res.json({
      message:"Succesfully got all posts" ,
      posts
    })
  }
  catch(error){
    res.json({
      message:"Failed to get my posts",
      error
    })
  }
}

module.exports.createPost = createPost;
module.exports.getAllPosts = getAllPosts;
module.exports.getMyPosts = getMyPosts;