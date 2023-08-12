import REACT  from "react";
import "./index.css";
import Home from "./router/Home";
import About from "./router/About";
import Project from "./router/Project";
import Contact from "./router/Contact";

import {Route, ROUTES} from "react-router-dom";


function App() {
  return (

  <>
 
 <Routes>
   <Routes path="/" element={<Home/>} />
   <Routes path="/Project" element={<Home/>} />
   <Routes path="/about" element={<Home/>} />
   <Routes path="/contact" element={<Home/>} />
   </Routes>

      
  

  
  </>
  


export default App;

