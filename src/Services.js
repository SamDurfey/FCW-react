import styles from './Home.scss'
import React from 'react'
import Navbar from './Navbar.js'
import Footer from './Footer.js'

export default React.createClass({
  render() {
    return <div id="top-wrapper">
      <div id="banner-wrapper">
        <h1>Services Available</h1>
      </div>
      <Navbar/>
      <div id="main-wrapper">
        <h3>Services available at First City Wellness:</h3>
        {/*<p><Link to={Acupuncture}>Acupuncture and Chinese Medicine.</Link></p>*/}
        <Footer/>
      </div>
    </div>
  }
})