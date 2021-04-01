import React, { Component } from "react";
import firebaseApp from "../../firebase/firebaseConfig";
import Skin1 from "../Skins/skin1";
import ReactToPdf from "react-to-pdf";
import resumeDetails from "../../util/initialState";
import "./Finalize.css";
import initialState from "../../util/initialState";
import firebase from "firebase";

class Finalize extends Component {
  state = {
    skinId: null,
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
      cgpa: "",
      collegeCity: "",
      collegeState: "",
      collegeName: "",
      degree: "",
      graduationMonth: "",
      graduationYear: "",
    },
  };

  handleSave = async () => {
    if(this.props.location.state.resumeId){
      // when updating a resume
      let resumeData = {
        ...this.props.location.state.originalDetails,
        contactDetails: this.state.contactDetails,
        educationDetails: this.state.educationDetails,
        skinId: this.state.skinId,
      };
      await firebaseApp.firestore().collection("resumes").doc(this.props.location.state.resumeId).update(resumeData);
    }
    else{
      // when creating a new resume
      let resumeData = {
        ...initialState,
        contactDetails: this.state.contactDetails,
        educationDetails: this.state.educationDetails,
        skinId: this.state.skinId,
      };
      console.log(resumeData);
      let doc = await firebaseApp.firestore().collection("resumes").add(resumeData);
      console.log(doc);
      let resumeId = doc.id;
      console.log(resumeId);
  
      await firebaseApp.firestore().collection("users").doc(this.props.uid).update({
            Resumes: firebase.firestore.FieldValue.arrayUnion( {isSelected:false , resumeId} )
          })
    }


  };

  componentDidMount() {
    if(this.props.location.state.resumeId){
      let {
        skinId,
        contactDetails,
        educationDetails,
      } = this.props.location.state;
      this.setState({
        skinId,
        educationDetails,
        contactDetails,
      });
    }
    else if(this.props.location.state.resumeDetails){
      let {
        skinId,
        contactDetails,
        educationDetails,
      } = this.props.location.state.resumeDetails;
      this.setState({
        skinId,
        educationDetails,
        contactDetails,
      });
    }
    else{
      let {
        skinId,
        contactDetails,
        educationDetails,
      } = this.props.location.state;
      this.setState({
        skinId,
        educationDetails,
        contactDetails,
      });
    }
    // get all info from resumeId
    // firebaseApp
    //   .firestore()
    //   .collection("resumes")
    //   .doc(this.props.resumeId)
    //   .get()
    //   .then((doc) => {
    //     let { skinId, educationDetails, contactDetails } = doc.data();
    //     this.setState({
    //       skinId,
    //       educationDetails,
    //       contactDetails,
    //     });
    //   });
  }

  resume = React.createRef();

  render() {
    let { skinId, contactDetails, educationDetails } = this.state;
    return (
      <div className="finalize">
        <Skin1
          refProp={this.resume}
          skinId={skinId}
          contactDetails={contactDetails}
          educationDetails={educationDetails}
        ></Skin1>
        <div className="download">
          <ReactToPdf targetRef={this.resume} filename="resume.pdf" scale={0.6}>
            {({ toPdf }) => (
              <button className="btn" onClick={toPdf}>
                Download Resume as a PDF
              </button>
            )}
          </ReactToPdf>
          {!this.props.location.state.resumeSaved && <button className="btn" onClick={this.handleSave}>
            Save
          </button>}
        </div>
      </div>
    );
  }
}

export default Finalize;
