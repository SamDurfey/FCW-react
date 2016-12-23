import React from 'react'
import ReactDom from 'react-dom'
import { Dropdown, Navbar, NavItem } from 'react-materialize'

export default React.createClass({
  render() {
    return <div id="header">

      <div id="banner">
        <h6>(This Is The Banner)</h6>
        <h1>Welcome to First City Wellness</h1>
      </div>

      <div id="navbar">
        <Navbar left>
          <NavItem href="/">Home</NavItem>

          <Dropdown options={{hover: true, belowOrigin: true}} trigger={
            <NavItem href="/services">Services</NavItem>
          }>
            <NavItem>Accupuncture & Chinese Medicine</NavItem>
            <NavItem>Walk-In Clinics</NavItem>
            <NavItem>Beautypunture&reg; Facial Rejuvenation</NavItem>
            <NavItem>Custom Cosmetics and Makeup Artistry</NavItem>
            <NavItem>TLS Weight Loss Solution</NavItem>
            <NavItem>Ionic Detox Foot Baths</NavItem>
          </Dropdown>

          <Dropdown options={{hover: true, belowOrigin: true}} trigger={
            <NavItem href="/center">Center</NavItem>
          }>
            <NavItem>Our Staff</NavItem>
            <NavItem>Events Calendar</NavItem>
            <NavItem>Contact FCW</NavItem>
          </Dropdown>

          <NavItem href="/boutique">Wellness Boutique</NavItem>

          <Dropdown options={{hover: true, belowOrigin: true}} trigger={
            <NavItem href="/appointments">Appointments</NavItem>
          }>
            <NavItem>Online Scheduling</NavItem>
            <NavItem>New Client Resources</NavItem>
            <NavItem>Patient Portal</NavItem>
          </Dropdown>

          <NavItem href="/blog">Blog</NavItem>
          <NavItem href="/testimonials">Testimonials</NavItem>
        </Navbar>


      </div>
    </div>
  }
})