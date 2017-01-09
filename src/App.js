import styles from './App.scss'
import React from 'react'
import ReactDom from 'react-dom'
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
        <Footer/>
      </div>
    </div>
  }
})