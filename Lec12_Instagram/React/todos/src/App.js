import React, { Component } from 'react';
import InputBox from "./Components/InputBox";
import Todos from "./Components/Todos";

class App extends Component {
  state = {  }

  
  render() { 
    return ( 
      <React.Fragment>
        <InputBox />
        <Todos />      
      </React.Fragment>
     );
  }
}
 
export default App;