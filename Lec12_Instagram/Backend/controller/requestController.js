const followerModel = require("../model/followerModel");
const followingModel = require("../model/followingModel");
const userModel = require("../model/userModel");

async function sendRequest(req, res) {
  try {
    console.log(req.body);
    let { uid, followId } = req.body;
    // isPublic
    let doc = await userModel.find({ _id: followId }).exec();
    if (doc[0].isPublic) {
      // isPublic = true
      await followingModel.create({
        uid,
        followId,
      });
      await followerModel.create({
        uid: followId,
        followerId: uid,
      });
      res.json({
          message:"Request sent and accepted !!"
      })
    } else {
      // isPublic = false
      await followingModel.create({
        uid,
        followId,
        isAccepted:false
      });
      res.json({
        message:"Request sent and pending !!"
    })
    }
  } catch (error) {
      res.json({
          message:"Failed to send request !!",
          error
      })
  }
}


async function acceptRequest(req , res){
    try{
        let {uid , toBeAccepted} = req.body;
        // change in following document
        let doc = await followingModel.find({uid:toBeAccepted , followId:uid}).exec();
        console.log(doc);
        doc[0].isAccepted = true;
        await doc[0].save();
        await followerModel.create({
            uid ,
            followerId: toBeAccepted ,
        });
        res.json({
            message:"Request Accepted !"
        })
        // add in follower collection
    }
    catch(error){
        res.json({
            message:"Failed to accept request !!",
            error
        })
    }
}


module.exports.sendRequest = sendRequest;
module.exports.acceptRequest = acceptRequest;
