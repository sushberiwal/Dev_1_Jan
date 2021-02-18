const { sendRequest, acceptRequest, pendingRequests, getAllFollowing, getAllFollowers, getSuggestions } = require("../controller/requestController");

const requestRouter = require("express").Router();


requestRouter.route("").post(sendRequest);
requestRouter.route("/accept").post(acceptRequest);
requestRouter.route("/following/:uid").get(getAllFollowing);
requestRouter.route("/followers/:uid").get(getAllFollowers);
requestRouter.route("/suggestions/:uid").get(getSuggestions);
requestRouter.route("/:uid").get(pendingRequests);


module.exports = requestRouter;