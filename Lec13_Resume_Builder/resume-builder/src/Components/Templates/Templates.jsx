import React, { Component } from "react";
import "./Templates.css";
import firebaseApp from "../../firebase/firebaseConfig";

class Templates extends Component {
  state = {
    skins: [
      {id:"skin1" , path:"./images/skin1.svg"},
      {id:"skin2" , path:"./images/skin2.svg"},
      {id:"skin3" , path:"./images/skin3.svg"},
      {id:"skin4" , path:"./images/skin4.svg"},
      {id:"skin5" , path:"./images/skin5.svg"},
      {id:"skin6" , path:"./images/skin6.svg"},
      {id:"skin7" , path:"./images/skin7.svg"},
      {id:"skin8" , path:"./images/skin8.svg"},
    ],
  };
  
  
  handleChooseTemplate = (e)=>{

    let skinId = e.target.id;
    // set document in resumes collection
    firebaseApp.firestore().collection("resumes").doc().set({
      skinId : skinId ,
      contactDetails: {
        fname: "",
        lname: "",
        summary: "",
        email: "",
        phone: "",
        profession: "",
        street: "",
        city: "",
        state: "",
        country: "",
        pin: "",
      },
      educationDetails: {
        collegeName: "",
        degree: "",
        cgpa: "",
        collegeCity: "",
        collegeState: "",
        graduationMonth: "",
        graduationYear: "",
      },
      experienceDetails: [
      ],
      projects: [],
      skills : {
          language : [] ,
          frameworks : [] ,
          software : [] ,
          ide : []
      } ,
      profileLinks : {
          linkedIn : "" ,
          github : "" 
      } ,
      achievements : [] ,
      hobbies : [] 
    }).then( obj =>{
      console.log("inside then");
      console.log(obj);
    })
    .catch(error =>{
      console.log("Inside catch !!!")
      console.log(error);
    })



      // this.props.history.push("/contact"); 

      // window.location = "/contact";  // it will force the page to reload
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
