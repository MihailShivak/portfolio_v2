import React from "react";
import {Link} from 'react-router-dom';
import '../../../styles/navbar.css';

const Navbar=() => {
   return(
      <div className="header">
         <div className="home">
            <Link to='/' className="home__link">
               React App
            </Link>
         </div>
         <div className="about">
            <Link to='/about' className="about__link">
               About
            </Link>
         </div>
      </div>
   )
}

export default Navbar;