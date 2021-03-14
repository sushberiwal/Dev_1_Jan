import React, { Component } from "react";
import "./Templates.css";

class Templates extends Component {
  state = {
    skins: [
      {id:"skin1" , path:"./images/skin1.svg"},
      {id:"skin2" , path:"./images/skin2.svg"},
      {id:"skin3" , path:"./images/skin3.svg"},
      {id:"skin4" , path:"./images/skin4.svg"},
      {id:"skin5" , path:"./images/skin5.svg"},
      {id:"skin6" , path:"./images/skin6.svg"},
      {id:"skin7" , path:"./images/skin7.svg"},
      {id:"skin8" , path:"./images/skin8.svg"},
    ],
  };
  render() {
    return <div className="templates">
        {this.state.skins.map( skin =>{
            return <div key={skin.id} className="template">
                <div className="template-image">
                    <img src={skin.path} alt=""/>
                </div>
                <div className="choose-template">Choose Template</div>
            </div>
        })}
    </div>;
  }
}

export default Templates;
