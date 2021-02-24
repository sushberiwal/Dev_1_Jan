import axios from 'axios';
import React, { Component } from 'react';
import Post from '../Post/Post';

class Feeds extends Component {
    state = { 
        posts:[]
     }


    componentDidMount(){
        axios.get("/api/post").then( obj =>{
            let posts = obj.data.posts
            this.setState({
                posts:posts
            })
        });

    }

    render() { 
        return ( <div className="feeds">
            {this.state.posts.length ?  
            this.state.posts.map( post => {
                return <Post key={post["_id"]} post={post} />
            }  )
            : <h1>No Posts to show !!</h1> }
        </div> );
    }
}
 
export default Feeds;