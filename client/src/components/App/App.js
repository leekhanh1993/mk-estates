import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import { BrowserRouter as Router } from "react-router-dom";
import RouterUrl from '../RouterUrl/RouterUrl';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogIn: false,
      idCurrentUser: ''
    }
  }

  setMainLogin(idCurrentUser, isLogIn){
    this.setState({
      idCurrentUser,
      isLogIn
    })
  }
  render() {
    console.log(this.state.idCurrentUser)
    return (
      <Router>
        <div>
          
          
          {/* Navigation */}
          <Navigation
            setMainLogin={(idCurrentUser, isLogIn) => this.setMainLogin(idCurrentUser, isLogIn)}
            isLogIn={this.state.isLogIn} />
          {/* Content */}
          <div className="content">
            <RouterUrl idCurrentUser={this.state.idCurrentUser}/>
          </div>
          {/* Footer */}
          <Footer />
        </div>
      </Router>

    );
  }
}

export default App;
