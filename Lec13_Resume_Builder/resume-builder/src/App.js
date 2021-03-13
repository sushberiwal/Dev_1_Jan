// npm install firebase
// import firebaseApp from "./firebase/firebaseConfig";
import React, { Component } from "react";
import firebaseApp from "./firebase/firebaseConfig";
import Skin from "./Components/Skins/skin1.jsx";
import Navbar from "./Components/NavBar/Navbar.jsx";
import SignIn from "./Components/SignIn/SignIn";

import {BrowserRouter as Router , Redirect, Route , Switch } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import About from "./Components/About/About";
import Templates from "./Components/Templates/Templates";
import Profile from "./Components/Profile/Profile"
import SignUp from "./Components/SignUp/Signup";
class App extends Component {
  state = {
    isAuth : false,
    user : null
  };


  logout = () =>{
    firebaseApp.auth().signOut().then( obj =>{
      console.log("Signed Out !!!!");
      this.setState({
        isAuth : false ,
        user : null
      })
    } )
  }

  login = (id , pw) =>{
    // log in to firebase !!!!
    firebaseApp.auth().signInWithEmailAndPassword(id , pw).then(obj =>{
      console.log("logged in");
      console.log(obj.user);
    })
  }


  signup = () =>{
    // log in to firebase !!!!
    let id = "tony@gmail.com";
    let pw = "123456789";
    firebaseApp.auth().createUserWithEmailAndPassword(id , pw).then( obj =>{
      console.log("user Created !!");
      console.log(obj);
      // add user to usersCollection
      let uid = obj.user.uid;
      let email = obj.user.email;
      let name = "Tony Stark";

      let userSetPromise = firebaseApp.firestore().collection("users").doc(uid).set({
        Name : name ,
        Email : email  
      })
      return userSetPromise;
    }).then( obj =>{
      console.log("Inside user Set Promise Ka then !!!!!");
      console.log("obj");
    } )
  }

  // componentDidMount() {
    // console.log(firebaseApp);
    // API call
    
    // get all documents
    // firebaseApp.firestore().collection("resumes").get().then( allDocs =>{
    //   allDocs.forEach( doc =>{
    //     console.log(doc.id);
    //     console.log(doc.data());
    //   })
    // })
    
    // get a document
    // firebaseApp.firestore().db.collection("resumes").doc("tIf5NobFzcJjYHJnFZiI").get().then( doc =>{
    //   console.log(doc.data());
    // } )
  // }

  componentDidMount(){
    firebaseApp.auth().onAuthStateChanged( (user) =>{
      console.log("Inside auth state changed !!");
        this.setState({
          isAuth : user ? true : false ,
          user : user ? user.uid : null 
        })
        // this.setState({
        //   isAuth : false,
        //   user : null
        // })
    })
  
  }

  addData = () => {
    // console.log("Inside add Data !!");
    // firebaseApp.firestore().collection("resumes").doc("tIf5NobFzcJjYHJnFZiI").update({
    //   contactDetails : {
    //     Name : "Sushant",
    //     Phone : "123456789",
    //     Email : "abcd@test.com"
    //   }
    // }).then( ()=>{
    //   console.log("skin set !!!");
    // } )
  };

  render() {
    let { isAuth } = this.state;
    return (
      <Router>
      <div className="App">
        <Navbar isAuth = {isAuth} logout = {this.logout}></Navbar>
        <Switch>
          
          <Route path="/" exact>
            <LandingPage></LandingPage>
          </Route>
          
          <Route path="/about" exact>
            {/* <About></About> */}
            <Skin></Skin>
          </Route>
          
          <Route path="/templates" exact>
            {isAuth ? <Templates> </Templates> : <Redirect to="/login"></Redirect>  }
          </Route>
          
          <Route path="/profile" exact>
            {isAuth ? <Profile></Profile> : <Redirect to="/login"></Redirect>}
          </Route>

          <Route path="/signup">
            {isAuth ? <Redirect to="/"></Redirect> : <SignUp signup = {this.signup}></SignUp> }
          </Route>

          <Route path="/signin" exact>
          {isAuth ? <Redirect to="/"></Redirect> : <SignIn login = {this.login}></SignIn> }
          </Route>

        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
