import React, { Component } from 'react';
import "./HomeProfile.css";
    
class HomeProfile extends Component {
    state = {}
    render() { 
        let { name , username , profilePic } = this.props.user;
        return ( <div className="home-profile">
                   <div className="user-info">
                       <div className="user-image">
                           <img src={profilePic} alt=""/>
                       </div>
                       <div className="name">
                           <p><strong>{username}</strong></p>
                           <p>{name}</p>
                       </div>
                   </div>
                   <div className="user-suggestions">
                       Suggestions
                   </div>
              </div> );
    }
}
 
export default HomeProfile;