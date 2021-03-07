// npm install firebase
// import firebaseApp from "./firebase/firebaseConfig";
import React, { Component } from "react";
import firebaseApp from "./firebase/firebaseConfig";
import Skin from "./Components/Skins/skin1.jsx";
import Navbar from "./Components/NavBar/Navbar.jsx";
import Login from "./Components/Login/Login";

class App extends Component {
  state = {
    isAuth : false
  };

  componentDidMount() {
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
      <div className="App">
        <Navbar isAuth = {isAuth}></Navbar>
        <Login />

      </div>
    );
  }
}

export default App;
