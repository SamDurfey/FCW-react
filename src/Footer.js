import styles from './Footer.scss'
import React from 'react'
import ReactDom from 'react-dom'
// import apiKey from 'env.js'

const iconString = "{ This is where contact icons go }"
// const apiCall = "https://maps.googleapis.com/maps/api/js?key=" + apiKey + "&callback=initMap"
export default React.createClass({
  render() {
    return <div id="footer">
      <div className="divider"></div>
      <h4 className="footer-title">We Would Love to Have You Visit Soon!</h4>

      <div className="container"><div className="divider"></div></div>
      <div id="info" className="row">
        <div id="map-container" className="col s12 m4">
          <div id="map"></div>
          <p>We are located across the street from the post office in the same complex as Biscuits Cafe
            and Fat Cupcake!</p>
          <br/>
            <p>MWF: 10am - 6pm</p>
            <p>TTH: 11am-7pm</p>
            <p>Holiday Hours and Closures</p>
            <p>​Other times may be available by appointment. Please contact us for details</p>

        </div>

        <div id="logo_container" className="col s12 m4">
          <div className="row logo-row">
            <div className="col s12">
              <img src="/img/buy_local.png" alt="Buy Local Oregon. Member of Oregon City Chamber
            of Commerce"/>
            </div>
          </div>
          <div className="row logo-row">
            <div className="col s12">
              <img src="/img/associated_skin_care_professionals.jpg" alt="Associated Skin Care
      Professionals Member"/>
            </div>
          </div>
          <div className="row logo-row">
            <div className="col s4">
              <img src="/img/not_all_acu.jpg" alt="Not All Acupuncturists Are Created Equal"/>
            </div>
            <div className="col s4">
              <img src="/img/oaaom.png" alt="Oregon Association of Acupuncture and Oriental
          Medicine"/>
            </div>
            <div className="col s4">
              <img src="/img/ocom_alumni.png" alt="Oregon College of Oriental Medicine Alumni"/>
            </div>
          </div>
          <div className="row logo-row">
            <div className="col s12">
              <img src="/img/black-seal-293-61-first-city-wellness-90005427.png" alt="Better Business
            Bureau Accredited Member"/>
            </div>
          </div>

        </div>

        <div id="contact" className="col s12 m4">
          <p>Contact Us:</p>
          <p>{iconString}</p>
          <p>Telephone:</p>
          <p>503-518-0363</p>
          <a href="https://acusimple.com/bookings/1425/" className="btn">Schedule Online</a><br/>
          <a href="https://acusimple.com/portal/1425/" className="btn">Patient Portal</a><br/>
          <a href="http://firstcitywellness.us11.list-manage1
      .com/subscribe?u=5f9ea6c567fbf663921a90d99&id=24c049bddc"
             className="btn">Get Updates from FCW</a><br/>

        </div>

      </div>
    </div>

  },
  componentDidMount() {

  }
})