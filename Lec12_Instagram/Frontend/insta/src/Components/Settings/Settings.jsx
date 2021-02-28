import axios from "axios";
import React, { Component } from "react";
import "./Settings.css";

class Settings extends Component {
  state = {
    name: "",
    username: "",
    bio: "",
    email: "",
    password: "",
    profilePic: "",
    disabled: true,
  };

  fileInput = React.createRef();

  componentDidMount(){  
    //         bio: "I am Billionaire"
  // email: "imtony@gmail.com"
  // isPublic: true
  // name: "Tony"
  // password: "123456789"
  // profilePic: "/images/users/1613135822255.jpeg"
  // username: "ironman"
  // __v: 0
  // _id: "60267fcea6fc854b381626e5"
  let {name , username , bio , email , password , profilePic} = this.props.user;
    this.setState({
      name,
      username,
      bio,
      email,
      password,
      profilePic
    }) 
}
  onChangeHandler = (e) => {
    let type = e.target.id; // name , username , email , password
    let value = e.target.value; // abcd
    this.setState({
      [type]: value,
    });
  };
  onEditHandler = () =>{
      this.setState({
          disabled:false
      })
  }
  onCancelHandler = () =>{
    let {name , username , bio , email , password , profilePic} = this.props.user;
    this.setState({
      name,
      username,
      bio,
      email,
      password,
      profilePic,
      disabled:true
    }) 
  }
  onUpdatePicHandler = () =>{
      let fileObject = this.fileInput.current.files[0];
      console.log(fileObject);
      let formData = new FormData();
      formData.append('user' , fileObject);
      axios.patch(`/api/user/${this.props.user["_id"]}` , formData).then( obj =>{
          let profilePic = obj.data.updatedUser.profilePic;
          this.props.updateUser(obj.data.updatedUser);
          this.setState({
              profilePic
          })
      });
  }
  onSaveHandler = () =>{
    let formData = new FormData();
    let { name , username , bio , email ,password } = this.state;
    formData.append( 'name' , name );
    formData.append( 'username' , username );
    formData.append( 'bio' , bio );
    formData.append( 'email' , email );
    formData.append( 'password' , password );
    axios.patch(`/api/user/${this.props.user["_id"]}` , formData).then( obj =>{
        if(obj.data.updatedUser){
            this.props.updateUser(obj.data.updatedUser);
            this.setState({
                disabled:true
            })
        }

    });
  }
  

  render() {
    return (
      <div className="settings">
        <div className="profile-photo">
          <img src={this.state.profilePic} alt="" />
          <input type="file" ref={this.fileInput} />
          <button onClick={this.onUpdatePicHandler}>Update Profile Pic</button>
        </div>
        <div className="profile-details">
          <div className="profile-details-form">
            {/* name */}
            <div className="detail">
              <h3>Name</h3>
              <input
                type="text"
                id="name"
                value={this.state.name}
                onChange={(e) => {
                  this.onChangeHandler(e);
                }}
                disabled={this.state.disabled}
              />
            </div>
            {/* username */}
            <div className="detail">
              <h3>Username</h3>
              <input
                type="text"
                id="username"
                value={this.state.username}
                onChange={(e) => {
                  this.onChangeHandler(e);
                }}
                disabled={this.state.disabled}
              />
            </div>
            {/* bio */}
            <div className="detail">
              <h3>Bio</h3>
              <input
                type="text"
                id="bio"
                value={this.state.bio}
                onChange={(e) => {
                  this.onChangeHandler(e);
                }}
                disabled={this.state.disabled}
              />
            </div>
            {/* email */}
            <div className="detail">
              <h3>Email</h3>
              <input
                type="text"
                id="email"
                value={this.state.email}
                onChange={(e) => {
                  this.onChangeHandler(e);
                }}
                disabled={this.state.disabled}
              />
            </div>
            {/* password */}
            <div className="detail">
              <h3>Password</h3>
              <input
                type="password"
                id="password"
                value={this.state.password}
                onChange={(e) => {
                  this.onChangeHandler(e);
                }}
                disabled={this.state.disabled}
              />
            </div>
          </div>
          {this.state.disabled ? (
            <div className="profile-actions">
              <button className="edit" onClick={this.onEditHandler}>EDIT</button>
            </div>
          ) : (
            <div className="profile-actions">
              <button className="cancel" onClick={this.onCancelHandler}>CANCEL</button>
              <button className="save" onClick={this.onSaveHandler}>SAVE</button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Settings;
