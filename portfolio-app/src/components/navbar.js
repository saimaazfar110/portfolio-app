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
            <link to="/">Project</link>
            </li>
            <li>
              <link to="/">About</link>
              </li>
              <li>
                <link to="/">Contact</link>
                </li>
                </ul>


      </div>
  );
} ;

export default Navbar;