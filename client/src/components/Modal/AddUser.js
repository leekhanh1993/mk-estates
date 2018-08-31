import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addUser, getUsers } from '../../actions/userActions'

import {
    Col,
    Modal,
    ModalBody,
    ModalHeader,
    ModalTitle,
    ModalFooter,
    Form,
    FormControl,
    FormGroup,
    ControlLabel,
    HelpBlock,
    Button
} from 'react-bootstrap'

class AddUser extends Component {
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
        var newState = {
            ...this.state,
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
            }
        }
        this.setState(newState)
    }
    handleClose() {
        this.props.setCloseAddUser(false)
    }
    handleShow() {
        var newState = {
            ...this.state,
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
            }
        }
        this.setState(newState)
    }

    onSubmit() {
        var { userName, displayName, password, confirmPassword } = this.state;
        var { users } = this.props.users;

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
            }
        }
        this.setState(newState)

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
            var newUser = {
                userName: userName.value,
                displayName: displayName.value,
                password: password.value
            }
            this.props.addUser(newUser)
            alert("Create User Successful!!!")
            this.props.setCloseAddUser(false)

        }
    }
    render() {
        return (
            <Modal
                onEnter={this.handleShow.bind(this)}
                backdrop='static'
                show={this.props.showAddUser}
                onHide={this.handleClose.bind(this)}
            >
                <ModalHeader>
                    <ModalTitle bsClass="text-center">
                        Create User
                        </ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <Form horizontal>
                        {/* User Name */}
                        <FormGroup
                            id="userName"
                            validationState={this.state.userName.isValid
                                ? null
                                : 'error'}
                        >
                            <Col sm={5} componentClass={ControlLabel}>User Name</Col>
                            <Col sm={5}>
                                <FormControl
                                    type="input"
                                    value={this.state.userName.value}
                                    name="userName"
                                    placeholder='User Name'
                                    onChange={this.onChange.bind(this)}
                                />
                                <FormControl.Feedback />
                                {this.state.userName.isValid
                                    ? ''
                                    : <HelpBlock>{this.state.userName.message}</HelpBlock>
                                }
                            </Col>
                        </FormGroup>

                        {/* Display Name */}
                        <FormGroup
                            id="displayName"
                            validationState={this.state.displayName.isValid
                                ? null
                                : 'error'}
                        >
                            <Col sm={5} componentClass={ControlLabel}>Display Name</Col>
                            <Col sm={5}>
                                <FormControl
                                    type="input"
                                    value={this.state.displayName.value}
                                    name="displayName"
                                    placeholder='Display Name'
                                    onChange={this.onChange.bind(this)}
                                />
                                <FormControl.Feedback />
                                {this.state.displayName.isValid
                                    ? ''
                                    : <HelpBlock>{this.state.displayName.message}</HelpBlock>
                                }
                            </Col>
                        </FormGroup>

                        {/* Passoword*/}
                        <FormGroup
                            id="password"
                            validationState={this.state.password.isValid
                                ? null
                                : 'error'}
                        >
                            <Col sm={5} componentClass={ControlLabel}>Password</Col>
                            <Col sm={5}>
                                <FormControl
                                    type="password"
                                    value={this.state.password.value}
                                    name="password"
                                    placeholder='Password'
                                    onChange={this.onChange.bind(this)}
                                />
                                <FormControl.Feedback />
                                {this.state.password.isValid
                                    ? ''
                                    : <HelpBlock>{this.state.password.message}</HelpBlock>
                                }
                            </Col>
                        </FormGroup>

                        {/* Confirm password*/}
                        <FormGroup
                            id="confirmPassword"
                            validationState={this.state.confirmPassword.isValid
                                ? null
                                : 'error'}
                        >
                            <Col sm={5} componentClass={ControlLabel}>Confirm Password</Col>
                            <Col sm={5}>
                                <FormControl
                                    type="password"
                                    value={this.state.confirmPassword.value}
                                    name="confirmPassword"
                                    placeholder='Confirm Password'
                                    onChange={this.onChange.bind(this)}
                                />
                                <FormControl.Feedback />
                                {this.state.confirmPassword.isValid
                                    ? ''
                                    : <HelpBlock>{this.state.confirmPassword.message}</HelpBlock>
                                }
                            </Col>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <div className="text-center">
                        <Button
                            bsStyle="success"
                            onClick={this.onSubmit.bind(this)}
                        >Create</Button>
                        <Button
                            bsStyle="danger"
                            onClick={this.handleClose.bind(this)}
                        >Close</Button>
                    </div>
                </ModalFooter>
            </Modal>
        );
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps, { addUser, getUsers })(AddUser);