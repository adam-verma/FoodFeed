import React from "react";
import "./jumbotron.css"
import Chef from "../../Images/chef.svg"
import Wave from  "../../Images/wave.png"
// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function RecJum(props) {
  return (
      <React.Fragment>
 <img className="wave" src = {Wave} alt="wave"/>   

    <div className="jumbotron jumbotron-fluid recJum">
   
  <div className="recJum">
  <h1 id="text">Recipes </h1>
   
    <p className="hungry"> Find a recipe and Cook up a cuisine  <i class="fas fa-apple-alt"></i> </p>
    <img  id ="chefy" src= {Chef} />
    
  </div>
</div>
</React.Fragment>
  );
}

export default RecJum