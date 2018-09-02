import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getUsers } from '../../actions/userActions'

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

class UserLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputUserName: {
                value: '',
                isValid: true,
                message: ''
            },
            inputPassword: {
                value: '',
                isValid: true,
                message: ''
            }
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
            inputUserName: {
                value: '',
                isValid: true,
                message: ''
            },
            inputPassword: {
                value: '',
                isValid: true,
                message: ''
            }
        }
        this.setState(newState)
    }
    handleClose() {
        this.props.setCloseUserLogin(false)
    }
    handleShow() {
        var newState = {
            ...this.state,
            inputUserName: {
                value: '',
                isValid: true,
                message: ''
            },
            inputPassword: {
                value: '',
                isValid: true,
                message: ''
            }
        }
        this.setState(newState)
    }
    componentDidMount() {
        this.props.getUsers();
    }

    onSubmit() {
        var { inputUserName, inputPassword } = this.state;
        var { users } = this.props.users;

         //Clear State
         var newState = {
            ...this.state,
            inputUserName: {
                value: this.state.inputUserName.value,
                isValid: true,
                message: ''
            },
            inputPassword: {
                value: this.state.inputPassword.value,
                isValid: true,
                message: ''
            }
        }
        this.setState(newState)

        //Validation for User Name
        const checkUserName = (inputUserName) => {
            if (inputUserName === '') {
                this.setState({
                    inputUserName: {
                        value: this.state.inputUserName.value,
                        isValid: false,
                        message: 'User name can not be blanked!!!!'
                    }
                })
            } else {
                return true
            }
        }
        var resultCheckUserName = checkUserName(inputUserName.value)

        //Validation for Password
        const checkPassword = (inputPassword) => {
            if (inputPassword === '') {
                this.setState({
                    inputPassword: {
                        value: this.state.inputPassword.value,
                        isValid: false,
                        message: 'Password can not be blanked!!!!'
                    }
                })
            } else {
                return true
            }
        }
        var resultCheckPassword = checkPassword(inputPassword.value)

        if (resultCheckUserName && resultCheckPassword) {
            var reqLogin = false;
            var currentUser;
            for (let index = 0; index < users.length; index++) {
                const element = users[index];
                if (element.userName === inputUserName.value && element.password === inputPassword.value) {
                    reqLogin = true
                    currentUser = element
                }
            }
            if (reqLogin) {
                alert("Login Successful!!!")
                this.props.setMainLogin(currentUser.displayName, currentUser._id, true)
                this.props.setCloseUserLogin(false)
            }
            else {
                alert('Wrong User Name or Password')
            }
        }
    }

    render() {
        return (
            <Modal
                onEnter={this.handleShow.bind(this)}
                backdrop='static'
                show={this.props.showUserLogin}
                onHide={this.handleClose.bind(this)}
            >
                <ModalHeader>
                    <ModalTitle bsClass="text-center">
                        Login User
                    </ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <Form horizontal>
                        {/* User Name */}
                        <FormGroup
                            id="inputUserName"
                            validationState={this.state.inputUserName.isValid
                                ? null
                                : 'error'}
                        >
                            <Col sm={5} componentClass={ControlLabel}>User Name</Col>
                            <Col sm={5}>
                                <FormControl
                                    type="input"
                                    value={this.state.inputUserName.value}
                                    name="inputUserName"
                                    placeholder='User Name'
                                    onChange={this.onChange.bind(this)}
                                />
                                <FormControl.Feedback />
                                {this.state.inputUserName.isValid
                                    ? ''
                                    : <HelpBlock>{this.state.inputUserName.message}</HelpBlock>
                                }
                            </Col>
                        </FormGroup>
                        {/* Passoword*/}
                        <FormGroup
                            id="inputPassword"
                            validationState={this.state.inputPassword.isValid
                                ? null
                                : 'error'}
                        >
                            <Col sm={5} componentClass={ControlLabel}>Password</Col>
                            <Col sm={5}>
                                <FormControl
                                    type="password"
                                    value={this.state.inputPassword.value}
                                    name="inputPassword"
                                    placeholder='Password'
                                    onChange={this.onChange.bind(this)}
                                />
                                <FormControl.Feedback />
                                {this.state.inputPassword.isValid
                                    ? ''
                                    : <HelpBlock>{this.state.inputPassword.message}</HelpBlock>
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
                        >Login</Button>
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

export default connect(mapStateToProps, { getUsers })(UserLogin);