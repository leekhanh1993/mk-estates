import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <div className="contentcontact">
                            <h1>CONTACT US</h1>
                            <h2 style={{ fontSize: "15pt" }} >OUR ADDRESS</h2>
                            <span>Vietnam</span> <br />
                            <b>Office: Rmit University, 702 Nguyen Van Linh - Highway</b> <br />
                            <i>District 7, HCM</i>
                            <p>Please fill this short form to give your requirements. We will get back to you within some hours.</p>
                            <form name="qryform" id="qryform" noValidate="novalidate">
                                <div className="form-group">
                                    <label>Name:</label>
                                    <input type="text" className="form-control" id="name" placeholder="Enter Name" name="name" />
                                </div>
                                <div className="form-group">
                                    <label>Email:</label>
                                    <input type="email" className="form-control" id="name" placeholder="Enter Email" name="email" />
                                </div>
                                <div className="form-group">
                                    <label>Phone No.:</label>
                                    <input type="text" className="form-control" id="phone" placeholder="Enter Phone no." name="phone" />
                                </div>
                                <div className="form-group">
                                    <label>Subject:</label>
                                    <input type="text" className="form-control" id="name" placeholder="Subject" name="subject" />
                                </div>
                                <div className="form-group">
                                    <label>Issues/query:</label>
                                    <textarea name="issues" className="form-control" id="iq" placeholder="Enter your Issues/query" defaultValue={""} />
                                </div>
                                <button type="submit" className="btn btn-default">Submit</button>
                            </form>
                            </div>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <div className="map">
                            <iframe title="googleMap" src="https://maps.google.com/maps?q=rmit%20university%20vietnam&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="650px" frameBorder={0} style={{ border: 0 }} allowFullScreen />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;



