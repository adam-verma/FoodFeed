import React from "react";


// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand">FoodFeed</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className ="navbar-nav ml-auto">
          <li className="nav-item active">
          <a  className="nav-link" href="/Login">Login</a>
          </li>

          <li className="nav-item ">
          <a  className="nav-link" href="/Signup">SignUp</a>
          </li>
          

      </ul>
    
     
    </div>
  </nav>
  );
}

export default Navbar;