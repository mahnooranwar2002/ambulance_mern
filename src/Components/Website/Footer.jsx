import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
    <footer>
        <div class="container" id="footer">
            <div class="col">
                <h2>Rapid Rescue </h2>
            </div>
            <div class="col">
                <span>Our links</span>
               <ul>
              <li>
               
         
                <a href="" className='ca'>Home</a>
              </li>
               <li>
               
                  <Link className='ca' >About</Link>
              </li>
               <li>
              
                   <Link className='ca'>Services</Link>
                </li>
                 <li>
                <a className='ca'>Contact</a>
              </li>
             
            </ul>
            </div>
           <div class="col">
                <span>Our links</span>
               <ul>
              <li>
               
         
                <a href="" className='ca'> Home</a>
              </li>
               <li>
               
                  <Link className='ca'>About</Link>
              </li>
               <li>
              
                   <Link className='ca'>Services</Link>
                </li>
                 <li>
                <a className='ca' >Contact</a>
              </li>
             
            </ul>
            </div>
        </div>
        <p>created by Mahnoor Anwar</p>
    </footer>
    </div>
  )
}

export default Footer
