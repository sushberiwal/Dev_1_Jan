import React, { Component } from 'react'

class Contact extends Component {
    state = {  
        fname:""
    }

    onChangeHandler = (e) =>{
        let id = e.target.id;
        let value = e.target.value;

        this.setState({
            [id]:value
        })
    }

    render() { 
        return ( 
        <div className="contact-details">
            <div className="contact-form">
                <label htmlFor="">Name</label>
                <input type="text" id="fname" value={this.state.fname} onChange={ (e) => {this.onChangeHandler(e)}}/>
            </div>
            <div className="resume-viewer">
                <h1>{this.state.fname}</h1>
            </div>

        </div> );
    }
}
 
export default Contact;