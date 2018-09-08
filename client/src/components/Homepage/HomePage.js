import React, { Component } from 'react';


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: ''
    }
  }

  setMainLogin(displayName, id, isLogIn) {
    this.props.setMainLogin(id, isLogIn);
    this.setState({
      displayName
    })
  }
  setLogOut() {
    window.location.reload();
  }
  render() {

    return (
      <div className="container-fluid" >
        <div className="row">
          {/* Carousel */}
          <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
            {/* Indicators */}
            <ol className="carousel-indicators">
              <li data-target="#carousel-example-generic" data-slide-to={0} className="active" />
              <li data-target="#carousel-example-generic" data-slide-to={1} />
              <li data-target="#carousel-example-generic" data-slide-to={2} />
            </ol>
            {/* Wrapper for slides */}
            <div className="carousel-inner">
              <div className="item active">
                <img src="https://s-media-cache-ak0.pinimg.com/originals/78/28/e1/7828e182dbea31cb65a166404ba4a23c.jpg" alt="First slide" />
                {/* Static Header */}
                <div className="header-text hidden-xs">
                  <div className="col-md-12 text-center">

                    <br />
                    <h2>
                      <span>Hello SAIGON</span>
                    </h2>
                    <br />
                    <br />
                    <div>
                      <a className="btn btn-theme " style={{ fontSize: "15pt" }}>Total Properties <br /> 250000+ </a>
                      <a className="btn btn-theme " style={{ fontSize: "15pt" }}>Total Users <br />2000+ </a></div>

                  </div>
                </div>{/* /header-text */}
              </div>
              <div className="item">
                <img src="https://stmed.net/sites/default/files/ho-chi-minh-city-wallpapers-28633-4519388.jpg" alt="Second slide" />
                {/* Static Header */}
                <div className="header-text hidden-xs">
                  <div className="col-md-12 text-center">
                    <h2>
                      <span>Furnished House with Amenities</span>
                    </h2>
                    <br />
                    <br />
                    <div>
                      <a className="btn btn-theme btn-sm btn-min-block" style={{ fontSize: "15pt" }}>Total Properties <br /> 250000+ </a>
                      <a className="btn btn-theme btn-sm btn-min-block" style={{ fontSize: "15pt" }}>Total Users <br />2000+ </a></div>
                  </div>
                </div>{/* /header-text */}
              </div>
              <div className="item">
                <img src="http://vietcetera.com/wp-content/uploads/2017/08/doodle-diaries-com-Featured.jpg" alt="Third slide" />
                {/* Static Header */}
                <div className="header-text hidden-xs">
                  <div className="col-md-12 text-center">
                    <h2>
                      <span>Long-Term Rental Made Easy</span>
                    </h2>
                    <br />
                    <br />
                    <br />
                    <div>
                      <a className="btn btn-theme btn-sm btn-min-block" style={{ fontSize: "15pt" }}>Total Properties <br /> 250000+ </a>
                      <a className="btn btn-theme btn-sm btn-min-block" style={{ fontSize: "15pt" }}>Total Users <br />2000+</a></div>
                  </div>
                </div>{/* /header-text */}
              </div>
            </div>
          </div>{/* /carousel */}
        </div>
        {/*After Carousel  */}
        <div className="container-after fluid" >
          <div className="row">
            <div className="col-sm-4 text-center" >
              <span className="glyphicon glyphicon-check"></span>
              <span>
                Vertifies Listing
               </span>
            </div>
            <div className="col-sm-4 text-center" >
              <span className="glyphicon glyphicon-hd-video"></span>
              <span>
                Support High Quality Images
               </span>
            </div>
            <div className="col-sm-4 text-center" >
              <span className="	glyphicon glyphicon-bitcoin"></span>
              <span>
                Share Multiple Prices
               </span>
            </div>
          </div>
        </div>
        {/* Service Process */}
        <div>
          <div className="wshipping-content-block service-process">
            <div className="container wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
              <div className="row">
                <div className="col-md-6 col-md-offset-3">
                  <div className="section-title">
                    <h2>Renting Process</h2>
                    <p>We Search - We Visit - We Make Contract - We Move-In</p>
                  </div>
                </div>
              </div>
              <div className="process-row">
                <div className="process-step">
                  <div className="process-icon">
                    <span>1</span>
                    <img src="http://web24service.com/demo/w-shipping/assets/images/process-icon1.png" alt="process1" />
                  </div>
                  <p>Search</p>
                </div>
                <div className="process-step">
                  <div className="process-icon">
                    <span>2</span>
                    <img src="http://web24service.com/demo/w-shipping/assets/images/process-icon2.png" alt="process2" />
                  </div>
                  <p>Visit</p>
                </div>
                <div className="process-step">
                  <div className="process-icon">
                    <span>3</span>
                    <img src="http://web24service.com/demo/w-shipping/assets/images/process-icon3.png" alt="process3" />
                  </div>
                  <p>Contract</p>
                </div>
                <div className="process-step">
                  <div className="process-icon">
                    <span>4</span>
                    <img src="http://web24service.com/demo/w-shipping/assets/images/process-icon4.png" alt="process4" />
                  </div>
                  <p>Move-In</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Team Container  */}
        <div>
          <div className="container content">
            <div className="heading">
              <h2>Our <strong>Great Team</strong></h2>
              <p>To try the most advanced business</p>
            </div>{/* //end heading */}
            <div className="row">
              <div className="col-sm-4">
                <div className="team-members">
                  <div className="team-avatar">
                    <img className="img-responsive" src="https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/25507873_1500281096735400_7519644733628253288_n.jpg?_nc_cat=0&oh=d18d2222c7f6ff0d4c243ef04a34768b&oe=5BEEF94B" alt="khanh" />
                  </div>
                  <div className="team-desc">
                    <h4>Khanh Tran</h4>
                    <span>Founder and IT Executive</span>
                    <br />
                    <span>"A satisfied customer is the best business strategy of all."</span>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="team-members">
                  <div className="team-avatar">
                    <img className="img-responsive" src="https://scontent.fsgn2-1.fna.fbcdn.net/v/t31.0-8/20424269_732881266895366_6489319979452401213_o.jpg?_nc_cat=0&oh=306f7413e002d38be39e0575a1b4ac1c&oe=5C2FCBB7" alt="Minh" />
                  </div>
                  <div className="team-desc">
                    <h4>Minh Huynh</h4>
                    <span>Design, Marketing and IT Executive</span>
                    <br />
                    <span>"I never called my work an 'art'. It's part of our business, the business of building a great service."</span>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="team-members">
                  <div className="team-avatar">
                    <img className="img-responsive" src="https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.0-9/34869328_1849607595062700_4515752477852696576_n.jpg?_nc_cat=0&oh=ee3f697141153c0670fd4dd4d24f0656&oe=5BFE6860" alt="Tu" />
                  </div>
                  <div className="team-desc">
                    <h4>Tu Bui</h4>
                    <span>Director</span>
                    <br />
                    <span>"Great things in business are never done by one person. They're done by a team of people."</span>
                  </div>
                </div>
              </div>
            </div>{/* //end row */}
          </div>
        </div>
        {/* Featured Projects */}
        <div className="container">
          <div className="heading">
            <h2><strong>Featured Projects</strong></h2>
          </div>{/* //end heading */}
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                {/* begin panel group */}
                <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                  {/* panel 1 */}
                  <div className="panel panel-default">
                    {/*wrap panel heading in span to trigger image change as well as collapse */}
                    <span className="side-tab" data-target="#tab1" data-toggle="tab" role="tab" aria-expanded="false">
                      <div className="panel-heading" role="tab" id="headingOne" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <h4 className="panel-title">Masteri Thao Dien</h4>
                      </div>
                    </span>
                    <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                      <div className="panel-body">
                        {/* Tab content goes here */}
                        Located along the Hanoi Highway in District 2, Masteri Thao Dien is strategically built close to major thoroughfares and offers incredible panoramas of the city and the meandering Saigon River. Connected with station no. 7 on the An Phu Metro line 1, it will take only 7 minutes to get to District 1. With the the Saigon River so close, a constant breeze will be available in most units, and along with the stunning views, nature will never seem far away. Masteri Thao Dien synergizes a modern and vibrant lifestyle with the serenity and calm one needs in their home. One’s standard of living is elevated to new heights when living in one of our units.
                  </div>
                    </div>
                  </div>
                  {/* / panel 1 */}
                  {/* panel 2 */}
                  <div className="panel panel-default">
                    {/*wrap panel heading in span to trigger image change as well as collapse */}
                    <span className="side-tab" data-target="#tab2" data-toggle="tab" role="tab" aria-expanded="false">
                      <div className="panel-heading" role="tab" id="headingTwo" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <h4 className="panel-title collapsed">The Ascent</h4>
                      </div>
                    </span>
                    <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                      <div className="panel-body">
                        {/* Tab content goes here */}
                        The Ascent shines proudly inside Thao Dien. In the heart of the fresh peninsula, The Ascent not only satisfy the need of being close to nature but also has unique advantage when only minutes of walking from high-end services. The Ascent in Thao Dien now offers Singapore-style apartments with resort facilities on the fifth level. The project offers 3 swimming pools and a pool bar that ensures the relaxation of residents. In terms of traffic, Thao Dien area connects the counties by the ring road. At the same time, this area is planned as the new financial center of the city (District 2).
                  </div>
                    </div>
                  </div>
                  {/* / panel 2 */}
                  {/*  panel 3 */}
                  <div className="panel panel-default">
                    {/*wrap panel heading in span to trigger image change as well as collapse */}
                    <span className="side-tab" data-target="#tab3" data-toggle="tab" role="tab" aria-expanded="false">
                      <div className="panel-heading" role="tab" id="headingThree" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <h4 className="panel-title">Tropic Garden </h4>
                      </div>
                    </span>
                    <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                      <div className="panel-body">
                        {/* tab content goes here */}
                        Tropic Garden located in the heart of Thao Dien ward, District 2 – a well-known place for expats’ residence in Ho Chi Minh City. The area is very quiet, refreshing with a large river flowing around. Thao Dien is famous for its’ western community and living style with lots of shop, restaurant and place to enjoy. Although the place is full of expatriates, the living standard is very reasonable and is suitable for all family budgets. The very good thing is that this area is just 5 minutes away from the center of the city so that it is very convenient for people working in the District 1, 2 and Binh Thanh District.
                  </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    {/*wrap panel heading in span to trigger image change as well as collapse */}
                    <span className="side-tab" data-target="#tab4" data-toggle="tab" role="tab" aria-expanded="false">
                      <div className="panel-heading" role="tab" id="headingFour" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        <h4 className="panel-title">Sunrise City</h4>
                      </div>
                    </span>
                    <div id="collapseFour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                      <div className="panel-body">
                        {/* tab content goes here */}
                        North Park Towers of Sunrise City apartment projects under construction include two apartment towers of 33 floors and private utilities such typical areas: Pool overflow, gym, tennis courts, restaurants, high-end cafe. . are arranged in 4-storey commercial podium. Especially in North Point Towers is designed very much smaller sample flat area very suitable for families of young intellectuals.
                  </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    {/*wrap panel heading in span to trigger image change as well as collapse */}
                    <span className="side-tab" data-target="#tab5" data-toggle="tab" role="tab" aria-expanded="false">
                      <div className="panel-heading" role="tab" id="headingFive" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        <h4 className="panel-title">Vinhome Cental Park</h4>
                      </div>
                    </span>
                    <div id="collapseFive" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
                      <div className="panel-body">
                        {/* tab content goes here */}
                        Vinhomes Central Park is located in the heart of Ho Chi Minh city, within Tan Cang area. as well as along 1 kimlometre riverside. This will be one of the station of Metro line Ben Thanh - Suoi Tien. With this advantage, you only spend: - 2 minutes to Metro line - 3 minutes to Thu Thiem new urban town, Thao Dien - 4 miinutes to District 1. Moreover,, Vinhomes Central Park also includes in a peaceful living environment, 5-star family services and a great community.
                  </div>
                    </div>
                  </div>
                </div> {/* / panel-group */}
              </div> {/* /col-md-4 */}
              <div className="col-md-8">
                {/* begin macbook pro mockup */}
                <div className="md-macbook-pro md-glare">
                  <div className="md-lid">
                    <div className="md-camera" />
                    <div className="md-screen">
                      {/* content goes here */}
                      <div className="tab-featured-image">
                        <div className="tab-content">
                          <div className="tab-pane  in active" id="tab1">
                            <img src="http://duanmasteri.vn/wp-content/uploads/2013/04/du-an-masteri-thao-dien-1.jpg" alt="tab1" className="img img-responsive" style={{ height: "300pt" }} />
                          </div>
                          <div className="tab-pane " id="tab2">
                            <img alt='ascent' src="http://can-ho.vn/uploads/noidung/images/the-ascent.jpg" style={{ height: "300pt" }} />
                          </div>
                          <div className="tab-pane fade" id="tab3">
                            <img src="http://www.thaodien.net/kcfinder/upload/images/tropic%20garden%20phoi%20canh.jpg" alt="tab1" className="img img-responsive" style={{ height: "350pt" }} />
                          </div>
                          <div className="tab-pane fade" id="tab4">
                            <img src="http://www.infocanho.com/wp-content/uploads/2018/06/du-an-can-ho-sunrise-city-novaland-nguyen-huu-tho.jpg" alt="tab1" className="img img-responsive" style={{ height: "350pt" }} />
                          </div>
                          <div className="tab-pane fade" id="tab5">
                            <img src="http://www.vinhomescentralpark.co/wp-content/uploads/2016/04/phoi-canh-vinhomes-central-park.jpg" alt="tab1" className="img img-responsive" style={{ height: "350pt" }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md-base" />
                </div> {/* end macbook pro mockup */}
              </div> {/* / .col-md-8 */}
            </div> {/*/ .row */}
          </div> {/* end sidetab container */}
        </div> <br />
        <div className="container">
          <div className="heading">
            <h2><strong>Customer Reviews</strong></h2>
            <p>Your Feedbacks Are WorthWhile</p>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
          </div>
          <div className="row customer-reviews">
            <div className="col-md-6 column">
              <div className="inner-box">
                <h3><i className="fa fa-user" /> Huynh Cong Minh <span className="verified">(Verified Purchase)</span></h3>
                <p className="date">14 June</p>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <p className="text-justify">My wife and I were able to enjoy again after the first time I used it
                  It worked really well for me. I am 7 weeks post prostatectomy, no results from medicines. My Friends Suggested me you can use this ED Device Then I use Aronpro Erection System My wife and I were able to enjoy ED Pump results after the first time I used it.
              </p>
              </div>
            </div>
            <div className="col-md-6 column">
              <div className="inner-box">
                <h3><i className="fa fa-user" /> Khanh Tran <span className="verified">(Verified Purchase)</span></h3>
                <p className="date">26 April</p>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <p className="text-justify">This Erectile Dysfunction pump works! My husband and I are extremely happy with it. We wanted to try it because my husband didn't want to take medication. We are so glad he did. He's amazed at how simple and easy it is to use and how it gives him a very substantial erection. It has renewed our sex life. We like it and highly recommend it.
              </p>
              </div>
            </div>
            <div className="col-md-6 column">
              <div className="inner-box">
                <h3><i className="fa fa-user" /> Tu Bui<span className="verified">(Verified Purchase)</span></h3>
                <p className="date">18 March</p>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <p className="text-justify">I'm 25 and have bad anxiety about sex that causes some things to not work right and that has caused many problems growing up. Wellbeing my age I tend to be drunk when the opportunity arises so that rules out Viagra and other pills that are not even guaranteed to work. With this product I can achieve 100% results in less than 1minute whenever I need it, it hasn't let me down 1 time.
              </p>
              </div>
            </div>
            <div className="col-md-6 column">
              <div className="inner-box">
                <h3><i className="fa fa-user" /> Thanh Nguyen <span className="verified">(Verified Purchase)</span></h3>
                <p className="date">31 March</p>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <p className="text-justify">Yes it works as described and it creates a hard erection. It probably works as goodThis works in minutes. Gives you a Natural Hard ErectionLike a 17 year old you. My wife pumps me up and jumps on. I don't have to resort to Viagra, shots or implants.I had E.D for over 15 years. This pump is good for meIn fact it worked so well it eliminated my need for Viagra &amp;Cialis.
              </p>
              </div>
            </div>
            <div className="col-md-6 column">
              <div className="inner-box">
                <h3><i className="fa fa-user" /> Tam Tran <span className="verified">(Verified Purchase)</span></h3>
                <p className="date">18 October</p>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <p className="text-justify">I had Bladder and Prostrate removed due to CANCER, then I use Aronpro ED System works Good it help to Maintain the Erection and control the Premature Ejaculation, you can Enjoy as much as long use different type of ring It help to Maintain your Erection Easily
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;