const authRouter = require("express").Router();
const passport = require("passport");

authRouter
  .route("/google")
  .get(
    passport.authenticate("google", { scope: ["email", "profile"] }),
    function (req, res) {
      //   res.send("LOGGED IN !!!!");
    }
  );

authRouter
  .route("/callback")
  .get(passport.authenticate("google"), function (req, res) {
    res.redirect("http://localhost:3000");
  });

authRouter.route("/checkAuth").get(function (req, res) {
  if (req.user) {
    res.json({
      isAuth:true ,
      user :req.user
    });
  } else {
    res.json({
      isAuth:false
    });
  }
});


authRouter.route("/destroyCookie").get(function(req , res){
  req.session = null;
  res.json({
    messaged:"LOGGED OUT"
  })
})

module.exports = authRouter;
