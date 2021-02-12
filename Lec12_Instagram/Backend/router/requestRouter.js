const { sendRequest } = require("../controller/requestController");

const requestRouter = require("express").Router();


requestRouter.route("").post(sendRequest);


module.exports = requestRouter;