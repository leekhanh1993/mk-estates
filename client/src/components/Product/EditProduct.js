import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getADs, getAD, editAD } from './../../actions/adActions'
import { getPROs } from './../../actions/proActions'
import { Redirect } from 'react-router-dom'

class EditProduct extends Component {
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
            idProject: '',
            isRedirect: false
        }
    }
    componentWillReceiveProps(nextProps) {
        var editAD = nextProps.ad;
        this.setState({
            title: editAD.title,
            price: editAD.price,
            imageUrl: editAD.imageUrl,
            area: editAD.area,
            numbedrooms: editAD.numbedrooms,
            numfloors: editAD.numfloors,
            direction: editAD.direction,
            contactInfo: editAD.contactInfo,
            address: editAD.address,
            postDate: editAD.postDate,
            expiredDate: editAD.expiredDate,
            idUser: editAD.idUser,
            idProject: editAD.idProject
        })
    }
    componentWillMount() {
        this.props.getAD(this.props.match.params._id)

    }
    componentDidMount() {
        this.props.getPROs()
    }
    onChange(e) {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        })
    }
    updateAD(e) {
        e.preventDefault();
        var update = {
            title: this.state.title,
            price: this.state.price,
            imageUrl: this.state.imageUrl,
            area: this.state.area,
            numbedrooms: this.state.numbedrooms,
            numfloors: this.state.numfloors,
            direction: this.state.direction,
            contactInfo: this.state.contactInfo,
            address: this.state.address,
            postDate: this.state.postDate,
            expiredDate: this.state.expiredDate,
            idUser: this.state.idUser,
            idProject: this.state.idProject
        }
        this.props.editAD(update, this.props.match.params._id)
        this.setState({
            isRedirect: !this.state.isRedirect
        })
    }
    onCancel() {
        this.setState({
            isRedirect: !this.state.isRedirect
        })
    }
    render() {
        var { pros } = this.props.projects;
        if (this.state.isRedirect) {
            return <Redirect to="/manageproduct" />
        }

        var listProject = pros.map((project, index) => {
            return <option key={index} value={project._id}>{project.name}</option>
        })
        return (
            <div className="container" style={{paddingTop:"5%"}} >
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title text-center">Edit Advertisement</h3>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.updateAD.bind(this)}>
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
                                            required
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
                                            required
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
                                            required
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
                                        required
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
                                            required
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
                                        required
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
                                            required
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
                                        value={this.state.contactInfo || ''}
                                        onChange={this.onChange.bind(this)}
                                        required
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
                                            required
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
                                        required
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
                                            required
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
                                            {listProject}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row text-center">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div className="form-group">
                                        <button
                                            style={{ marginRight: 10 }}
                                            type="submit"
                                            // onClick={this.updateAD.bind(this)}
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
        ad: state.ad,
        projects: state.pros
    }
}
export default connect(mapStateToProps, { getADs, getAD, editAD, getPROs })(EditProduct);