const express = require("express");
const { createUser, getAllUsers } = require("../Controller/userController");
const userRouter = express.Router();


// localhost:3000/api/user
userRouter.route("").get(getAllUsers).post(createUser);





module.exports = userRouter;