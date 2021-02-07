const userModel = require("../model/userModel");


// createUser
// get all users
// get by id
// update user by id
// delete by id



async function createUser(req , res){
    try{
        let userObject = req.body;
        let userCreated = await userModel.create(userObject); 
        res.json({
            message:"Succesfully created User !",
            userCreated
        })
    }
    catch(error){
        res.json({
            message:"Failed to create User !",
            error
        })
    }
}


function getAllUsers(req , res){
}

function getUserById(req ,res){
}
function updateUserById(req , res){
}
function deleteUserById(req , res){
}


module.exports.createUser = createUser;
module.exports.getAllUsers = getAllUsers;
module.exports.getUserById = getUserById;
module.exports.updateUserById = updateUserById;
module.exports.deleteUserById = deleteUserById;



