import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

class App extends Component {
  state = {  }
  render() { 
    return (  <div className="app">
      <Header />
      <Home />
    </div> );
  }
}
 
export default App;
