// npm i express nodemon passport passport-google-oauth2 cookie-session
const express = require("express");
const app = express();
const passport = require("passport");
let GoogleStrategy = require("passport-google-oauth2").Strategy;
let { CLIENT_ID, CLIENT_PW } = require("./config/secrets");
let cookie = require("cookie-session");



// db import
let { mongoose } = require("../../../Backend/model/db");
let userModel = require("../../../Backend/model/userModel"); // {name , username , bio , email , pw };

// to use public folder
app.use(express.static("public"));
app.use(cookie({
    maxAge : 24*24*100 ,
    keys : ["ajksfhkajbfkjabu"]  // userInfo + keys => id cookie save hoti hai => cookie id + keys => userInfo
}))

app.use(passport.initialize());
app.use(passport.session());


// serialize
passport.serializeUser( function(user , done){
    console.log("Inside serialize user !!!");
    console.log(user);
    done(null , user);
});

// deserialize
passport.deserializeUser(function(user , done){
    console.log("Inside deserialize user !!");
    done(null , user);
})


// setup passport
passport.use(
  new GoogleStrategy(
    {
      clientID: CLIENT_ID,
      clientSecret: CLIENT_PW,
      callbackURL: "http://localhost:3000/auth/callback",
      passReqToCallback: true,
    },
    async function (request, accessToken, refreshToken, profile, done) {
      try {
        // console.log(profile);
        console.log("INSIDE PASSPORT CALLBACK FUNCTION !!!!!");
        // check if user exist ?
        let email = profile.email;
        let data = await userModel.find({ email: email }).exec();
        if (data.length) {
          //user exist => aagey bdho => serialize
          console.log("Inside already signed up !!!");
          done(null, data[0]); // proceed to serialize
        } else {
          // user dont exist => signup
          let userObject = {
            name: profile.displayName,
            username: profile.email,
            bio: "I am new",
            email: profile.email,
            password: "123456789",
          };
          let userCreated = await userModel.create(userObject);
          console.log("Inside signup");
          // console.log(userCreated)
          done(null, userCreated); // serialize
        }
      } catch (error) {
        done(error);
      }
    }
  )
);

// for login with oAuth
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] }),
  function (req, res) {
    //   res.send("LOGGED IN !!!!");
  }
);

// for oAuth callback
app.get("/auth/callback", passport.authenticate("google"), function (req, res) {
    res.redirect("/");
});

// check Auth
app.get("/checkAuth" , function(req , res){
    if(req.user){
        res.send("LOGGED IN WELCOME" + JSON.stringify(req.user));
    }
    else{
        res.send("YOU ARE NOT LOGGED IN");
    }
})



app.listen(3000, function () {
  console.log("Server started at port 3000 !!!");
});
