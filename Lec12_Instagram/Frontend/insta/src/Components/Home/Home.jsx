import React, { Component } from "react";
import Feeds from "../Feeds/Feeds";
import HomeProfile from "../HomeProfile/HomeProfile";
import "./Home.css";
import uid from "../../uid";
import axios from "axios";

class Home extends Component {
  state = {
    user: null,
  };

  componentDidMount() {
    //inside component did mount !
    //         bio: "I am Billionaire"
    // email: "imtony@gmail.com"
    // isPublic: true
    // name: "Tony"
    // password: "123456789"
    // profilePic: "/images/users/1613135822255.jpeg"
    // username: "ironman"
    // __v: 0
    // _id: "60267fcea6fc854b381626e5"
    axios.get(`/api/user/${uid}`).then((obj) => {
      let user = obj.data.user;
      this.setState({
        user: user,
      });
    });
  }

  render() {
    return (
      <div className="home">
        {this.state.user ? (
          <React.Fragment>
            <Feeds user={this.state.user}/>
            <HomeProfile user={this.state.user} />
          </React.Fragment>
        ) : (
          <h1>Loading Data</h1>
        )}
      </div>
    );
  }
}

export default Home;
