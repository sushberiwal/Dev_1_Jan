import React, { Component } from 'react'
import firebaseApp from '../../firebase/firebaseConfig';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';

import "./MyResumes.css";
class MyResumes extends Component {
    state = { 
        resumes:[]
     }

     async componentDidMount(){
         let uid = this.props.uid;
         let docInfo = await firebaseApp.firestore().collection("users").doc(uid).get();
         let myResumeIds = docInfo.data().Resumes;
         let allResumes = [];
         for(let i=0 ; i<myResumeIds.length ; i++){
             let resumeInfo = await firebaseApp.firestore().collection("resumes").doc(myResumeIds[i].resumeId).get();
             let resume = resumeInfo.data();
             allResumes.push( { resumeId :myResumeIds[i].resumeId,  resume , isSelected:myResumeIds[i].isSelected }  )
         }
         this.setState({
             resumes : allResumes
         })
     }

     handleTemplateClick = async (e) =>{
         console.log("inside handle template click !!!");
         console.log(e);
         let resumeSelected = e.target.id;
         let uid = this.props.uid;
         console.log(this.props.selectResumeId);
         console.log(resumeSelected);
         let docInfo = await firebaseApp.firestore().collection("users").doc(uid).get();
         let myResumeIds = docInfo.data().Resumes;
         console.log(myResumeIds)
         for(let i=0;i<myResumeIds.length ; i++){
             if(myResumeIds[i].resumeId == this.props.selectResumeId){
                 myResumeIds[i].isSelected = false;
             }
             else if(myResumeIds[i].resumeId == resumeSelected){
                 myResumeIds[i].isSelected = true;
             }
         }
         console.log(myResumeIds)
         await firebaseApp.firestore().collection("users").doc(uid).update({
             Resumes : myResumeIds
         })
         await this.componentDidMount();
     }

     viewResume = () =>{
         this.props.history.push("/finalize");
     }

    render() { 
        return (
        <div className="templates">
            {this.state.resumes.length ? <React.Fragment>
                {this.state.resumes.map( resume =>{
            return <div key={resume.resumeId} className="template">
                <div className="template-image">
                    <img src={`images/${resume.resume.skinId}.png`}alt=""/>
                </div>
                <div className="resume-actions">
                <div className="edit-resume">Edit Resume</div>
                <div className="view-resume" onClick = {this.viewResume}>View Resume</div>
                <div className="select-resume" id={resume.resumeId}  onClick={(e) => this.handleTemplateClick(e)}>Select Resume</div>
                </div>
                {resume.isSelected && <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon> }
            </div>
        })}
            </React.Fragment> : <h1>Loading Resumes Sit Tight !!!</h1> }
    </div> );
    }
}
 
export default MyResumes;