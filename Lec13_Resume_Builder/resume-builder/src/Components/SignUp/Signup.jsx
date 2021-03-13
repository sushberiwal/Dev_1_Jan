import React, { Component } from 'react'

class SignUp extends Component {
    state = {  }
    render() { 
        return ( <button onClick={this.props.signup}>Create Steve as a User</button> );
    }
}
 
export default SignUp;