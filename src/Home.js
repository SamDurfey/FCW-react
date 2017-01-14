import styles from './Home.scss'
import React from 'react'
import Navbar from './Navbar.js'
import Footer from './Footer.js'

export default React.createClass({
  render() {
    return <div id="top-wrapper">
      <div id="banner-wrapper">
        <h1>First City Wellness</h1>
        <h4>Holistic Health for the Whole Family</h4>
      </div>
      <Navbar/>
      <div id="main-wrapper">
        <p>We accept and are in network with most major insurance plans for acupuncture services!</p>
        <p>Call (503)518-0363 or email us for more details!</p>
        <div className="parallax-container container">
          <div className="parallax">
            <img src="/img/treatment_room_1.jpg"/>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  },
  componentDidMount() {
    $('.parallax').parallax();
  }
})