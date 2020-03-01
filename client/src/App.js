

import React  from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Start from "./pages/Start";
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import NavBar from "./components/NavBar/index"

const App = () => (
<React.Fragment>
<NavBar></NavBar>

  <Router>
    <div className = "container">
      
      <Route exact path = "/" component = {Start} />
      <Route exact path = "/Login" component = {Login} />
      <Route exact path = "/SignUp" component = {SignUp} />
    
    </div>


  </Router>
  
  </React.Fragment>
);

export default App;

