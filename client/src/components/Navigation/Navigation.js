import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import AddUser from '../Modal/AddUser';
import UserLogin from '../Modal/UserLogin';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: ''
        }
    }

    setMainLogin(displayName, id, isLogIn) {
        this.props.setMainLogin(id, isLogIn);
        this.setState({
            displayName
        })
    }
    setLogOut() {
        window.location.reload();
    }
    render() {
        var controlUser;
        if (this.props.isLogIn) {
            controlUser = [
                <li key="1" className="dropdown pull-right">
                    <a
                        style={{ cursor: 'pointer' }}
                        className="dropdown-toggle"
                        data-toggle="dropdown">
                        <span className="glyphicon glyphicon-user" /> {this.state.displayName}</a>
                    <ul className="dropdown-menu">
                        <li><NavLink to="/manageproduct" style={{ cursor: 'pointer' }}>Your Advertisements</NavLink></li>
                        <li><NavLink
                            onClick={this.setLogOut.bind(this)}
                            to="/product"
                            style={{ cursor: 'pointer' }}
                        ><span className="glyphicon glyphicon-log-out" /> Log out</NavLink>
                        </li>
                    </ul>
                </li>
            ]
        } else {
            controlUser = [

                <li key="1" className='pull-right'>
                    <UserLogin setMainLogin={(displayName, id, isLogIn) => this.setMainLogin(displayName, id, isLogIn)} />
                    <a
                        data-toggle="modal"
                        data-target='#userLogin'
                        id="openUserLogin"
                        style={{ cursor: 'pointer' }}
                    ><span className="glyphicon glyphicon-log-in" /> Login</a>
                </li>
                ,

                <li key="2" className="pull-right">
                    <AddUser />
                    <a
                        id="openRegisterUser"
                        data-toggle="modal"
                        data-target="#addUser"
                        style={{ cursor: 'pointer' }}
                    ><span className="glyphicon glyphicon-plus" /> Register</a>
                </li>
            ]
        }
        return (
            <header id="header">
                <div className="container-fluid">
                    <div id="logo" className="pull-left">
                        <h1><NavLink to="/home" className="scrollto" >MK Estates</NavLink></h1>
                        {/* Uncomment below if you prefer to use an image logo */}
                        {/* <a href="#intro"><img src="img/logo.png" alt="" title="" /></a>*/}
                    </div>
                    <nav id="nav-menu-container">
                        <ul className="nav-menu"  >
                            <li><NavLink to="/home">Home</NavLink> </li>
                            <li><NavLink to="/product">Properties</NavLink> </li>
                            <li><NavLink to="/manageproject">Projects</NavLink></li>
                            <li><NavLink to="/testform">Test Form</NavLink></li>
                            {controlUser}
                        </ul>
                    </nav>{/* #nav-menu-container */}

                </div>
            </header>/* #header */
        );
    }
}

export default Navigation;