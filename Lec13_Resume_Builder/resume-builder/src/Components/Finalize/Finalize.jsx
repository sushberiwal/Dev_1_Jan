import React, { Component } from 'react'
import firebaseApp from '../../firebase/firebaseConfig';
import Skin1 from "../Skins/skin1";

class Finalize extends Component {
    
    state = {
        skinId:null , 
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
        educationDetails:{
            "cgpa":"",
            "collegeCity":"",
            "collegeState":"",
            "collegeName":"",
            "degree":"",
            "graduationMonth":"",
            "graduationYear":""
         },
    };

    componentDidMount(){
        // get all info from resumeId
        firebaseApp.firestore().collection("resumes").doc(this.props.resumeId).get().then(doc =>{
            let {skinId , educationDetails , contactDetails} = doc.data();
            this.setState({
                skinId ,
                educationDetails ,
                contactDetails
            })
        })
    }
    
    render() { 
        let {skinId , contactDetails , educationDetails} = this.state;
        return ( 
            <Skin1 skinId={skinId} contactDetails={contactDetails} educationDetails={educationDetails}></Skin1>
         );
    }
}
 
export default Finalize;
