import React, { Component } from "react";

class SignIn extends Component {
  state = {
    id : "" ,
    pw : ""
  };


  onChangeHandler = (e) =>{
    let id = e.target.id;
    let value = e.target.value;
    this.setState({
      [id] : value
    })
  }

  render() {
    return (
      <div className="login">
        <div>
          <h2>Id</h2>
          <input type="text" id="id" value={this.state.id} onChange={ (e) => {this.onChangeHandler(e)}  }/>
        </div>
        <div>
          <h2>Password</h2>
          <input type="text" id="pw" value = {this.state.pw} onChange={ (e) =>{this.onChangeHandler(e)} }/>
        </div>
        <div className="signin-button">
           <button onClick={ () => { this.props.login(this.state.id , this.state.pw) }  }>Sign In</button> 
        </div>
      </div>
    );
  }
}

export default SignIn;
