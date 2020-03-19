import React from "react";
import "./jumbotron.css"

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function JumbotronSub(props) {
  return (
    <div className="jumbotronSub jumbotron-fluid">
  <div >
    <h1 className="display-4 col-md-12">About FoodFeed</h1>
    <p className="lead"> Hungry?  </p>
  </div>
</div>
  );
}

export default JumbotronSub