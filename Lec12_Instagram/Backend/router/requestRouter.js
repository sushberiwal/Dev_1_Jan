const { sendRequest, acceptRequest } = require("../controller/requestController");

const requestRouter = require("express").Router();


requestRouter.route("").post(sendRequest);
requestRouter.route("/accept").post(acceptRequest);


module.exports = requestRouter;