import "./navbarstyles.css"

import React from 'react'
import {link} from "react-router-dom"

const Navbar = () => {
  return(
    <div className="header">
      <Link to="/">
        <h1>portfoli</h1>
      </Link>
      </div>
  );
} ;

export default Navbar;