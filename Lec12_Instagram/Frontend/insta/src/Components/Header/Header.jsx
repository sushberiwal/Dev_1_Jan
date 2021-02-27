import React, { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="header">
        <Link to="/">
          <div className="logo">
            <img src="logo.png" alt="" />
          </div>
        </Link>
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
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
