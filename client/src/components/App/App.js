import React, { Component } from 'react';
import './App.css';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import { BrowserRouter as Router } from "react-router-dom";
import RouterUrl from '../RouterUrl/RouterUrl';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdmin: false,
      isLogIn: false,
      idCurrentUser: '',
      displayName: ''
    }
  }
  componentWillMount() {
    var isAdmin = localStorage.getItem("isAdmin")
    var isLogIn = localStorage.getItem("isLogIn")
    var idCurrentUser = localStorage.getItem("idCurrentUser")
    var displayName = localStorage.getItem("displayName")

    if (isAdmin !== null
      && isLogIn !== null
      && idCurrentUser !== null
      && displayName !== null) {
        this.setState({
          isAdmin: isAdmin === 'true' ? true : false,
          isLogIn: true,
          idCurrentUser,
          displayName
        })
    }
  }
  setMainLogin(displayName, idCurrentUser, isAdmin, isLogIn) {
    window.localStorage.setItem("displayName", displayName)
    window.localStorage.setItem("idCurrentUser", idCurrentUser)
    window.localStorage.setItem("isLogIn", isLogIn)
    window.localStorage.setItem("isAdmin", isAdmin)
    this.setState({
      isAdmin,
      idCurrentUser,
      isLogIn,
      displayName
    })
  }
  render() {
    return (
      <Router>
        <div>
          {/* Navigation */}
          <div style={{ paddingBottom: 40 }} >
            <Navigation
              setMainLogin={(displayName, idCurrentUser, isAdmin, isLogIn) => this.setMainLogin(displayName, idCurrentUser, isAdmin, isLogIn)}
              isLogIn={this.state.isLogIn}
              isAdmin={this.state.isAdmin}
              displayName={this.state.displayName}
            />
          </div>
          {/* Content */}
          <div id="content">
            <RouterUrl idCurrentUser={this.state.idCurrentUser} />
          </div>
          {/* Footer */}
          <div >
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
