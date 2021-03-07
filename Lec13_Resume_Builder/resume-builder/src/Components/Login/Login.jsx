import React, { Component } from "react";

class Login extends Component {
  state = {};
  render() {
    return (
      <div className="login">
        <div>
          <h2>Id</h2>
          <input type="text" />
        </div>
        <div>
          <h2>Password</h2>
          <input type="text" />
        </div>
        <div className="signin-button">
           <button>Sign In</button> 
        </div>
      </div>
    );
  }
}

export default Login;
