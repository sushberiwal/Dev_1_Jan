import React, { Component } from 'react';
import "./Header.css";

class Header extends Component {
    state = {  }
    render() { 
        return ( <div className="header">
            <div className="logo">
                <img src="logo.png" alt=""/>
            </div>
            <div className="search-box">
                <input type="text" name="" placeholder="Search"/>
            </div>
            <div className="nav-links">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/profile">Profile</a></li>
                    <li><a href="/settings">Settings</a></li>
                    <li><a href="/logout">Logout</a></li>
                </ul>
            </div>
        </div> );
    }
}
 
export default Header;