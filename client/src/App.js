

import React  from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Start from "./pages/Start";
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import NavBarStart from "./components/NavBar-Start/index"
import Home from "./pages/Home"

const App = () => (
<React.Fragment>


  <Router>
    <div className = "container">
      
      <Route exact path = "/" component = {Start} />
      <Route exact path = "/Login" component = {Login} />
      <Route exact path = "/SignUp" component = {SignUp} />
      <Route exact path = "/Home" component = {Home} />
    
    </div>


  </Router>
  
  </React.Fragment>
);

export default App;

