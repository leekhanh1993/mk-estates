import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPROs } from './../../actions/proActions'

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

class AddAdvertisement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            price: '',
            imageUrl: '',
            area: '',
            numbedrooms: '',
            numfloors: '',
            direction: '',
            contactInfo: '',
            address: '',
            postDate: '',
            expiredDate: '',
            idUser: '',
            idProject: ''
        }
    }
    componentDidMount() {
        this.props.getPROs();
    }
    componentWillMount() {
        this.setState({
            idUser: this.props.idCurrentUser
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
            title: '',
            price: '',
            imageUrl: '',
            area: '',
            numbedrooms: '',
            numfloors: '',
            direction: '',
            contactInfo: '',
            address: '',
            postDate: '',
            expiredDate: '',
            idProject: ''
        })
    }

    addAdvertisement() {
        this.props.addNewAd(this.state)
        this.clearForm();
    }
    format_currentDate=(rawDay)=>{
        var currentYear = rawDay.getFullYear();
        var currentMonth = rawDay.getMonth().toString().length === 1 ? `0${rawDay.getMonth() + 1}` : rawDay.getMonth() + 1;
        var currentDate = rawDay.getDate().toString().length === 1 ? `0${rawDay.getDate()}` : rawDay.getDate();
        var result = `${currentMonth}/${currentDate}/${currentYear}`
        return result
    }
    render() {
        var { pros } = this.props.projects;
        var listProjects = pros.map((project, index) => {
            return <option key={index} value={project._id}>{project.name}</option>
        })
        var rawDay = new Date();
        
        console.log(this.format_currentDate(rawDay))
        return (
            <div>
                {/* Modal */}
                <div id="addAdvertisement" className="modal fade" role="dialog">
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
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <div className="form-group">
                                                <label>Title</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Title"
                                                    name="title"
                                                    value={this.state.title}
                                                    onChange={this.onChange.bind(this)}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                            <div className="form-group">
                                                <label>Price</label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    placeholder="Price"
                                                    name="price"
                                                    value={this.state.price}
                                                    onChange={this.onChange.bind(this)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                            <div className="form-group">
                                                <label>Image</label>
                                                <input
                                                    type="url"
                                                    className="form-control"
                                                    placeholder="Image url"
                                                    name="imageUrl"
                                                    value={this.state.imageUrl}
                                                    onChange={this.onChange.bind(this)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                            <label>Area(m2)</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="Area"
                                                name="area"
                                                value={this.state.area}
                                                onChange={this.onChange.bind(this)}
                                            />
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                            <div className="form-group">
                                                <label>Number of bedrooms</label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    placeholder="Number of bedrooms"
                                                    name="numbedrooms"
                                                    value={this.state.numbedrooms}
                                                    onChange={this.onChange.bind(this)}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                            <label>Number of floors</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="Number of floors"
                                                name="numfloors"
                                                value={this.state.numfloors}
                                                onChange={this.onChange.bind(this)}
                                            />
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                            <div className="form-group">
                                                <label>Direction</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Direction"
                                                    name="direction"
                                                    value={this.state.direction}
                                                    onChange={this.onChange.bind(this)}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                            <label>Contact Information</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Contact Information"
                                                name="contactInfo"
                                                value={this.state.contactInfo}
                                                onChange={this.onChange.bind(this)}
                                            />
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                            <div className="form-group">
                                                <label>Address</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Address"
                                                    name="address"
                                                    value={this.state.address}
                                                    onChange={this.onChange.bind(this)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                            <label>Post Date</label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                placeholder="Post Date"
                                                name="postDate"
                                                value={this.state.postDate}
                                                onChange={this.onChange.bind(this)}
                                            />
                                        </div>
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                            <div className="form-group">
                                                <label>Expire Date</label>
                                                <input
                                                    type="date"
                                                    className="form-control"
                                                    placeholder="Expire Date"
                                                    name="expiredDate"
                                                    value={this.state.expiredDate}
                                                    onChange={this.onChange.bind(this)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                            <div className="form-group">
                                                <label>Project</label>
                                                <select
                                                    id="inputtypePro"
                                                    className="form-control"
                                                    required="required"
                                                    name="idProject"
                                                    value={this.state.idProject}
                                                    onChange={this.onChange.bind(this)}
                                                >
                                                    <option value="" disabled className="text-hide">Please select</option>
                                                    {listProjects}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-body text-center">
                                <a
                                    className="btn btn-success"
                                    style={{ marginRight: 10 }}
                                    onClick={this.addAdvertisement.bind(this)}
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

const mapStateToProps = state => {
    return {
        projects: state.pros
    }
}
export default connect(mapStateToProps, { getPROs })(AddAdvertisement);