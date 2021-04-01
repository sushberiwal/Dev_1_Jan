import React, { Component } from "react";
import "./Templates.css";
import firebaseApp from "../../firebase/firebaseConfig";
import firebase from "firebase";
import initialState from "../../util/initialState";

class Templates extends Component {
  state = {
    skins: [
      { id: "skin1", path: "./images/skin1.png" },
      { id: "skin2", path: "./images/skinv.png" },
      { id: "skin3", path: "./images/skin3.svg" },
      { id: "skin4", path: "./images/skin4.svg" },
      { id: "skin5", path: "./images/skin5.svg" },
      { id: "skin6", path: "./images/skin6.svg" },
      { id: "skin7", path: "./images/skin7.svg" },
      { id: "skin8", path: "./images/skin8.svg" },
    ],
  };

  handleChooseTemplate = async (e) => {
    let skinId = e.target.id;
    console.log(skinId);
    // get skinID 
    // let resumeId;
    // if(!this.props.resumeId){
    //   let addObj = await firebaseApp.firestore().collection("resumes").add( { skinId : skinId , ...initialState  }  );
    //   resumeId = addObj.id;
    //   await firebaseApp.firestore().collection("users").doc(this.props.uid).update({
    //     Resumes: firebase.firestore.FieldValue.arrayUnion(resumeId)
    //   })
    //   this.props.history.push("/contact");
    //   this.props.setResumeId(resumeId);
    // }
    // else{
    this.props.history.push({ pathname: "/contact", state: { skinId : skinId } });
    // }
  };

  render() {
    return (
      <div className="templates-page">
        <div className="landing-content">
          <h1>Select a resume template to get started</h1>
          <p>You’ll be able to edit and change this template later!</p>
        </div>
        <div className="templates">
          {this.state.skins.map((skin) => {
            return (
              <div key={skin.id} className="template">
                <div className="template-image">
                  <img src={skin.path} alt="" />
                </div>
                <div
                  className="choose-template"
                  id={skin.id}
                  onClick={(e) => this.handleChooseTemplate(e)}
                >
                  Choose Template
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Templates;
