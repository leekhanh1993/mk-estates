import React, { Component } from 'react';

class AddProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            owner: '',
            typePro: '',
            totalArea: '',
            startYear: '',
            endYear: ''
        }
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
            name: '',
            owner: '',
            typePro: '',
            totalArea: '',
            startYear: '',
            endYear: ''
        })
    }

    addProject() {
        this.props.addNewPro(this.state)
        this.clearForm();
    }
    render() {
        return (
            <div>
                {/* Modal */}
                <div id="addProject" className="modal fade" role="dialog">
                    <div className="modal-dialog">
                        {/* Modal content*/}
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">×</button>
                                <h4 className="modal-title text-center">New Advertisement</h4>
                            </div>
                            <div className="modal-body">
                                <form>
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
                                                    <option value="" disabled className="text-hide">Please select</option>
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
                                </form>
                            </div>
                            <div className="modal-body text-center">
                                <a
                                    className="btn btn-success"
                                    style={{ marginRight: 10 }}
                                    onClick={this.addProject.bind(this)}
                                    data-dismiss="modal"
                                >Add</a>
                                <a className="btn btn-danger" data-dismiss="modal">Close</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddProject;