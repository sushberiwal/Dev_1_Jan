import React, { Component } from "react";
import firebaseApp from "../../firebase/firebaseConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import "./MyResume.css";

class MyResume extends Component {
  state = {
    myResumesList: [],
  };

  // simple method
  async componentDidMount() {
    let docInfo = await firebaseApp
      .firestore()
      .collection("users")
      .doc(this.props.uid)
      .get();
    let myResumes = docInfo.data().Resumes;
    let myResumesList = [];
    for (let i = 0; i < myResumes.length; i++) {
      let { isSelected, resumeId } = myResumes[i];
      let resumeInfo = await firebaseApp
        .firestore()
        .collection("resumes")
        .doc(resumeId)
        .get();
      let resumeDetails = resumeInfo.data();
      myResumesList.push({ isSelected, resumeId, resumeDetails });
    }
    this.setState({
      myResumesList: myResumesList,
    });
  }

  // arrow function

  handleSelectResume = async (e) => {
    let selectedResumeId = e.target.id;
    console.log(selectedResumeId);
    let allResumes = this.state.myResumesList;

    let updatedResumeList = [];

    for (let i = 0; i < allResumes.length; i++) {
      let { isSelected, resumeDetails, resumeId } = allResumes[i];
      if (isSelected == true) {
        allResumes[i].isSelected = false;
      } else if (resumeId == selectedResumeId) {
        allResumes[i].isSelected = true;
      }
      updatedResumeList.push({
        isSelected: allResumes[i].isSelected,
        resumeId: allResumes[i].resumeId,
      });
    }

    console.log(updatedResumeList);

    await firebaseApp
      .firestore()
      .collection("users")
      .doc(this.props.uid)
      .update({
        Resumes: updatedResumeList,
      });
    // this.setState({
    //   myResumesList : allResumes
    // })
    this.props.setResumeId(selectedResumeId);
  };

  handleView = () => {
    let currentResumeDetails = this.state.myResumesList.filter((resumeInfo) => {
      if (resumeInfo.isSelected) {
        return true;
      }
      return false;
    });
    console.log(currentResumeDetails);
    this.props.history.push( {pathname:"/finalize" , state:{ resumeSaved : true , resumeDetails : currentResumeDetails[0].resumeDetails}} )
  };

  handleEdit = () =>{
    let currentResumeDetails = this.state.myResumesList.filter((resumeInfo) => {
      if (resumeInfo.isSelected) {
        return true;
      }
      return false;
    });
    this.props.history.push( {pathname:"/contact" , state:{ resumeId : currentResumeDetails[0].resumeId  , resumeDetails : currentResumeDetails[0].resumeDetails}} )
  }

  render() {
    return (
      <div className="templates">
        {this.state.myResumesList.length ? (
          <React.Fragment>
            {this.state.myResumesList.map((myResume) => {
              return (
                <div
                  key={myResume.resumeId}
                  id={myResume.resumeId}
                  className="template"
                >
                  <div className="template-image">
                    <img src={`images/${myResume.resumeDetails.skinId}.png`} />
                  </div>
                  {myResume.isSelected ? (
                    <React.Fragment>
                      <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
                      <div className="template-actions">
                        <div
                          className="edit"
                          onClick={this.handleEdit}
                        >
                          Edit
                        </div>

                        <div className="view" onClick={this.handleView}>
                          View
                        </div>
                      </div>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <div className="template-actions">
                        <div
                          className="select"
                          id={myResume.resumeId}
                          onClick={(e) => this.handleSelectResume(e)}
                        >
                          Select Resume
                        </div>
                      </div>
                    </React.Fragment>
                  )}
                </div>
              );
            })}
          </React.Fragment>
        ) : (
          <h1>Sit Tight , Loading Templates !!!</h1>
        )}
      </div>
    );
  }
}

export default MyResume;
