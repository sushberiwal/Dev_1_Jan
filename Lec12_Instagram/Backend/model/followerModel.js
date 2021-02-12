let { mongoose } = require("./db");


let followerSchema = mongoose.Schema({
    uid : {
        type:String,
        required:true
    } ,
    followerId : {
        type:String,
        required:true
    }
})


let followerModel = mongoose.model('follower' , followerSchema);

module.exports = followerModel;
