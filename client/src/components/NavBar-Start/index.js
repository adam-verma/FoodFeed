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
      
    <a href="/Login"><button className="btn btn-outline-success my-2 my-sm-0 LoginBtn">Login</button></a>
    <a href="/SignUp"><button className="btn btn-outline-success my-2 my-sm-0 SignUpBtn">SignUp</button></a>
     
    </div>
  </nav>
  );
}

export default Navbar;