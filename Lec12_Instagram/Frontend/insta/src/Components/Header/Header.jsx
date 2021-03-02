import React, { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

class Header extends Component {
  // isAuth = false
  // isAuth = true
  state = {};
  render() {
    return (
      <div className="header">
        <Link to="/">
          <div className="logo">
            <img src="logo.png" alt="" />
          </div>
        </Link>
        {this.props.isAuth ? <React.Fragment>
          <div className="search-box">
          <input type="text" name="" placeholder="Search" />
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
            <li>
              <Link to="/" onClick={this.props.logout}>Logout</Link>
            </li>
          </ul>
        </div>
        </React.Fragment> : <div className="nav-links">
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div> }
        
      </div>
    );
  }
}

export default Header;
