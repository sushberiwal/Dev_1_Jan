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
        isAuth : false
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
            <About></About>
          </Route>
          
          <Route path="/templates" exact>
            {isAuth ? <Templates> </Templates> : <Redirect to="/login"></Redirect>  }
          </Route>
          
          <Route path="/profile" exact>
            {isAuth ? <Profile></Profile> : <Redirect to="/login"></Redirect>}
          </Route>

          <Route path="/signup">
            {isAuth ? <Redirect to="/"></Redirect> : <SignUp></SignUp> }
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
