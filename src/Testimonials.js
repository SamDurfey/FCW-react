import styles from './Home.scss'
import React from 'react'
import Navbar from './Navbar.js'
import Footer from './Footer.js'

export default React.createClass({
  render() {
    return <div id="top-wrapper">
      <div id="banner-wrapper">
        <h1>This is the testimonials.</h1>
      </div>
      <Navbar/>
      <div id="main-wrapper">
        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dolor eius non voluptate voluptates. Aut commodi delectus, distinctio dolore error nobis odio similique suscipit! Consequatur deleniti non officia possimus tenetur!</h2>
        <Footer/>
      </div>
    </div>
  }
})