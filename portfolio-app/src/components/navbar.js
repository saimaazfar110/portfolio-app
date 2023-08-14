import "./navbarstyles.css"

import React from 'react'
import {link} from "react-router-dom"

const Navbar = () => {
  return(
    <div className="header">
      <Link to="/">
        <h1>portfoli</h1>
      </Link>
      <ul>
        <li>
          <link to="/">Home</link>
          </li>
          <li>
            <link to="/Project">Project</link>
            </li>
            <li>
              <link to="/about">About</link>
              </li>
              <li>
                <link to="/contact">Contact</link>
                </li>
                </ul>


      </div>
  );
} ;

export default Navbar;