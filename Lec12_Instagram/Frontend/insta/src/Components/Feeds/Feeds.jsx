import axios from 'axios';
import React, { Component } from 'react';
import Post from '../Post/Post';
import "./Feeds.css";
import uid from "../../uid";


class Feeds extends Component {
    state = { 
        posts:[] ,
        captionInput:""
     }

     // create a ref 
     fileInput = React.createRef();

    componentDidMount(){
        axios.get("/api/post").then( obj =>{
            let posts = obj.data.posts
            let sortedPosts = posts.sort( (a,b)=>{
                return new Date(b.createdOn) - new Date(a.createdOn);
            } )
            this.setState({
                posts:sortedPosts ,
                captionInput:""
            })
        });
    }

    onCaptionChangeHandler = (value) =>{
        this.setState({
            captionInput:value
        })
    }

    onUploadPostHandler = ()=>{
        let fileObject = this.fileInput.current.files[0];
        console.log(fileObject);

        let formData = new FormData();

        formData.append('post' , fileObject);
        formData.append('uid' , uid);
        formData.append('caption' , this.state.captionInput);

        axios.post("/api/post" , formData).then( obj =>{
            if(obj.data.postCreated){
                // succesfully created post
                this.componentDidMount();
            }
        });
        
    }


    render() { 
        return ( <div className="feeds">
            <div className="upload-post">
                <input type="file" id="upload-post" ref={this.fileInput}/>
                <input type="text" value={this.state.captionInput} onChange = { (e) =>{ this.onCaptionChangeHandler(e.target.value) } } id="caption"/>
                <button onClick={this.onUploadPostHandler}>Upload Post</button>
            </div>

            {this.state.posts.length ?  
            this.state.posts.map( post => {
                return <Post key={post["_id"]} post={post} />
            }  )
            : <h1>No Posts to show !!</h1> }
        </div> );
    }
}
 
export default Feeds;