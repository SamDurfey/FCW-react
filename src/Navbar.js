import styles from './Navbar.scss'
import React from 'react'
import { Link } from 'react-router'
import Services from './Services.js'

export default React.createClass({
  render() {
    return <div id="header">

      <ul id="services-dropdown" className="dropdown-content">
        <li><a href="#">Accupuncture & Chinese Medicine</a></li>
        <li><a href="#">Skincare: Beautypunture&reg; Facial Rejuvenation</a></li>
        <li><a href="#">Ionic Detox Foot Baths</a></li>
      </ul>
      <ul id="center-dropdown" className="dropdown-content">
        <li><a href="#">Our Staff</a></li>
        <li><a href="#">Events Calendar</a></li>
        <li><a href="#">Contact FCW</a></li>
      </ul>
      <ul id="appointments-dropdown" className="dropdown-content">
        <li><a href="#">Online Scheduling</a></li>
        <li><a href="#">New Client Resources</a></li>
        <li><a href="#">Patient Portal</a></li>
      </ul>
      <nav>
        <div className="nav-wrapper">
          <ul className="left hide-on-med-and-down">
            <li><a href="/">Home</a></li>
            <li><Link className="dropdown-button" to={'/services'} data-activates="services-dropdown">Services
              Available</Link></li>
            <li><a className="dropdown-button" href="/center" data-activates="center-dropdown">Our
              Center</a></li>
            <li><a href="/boutique">Wellness Boutique</a></li>
            <li><a className="dropdown-button" href="/appointments"
                   data-activates="appointments-dropdown">Appointments</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><Link to={'/testimonials'}>Testimonials</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  },
  componentDidMount() {
    $(".dropdown-button").dropdown({
      hover: true,
      belowOrigin: true
    });
  }
})