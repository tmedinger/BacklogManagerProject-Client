import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./signuplogin/Login";
import Header from "./home/Jumbotron";
import SiteBar from "./home/SiteBar";
import Listspage from './lists/Listspage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      sessionToken: "",
    }
  }

  componentWillMount() {
    const token = localStorage.getItem("token");
    if (token && !this.state.sessionToken) {
      this.setState({ sessionToken: token });
    }
  }

  setSessionState = (token) => {
    localStorage.setItem("token", token);
    this.setState({ sessionToken: token });
  }

  logout = () => {
    this.setState({ sessionToken: "", });
    localStorage.clear();
  }

  protectedViews = () => {
    if (this.state.sessionToken === localStorage.getItem("token")) {
      return (
        <div>
          <Route path="/" exact>
            <SiteBar clickLogout={this.logout}></SiteBar>
          </Route>
          <Route path="/">
            <Listspage token={this.state.sessionToken}></Listspage>
          </Route>
        </div>
      )
    } else {
      return (
        <Route path="/signuplogin">
          <Login setToken={this.setSessionState}></Login>
        </Route>
      )
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Header></Header>
          {this.protectedViews()}
        </div>
      </Router>
    );
  }
}

export default App;
