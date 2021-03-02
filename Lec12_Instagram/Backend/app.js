// npm init -y
// npm i express nodemon mongoose
const express = require("express");
const cookie = require("cookie-session");
const passport = require("passport");
let GoogleStrategy = require("passport-google-oauth2").Strategy;
let { CLIENT_ID, CLIENT_PW } = require("./config/secrets");
const requestRouter = require("./router/requestRouter");
const userRouter = require("./router/userRouter");
const postRouter = require("./router/postRouter");
const authRouter = require("./router/authRouter");
const userModel = require("./model/userModel");



const app = express();

app.use(express.static("public"));
app.use(cookie({
    maxAge : 24*24*100 ,
    keys : ["ajksfhkajbfkjabu"]  // userInfo + keys => id cookie save hoti hai => cookie id + keys => userInfo
}))

// dumps post data into req.body
app.use(  express.json() );

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
        callbackURL: "http://localhost:4000/auth/callback",
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
  



// for all the user related functions navigate to userRouter;
//localhost:3000/api/user post method
app.use("/api/user" , userRouter);



// for all the post related functions 
app.use("/api/post" , postRouter);


// for all the functions
// localhost:3000/api/request
app.use("/api/request" , requestRouter);


app.use("/auth" , authRouter);


app.listen(4000 , function(){
    console.log("server started at port 4000 !!");
})