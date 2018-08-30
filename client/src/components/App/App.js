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
         <div style={{paddingBottom:70}} >
          <Navigation
            setMainLogin={(idCurrentUser, isLogIn) => this.setMainLogin(idCurrentUser, isLogIn)}
            isLogIn={this.state.isLogIn} />

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
