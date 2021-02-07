const { createUser, getAllUsers, getUserById, updateUserById, deleteUserById } = require("../controller/userController");

const userRouter = require("express").Router();


// "localhost:3000/api/user"
userRouter.route("").get(getAllUsers).post(createUser);

// "localhost:3000/api/user/601f74168bcb3829808ab833"
userRouter.route("/:id").get(getUserById).patch(updateUserById).delete(deleteUserById);

module.exports = userRouter;