// npm install firebase
// import firebaseApp from "./firebase/firebaseConfig";
import React, { Component } from "react";
import firebaseApp from "./firebase/firebaseConfig";
import Skin from "./Components/Skins/skin11.jsx";
import Navbar from "./Components/NavBar/Navbar.jsx";
import SignIn from "./Components/SignIn/SignIn";

import {BrowserRouter as Router , Redirect, Route , Switch } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import About from "./Components/About/About";
import Templates from "./Components/Templates/Templates";
import Profile from "./Components/Profile/Profile"
import SignUp from "./Components/SignUp/Signup";
import Contact from "./Components/Contact/Contact";
import Education from "./Components/Education/Education";
import Finalize from "./Components/Finalize/Finalize";
class App extends Component {
  state = {
    isAuth : false,
    user : null ,
    selectResumeId : null 
  };


  setResumeId = (id)=>{
    this.setState({
      selectResumeId : id
    })
  }


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
    firebaseApp.auth().onAuthStateChanged( async (user) =>{
      console.log("Inside auth state changed !!");
      let selectResumeId = null;
      // check if logged in ??
      if(user){
        // get selected resumeId
        let doc = await firebaseApp.firestore().collection("users").doc(user.uid).get();
        let resumes = doc.data()["Resumes"];
        for(let i=0 ; i<resumes.length ; i++){
          if(resumes[i].isSelected){
            selectResumeId = resumes[i].resumeId;
            break;
          }
        }
      }
        this.setState({
          isAuth : user ? true : false ,
          user : user ? user.uid : null ,
          selectResumeId : selectResumeId
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

          <Route path="/contact" exact render={  (props) => this.state.isAuth ? <Contact {...props} uid={this.state.user} resumeId={this.state.selectResumeId} ></Contact> : <Redirect to="/signin"></Redirect>  }></Route>
          <Route path="/education" exact render={  (props) => this.state.isAuth ? <Education {...props} uid={this.state.user} resumeId={this.state.selectResumeId} ></Education> : <Redirect to="/signin"></Redirect>  }></Route>
          <Route path="/finalize" exact render={  (props) => this.state.isAuth ? <Finalize {...props} uid={this.state.user} resumeId={this.state.selectResumeId} ></Finalize> : <Redirect to="/signin"></Redirect>  }></Route>
          {/* <Route path="/templates" exact component={Templates}></Route> */}
          {/* {isAuth ? <Templates> </Templates> : <Redirect to="/login"></Redirect>  } */}     


            <Route path="/templates" exact render = {   (props) => this.state.isAuth ? <Templates {...props}  uid = {this.state.user} resumeId={this.state.selectResumeId} setResumeId={this.setResumeId}></Templates> : <Redirect to="/signin"></Redirect>  }></Route>

          
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
