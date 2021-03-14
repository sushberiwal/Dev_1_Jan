import React, { Component } from 'react'
import {Link} from "react-router-dom";
import "./LandingPage.css";

class LandingPage extends Component {
    state = {  }

    render() { 
        return ( <div className="landing">
            <div className="landing-content">
                <h1>Resume Templates</h1>
                <p>Pick a resume template, fill it out, and format. Create a professional resume in a few clicks. Just choose one of 18+ resume templates below, add ready-made content, download, and get the job.</p>
            </div>
            <div className="choose-templates">
                {this.props.isAuth ?
                <Link to="/templates">
                    <button className="btn">Choose Templates</button> 
                </Link> :
                <Link to="/signin">
                <button className="btn">Choose Templates</button> 
                </Link>}
            </div>
        </div> );
    }
}
 
export default LandingPage;