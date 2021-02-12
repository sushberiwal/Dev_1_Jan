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

module.exports.sendRequest = sendRequest;
