import React, { Component } from 'react'

class Login extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="login">
                <h1>LOGIN</h1>
                <button onClick = {this.props.login}>LOGIN WITH GOOGLE+</button>
            </div>
         );
    }
}
 
export default Login;