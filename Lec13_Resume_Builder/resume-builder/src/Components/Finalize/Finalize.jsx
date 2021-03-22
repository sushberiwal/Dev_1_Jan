import React, { Component } from "react";
import firebaseApp from "../../firebase/firebaseConfig";
import Skin1 from "../Skins/skin1";
import "./Finalize.css";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import ReactToPdf from "react-to-pdf";
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

  resume = React.createRef();

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

  // handleDownloadResume = async ()=>{
  //     let resumeHTML = this.resume.current;
  //     // let pdf = new jsPDF();
  //     let canvas = await html2canvas(resumeHTML);
  //     // console.log(canvas);
  //     let imgObject = canvas.toDataURL("image/jpg");
  //     // console.log(imgObject);
  //     const pdf = new jsPDF("p", "mm", "a4");
  //     let width = pdf.internal.pageSize.getWidth();
  //     let height = pdf.internal.pageSize.getHeight();
  //     pdf.addImage(imgObject, 'JPEG', 0 , 0 , width , height);
  //     pdf.save("resume.pdf");
  // }

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
          <ReactToPdf targetRef={this.resume} filename="resume.pdf" options={{scale:1}}>
            {({ toPdf }) => (
              <button className="btn" onClick={toPdf}>
                Download Resume as PDF
              </button>
            )}
          </ReactToPdf>

          {/* 
          <button className="btn" onClick={this.handleDownloadResume}>
            Download Resume as PDF
          </button> */}

          <button className="btn">Save Resume To Database</button>
        </div>
      </div>
    );
  }
}

export default Finalize;
