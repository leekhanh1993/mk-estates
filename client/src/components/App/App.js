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
      idCurrentUser: ''
    }
  }

  setMainLogin(idCurrentUser, isAdmin, isLogIn){
    this.setState({
      isAdmin,
      idCurrentUser,
      isLogIn
    })
  }
  render() {
    return (
      <Router>
        <div>
          {/* Navigation */}
         <div style={{paddingBottom:40}} >
          <Navigation
            setMainLogin={(idCurrentUser, isAdmin, isLogIn) => this.setMainLogin(idCurrentUser, isAdmin, isLogIn)}
            isLogIn={this.state.isLogIn}
            isAdmin={this.state.isAdmin}
             />
            </div>
          {/* Content */}
          <div id="content">
            <RouterUrl idCurrentUser={this.state.idCurrentUser}/>
          </div>
          {/* Footer */}
          <div style={{marginBottom:0}} >
          <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
