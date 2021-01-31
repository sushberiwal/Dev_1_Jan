const usersDb = require("../Model/usersDb.json");
const fs = require("fs");


function createUser(req , res){
    //console.log("inside create user !!!");
    let userData = req.body;    
    if(userData.name){
        usersDb.push(userData);
        // console.log(usersDb);
        fs.writeFileSync("./Model/usersDb.json" , JSON.stringify(usersDb));
        res.status(200).json({
            message:"User Created Succesfully !!!"
        })
    }else{
        res.status(200).json({
            message:"User Data is empty can't create user !!!"
        })
    }
}

function getAllUsers(req , res){
    res.json({
        message:"Succesfully got all users",
        usersDb
    })
}

function getUserById(req , res){
    
}

function deleteUserById(req , res){
}


function updateUserById(req , res){
}

module.exports.createUser = createUser;
module.exports.getAllUsers = getAllUsers;
module.exports.getUserById = getUserById;
module.exports.deleteUserById = deleteUserById;
module.exports.updateUserById = updateUserById;