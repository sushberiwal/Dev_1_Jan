import React, { Component } from "react";
import firebaseApp from "../../firebase/firebaseConfig";
import Skin1 from "../Skins/skin1";
import ReactToPdf from "react-to-pdf";

import "./Finalize.css";

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

  componentDidMount() {
    // get all info from resumeId
    firebaseApp
      .firestore()
      .collection("resumes")
      .doc(this.props.resumeId)
      .get()
      .then((doc) => {
        let { skinId, educationDetails, contactDetails } = doc.data();
        this.setState({
          skinId,
          educationDetails,
          contactDetails,
        });
      });
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
          <ReactToPdf
            targetRef={this.resume}
            filename="resume.pdf"
            scale={0.6}
          >
            {({ toPdf }) => (
              <button className="btn" onClick={toPdf}>
                Download Resume as a PDF
              </button>
            )}
          </ReactToPdf>
        </div>
      </div>
    );
  }
}

export default Finalize;
