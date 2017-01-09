import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, browserHistory } from 'react-router'
import App from './src/App.js'
import Testimonials from './src/Testimonials.js'
// import <otherPages> from <'./other_page_files'>

render ((
    <Router history={hashHistory}>
      <Route path="/" component={App}/>
      <Route path="testimonials" component={Testimonials}/>
    </Router>
), document.getElementById('app'))
