import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";

const Index = () => {
  return (
    <>
    <Nav></Nav>
      {/* bannar start */}
      <section className="bannar">
        <div className="container row">
          <div className="right-wrapper">
            <div className="about">
              <h1>24/7 Emergency Ambulance Care with Medulance</h1>
              <p className="p">For Emergency Medical Service</p>
              <p className="p2">
                Help / Rescues the Patient in case of the Emergency situation by
                doing just a click. Medulance Ambulance comes right in front of
                the door for help.
              </p>
              <a href="" className="btn">
                Book Now
              </a>
            </div>
          </div>
          <div className="left-wrapper">
            <img src="image/bannar.png" alt="" />
          </div>
        </div>
      </section>
      {/* bannar end */}

      {/* about sec Start */}
      <div className="container" id="AboutSec">
        <h3>Why choose us?</h3>
        <div className="row">
          <div className="card">
            <img src="image/15mins.svg" alt="" />
            <p>Emergency assistance time of 15 minutes or less</p>
          </div>
          <div className="card">
            <img src="image/24hrs.svg" alt="" />
            <p>24/7 Support</p>
          </div>
          <div className="card">
            <img src="image/ambulance.svg" alt="" />
            <p>Biggest fleet of ambulances across Pakistan</p>
          </div>
          <div className="card">
            <img src="image/f-policy.svg" alt="" />
            <p>Patient first policy</p>
          </div>
        </div>
       
      </div>
      <section className="servIceBox">
        <div className="right-wrapper">
          <img src="image/ambulances.png" alt="" />
        </div>

 <div className="left-wrapper">
  <h3>About Us</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, accusantium! Sit, nulla aspernatur libero quaerat consequatur voluptatem similique possimus hic molestias. Voluptas deleniti saepe in aliquam rerum consectetur accusantium quis.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, accusantium! Sit, nulla aspernatur libero quaerat consequatur voluptatem similique possimus hic molestias. Voluptas deleniti saepe in aliquam rerum consectetur accusantium quis.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, accusantium! Sit, nulla aspernatur libero quaerat consequatur voluptatem similique possimus hic molestias. Voluptas deleniti saepe in aliquam rerum consectetur accusantium quis.</p>
      <a href="" className="btn">About Us</a>
 </div>
      </section>
      {/* about sec end */}
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

    </>
  );
};

export default Index;
