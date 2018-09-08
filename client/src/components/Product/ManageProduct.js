import React, { Component } from 'react';
import AddAdvertisement from '../Modal/AddAdvertisement';
import { connect } from 'react-redux'
import { getADs, deleteAD, addAD } from './../../actions/adActions'
import EditAdvertisement from '../Modal/EditAdvertisement';


class ManageProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idAdvertisement: '',
            showAddAdvertisement: false,
            showEditAdvertisement: false,
            filterByKeyWord: '',
            inputKeyWord: ''
        }
    }
    searchKeyWord() {
        this.setState({
            filterByKeyWord: this.state.inputKeyWord
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
    setCloseEditAdvertisement(showEditAdvertisement) {
        this.setState({
            showEditAdvertisement
        })
        this.load()
    }
    onEditAdvertisement(idAdvertisement, showEditAdvertisement) {
        this.setState({
            idAdvertisement,
            showEditAdvertisement
        })
    }

    setCloseAddAdvertisement(showAddAdvertisement) {
        this.setState({
            showAddAdvertisement
        })
        this.load()
    }
    onAddAdvertisement(showAddAdvertisement) {
        this.setState({
            showAddAdvertisement
        })
    }
    componentDidMount() {
        this.load();
    }
    load() {
        this.props.getADs()
    }
    addNewAd(ad) {
        this.props.addAD(ad)
    }
    onDelete = (id) => {
        if (window.confirm("Do want to delete it?")) {
            this.setState({
                idAdvertisement: ''
            })
            this.props.deleteAD(id);
        }
    }
    format_currency = (price) => {
        var value = String(price)
        return value.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    }
    render() {
        var { ads } = this.props.ad;
        var {filterByKeyWord} = this.state;

        var userADs = ads.filter(ad => ad.idUser === this.props.idCurrentUser)
        //search by keyword
        userADs = userADs.filter((ad) => {
            return ad.title.toLowerCase().indexOf(filterByKeyWord.toLowerCase()) !== -1
        })

        var listAds = userADs.map((ad, index) => {
            return <div key={index}>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <div className="thumbnail">
                        <img alt="" style={{ width: 350, height: 350 }} src={ad.imageUrl === '' ? "https://via.placeholder.com/350x350" : ad.imageUrl} />
                        <div className="caption">
                            <h3>{ad.title}</h3>
                            <p>Area: {this.format_currency(ad.area)} m2</p>
                            <p>Number of bedrooms: {ad.numbedrooms}</p>
                            <p>Number of floors: {ad.numfloors}</p>
                            <p>Price: {this.format_currency(ad.price)} $</p>
                            <hr />
                            <p>
                                <a
                                    onClick={() => this.onEditAdvertisement(ad._id, true)}
                                    style={{ marginRight: 10 }}
                                    className="btn btn-default mainBtnStyle"
                                >
                                    <span className="glyphicon glyphicon-edit"></span> Edit
                                </a>
                                <a
                                    onClick={this.onDelete.bind(this, ad._id)}
                                    className="btn btn-default mainBtnStyle">
                                    <span className="glyphicon glyphicon-log-out"></span> Delete</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        })
        return (
            <div className="container-fluid" style={{ paddingTop: "5%" }}>
                <div className="row" style={{ paddingBottom: 40 }}>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <a
                            className="btn btn-default mainBtnStyle"
                            onClick={this.onAddAdvertisement.bind(this, true)}
                        ><span className="glyphicon glyphicon-plus"></span> New Advertisement</a>
                    </div>
                    <AddAdvertisement
                        allAdvertisements={this.props.ad.ads}
                        setCloseAddAdvertisement={(value) => this.setCloseAddAdvertisement(value)}
                        showAddAdvertisement={this.state.showAddAdvertisement}
                        idCurrentUser={this.props.idCurrentUser}
                        addNewAd={(data) => this.addNewAd(data)} />
                </div>
                <div className="row" style={{ paddingBottom: 10 }}>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <div className="input-group">
                            <input
                                onChange={this.onChange.bind(this)}
                                name="inputKeyWord"
                                value={this.state.inputKeyWord}
                                type="text"
                                className="form-control"
                                placeholder="Search" />
                            <span className="input-group-btn">
                                <button
                                    onClick={this.searchKeyWord.bind(this)}
                                    type="button"
                                    className="btn btn-default">Search</button>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <EditAdvertisement
                        allAdvertisements={this.props.ad.ads}
                        setCloseEditAdvertisement={(value) => this.setCloseEditAdvertisement(value)}
                        showEditAdvertisement={this.state.showEditAdvertisement}
                        idAdvertisement={this.state.idAdvertisement}
                    />
                    {listAds}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ad: state.ads
    }
}

export default connect(mapStateToProps, { getADs, deleteAD, addAD })(ManageProduct);