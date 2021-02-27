import React, { Component } from "react";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Profile from "./Components/Profile/Profile";
import Settings from "./Components/Settings/Settings";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/profile" exact>
              <Profile />
            </Route>
            <Route path="/settings" exact>
              <Settings />
            </Route>
            <Route path="*" exact>
              <Redirect to="/"></Redirect>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
