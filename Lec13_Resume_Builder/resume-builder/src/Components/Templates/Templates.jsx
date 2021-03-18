import React, { Component } from "react";
import "./Templates.css";
import firebaseApp from "../../firebase/firebaseConfig";
import firebase from "firebase";
import initialState from "../../util/initialState";

class Templates extends Component {
  state = {
    skins: [
      {id:"skin1" , path:"./images/skini.png"},
      {id:"skin2" , path:"./images/skinv.png"},
      {id:"skin3" , path:"./images/skin3.svg"},
      {id:"skin4" , path:"./images/skin4.svg"},
      {id:"skin5" , path:"./images/skin5.svg"},
      {id:"skin6" , path:"./images/skin6.svg"},
      {id:"skin7" , path:"./images/skin7.svg"},
      {id:"skin8" , path:"./images/skin8.svg"},
    ],
  };
  
  
  handleChooseTemplate = async (e)=>{
    let skinId = e.target.id;
    console.log(skinId);
    // get skinID 
    let addObj = await firebaseApp.firestore().collection("resumes").add( { skinId : skinId , ...initialState  }  );
    let resumeId = addObj.id;
    await firebaseApp.firestore().collection("users").doc(this.props.uid).update({
      Resumes: firebase.firestore.FieldValue.arrayUnion(resumeId)
    })
    this.props.history.push("/contact");
  }


  render() {
    return <div className="templates">
        {this.state.skins.map( skin =>{
            return <div key={skin.id} className="template">
                <div className="template-image">
                    <img src={skin.path} alt=""/>
                </div>
                <div className="choose-template" id={skin.id} onClick={ (e) => this.handleChooseTemplate(e)}>Choose Template</div>
            </div>
        })}
    </div>;
  }
}

export default Templates;
