import styles from './main.scss'
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, browserHistory } from 'react-router'
import Home from './src/Home.js'
import Testimonials from './src/Testimonials.js'
import Services from './src/Services.js'

// import <otherPages> from <'./other_page_files'>

render ((
    <Router history={hashHistory}>
      <Route path="/" component={Home}/>
      <Route path="testimonials" component={Testimonials}/>
      <Route path="services" component={Services}/>
    </Router>
), document.getElementById('app'))
