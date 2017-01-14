import styles from './App.scss'
import React from 'react'
import Navbar from './Navbar.js'
import Footer from './Footer.js'

export default React.createClass({
  render() {
    return <div id="top-wrapper">
      <div id="banner-wrapper">
        <h1>This is the banner.</h1>
      </div>
      <Navbar/>
      <div id="main-wrapper"><h2>Content Goes Here</h2>
        <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid architecto aspernatur beatae consequatur deleniti harum neque officia praesentium, quo quos recusandae reiciendis temporibus velit vitae? Iste magnam porro reiciendis?</h3>
        <Footer/>
      </div>
    </div>
  }
})