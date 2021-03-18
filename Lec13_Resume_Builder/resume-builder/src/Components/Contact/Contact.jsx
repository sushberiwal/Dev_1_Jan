import React, { Component } from "react";
import firebaseApp from "../../firebase/firebaseConfig";
import { contactCodes } from "../../util/codes";
import Skin from "../Skins/Skin";
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
    skinId:null
  };

  onChangeHandler = (e) => {
    // console.log(contactCodes);

    let id = e.target.id;
    let value = e.target.value;
    let oldContactDetails = this.state.contactDetails;
    this.setState({
        contactDetails:{
            ...oldContactDetails ,
            [id]:value
        }
    });
  };


  componentDidMount(){
    // get contactDetails of the selected Resume !!!
    firebaseApp.firestore().collection("resumes").doc(this.props.resumeId).get().then( doc =>{
      console.log("Inside component did mount of contact !!!");
      let {contactDetails , skinId} = doc.data();
      
      // console.log(contactDetails);
      // console.log(skinId);
      this.setState({
        contactDetails : contactDetails ,
        skinId : skinId
      })
    })
  }

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
        </div>
        <div className="resume-viewer">
          {/* get skin according to skinId */}
          {/* <Skin skinId={this.state.skinId} contactDetails = {this.state.contactDetails} ></Skin> */}
          <Skin1 contactDetails = {this.state.contactDetails}></Skin1>
        </div>
      </div>
    );
  }
}

export default Contact;
