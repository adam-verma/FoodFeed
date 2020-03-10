import React from "react";
import Logo from "../../Images/logo_transparent.png"
import "./Navbar.css"
// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg ">
    <img src={Logo} alt ="Logo" className="Logo"/>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className ="navbar-nav ml-auto">
          <li className="nav-item active">
          <a  className="nav-link" href="/">Home</a>
          </li>

          <li className="nav-item ">
          <a  className="nav-link" href="#">About Us</a>
          </li>

          <li className="nav-item ">
          <a  className="nav-link" href="/Recipes">Recipes</a>
          </li>
          

      </ul>
    
     
    </div>
  </nav>
  );
}

export default Navbar;