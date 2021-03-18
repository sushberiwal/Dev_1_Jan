import React, { Component } from "react";
import { contactCodes } from "../../util/codes";

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
  };

  onChangeHandler = (e) => {
    // console.log(contactCodes);

    let id = e.target.id;
    let value = e.target.value;

    this.setState({
      [id]: value,
    });
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
                  value={this.state.code}
                  onChange={(e) => {
                    this.onChangeHandler(e);
                  }}
                />
              </div>
            );
          })}
        </div>
        <div className="resume-viewer">
          <h1>{this.state.fname}</h1>
        </div>
      </div>
    );
  }
}

export default Contact;
