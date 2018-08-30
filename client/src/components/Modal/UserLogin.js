import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getUsers} from './../../actions/userActions'

class UserLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: ''
        }
    }
    componentDidMount(){
        this.props.getUsers();
    }
    onChange(e) {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        })
    }
    clearForm() {
        this.setState({
            userName: '',
            password: ''
        })
    }

    submitUserLogin() {
        var {userName, password} = this.state;
        var {users} = this.props.users;
        var reqLogin = false;
        var currentUser;
        for (let index = 0; index < users.length; index++) {
            const element = users[index];
            if(element.userName === userName && element.password === password){
                reqLogin = true;
                currentUser= element

            }
        }
        if (reqLogin) {
            alert("Login Successful!!!")
            this.props.setMainLogin(currentUser.displayName, currentUser._id, true)
            this.clearForm();
        }
        else{
            alert('Wrong User Name or Password')
            this.clearForm();
        }

    }
    closeUserLogin() {
        this.clearForm();
    }
    render() {
        return (
            <div>
                {/* Modal */}
                <div id="userLogin" className="modal fade" role="dialog">
                    <div className="modal-dialog">
                        {/* Modal content*/}
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title text-center">Create User</h4>
                            </div>
                            <div className="modal-body">
                                <form id="userLoginForm" className="form-horizontal">
                                    <div className="form-group">
                                        <label className="col-sm-5 control-label">User Name</label>
                                        <div className="col-sm-5">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="User Name"
                                                name="userName"
                                                value={this.state.userName}
                                                onChange={this.onChange.bind(this)}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-5 control-label">Password</label>
                                        <div className="col-sm-5">
                                            <input
                                                type="password"
                                                className="form-control"
                                                placeholder="Password"
                                                name="password"
                                                value={this.state.password}
                                                onChange={this.onChange.bind(this)}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-sm-5 col-sm-offset-5">
                                            <button
                                                type="button"
                                                // data-dismiss="modal"
                                                id='closeUserLoginBtnL'
                                                className="btn btn-success"
                                                onClick={this.submitUserLogin.bind(this)}
                                                style={{ marginRight: 10 }}
                                            >Login</button>
                                            <button
                                                type="button"
                                                onClick={this.closeUserLogin.bind(this)}
                                                className="btn btn-danger"
                                                // data-dismiss="modal"
                                                id='closeUserLoginbtnC'
                                            >Close</button>
                                        </div>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return {
        users: state.users
    }
}

export default connect(mapStateToProps, {getUsers})(UserLogin);