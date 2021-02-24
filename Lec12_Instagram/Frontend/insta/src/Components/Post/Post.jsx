import React, { Component } from "react";

class Post extends Component {
  state = {
    userPhoto:"",    
    username:"",
    caption:"",
    postPhoto:"",
    comment:[],
    likes:[],
  };

  // __v:0
  // _id:"603671afbe7e3c1180e58905"
  // caption:"This is my First Post !!"
  // comments:[]
  // createdOn:"2021-02-24T15:33:03.798Z"
  // likes:[]
  // postImage:"/images/posts/1614180783760.png"
  // uid:"601f7203fbe1d84480f5ac3f"

  componentDidMount(){
      // props => post => caption
      // uid se user fetch
      // this.setState({

    //   })
  }

  render() {
    return (
      <div className="post">
        {/* photo -> username */}
        {/* post photo */}
        {/* like icons */}
        {/* likes count */}
        {/* username -> caption */}
        {/* comments list */}
        {/* comment input */}
      </div>
    );
  }
}

export default Post;
