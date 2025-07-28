import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

const About = () => {
  return (
    <div>
      <Nav></Nav>
      <div className="container" id='bannarSec'>
        <div className="row" id='heading'>
        <a href="">Home</a> <span>/</span> <a href="">About</a>
        <h2>What is <span> Rapid Rescue ?</span></h2>
        <p>India's first, GPS based technology platform for fast and reliable first point medical attention. With an increasing emphasis on promoting independent living today, having access to the nearest ambulance to you can provide much needed peace of mind in a worst case scenario.</p>
      </div>
      </div>
      <section className='container' id='aboutBox'>
        <div className="right-wrapper">
          <h3>History/Idea</h3>
          <p>Emergency response is the most critical to the lifeline of any country. Medulance wants to inspire breakthroughs in the way India looks at ambulances and first-point medical attention and to touch lives. Medulance was started in the year 2017 to make finding an ambulance as easy as finding food or taxis these days to assist lives. Medulance is an integrated emergency response support provider, ambulance booking and tracking system designed to provide first-point medical attention.</p>
        </div>
 <div className="left-wrapper">
   <img src="image/ambulances.png" alt="" />
 </div>
      </section>
         <section className="FeaturesSec">
      <div className="container ">
        <div className="row">
            <div className="col">
                <div className="card">
                    <div className="content">
                        <img src="image/one-touch.svg" alt="" />
                    <h2>On the go convenience</h2>
                    </div>
                    <p>One touch access to medical emergency services.</p>
                    </div>
                   <div className="card">
                    <div className="content">
                        <img src="image/one-touch.svg" alt="" />
                    <h2>On the go convenience</h2>
                    </div>
                    <p>One touch access to medical emergency services.</p>
                    </div>
                 
                
                <div className="card2">
                    <h4>App Features</h4>
                    <p>Book ambulances in emergency or in advance. </p>
                    <p>Experience our seamless platform.</p>
                </div>
            </div>
        </div>
        <div className="row2">
            <div className="card">
                 <div className="content">
                        <img src="image/t-pricing.svg" alt="" />
                    <h2>Transparent Pricing</h2>
                    </div>
                    <p>Convenient mechanism, with online and cash payment mode.</p>
                    
            </div>
            <div className="card">
                 <div className="content">
                        <img src="image/emergency.svg" alt="" />
                    <h2>Emergency Contact</h2>
                    </div>
                    <p>Keep your dear ones close with emergency contact option.</p>
                    </div>
            
            <div className="card">
                 <div className="content">
                        <img src="image/tips.svg" alt="" />
                    <h2>Tips & advice</h2>
                    </div>
                    <p>Arm yourself with relevant information during any emergency scenario.</p>
                    </div>
            <div className="card">
                 <div className="content">
                        <img src="image/tips.svg" alt="" />
                    <h2>Tips & advice</h2>
                    </div>
                    <p>Arm yourself with relevant information during any emergency scenario.</p>
                    </div>
        </div>
      </div>
      </section>
         <section className="serviceSec">
        <div className="container row">
<div className="right-wrapper">
    <h3>Core services</h3>
    <p>
        We have various Plans for customers and dedicated Helpline number 24x7.</p>
        <a href="" className="btn">Know More</a>
        </div>
<div className="left-wrapper">
    <div className="card"><h4>Individual</h4>
    <p>Anyone can book ambulance through website and mobile app.</p></div>
    <div className="card">
        <h4>Hospital</h4>
        <p>Medulance is working with different corporate and providing ambulance for them.</p>
    </div>
    <div className="card">
        <h4>Government</h4>
        <p>Medulance is working with different corporate and providing ambulance for them.</p>
    </div>
   
    <div className="card">
        <h4>Enterprise</h4>
        <p>Medulance is working with different corporate and providing ambulance for them.</p>
    </div>
   
</div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  )
}

export default About
