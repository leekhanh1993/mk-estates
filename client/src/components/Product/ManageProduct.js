import React, { Component } from 'react';
import AddAdvertisement from '../Modal/AddAdvertisement';
import {connect} from 'react-redux'
import {getADs, deleteAD, addAD} from './../../actions/adActions'
import {Link} from 'react-router-dom'


class ManageProduct extends Component {
    
    componentDidMount(){
        this.props.getADs()
    }
    addNewAd(ad) {
        this.props.addAD(ad)
    }
    onDelete = (id)=>{
        this.props.deleteAD(id);
    }
    render() {
        console.log(this.props.idCurrentUser)
        var { ads } = this.props.ad;
        var userADs = ads.filter(ad => ad.idUser === this.props.idCurrentUser)
        var listAds = userADs.map((ad, index) => {
            return <div key={index}>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <div className="thumbnail">
                        <img alt="" style={{width: 350, height: 350}} src={ad.imageUrl === '' ? "https://via.placeholder.com/350x350" : ad.imageUrl} />
                        <div className="caption">
                            <h3>{ad.title}</h3>
                            <p>Area: {ad.area}</p>
                            <p>Number of bedrooms: {ad.numbedrooms}</p>
                            <p>Number of floors: {ad.numfloors}</p>
                            <p>Price: {ad.price} $</p>
                            <hr/>
                            <p>
                                <Link style={{marginRight: 10}} className="btn btn-primary" to={"/edit/"+ ad._id}>
                                <span className="glyphicon glyphicon-edit"></span> Edit
                                </Link>
                                <a 
                                onClick={this.onDelete.bind(this, ad._id)}
                                className="btn btn-danger">
                                <span className="glyphicon glyphicon-log-out"></span> Delete</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        })
        return (
            <div className="container-fluid" style={{paddingTop:"5%"}}>
                <div className="row" style={{ paddingBottom: 10 }}>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <a
                            className="btn btn-primary"
                            data-toggle="modal" data-target="#addAdvertisement"
                        ><span className="glyphicon glyphicon-plus"></span> New Advertisement</a>
                    </div>
                    <AddAdvertisement idCurrentUser={this.props.idCurrentUser} addNewAd={(data) => this.addNewAd(data)} />
                </div>
                <div className="row" style={{ paddingBottom: 10 }}>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search" />
                            <span className="input-group-btn">
                                <button type="button" className="btn btn-default">Search</button>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="row">
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

export default connect(mapStateToProps,{getADs, deleteAD, addAD})(ManageProduct);