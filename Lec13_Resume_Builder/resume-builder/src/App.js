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
import Contact from "./Components/Contact/Contact";
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

  componentDidMount(){
    // event attached to auth state changed
    firebaseApp.auth().onAuthStateChanged( (user) =>{
      console.log("Inside auth state changed !!");
        this.setState({
          isAuth : user ? true : false ,
          user : user ? user.uid : null 
        })
    })
  
  }

  render() {
    let { isAuth } = this.state;
    return (
      <Router>
      <div className="App">
        <Navbar isAuth = {isAuth} logout = {this.logout}></Navbar>
        <Switch>
          
          <Route path="/" exact >
            <LandingPage isAuth = { isAuth }></LandingPage>
          </Route>
          
          <Route path="/about" exact>
            <About></About>
            {/* <Skin></Skin> */}
          </Route>

          <Route path="/contact" exact>
            <Contact></Contact>
          </Route>
          
          {/* <Route path="/templates" exact component={Templates}></Route> */}
            {/* {isAuth ? <Templates> </Templates> : <Redirect to="/login"></Redirect>  } */}     


            <Route path="/templates" exact render = {   (props) => this.state.isAuth ? <Templates {...props}  uid = {this.state.user}></Templates> : <Redirect to="/signin"></Redirect>  }></Route>

          
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
