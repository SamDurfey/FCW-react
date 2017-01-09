import styles from './App.scss'
import React from 'react'
import ReactDom from 'react-dom'
import Navbar from './Navbar.js'
import Footer from './Footer.js'

export default React.createClass({
  render() {
    return <div id="header">
      <div id="banner">
        <h1>This is the banner.</h1>
      </div>
      <Navbar/>
      <div><h2>Content Goes Here</h2></div>
      <Footer/>
    </div>
  }
})