import React, { Component } from "react";
import firebaseApp from "../../firebase/firebaseConfig";
import { contactCodes } from "../../util/codes";
import Skin1 from "../Skins/skin1";
import "./Contact.css";

class Contact extends Component {
  state = {
    codes: [
      "fname",
      "lname",
      "summary",
      "email",
      "phone",
      "profession",
      "street",
      "city",
      "state",
      "country",
      "pin",
    ],
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
    skinId: null,
  };

  onChangeHandler = (e) => {
    // console.log(contactCodes);
    let id = e.target.id;
    let value = e.target.value;
    let oldContactDetails = this.state.contactDetails;
    this.setState({
      contactDetails: {
        ...oldContactDetails,
        [id]: value,
      },
    });
  };

  componentDidMount() {
    // if coming back from education page
    if (this.props.location.state.contactDetails) {
      this.setState({
        contactDetails: this.props.location.state.contactDetails,
        skinId: this.props.location.state.skinId,
      });
    } else if (this.props.location.state.resumeId) {
      console.log("Coming from my resumes !!!");
      // if coming from myResumes
      // contactDetails
      // skinId
      // selectedResumeId
      this.setState({
        contactDetails: this.props.location.state.resumeDetails.contactDetails,
        skinId: this.props.location.state.resumeDetails.skinId,
      });
    } else {
      // if coming from templates page
      this.setState({
        skinId: this.props.location.state.skinId,
      });
    }

    // get contactDetails of the selected Resume !!!
    // firebaseApp.firestore().collection("resumes").doc(this.props.resumeId).get().then( doc =>{
    //   console.log("Inside component did mount of contact !!!");
    //   let {contactDetails , skinId} = doc.data();

    //   // console.log(contactDetails);
    //   // console.log(skinId);
    //   this.setState({
    //     contactDetails : contactDetails ,
    //     skinId : skinId
    //   })
    // })
  }

  nextButtonHandler = async () => {
    console.log("next button clicked !!");
    // save contactDetails object in doc
    // await firebaseApp.firestore().collection("resumes").doc(this.props.resumeId).update({
    //   contactDetails : this.state.contactDetails
    // });
    if(this.props.location.state.resumeId){
      this.props.history.push({
        pathname: "/education",
        state: {
          contactDetails: this.state.contactDetails,
          skinId: this.state.skinId,
          originalDetails : this.props.location.state.resumeDetails ,
          resumeId : this.props.location.state.resumeId
        },
      });
    }
    else{
          this.props.history.push({
            pathname: "/education",
            state: {
              contactDetails: this.state.contactDetails,
              skinId: this.state.skinId,
            },
          });
    }
  };

  backButtonHandler = () => {
    console.log("back button clicked !!");
    this.props.history.goBack();
  };

  render() {
    return (
      <div className="contact-details">
        <div className="contact-form">
          {this.state.codes.map((code) => {
            return (
              <div className="contact-form-element" key={code}>
                <label htmlFor="">{contactCodes[code]}</label>
                <input
                  type="text"
                  id={code}
                  value={this.state.contactDetails[code]}
                  onChange={(e) => {
                    this.onChangeHandler(e);
                  }}
                />
              </div>
            );
          })}
          <button className="btn" onClick={this.nextButtonHandler}>
            Next
          </button>
          <button className="btn" onClick={this.backButtonHandler}>
            Back
          </button>
        </div>
        <div className="resume-viewer">
          {/* get skin according to skinId */}
          {/* <Skin skinId={this.state.skinId} contactDetails = {this.state.contactDetails} ></Skin> */}
          <Skin1 contactDetails={this.state.contactDetails}></Skin1>
        </div>
      </div>
    );
  }
}

export default Contact;
