const userModel = require("../model/userModel");


function createUser(req , res){
    // console.log("Inside create User function !!!");
    userModel.create({
        name:"steve" ,
        username:"wintersoldier",
        bio:"iamcaptain",
        email:"steve@gmail.com",
        password:"1231213"
    }).then(function(createdUser){
        res.json({
            createdUser
        })
    })
}


module.exports.createUser = createUser;


