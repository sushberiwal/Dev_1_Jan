import axios from "axios";
import React, { Component } from "react";
import Post from "../Post/Post";
import "./Profile.css";

class Profile extends Component {
  state = {
    view: "POSTS",
    posts: [],
    followers: [],
    following: [],
  };

  componentDidMount() {
    let uid = this.props.user["_id"];
    let posts = [];
    let followers = [];
    let following = [];
    axios
      .get(`/api/post/${uid}`)
      .then((obj) => {
        posts = obj.data.posts;
        let followerObjPromise = axios.get(`/api/request/followers/${uid}`);
        return followerObjPromise;
      })
      .then((obj) => {
        console.log(obj.data);
        let myFollowers = obj.data.myFollowers;
        if (myFollowers) {
          followers = myFollowers;
        }
        let followingPromise = axios.get(`/api/request/following/${uid}`);
        return followingPromise;
      })
      .then((obj) => {
        let myFollowing = obj.data.myFollowing;
        if (myFollowing) {
          following = myFollowing;
        }
        this.setState({
          posts,
          followers,
          following,
        });
      });
  }


  onViewChangeHandler = (view) =>{
      if(view != this.state.view){
          this.setState({
              view
          })
      }
  }

  render() {
    let { name, username, profilePic, bio } = this.props.user;
    return (
      <div className="profile">
        <div className="profile-top">
          <div className="profile-left">
            <div className="profile-photo">
              <img src={profilePic} alt="" />
            </div>
            <div className="profile-info">
              <div className="profile-name">{name}</div>
              <div className="profile-username">{username}</div>
              <div className="profile-bio">{bio}</div>
            </div>
          </div>
          <div className="profile-right">
            <div className="profile-post" onClick={ () => { this.onViewChangeHandler("POSTS")}}>
              <div className="count">{this.state.posts.length}</div>
              <h3>POST</h3>
            </div>
            <div className="profile-follower" onClick={  ()=>{this.onViewChangeHandler("FOLLOWERS")} }>
              <div className="count">{this.state.followers.length}</div>
              <h3>FOLLOWER</h3>
            </div>
            <div className="profile-following" onClick={  ()=>{ this.onViewChangeHandler("FOLLOWING") } }>
              <div className="count">{this.state.following.length}</div>
              <h3>FOLLOWING</h3>
            </div>
          </div>
        </div>
        <div className="profile-content">
          {this.state.view == "POSTS" &&
            this.state.posts.map((post) => {
              return <Post post={post} user={this.props.user} />;
            })}

          {this.state.view == "FOLLOWERS" &&
            this.state.followers.map((follower) => {
              return <div className="follower-user">
              <div className="follower-image">
                  <img src={follower.profilePic} alt=""/>
              </div>
              <div className="follower-name">{follower.name}</div>
              <div className="follower-username">{follower.username}</div>
              <div className="follower-bio">{follower.bio}</div>
          </div>;
            })}

          {this.state.view == "FOLLOWING" &&
            this.state.following.map((following) => {
              return <div className="following-user">
                  <div className="following-image">
                      <img src={following.profilePic} alt=""/>
                  </div>
                  <div className="following-name">{following.name}</div>
                  <div className="following-username">{following.username}</div>
                  <div className="following-bio">{following.bio}</div>
              </div>;
            })}
        </div>
      </div>
    );
  }
}

export default Profile;
