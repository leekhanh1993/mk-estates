import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import AddUser from '../Modal/AddUser';
import UserLogin from '../Modal/UserLogin';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAddUser: false,
            showUserLogin: false
        }
    }
    setCloseUserLogin(showUserLogin) {
        this.setState({
            showUserLogin
        })
    }
    setCloseAddUser(showAddUser) {
        this.setState({
            showAddUser
        })
    }
    showUserLogin() {
        this.setState({
            showUserLogin: true
        })
    }
    showAddUser() {
        this.setState({
            showAddUser: true
        })
    }

    setMainLogin(displayName, id, idAdmin, isLogIn) {
        this.props.setMainLogin(displayName, id, idAdmin, isLogIn);
    }
    setLogOut() {
        localStorage.clear();
        window.location.reload();
    }
    render() {
        var controlUser;
        if (this.props.isLogIn && this.props.isAdmin) {
            controlUser = [
                <li key="1" className="dropdown pull-right">
                    <a
                        style={{ cursor: 'pointer' }}
                        className="dropdown-toggle"
                        data-toggle="dropdown">
                        <span className="fa fa-user-circle-o" /> {this.props.displayName}</a>
                    <ul className="dropdown-menu">
                        <li><NavLink
                            onClick={this.setLogOut.bind(this)}
                            to="/product"
                            style={{ cursor: 'pointer' }}
                        ><span className="glyphicon glyphicon-log-out" /> Log out</NavLink>
                        </li>
                    </ul>
                </li>
            ]
        } else if (this.props.isLogIn && (this.props.isAdmin === false)) {
            controlUser = [
                <li key="1" className="dropdown pull-right">
                    <a
                        style={{ cursor: 'pointer' }}
                        className="dropdown-toggle"
                        data-toggle="dropdown">
                        <span className="fa fa-user-circle-o" /> {this.props.displayName}</a>
                    <ul className="dropdown-menu">
                        <li><NavLink to="/manageproduct" style={{ cursor: 'pointer' }}>Your Advertisements</NavLink></li>
                        <li><NavLink
                            onClick={this.setLogOut.bind(this)}
                            to="/"
                            style={{ cursor: 'pointer' }}
                        ><span className="glyphicon glyphicon-log-out" /> Log out</NavLink>
                        </li>
                    </ul>
                </li>
            ]
        } else {
            controlUser = [
                <li key="1" className='pull-right'>
                    <UserLogin
                        setCloseUserLogin={(value) => this.setCloseUserLogin(value)}
                        showUserLogin={this.state.showUserLogin}
                        setMainLogin={(displayName, id, idAdmin, isLogIn) => this.setMainLogin(displayName, id, idAdmin, isLogIn)} />
                    <a
                        onClick={this.showUserLogin.bind(this)}
                        style={{ cursor: 'pointer' }}
                    ><span className="glyphicon glyphicon-log-in" /> Login</a>
                </li>
                ,
                <li key="2" className="pull-right">
                    <AddUser showAddUser={this.state.showAddUser} setCloseAddUser={(value) => this.setCloseAddUser(value)} />
                    <a
                        onClick={this.showAddUser.bind(this)}
                        style={{ cursor: 'pointer' }}
                    ><span className="fa fa-user-plus" /> Register</a>
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
                        {this.props.isAdmin
                            ? <ul className="nav-menu"  >
                                <li><NavLink to="/home">Home</NavLink> </li>
                                <li><NavLink to="/product">Properties</NavLink> </li>
                                <li><NavLink to="/contact">Contact</NavLink></li>
                                <li><NavLink to="/manageproject">Projects</NavLink></li>
                                {controlUser}
                            </ul>
                            : <ul className="nav-menu"  >
                                <li><NavLink to="/home">Home</NavLink> </li>
                                <li><NavLink to="/product">Properties</NavLink> </li>
                                <li><NavLink to="/contact">Contact</NavLink></li>
                                {controlUser}
                            </ul>
                        }
                    </nav>{/* #nav-menu-container */}
                </div>
            </header>/* #header */
        );
    }
}

export default Navigation;