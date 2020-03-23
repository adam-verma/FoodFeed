import React from "react";
import Logo from "../../Images/logo.png"
import "./Navbar.css"
// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg" id="navStart">
    
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className ="navbar-nav ml-auto">
          <li className="nav-item active">
          <a  className="nav-link" href="/"><i class="fas fa-home"> Home</i></a>
          </li>

          <li className="nav-item ">
          <a  className="nav-link" href="/Recipes"><i class="fas fa-utensils"> Recipes</i></a>
          </li>
          
          <li className="nav-item ">
          <a  className="nav-link" href="/about"><i class="fas fa-smile-wink"> About Us</i></a>
          </li>

          <img src={Logo} alt ="Logo" className="Logo"/>

          <li className="nav-item ">
          <a  className="nav-link" href="/contact"><i class="fas fa-envelope-open"> Contact</i></a>
          </li>

          <li className="nav-item ">
          <a  className="nav-link" href="/apply"><i class="fas fa-clipboard"> Apply!</i></a>
          </li>

          <li className="nav-item ">
          <a  className="nav-link" href="/downloads"><i class="fas fa-download"> Downloads</i></a>
          </li>

      </ul>
    
     
    </div>
  </nav>
  );
}

export default Navbar;