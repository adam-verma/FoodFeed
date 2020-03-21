import React from "react";
import "./jumbotron.css"


// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function JumbotronSub(props) {
  return (
    <div className="jumbotronSub jumbotron-fluid">
       
  <div >
    <h1 className="display-4 col-md-12">What is  FoodFeed</h1>
    
    <p className="aboutsub"> Food feed is taking the world of culinary arts to the next level. 
    With this app we want to give aspiring chefs the opportunity to share their recipes and showcase their talents through a livestreaming platform.  </p>
    <p>Sign up and showcase your talents as a Chef or sign up and witness talented people in your local town prepare some of the finest cuisine and have them delivered to your
        front door. Share your favorite recipes and collect some new ones along the way.
    </p>
  </div>
</div>
  );
}

export default JumbotronSub