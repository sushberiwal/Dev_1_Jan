import axios from "axios";
import React, { Component } from "react";
import "./Post.css";

class Post extends Component {
  state = {
    userPhoto: "",
    username: "",
    caption: "",
    postImage: "",
    comments: [],
    likes: [],
  };

  // post
  // __v:0
  // _id:"603671afbe7e3c1180e58905"
  // caption:"This is my First Post !!"
  // comments:[]
  // createdOn:"2021-02-24T15:33:03.798Z"
  // likes:[]
  // postImage:"/images/posts/1614180783760.png"
  // uid:"601f7203fbe1d84480f5ac3f"

  // user
  //         bio: "I am Billionaire"
  // email: "imtony@gmail.com"
  // isPublic: true
  // name: "Tony"
  // password: "123456789"
  // profilePic: "/images/users/1613135822255.jpeg"
  // username: "ironman"
  // __v: 0
  // _id: "60267fcea6fc854b381626e5"

  componentDidMount() {
    if (this.props.user) {
      this.setState({
        userPhoto: this.props.user.profilePic,
        username: this.props.user.username,
        caption: this.props.post.caption,
        postImage: this.props.post.postImage,
        comments: this.props.post.comments,
        likes: this.props.post.likes,
      });
    } else {
      let postUserUid = this.props.post.uid;
      let post = this.props.post;
      axios.get(`/api/user/${postUserUid}`).then((obj) => {
        let postUser = obj.data.user;
        this.setState({
          userPhoto: postUser.profilePic,
          username: postUser.username,
          caption: post.caption,
          postImage: post.postImage,
          comments: post.comments,
          likes: post.likes,
        });
      });
    }
  }

  render() {
    let {
      userPhoto,
      username,
      caption,
      postImage,
      comments,
      likes,
    } = this.state;
    return (
      <div className="post">
        <div className="post-header">
          <div className="post-userphoto">
            <img src={userPhoto} alt="user.png" />
          </div>
          <div className="post-username">{username}</div>
        </div>
        <div className="post-body">
          <div className="postImage">
            <img src={postImage} alt="" />
          </div>
          <div className="post-actions">
            <div className="like">Like</div>
            <div className="comment">Comment</div>
          </div>
          <div className="likes-count">1231 likes</div>
          <div className="post-details">
            <div className="post-username"> {username} </div>
            <div className="post-caption">{caption}</div>
          </div>
          <div className="post-comments">Comments</div>
          <div className="post-comment-box">
            <input
              type="text"
              name=""
              className="comment"
              placeholder="Add a comment..."
            />
            <div className="post-comment-btn">POST</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
