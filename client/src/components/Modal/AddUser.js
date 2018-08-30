import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addUser } from './../../actions/userActions'

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            displayName: '',
            password: '',
            confirmPassword: ''
        }
    }
    componentWillMount() {
        this.setState({
            userName: '',
            displayName: '',
            password: '',
            confirmPassword: ''
        })
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
            displayName: '',
            password: '',
            confirmPassword: ''
        })
    }
    createUser() {
        var { userName, displayName, password, confirmPassword } = this.state;
        if (userName && displayName && password && confirmPassword && (password === confirmPassword)) {
            var newUser = {
                userName,
                displayName,
                password
            }
            this.props.addUser(newUser)
            alert('Add User Successful!!')
            this.clearForm();
        }
    }
    closeRegUser() {
        this.clearForm();
    }
    render() {
        return (
            <div>
                {/* Modal */}
                <div id="addUser" className="modal fade" role="dialog">
                    <div className="modal-dialog">
                        {/* Modal content*/}
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title text-center">Create User</h4>
                            </div>
                            <div className="modal-body">
                                <form noValidate onSubmit={this.createUser.bind(this)} id="registerUserForm" className="form-horizontal">
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
                                        <label className="col-sm-5 control-label">Display Name</label>
                                        <div className="col-sm-5">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Display Name"
                                                name="displayName"
                                                value={this.state.displayName}
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
                                        <label className="col-sm-5 control-label">Confirm Password</label>
                                        <div className="col-sm-5">
                                            <input
                                                type="password"
                                                className="form-control"
                                                placeholder="Confirm Password"
                                                name="confirmPassword"
                                                value={this.state.confirmPassword}
                                                onChange={this.onChange.bind(this)}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-sm-5 col-sm-offset-5">
                                            <button
                                                type="submit"
                                                className="btn btn-success"
                                                style={{ marginRight: 10 }}
                                            >Create</button>
                                            <button
                                                type="button"
                                                onClick={this.closeRegUser.bind(this)}
                                                className="btn btn-danger"
                                                data-dismiss="modal"
                                            // id='closeRegisterUser'
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
const mapStateToProps = state => {
    return {

    }
}

export default connect(mapStateToProps, { addUser })(AddUser);