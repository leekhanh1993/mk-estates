import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getAD} from '../../actions/adActions'
import {getPROs} from '../../actions/proActions'
import {getUsers} from '../../actions/userActions'

class DetailPages extends Component {
  componentDidMount(){
    var id = this.props.match.params._id
    this.props.getAD(id)
    this.props.getPROs();
    this.props.getUsers();
  }
  format_currency = (price) => {
    var value = String(price)
    return value.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  }
  render() {
    var {pros} = this.props.projects;
    var ad = this.props.advertisement;
    var {users} = this.props.users;
    //get name type project
    var typeProject;
    for (let index = 0; index < pros.length; index++) {
      const project = pros[index];
      if(project._id === ad.idProject){
        typeProject = project.typePro
      }
    }
    //get name user
    var nameUser;
    for (let index = 0; index < users.length; index++) {
      const user = users[index];
      if(user._id === ad.idUser){
        nameUser = user.displayName
      }
    }
    console.log(nameUser)
    return (
      <div className="container-fluid" style={{ paddingTop: 10 }}>
        {/* Full Picture */}
        <div><div className="row">
          {/* Carousel */}
          <div>
          <img src={ad.imageUrl} alt={ad.title} style={{width: '100%', height: 700}}/>
          </div>
        </div>

        </div>

        {/* Two Columns */}


        <div>
          <div className="container-fluid container-full-height" style={{ backgroundColor: "white", paddingTop: "2%" }} >
            <div className="row row-full-height">
          <div className="hidden-xs col-sm-6 col-md-8 col-full-height login-main-content">
            <div className="row">
              <div className="col-md-10 col-md-offset-1">
                <div className="row" >
                <div id="listsection">
                <a  className="item" href="" style={{textDecoration:"none"}}>Overview</a>
                <a className="item" href="" style={{textDecoration:"none"}}>Summary</a>
                <a className="item" href=""style={{textDecoration:"none"}}>Amentities</a>
                <a className="item" href=""style={{textDecoration:"none"}}>Facilities</a>
                </div>
                </div>
                <h3 className="content-box-title">{ad.title}</h3>
                <p className="btn btn-default pull-right">
                {ad._id}<br/>
                <b>House Code</b> 
                </p>
                <p className="content-box-tagline"><span className="fa fa-map-marker"></span> {ad.address}</p>

                <p className="content-box-title" style={{fontSize:"15pt",paddingTop:"20pt"}} >Overview</p>
                <div className="row" style={{paddingLeft:"10pt"}} >
                    <div className="col-sm-6 over fa fa-building-o">{typeProject}</div>
                    <div className="col-sm-6 over fa fa-area-chart">
                    {ad.area} m2

                    </div>
                    <div className="col-sm-6 over fa fa-bath">
                    1 Bathroom(s)
                    
                    </div>
                    <div className="col-sm-6 over">
                    <span className="fa fa-bed"/> {ad.numbedrooms} Bethroom(s)
                    </div>
                    <div className="col-sm-6 over fa fa-group">
                    2 Accomodate(s)
                    
                    </div>
                    <div className="col-sm-6 over fa fa-umbrella">
                    Furniture: Full
                    
                    </div>
                
                </div>

              </div>
              <div className="col-md-10 col-md-offset-1">
              <p className="content-box-title" style={{fontSize:"15pt",paddingTop:"20pt"}} >Description</p>
              <div className="content-box-text">
              <p>Address: {ad.address}</p>
              <p>Overview: modern and fully furnishings, great view, open living space, high-quality interiors, panoramic city view</p>
              <p>Amenities: large double bed, wardrobe, induction hob, chimney, refrigerator, microwave</p>
              <p>Project Facility: parking lot,children's playground, convenient stores, international garden, outdoor gym and fitness area, multi-purpose courtyard, </p>
              <p>Nearby places: Zoo, Botanic Garden, Universities, historic places</p>
              <p>Traffic: 5 minutes to District 1, 5 minutes to Ben Thanh Market, 15 minutes to District 7</p>
              </div>
              </div>
              <div className="col-md-10 col-md-offset-1">
              <p className="content-box-title" style={{fontSize:"15pt",paddingTop:"20pt"}} >Summary</p>
              <div className="content-box-text">
              <p>Rent City Garden Apartment at Ngo Tat To Street, Ward 21, Binh Thanh District, Ho Chi Minh. Modern Apartment near Saigon Zoo & Botanical Garden that has City View, long-time rental for at least 6 months.</p>
              </div>
              </div>
              <div className="col-md-10 col-md-offset-1">
              <p className="content-box-title" style={{fontSize:"15pt",paddingTop:"20pt"}} >Amentities</p>
              <div className="row" style={{paddingLeft:"10pt"}}>
              <div className="col-sm-3 over fa fa-check">
                    TV

                    </div>
                    <div className="col-sm-3 over fa fa-check">
                    Microwave

                    </div>
                    <div className="col-sm-3 over fa fa-check">
                    Air conditioner

                    </div>
                    <div className="col-sm-3 over fa fa-check">
                    Smoke detector
                    
                    </div>
                    <div className="col-sm-3 over fa fa-check">
                    Fire extinguisher

                    </div>
                    <div className="col-sm-3 over fa fa-check">
                    Balcony
                    
                    </div>
                    <div className="col-sm-3 over fa fa-check">
                    Bathtub

                    </div>
                    <div className="col-sm-3 over fa fa-check">
                    Geyser

                    </div>
                    <div className="col-sm-3 over fa fa-check">
                    Dish Washer
                    
                    </div>
                    <div className="col-sm-3 over fa fa-check">
                    Electric Chimney
                    
                    </div>
                    <div className="col-sm-3 over fa fa-check">
                    Parking

                    </div>
                    <div className="col-sm-3 over fa fa-check">
                    Room Heater
                    
                    </div>
                    <div className="col-sm-3 over fa fa-check">
                    First Aid Kit
                    
                    </div>
                    <div className="col-sm-3 over fa fa-check">
                    Essentials

                    </div>
                    <div className="col-sm-3 over fa fa-check">
                    Pet Allowed
                    
                    </div>
                    <div className="col-sm-3 over fa fa-check">
                    Pool
                    
                    </div>
                    <div className="col-sm-3 over fa fa-check">
                    Kitchen
                    
                    </div>
                    <div className="col-sm-3 over fa fa-check">
                    Elevator

                    </div>
                    <div className="col-sm-3 over fa fa-check">
                    Washing Machine

                    </div>
                    <div className="col-sm-3 over fa fa-check">
                    Wi-Fi

                    </div>
                    <div className="col-sm-3 over fa fa-check">
                    Internet

                    </div>


              </div>


              </div>

              {/* Facilities */}
              <div className="col-md-10 col-md-offset-1">
              <p className="content-box-title" style={{fontSize:"15pt",paddingTop:"20pt"}} >Amentities</p>
              <div className="row" style={{paddingLeft:"10pt"}}>
              <div className="col-sm-3 over fa fa-check">
              24Hr Electricity Backup
                    
                    </div>
                    <div className="col-sm-3 over fa fa-check">
                    Parking
                    
                    </div>
                    <div className="col-sm-3 over fa fa-check">
                    Maintenance Staff
                    
                    </div>
                    <div className="col-sm-3 over fa fa-check">
                    Club House
                    
                    </div>
                    <div className="col-sm-3 over fa fa-check">
                    Community Hall
                    
                    </div>
                    <div className="col-sm-3 over fa fa-check">
                    Restaurant
                    
                    </div>
                    <div className="col-sm-3 over fa fa-check">
                    Banking / ATM
                    
                    </div>
                    <div className="col-sm-3 over fa fa-check">
                    Coffee Shop
                    
                    </div>
                    <div className="col-sm-3 over fa fa-check">
                    Pharmacy
                    
                    </div>
                    <div className="col-sm-3 over fa fa-check">
                    Shopping Mall
                    
                    </div>
                    <div className="col-sm-3 over fa fa-check">
                    Super Market
                    
                    </div>
                    <div className="col-sm-3 over fa fa-check">
                    Swimming Pool
                    
                    </div>
                    <div className="col-sm-3 over fa fa-check">
                    Tennis Court
                    
                    </div>
                    <div className="col-sm-3 over fa fa-check">
                    Badminton Court
                    
                    </div>
                    <div className="col-sm-3 over fa fa-check">
                    Gymnasium
                    
                    </div>
                    <div className="col-sm-3 over fa fa-check">
                    Indoor Games
                    
                    </div>
                    <div className="col-sm-3 over fa fa-check">
                    Yoga & Meditation
                    
                    </div>
                    <div className="col-sm-3 over fa fa-check">
                    Playground
                    
                    </div>
                    <div className="col-sm-3 over fa fa-check">
                    Intercom
                    
                    </div>
                    <div className="col-sm-3 over fa fa-check">
                    Security Guards
                    
                    </div>
                    <div className="col-sm-3 over fa fa-check">
                    Project Access Card
                    
                    </div>
                    <div className="col-sm-3 over fa fa-check">
                    Floor Access Card
                    
                    </div>

                    

              
              </div>
              
                
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-full-height col-vertical-height login-form">
            <div className="col-vertical-top">
            {/* Right Col */}
            <div className="form-area">
            <form className="form-horizontal" role="form">
            <div className="lion">
            <img  src="http://content.invisioncic.com/r224567/monthly_2016_11/582c950a2af14_liond.jpg.5656173de84122308c7f92de0d311515.jpg" style={{width:"40%",height:"40%"}}></img>
            </div>
            
            <h3 style={{textAlign:"center"}}>{nameUser}</h3>
            <div className="form-group">
            <div className="col-sm-10 col-sm-offset-1">
            
            <div className="contactHeader" style={{textAlign:"center"}}>
            <b className="content-box-tagline" style={{fontSize:"18pt",paddingRight:"3pt"}} >{this.format_currency(ad.price)} VND</b>

            <span>per month</span> </div>
            <div style={{textAlign:"center",paddingBottom:"10pt",paddingTop:"8pt"}}>
              <button className="btn btn-primary btn-sm fa fa-star"  >Popular</button>
              <span className="fa fa-eye" style={{paddingLeft:"8pt"}}>5 Views</span>
            </div>
            
            
            <input type="text" className="form-control" id="yourName" name="yourName" placeholder="Your Name" required />
            
            </div>
            </div>
            <div className="form-group">
              <div className="col-sm-10 col-sm-offset-1">
                <input type="text" className="form-control" id="yourPhone" placeholder="Your Phone" name="yourPhone" required />
             </div>
            </div>

            <div className="form-group">
              <div className="col-sm-10 col-sm-offset-1">
                <input type="email" className="form-control" id="yourEmail" placeholder="Your Email" name="yourEmail" required />
              </div>
            </div>

            <div className="form-group">
              <div className="col-sm-10 col-sm-offset-1">
                <textarea className="form-control" type="textarea" id="yourMessage" placeholder="Message" maxLength={140} rows={7} defaultValue={""} />
                <span className="help-block"><p id="characterLeft" className="help-block ">You have reached the limit</p></span>
      

              </div>

            </div>

            <div className="form-group">
              <div className="col-sm-10 col-sm-offset-1">
              <button type="button" id="submit" name="submit" className="btn btn-primary center-block ">Request Inspection</button>
              </div>
            </div>


            
            </form>
            </div>
              
              <div className="col-sm-6 col-md-12 col-full-height col-vertical-height login-form">
                <div className="col-vertical-top">
                {/* Right Col */}
                
                <div  className="content-box-title" style={{fontSize:"15pt",paddingTop:"20pt"}} >VIEW ANOTHER PROJECT INFO</div>
                
                
                
                <div className="form-area">
                <div className="row">
                <div className="col-sm-12">
                
                <img style={{width:"100%",height:"100%"}} src="https://bizweb.dktcdn.net/100/224/205/products/pc-nhin-tu-cau-ban-dem-1-1414173207.jpg?v=1499498067770" alt=""></img>
                </div>


                <div className="col-sm-12">
                <a href="https://www.vinhomes.vn/vinhomes/vinhomes-central-park.html">  <b>Vinhomes Central Park</b> </a> 
                <p>Vinhomes Central Park is located in the heart of Ho Chi Minh city, within Tan Cang area......</p>
                </div>

                
                </div>

                
                </div>

                
                

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
            </div>
            </div>
        );
    }
}

const mapStateToProps = state =>{
  return{
    projects: state.pros,
    advertisement: state.ad,
    users: state.users
  }
}
export default connect(mapStateToProps, {getAD, getPROs, getUsers})(DetailPages);