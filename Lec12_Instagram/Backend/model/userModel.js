let {mongoose} = require("./db");


let userSchema = mongoose.Schema({
    name : {
        type:String ,
        required:true
    } ,
    username :{
        type:String ,
        required:true
    } ,
    bio : {
        type:String ,
        required:true
    } ,
    email : {
        type:String , 
        required:true
    } ,
    password : {
        type:String,
        required:true
    } ,
    isPublic : {
        type : Boolean ,
        default : true
    } ,
    profilePic :{
        type:String , 
        default : "default.png"
    }
})

const userModel = mongoose.model('user' , userSchema);

module.exports = userModel;