import React from "react";
import "./jumbotron.css"

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Jumbotron(props) {
  return (
    <div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4 col-md-12">Food Feed</h1>
    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula venenatis dui ac sagittis. Nulla blandit nibh hendrerit purus dictum ullamcorper in malesuada odio. Morbi id viverra risus. Suspendisse ut aliquet magna, sit amet efficitur ligula. Sed porta fermentum magna, id tempus dui vestibulum sit amet. Ut sed lorem erat. Morbi consequat augue porttitor lorem tristique posuere. Aliquam at porttitor tortor. Praesent ornare aliquet mauris id vestibulum. Vestibulum molestie magna quis tristique porta. Phasellus pretium sollicitudin eros, eu tristique ex pulvinar in.</p>
  </div>
</div>
  );
}

export default Jumbotron