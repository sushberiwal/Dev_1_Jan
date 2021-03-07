import firebaseApp from "./firebase/firebaseConfig";

import React, { Component } from 'react';

class App extends Component {
  state = {  }


  componentDidMount(){
    // API call
    // get all documents
    // firebaseApp.db.collection("resumes").get().then( allDocs =>{
    //   allDocs.forEach( doc =>{
    //     console.log(doc.id);
    //     console.log(doc.data());
    //   })
    // })

    // get a document
    firebaseApp.db.collection("resumes").doc("tIf5NobFzcJjYHJnFZiI").get().then( doc =>{
      console.log(doc.data());
    } )
  }


  render() { 
    return ( <h1>Firebase Demo</h1>);
  }
}
 
export default App;
