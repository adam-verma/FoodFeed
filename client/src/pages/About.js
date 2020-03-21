import JumboSub from "../components/Jumbotron/aboutSub"
import React  from "react";
// import Navbar from "../components/NavBar-Start/index"
import Jumbotron from "../components/Jumbotron/about"
// import LoginForm from "../components/Login/index"
import SignUpForm from "../components/Signup/index"
const About = () => {

    return (
        <React.Fragment>
            
            <Jumbotron/>
                <JumboSub/>
        <div className="row">
    <div className="col-md-12">
        <div class="card devCard" >
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div class="card devCard" >
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div class="card devCard" >
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </div>
        </div>
        </React.Fragment>
    
    )


}


export default About