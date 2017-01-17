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
        <h3>Here's what people are saying about First City Wellness:</h3>

        <p>"Melissa thank you so much for your facial tips and signature facial. My face feels
          amazing.I always receive so many compliments after your treatments. You make my experience
          so special every time. I'm telling everyone about you!!"
          <br/>
          Mia from Portland, Oregon</p>

        <p>"Melissa, I never had the opportunity until now to publicly appreciate your impeccable
          professionalism last June 2014. I loved the facial as well as the after care instructions.
          I have never made an appointment for a facial in my life. You were so reassuring, and the
          results were long lasting. You are amazing!"
          <br/>
          Ms. Denise Roberts from Olymipia, Washington</p>

        <p>"Thanks to Melissa, I have been able to return to roller derby at full capacity after a
          long period of down time and recovery from a previous injury. She's the best!"
          <br/>
          Marquise from Salem, Oregon</p>

        <p>"The best most relaxing facials ever. Do yourselves a favor and GO!"
          <br/>
          Wanita from Oregon City, Oregon</p>

        <p>"Thank you, Melissa, for the most relaxing afternoon ever! I swear I look 10 years
          younger, my shoulders are 3 inches lower, and I'm going to sleep so well tonight! If you
          need to take care of yourself, Melissa is an incredible acupuncturist, aesthetician,
          massage therapist, cosmetician, and Chinese medicine practitioner!"
          <br/>
          ​Jennifer from Lake Oswego, Oregon</p>

        <p>"Love this place. I feel so much better every time I visit. Thanks Melissa."
          <br/>
          Brian from Oregon City, Oregon</p>

        <p>"I recently had a foot issue and Melissa was able to create a poultice that was great at
          removing brusing from the skin. Highly recommended."
          <br/>
          Eric from Woodburn, Oregon</p>

        <p>"Melissa thank you so much my face looks and feels great you're amazing!!"</p>

        <p>"As always Melissa was full of inspiration and information."</p>

        <p>"Really enjoyed my time there, Loved Melissa. Really knows her stuff. Going back for sure."</p>

        <p>"Melissa gives the BEST FACIALS!! Thank you so much for making me feel so fresh!!"</p>

        <p>"Love this place. I feel so much better every time I visit. Thanks Melissa."</p>

        <p className="smallText">*names used with permission</p>

        <p>We'd love to hear about your experience! Email us or Visit us on Facebook!</p>

        <Footer/>
      </div>
    </div>
  }
})