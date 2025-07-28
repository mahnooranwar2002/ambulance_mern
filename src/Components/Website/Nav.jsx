import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <header className="container">
        <h3>Rapid <span>Rescue </span></h3>
        <nav>
        
          <ul>
            <li>
           <Link to={'/'}>Home</Link>
            </li>
               <li>
          
              <Link to={"/about"}>About</Link>
            </li>
               <li>
              
              <Link to={'/contact'}>Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="links">
            <a href="" className="child1">Book Now</a>
            <a href="" className="child2">Login</a>
            
        </div>
      </header>
      
    </>
  );
};

export default Nav;
