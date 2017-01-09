import styles from './App.scss'
import React from 'react'
import ReactDom from 'react-dom'
import Navbar from './Navbar.js'

export default React.createClass({
  render() {
    return <div id="header">
      <div id="banner">
        <h1>This is the testimonials.</h1>
      </div>
      <Navbar/>
    </div>
  }
})