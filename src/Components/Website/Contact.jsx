import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

const Contact = () => {
  return (
    <div>
      <Nav></Nav>
     <div className="container" id='bannarSec'>
        <div className="row" id='heading'>
        <a href="">Home</a> <span>/</span> <a href="">Contact</a>
        <h2> Let's Connect with us <span> Rapid Rescue ...</span></h2>
        <p>India's first, GPS based technology platform for fast and reliable first point medical attention. With an increasing emphasis on promoting independent living today, having access to the nearest ambulance to you can provide much needed peace of mind in a worst case scenario.</p>
      </div>
      </div>
       <section id="conBox">
      <div className="container" id="contactSec">
         <div className="right-wrapper">
          <h3>Get Touch In us</h3>
          <form action="">
            <div className="row">
              <input type="text" placeholder="Enter Name" />
                  <input type="text"  placeholder="Enter Gmail"/>
            </div>
            <textarea name="" id="" className="textarea" placeholder="write a massage"></textarea>
           <div className="row">
             <input type="submit" value={"send"} className="btn" />
           </div>
          </form>
         </div>
          <div className="left-wrapper"><img src="image/bannar.png" alt="" /></div>
      </div>
      </section>
      <Footer></Footer>
    </div>
  )
}

export default Contact
