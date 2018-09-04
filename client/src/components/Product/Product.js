import React, { Component } from 'react';
import { getADs } from './../../actions/adActions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputKeyWord: '',
            filterByKeyWord: '',
            filterArea: '',
            filterNumBedRoom: '',
            filterNumFloor: '',
            filterDirection: '',
            filterPrice: '',
            collapseArea: false,
            collapseNumBedRoom: false,
            collapseNumFloor: false,
            collapseDirection: false,
            collapsePrice: false,
            currentPage: 1,
            adsPerPage: 4,
            hidePage: 1,
        }
    }

    onClick(currentPage) {
        this.setState({
            currentPage,
            hidePage: currentPage
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

    componentDidMount() {
        this.props.getADs();
    }
    onSearchByKeyWord() {
        this.setState({
            filterByKeyWord: this.state.inputKeyWord
        })
    }
    onSearchAllADs() {
        this.setState({
            filterArea: '',
            filterNumBedRoom: '',
            filterNumFloor: '',
            filterDirection: '',
            filterPrice: '',
            currentPage: 1,
            adsPerPage: 4,
            hidePage: 1
        })
    }
    onSearchByArea(filterArea) {
        this.setState({
            filterArea,
            currentPage: 1,
            adsPerPage: 4,
            hidePage: 1
        })
    }
    onSearchByNumBedRoom(filterNumBedRoom) {
        this.setState({
            filterNumBedRoom,
            currentPage: 1,
            adsPerPage: 4,
            hidePage: 1
        })
    }
    onSearchByNumFloor(filterNumFloor) {
        this.setState({
            filterNumFloor,
            currentPage: 1,
            adsPerPage: 4,
            hidePage: 1
        })
    }
    onSearchByDirection(filterDirection) {
        this.setState({
            filterDirection,
            currentPage: 1,
            adsPerPage: 4,
            hidePage: 1
        })
    }
    onSearchByPrice(filterPrice) {
        this.setState({
            filterPrice,
            currentPage: 1,
            adsPerPage: 4,
            hidePage: 1
        })
    }
    setButtonUpDown(key) {
        switch (key) {
            case 'area':
                this.setState({
                    collapseArea: !this.state.collapseArea
                })
                break;
            case 'bedroom':
                this.setState({
                    collapseNumBedRoom: !this.state.collapseNumBedRoom
                })
                break;
            case 'floor':
                this.setState({
                    collapseNumFloor: !this.state.collapseNumFloor
                })
                break;
            case 'direction':
                this.setState({
                    collapseDirection: !this.state.collapseDirection
                })
                break;
            case 'price':
                this.setState({
                    collapsePrice: !this.state.collapsePrice
                })
                break;
            default:
                return -1;
        }
    }
    format_currency = (price) => {
        var value = String(price)
        return value.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    }

    render() {
        var { ads } = this.props.ads;
        var copyADs = ads;
        var { filterByKeyWord } = this.state;
        //search by key word
        ads = ads.filter((ad) => {
            return ad.title.toLowerCase().indexOf(filterByKeyWord.toLowerCase()) !== -1
        })
        //fillter All Advertisements
        if (this.state.filterAllADs === '1') {
            ads = ads.filter((ad) => {
                return ad
            })
        }
        //search by area
        ads = ads.filter((ad) => {
            switch (this.state.filterArea) {
                case 0:
                    if (Number(ad.area) < 100) {
                        return true;
                    } else {
                        return false;
                    }
                case 1:
                    if (Number(ad.area) >= 100 && Number(ad.area) < 300) {
                        return true;
                    } else {
                        return false;
                    }
                case 3:
                    if (Number(ad.area) >= 300 && Number(ad.area) < 600) {
                        return true;
                    } else {
                        return false;
                    }
                case 6:
                    if (Number(ad.area) >= 600 && Number(ad.area) < 1000) {
                        return true;
                    } else {
                        return false;
                    }
                case 10:
                    if (Number(ad.area) >= 1000) {
                        return true;
                    } else {
                        return false;
                    }
                default:
                    return true;
            }
            // return ad.area.indexOf(this.state.filterArea) !== -1
        })
        //search by bedroom
        ads = ads.filter((ad) => {
            return ad.numbedrooms.indexOf(this.state.filterNumBedRoom) !== -1
        })
        //search by floor
        ads = ads.filter((ad) => {
            return ad.numfloors.indexOf(this.state.filterNumFloor) !== -1
        })
        //search by Direction
        ads = ads.filter((ad) => {
            return ad.direction.indexOf(this.state.filterDirection) !== -1
        })

        //filter by price
        if (this.state.filterPrice === '1') {
            ads = ads.sort((a, b) => {
                var firstPrice = Number(a.price)
                var SecondPrice = Number(b.price)
                if (firstPrice > SecondPrice) return 1
                else if (firstPrice < SecondPrice) return -1
                else return 0;
            })
        }
        if (this.state.filterPrice === '-1') {
            ads = ads.sort((a, b) => {
                var firstPrice = Number(a.price)
                var SecondPrice = Number(b.price)
                if (firstPrice > SecondPrice) return -1
                else if (firstPrice < SecondPrice) return 1
                else return 0;
            })
        }
        // //render Areas
        // var listAreas = copyADs.map((ad, index) => {
        //     return <li key={index} className="list-group-item">
        //         <a
        //             onClick={this.onSearchByArea.bind(this, ad.area)}
        //         >{ad.area}</a>
        //     </li>
        // })
        //render NumBedrooms
        var getTotalNumBedRooms = (listADs) => {
            var listNums = []
            listADs.forEach(ad => {
                if (!listNums.includes(ad.numbedrooms)) {
                    listNums.push(ad.numbedrooms)
                }
            });
            return listNums
        }
        var totalNumBedRems = getTotalNumBedRooms(copyADs);
        var rednerNumBedRooms = totalNumBedRems.map((num) => {
            return <li
                key={num}
                className="list-group-item"
                onClick={this.onSearchByNumBedRoom.bind(this, num)}
            ><a>{num === 1 ? (num + " Bed Room") : (num + " Bed Rooms")}</a></li>
        })

        //render  NumFloors
        var getTotalFloors = (listADs) => {
            var listNums = []
            listADs.forEach(ad => {
                if (!listNums.includes(ad.numfloors)) {
                    listNums.push(ad.numfloors)
                }
            });
            return listNums
        }
        var totalNumFloors = getTotalFloors(copyADs);
        var rednerNumFloors = totalNumFloors.map((num) => {
            return <li
                key={num}
                className="list-group-item"
                onClick={this.onSearchByNumFloor.bind(this, num)}
            ><a>{num === 1 ? (num + " Floor") : (num + " Floors")}</a></li>
        })


        //load ads via pagination
        var { adsPerPage, currentPage, hidePage } = this.state;
        var totalADs = Math.ceil(ads.length / adsPerPage)

        //logic for display page numbers
        var pageNumbers = []
        for (let i = 1; i <= totalADs; i++) {
            pageNumbers.push(i);

        }
        if ('123'.includes(hidePage)) {
            pageNumbers = pageNumbers.slice(0, 5)
            var loadPageNumbers = pageNumbers.map(number => {
                return <li className={hidePage === number ? 'active' : ''} key={number}>
                    <a
                        onClick={this.onClick.bind(this, number)}
                    >{number}</a>
                </li>
            })
        } else {
            pageNumbers = pageNumbers.slice((hidePage - 3), (hidePage + 2))
            loadPageNumbers = pageNumbers.map(number => {
                return <li className={hidePage === number ? 'active' : ''} key={number}>
                    <a
                        onClick={this.onClick.bind(this, number)}
                    >{number}</a>
                </li>
            })
        }
        //logic for display current ads
        var indexOfLastADs = currentPage * adsPerPage
        var indexOfFirstADs = indexOfLastADs - adsPerPage
        ads = ads.slice(indexOfFirstADs, indexOfLastADs)


        //Redner all advertisements
        var listAllADs = ads.map((ad, index) => {
            return <div key={index} className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="thumbnail">
                    <img src={ad.imageUrl} alt={ad.name} style={{ height: 300, width: 350 }} />
                    <div className="caption">
                        <h3>{ad.title}</h3>
                        <p><b>Area:</b> {this.format_currency(ad.area)} m2</p>
                        <p><b>Number of bedrooms:</b> {ad.numbedrooms}</p>
                        <p><b>Number of floors:</b> {ad.numfloors}</p>
                        <p><b>Price:</b> {this.format_currency(ad.price)} VND</p>
                        <p>
                            <Link to={"/detail/" + ad._id} className="btn btn-primary">Detail</Link>
                        </p>
                    </div>
                </div>
            </div>
        })
        return (
            <div className="container-fluid" style={{ paddingTop: "5%" }}>
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 filterstyle">
                    <div className="panel panel-default">
                        <div className="panel-heading ">
                            <h3 className="panel-title" style={{ color: 'white' }}>Filter By</h3>
                        </div>
                        <div className="panel-body">
                            <div className="panel-group">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                            <a
                                                onClick={this.onSearchAllADs.bind(this)}>All</a>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="panel-group">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                            <a
                                                onClick={this.setButtonUpDown.bind(this, 'area')}
                                                data-toggle="collapse"
                                                href="#area">Area<span
                                                    className={this.state.collapseArea ? "glyphicon glyphicon-chevron-up pull-right" : "glyphicon glyphicon-chevron-down pull-right"}
                                                ></span></a>
                                        </h4>
                                    </div>
                                    <div id="area" className="panel-collapse collapse">
                                        <ul className="list-group">
                                            <li className="list-group-item">
                                                <a
                                                    onClick={this.onSearchByArea.bind(this, 0)}
                                                >Lower than 100m2</a>
                                            </li>
                                            <li className="list-group-item">
                                                <a
                                                    onClick={this.onSearchByArea.bind(this, 1)}
                                                >100m2 ++</a>
                                            </li>
                                            <li className="list-group-item">
                                                <a
                                                    onClick={this.onSearchByArea.bind(this, 3)}
                                                >300m2 ++</a>
                                            </li>
                                            <li className="list-group-item">
                                                <a
                                                    onClick={this.onSearchByArea.bind(this, 6)}
                                                >600m2 ++</a>
                                            </li>
                                            <li className="list-group-item">
                                                <a
                                                    onClick={this.onSearchByArea.bind(this, 10)}
                                                >1000m2 ++</a>
                                            </li>
                                            {/* {listAreas} */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="panel-group">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                            <a
                                                onClick={this.setButtonUpDown.bind(this, 'bedroom')}
                                                data-toggle="collapse"
                                                href="#bedroom"
                                            >Bedrooms<span
                                                className={this.state.collapseNumBedRoom ? "glyphicon glyphicon-chevron-up pull-right" : "glyphicon glyphicon-chevron-down pull-right"}
                                            ></span></a>
                                        </h4>
                                    </div>
                                    <div id="bedroom" className="panel-collapse collapse">
                                        <ul className="list-group">
                                            {rednerNumBedRooms}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="panel-group">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                            <a
                                                onClick={this.setButtonUpDown.bind(this, 'floor')}
                                                data-toggle="collapse"
                                                href="#floor"
                                            >Floors<span
                                                className={this.state.collapseNumFloor ? "glyphicon glyphicon-chevron-up pull-right" : "glyphicon glyphicon-chevron-down pull-right"}
                                            ></span></a>
                                        </h4>
                                    </div>
                                    <div id="floor" className="panel-collapse collapse">
                                        <ul className="list-group">
                                            {rednerNumFloors}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="panel-group">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                            <a
                                                onClick={this.setButtonUpDown.bind(this, 'direction')}
                                                data-toggle="collapse"
                                                href="#direction"
                                            >Driection<span
                                                className={this.state.collapseDirection ? "glyphicon glyphicon-chevron-up pull-right" : "glyphicon glyphicon-chevron-down pull-right"}
                                            ></span></a>
                                        </h4>
                                    </div>
                                    <div id="direction" className="panel-collapse collapse">
                                        <ul className="list-group">
                                            <li
                                                onClick={this.onSearchByDirection.bind(this, 'North')}
                                                className="list-group-item"><a>North</a></li>
                                            <li
                                                onClick={this.onSearchByDirection.bind(this, 'South')}
                                                className="list-group-item"><a>South</a></li>
                                            <li
                                                onClick={this.onSearchByDirection.bind(this, 'East')}
                                                className="list-group-item"><a>East</a></li>
                                            <li
                                                onClick={this.onSearchByDirection.bind(this, 'West')}
                                                className="list-group-item"><a>West</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="panel-group">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                            <a
                                                onClick={this.setButtonUpDown.bind(this, 'price')}
                                                data-toggle="collapse"
                                                href="#price"
                                            >Price<span
                                                className={this.state.collapsePrice ? "glyphicon glyphicon-chevron-up pull-right" : "glyphicon glyphicon-chevron-down pull-right"}
                                            ></span></a>
                                        </h4>
                                    </div>
                                    <div id="price" className="panel-collapse collapse">
                                        <ul className="list-group">
                                            <li
                                                onClick={this.onSearchByPrice.bind(this, '1')}
                                                className="list-group-item"><a>Low To High</a></li>
                                            <li
                                                onClick={this.onSearchByPrice.bind(this, '-1')}
                                                className="list-group-item"><a>High To Low</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                    <div className="row" style={{ paddingBottom: 10 }}>
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <div className="input-group">
                                <input
                                    onChange={this.onChange.bind(this)}
                                    type="text"
                                    name="inputKeyWord"
                                    value={this.state.inputKeyWord}
                                    className="form-control"
                                    placeholder="Search" />
                                <span className="input-group-btn">
                                    <button
                                        onClick={this.onSearchByKeyWord.bind(this)}
                                        type="button"
                                        className="btn btn-default">Search</button>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {listAllADs}
                    </div>
                    <div className="row text-center">
                        {pageNumbers.length === 0
                            ? <h1 className="text-muted">No result match</h1>
                            : <div className="pagination pagination-lg">
                                <li className={this.state.currentPage === 1 ? "disabled" : ""}>
                                    <a
                                        onClick={this.onClick.bind(this, 1)}
                                    >{'<<'}</a></li>
                                {loadPageNumbers}
                                <li className={this.state.currentPage === totalADs ? "disabled" : ""}>
                                    <a
                                        onClick={this.onClick.bind(this, totalADs)}
                                    >{'>>'}</a></li>
                            </div>}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ads: state.ads
    }
}

export default connect(mapStateToProps, { getADs })(Product);