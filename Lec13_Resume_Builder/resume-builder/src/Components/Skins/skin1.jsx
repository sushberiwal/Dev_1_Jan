import React, { Component } from "react";
import "./skin1.css";
class Skin extends Component {
  state = {
    contactDetails: {
      fname: "STEVE",
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
      { companyName: "", duration: "", position: "" },
      { companyName: "", duration: "", position: "" },
      { companyName: "", duration: "", position: "" },
    ],
    projects: [
      { projectName: "", techStack: ["", "", ""], summary: "" , projectLink:"" },
      { projectName: "", techStack: ["", "", ""], summary: "" , projectLink:""},
      { projectName: "", techStack: ["", "", ""], summary: ""  , projectLink:""},
      { projectName: "", techStack: ["", "", ""], summary: ""  , projectLink:""}
    ],
    skills : {
        language : ["" , "" , ""] ,
        frameworks : ["" , "" , ""] ,
        software : ["" , "" , ""] ,
        ide : ["" , "" , ""]
    } ,
    profileLinks : {
        linkedIn : "" ,
        github : "" 
    } ,
    achievements : ["" ,"" ,"" , "" ,""] ,
    hobbies : ["" , "" , "" , "" , ""] 
  };
  render() {
    let {
      fname,
      lname,
      summary,
      email,
      phone,
      profession,
      street,
      city,
      state,
      country,
      pin,
    } = this.state.contactDetails;
    let {
      collegeName,
      degree,
      cgpa,
      collegeCity,
      collegeState,
      graduationMonth,
      graduationYear,
    } = this.state.educationDetails;
    return (
      <div className="resume-skin">
        <h1> {fname} </h1>
      </div>
    );
  }
}

export default Skin;
