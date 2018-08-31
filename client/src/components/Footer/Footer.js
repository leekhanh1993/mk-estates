import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
           
                <footer>
                <div className="container">
                    <div className="col-sm-3">
                    <form className="form-inline">
                    <div style={{fontSize:"13pt",paddingBottom:"25pt"}}>
                    <b  > Stay Connected </b> </div>
                    <p>
                    Join over 3000 people who receive rental advice and best property deals
                    </p>
                <input type="email" className="form-control"  placeholder="Email Address" />
                        <button type="button" className="btn btn-default">></button>
                        
                    </form>

                    </div>

                    <div className="col-sm-3">
                    <form className="form-inline">
                    <div  className="footerdetails" style={{fontSize:"13pt",paddingBottom:"20pt"}}>
                    <b  > Company </b> </div>
                   
                       <a> About </a><br/>
                       <a> Careers </a>

                     <div  className="footerdetails"  style={{fontSize:"13pt",paddingTop:"20pt"}}>
                    <b  > Support </b> </div>
                   
                       <a> Contact Us</a><br/>
                       <a> FAQS </a><br/>
                       <a> Privacy Policy </a><br/>
                       <a> What is vertified account </a><br/>
                       <a> What is vertified listing </a><br/>
                       <a> Terms And Conditions </a>
                       
                   
                    </form>

                    </div>

                    <div className="col-sm-3">
                    <form className="form-inline">
                    <div   className="footerdetails" style={{fontSize:"13pt",paddingBottom:"20pt"}}>
                    <b  > Project </b> </div>
                   
                       <a> Masteri Thao Dien </a><br/>
                       <a> Vinhomes Central Park </a><br/>
                       <a> Tropic Garden </a><br/>
                       <a> Sunrise City </a><br/>
                       <a> The Ascent</a><br/> <br/>
                       <button className="btn btn-primary">View All</button>

                       
                   
                    </form>

                    </div>
                    <div className="col-sm-3">
                    <form className="form-inline">
                    <div   className="footerdetails" style={{fontSize:"13pt",paddingBottom:"20pt"}}>
                    <b  > Get The App </b> </div>
                   
                    <a href="" className="btn btn-store">
        <span className="fa fa-apple fa-3x pull-left" /> 
        <span className="btn-label">Download on the</span>
        <span className="btn-caption">App Store</span>
      </a>
      <a href="" className="btn btn-store">
                <span className="fa fa-android fa-3x pull-left"></span>
                <span className="btn-label">Download on the</span>
                <span className="btn-caption">Google Play</span>
            </a>


                   
                    </form>

                    </div>
                    
                    </div>
                    <ul className="socialIcons text-center">
        <li className="facebook"><a href=""><i className="fa fa-fw fa-facebook" />Facebook</a></li> 
        <li className="twitter"><a href=""><i className="fa fa-fw fa-twitter" />Twitter</a></li> 
        <li className="instagram"><a href=""><i className="fa fa-fw fa-instagram" />Instagram</a></li> 
        <li className="pinterest"><a href=""><i className="fa fa-fw fa-pinterest-p" />Pinterest</a></li> 
        <li className="steam"><a href=""><i className="fa fa-fw fa-steam" />Steam</a></li> 
      </ul>
            
            <div className="copyright hidden-xs">
             Copyright © MKestates All Right Reserved
            </div>
                    
                </footer>
            
        );
    }
}

export default Footer;