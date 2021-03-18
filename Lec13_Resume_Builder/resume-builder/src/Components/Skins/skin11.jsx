import React, { Component } from "react";
import "./skin11.css";
class Skin extends Component {
  state = {
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
      { companyName: "", duration: "", position: "" },
      { companyName: "", duration: "", position: "" },
      { companyName: "", duration: "", position: "" },
    ],
    projects: [
      { projectName: "A", techStack: ["E", "F", "G"], summary: "asfasf" , projectLink:"" },
      { projectName: "B", techStack: ["J", "I", "H"], summary: "asgasdg" , projectLink:""},
      { projectName: "C", techStack: ["K", "L", "M"], summary: "asdgasg"  , projectLink:""},
      { projectName: "D", techStack: ["P", "O", "N"], summary: "asdgasg"  , projectLink:""}
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

    let projects = this.state.projects;
    return (
      
      // projects: [
      //   { projectName: "", techStack: ["", "", ""], summary: "" , projectLink:"" },
      //   { projectName: "", techStack: ["", "", ""], summary: "" , projectLink:""},
      //   { projectName: "", techStack: ["", "", ""], summary: ""  , projectLink:""},
      //   { projectName: "", techStack: ["", "", ""], summary: ""  , projectLink:""}
      // ]
      <div className="resume-skin">
        
        <div className="projects">
          {  projects.map( project =>{
            return <ul className="project item">
                      <li>{project.projectName}</li>
                      <li>{project.techStack.map( techStack =>{
                        return <p>{techStack}</p>;
                      })}</li>
                      <li>{project.summary}</li>
            </ul>
          })}

        </div>
      
      </div>
    );
  }
}

export default Skin;
