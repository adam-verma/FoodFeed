import React from "react";
import "./jumbotron.css"
import Chef from "../../Images/chef.svg"
import Wave from  "../../Images/wave.png"

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Jumbotron(props) {
  return (
    <React.Fragment>
    <img className="wave" src = {Wave} alt="wave"/>  
    <div className="jumbotron jumbotron-fluid">
      
  <div >
    <h1 className="display-4 col-md-12 AboutFF">About FoodFeed</h1>
   
    <p className="hungry"> Hungry?  </p>
    <img  id ="chefy" src= {Chef} />
  </div>
</div>


</React.Fragment>
  );
}

export default Jumbotron