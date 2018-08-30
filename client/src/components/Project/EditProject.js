import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getPRO, editPRO } from './../../actions/proActions'
import { Redirect } from 'react-router-dom'

class EditProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            owner: '',
            typePro: '',
            totalArea: '',
            startYear: '',
            endYear: '',
            isRedirect: false
        }
    }
    componentWillMount(){
        this.props.getPRO(this.props.match.params._id);
    }
    componentWillReceiveProps(nextProps){
        var project = nextProps.project
        this.setState({
            name: project.name,
            owner: project.owner,
            typePro: project.typePro,
            totalArea: project.totalArea,
            startYear: project.startYear,
            endYear: project.endYear,
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
    onCancel(){
        this.setState({
            isRedirect: !this.state.isRedirect
        })
    }
    onUpdate(e){
        e.preventDefault()
        var {name, owner, typePro, totalArea, startYear, endYear} = this.state;
        var update = {
            name,
            owner,
            typePro,
            totalArea,
            startYear,
            endYear,
        }
        this.props.editPRO(update, this.props.match.params._id)
        this.setState({
            isRedirect: !this.state.isRedirect
        })
    }
    render() {
        if(this.state.isRedirect){
            return <Redirect to="/manageproject"/>
        }
        return (
            <div className="container">
                <div className="panel panel-default">
                    <div className="panel-heading text-center">
                        <h1 className="panel-title ">Edit Project</h1>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.onUpdate.bind(this)}>
                            <div className="row">
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Name Project"
                                            name="name"
                                            value={this.state.name}
                                            onChange={this.onChange.bind(this)}
                                        />
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <div className="form-group">
                                        <label>Owner</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Owner"
                                            name="owner"
                                            value={this.state.owner}
                                            onChange={this.onChange.bind(this)}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

                                    <div className="form-group">
                                        <label>Type</label>
                                        <select
                                            id="inputtypePro"
                                            className="form-control"
                                            required="required"
                                            name="typePro"
                                            value={this.state.typePro}
                                            onChange={this.onChange.bind(this)}
                                        >
                                            <option value="House">House</option>
                                            <option value="Apartment">Apartment</option>
                                            <option value="Land">Land</option>
                                        </select>
                                    </div>

                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <div className="form-group">
                                        <label>Total Area</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Total Area"
                                            name="totalArea"
                                            value={this.state.totalArea}
                                            onChange={this.onChange.bind(this)}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <label>Start Year</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        placeholder="Start Year"
                                        name="startYear"
                                        value={this.state.startYear}
                                        onChange={this.onChange.bind(this)}
                                    />
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                    <div className="form-group">
                                        <label>End Year</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            placeholder="End Year"
                                            name="endYear"
                                            value={this.state.endYear}
                                            onChange={this.onChange.bind(this)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row text-center">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div className="form-group">
                                        <button
                                            style={{ marginRight: 10 }}
                                            type="submit"
                                            className="btn btn-success"
                                        >Update</button>
                                        <button
                                            onClick={this.onCancel.bind(this)}
                                            type="button"
                                            className="btn btn-danger"
                                        >Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        project: state.pro
    }
}

export default connect(mapStateToProps, { getPRO, editPRO })(EditProject);