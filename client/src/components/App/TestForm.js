import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addUser, getUsers } from './../../actions/userActions'


class TestForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: {
                value: '',
                isValid: true,
                message: ''
            },
            displayName: {
                value: '',
                isValid: true,
                message: ''
            },
            password: {
                value: '',
                isValid: true,
                message: ''
            },
            confirmPassword: {
                value: '',
                isValid: true,
                message: ''
            },
            isFormValid: ""
        }
    }
    onChange(e) {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        var newState = {
            ...this.state,
            [name]: {
                ...this.state[name],
                value
            }

        }
        this.setState(newState)
    }
    clearForm() {
        this.setState({
            userName: '',
            displayName: '',
            password: '',
            confirmPassword: ''
        })
    }
    componentDidMount() {
        this.props.getUsers();
    }

    createUser(e) {
        e.preventDefault();
        //Clear State
        var newState = {
            ...this.state,
            userName: {
                value: this.state.userName.value,
                isValid: true,
                message: ''
            },
            displayName: {
                value: this.state.displayName.value,
                isValid: true,
                message: ''
            },
            password: {
                value: this.state.password.value,
                isValid: true,
                message: ''
            },
            confirmPassword: {
                value: this.state.confirmPassword.value,
                isValid: true,
                message: ''
            },
            isFormValid: ''
        }
        this.setState(newState)

        var { userName, displayName, password, confirmPassword } = this.state;
        var { users } = this.props.users



        //check user name is avalable or not
        var availablUserName = [];
        for (let index = 0; index < users.length; index++) {
            const user = users[index];
            availablUserName.push(user.userName)
        }

        //Validation for User Name
        const checkUserName = (newUserName) => {
            var isAvailableUser = availablUserName.includes(newUserName) ? true : false
            if (newUserName === '') {
                this.setState({
                    userName: {
                        value: this.state.userName.value,
                        isValid: false,
                        message: 'User name can not be blanked!!!!'
                    }
                })
            } else if (isAvailableUser) {
                this.setState({
                    userName: {
                        value: this.state.userName.value,
                        isValid: false,
                        message: 'Your user name is avalable!!!!'
                    }
                })
            } else {
                return true
            }
        }
        var resultCheckUserName = checkUserName(userName.value)

        //Validation for Display Name
        const checkDisplayName = (newDisplay) => {
            if (newDisplay === '') {
                this.setState({
                    displayName: {
                        value: this.state.displayName.value,
                        isValid: false,
                        message: 'Display name can not be blanked!!!!'
                    }
                })
            } else {
                return true
            }
        }
        var resultCheckDisplayName = checkDisplayName(displayName.value)

        //Validation for Password
        const checkPassword = (newPassword) => {
            if (newPassword === '') {
                this.setState({
                    password: {
                        value: this.state.password.value,
                        isValid: false,
                        message: 'Password can not be blanked!!!!'
                    }
                })
            } else {
                return true
            }
        }
        var resultCheckPassword = checkPassword(password.value)

        //Validation for Password
        const checkConfirmPassword = (newConfirmPassword) => {
            if (newConfirmPassword === '') {
                this.setState({
                    confirmPassword: {
                        value: this.state.confirmPassword.value,
                        isValid: false,
                        message: 'Confirm password can not be blanked!!!!'
                    }
                })
            } else if (newConfirmPassword !== this.state.password.value) {
                this.setState({
                    confirmPassword: {
                        value: this.state.confirmPassword.value,
                        isValid: false,
                        message: 'The password and its confirm are not the same!!!!'
                    }
                })
            } else {
                return true
            }
        }
        var resultCheckConfirmPassword = checkConfirmPassword(confirmPassword.value)


        if (resultCheckUserName && resultCheckDisplayName && resultCheckPassword && resultCheckConfirmPassword) {
            this.setState({
                isFormValid: 'validForm'
            })
            var newUser = {
                userName: userName.value,
                displayName: displayName.value,
                password: password.value
            }
            console.log(newUser)
        }

        // var { userName, displayName, password, confirmPassword } = this.state;
        // if (userName && displayName && password && confirmPassword && (password === confirmPassword)) {
        //     var newUser = {
        //         userName,
        //         displayName,
        //         password
        //     }
        //     this.props.addUser(newUser)
        //     alert('Add User Successful!!')
        //     this.clearForm();
        // }
    }
    closeRegUser() {
        this.clearForm();
    }
    render() {
        return (
            <div className="container">
                <div>
                    {/* Trigger the modal with a button */}
                    <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#testForm">Open Modal</button>
                    {/* Modal */}
                    <div id="testForm" className={this.state.isFormValid === '' ? "modal fade" : ('modal fade ' + this.state.isFormValid)} role="dialog">
                        <div className="modal-dialog">
                            {/* Modal content*/}
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal">×</button>
                                    <h4 className="modal-title">Modal Header</h4>
                                </div>
                                <div className="modal-body">
                                    <div className="panel panel-primary">
                                        <div className="panel-heading">
                                            <h3 className="panel-title">Test Form</h3>
                                        </div>
                                        <div className="panel-body">
                                            <form id="testFormValidation" onSubmit={this.createUser.bind(this)} className="form-horizontal">
                                                <div className={this.state.userName.isValid ? "form-group" : "form-group has-error has-feedback"}>
                                                    <label className="control-label col-sm-5">User Name</label>
                                                    <div className="col-sm-5">
                                                        <input
                                                            id="userName"
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="User Name"
                                                            name="userName"
                                                            value={this.state.userName.value}
                                                            onChange={this.onChange.bind(this)}
                                                        />
                                                        {this.state.userName.message !== ''
                                                            ? [<span className="glyphicon glyphicon-remove form-control-feedback"></span>, <small className="text-danger">{this.state.userName.message}</small>]
                                                            : ''
                                                        }
                                                    </div>
                                                </div>
                                                <div className={this.state.displayName.isValid ? "form-group" : "form-group has-error has-feedback"}>
                                                    <label className="col-sm-5 control-label">Display Name</label>
                                                    <div className="col-sm-5">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Display Name"
                                                            name="displayName"
                                                            value={this.state.displayName.value}
                                                            onChange={this.onChange.bind(this)}
                                                        />
                                                        {this.state.displayName.message !== ''
                                                            ? [<span key="1" className="glyphicon glyphicon-remove form-control-feedback"></span>, <small key="2" className="text-danger">{this.state.displayName.message}</small>]
                                                            : ''
                                                        }
                                                    </div>
                                                </div>
                                                <div className={this.state.password.isValid ? "form-group" : "form-group has-error has-feedback"}>
                                                    <label className="col-sm-5 control-label">Password</label>
                                                    <div className="col-sm-5">
                                                        <input
                                                            type="password"
                                                            className="form-control"
                                                            placeholder="Password"
                                                            name="password"
                                                            value={this.state.password.value}
                                                            onChange={this.onChange.bind(this)}
                                                        />
                                                        {this.state.password.message !== ''
                                                            ? [<span key="1" className="glyphicon glyphicon-remove form-control-feedback"></span>, <small key="2" className="text-danger">{this.state.password.message}</small>]
                                                            : ''
                                                        }
                                                    </div>
                                                </div>
                                                <div className={this.state.confirmPassword.isValid ? "form-group" : "form-group has-error has-feedback"}>
                                                    <label className="col-sm-5 control-label">Confirm Password</label>
                                                    <div className="col-sm-5">
                                                        <input
                                                            type="password"
                                                            className="form-control"
                                                            placeholder="Confirm Password"
                                                            name="confirmPassword"
                                                            value={this.state.confirmPassword.value}
                                                            onChange={this.onChange.bind(this)}
                                                        />
                                                        {this.state.confirmPassword.message !== ''
                                                            ? [<span key="1" className="glyphicon glyphicon-remove form-control-feedback"></span>, <small key="2" className="text-danger">{this.state.confirmPassword.message}</small>]
                                                            : ''
                                                        }
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="col-sm-5 col-sm-offset-5">
                                                        <button
                                                            type="submit"
                                                            className="btn btn-success"
                                                            id='btnTestForm'
                                                            style={{ marginRight: 10 }}
                                                        >Create</button>
                                                        <button
                                                            type="button"
                                                            data-dismiss="modal"
                                                            className="btn btn-danger"
                                                        >Close</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
const mapStateToProps = state => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps, { addUser, getUsers })(TestForm);