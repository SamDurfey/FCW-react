import styles from './Home.scss'
import React from 'react'
import Navbar from './Navbar.js'
import Footer from './Footer.js'
import { Link } from 'react-router'

//TODO: fill in other links once they are complete.

export default React.createClass({
  render() {
    return <div id="top-wrapper">
      <div id="banner-wrapper">
        <h1>Services Available</h1>
      </div>
      <Navbar/>
      <div id="main-wrapper">
        <h3>Services available at First City Wellness:</h3>
        <p><Link>Acupuncture and Chinese Medicine.</Link></p>
        <p><Link>Beautypunture&reg; Facial Rejuvination</Link></p>
        <p><Link>Custom Cosmetics and Makeup Artistry</Link></p>
        <Footer/>
      </div>
    </div>
  }
})