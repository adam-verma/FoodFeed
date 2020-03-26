

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Start from "./pages/Start";
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import About from "./pages/About"
// import NavBarStart from "./components/NavBar-Start/index"
// import Home from "./pages/Home"
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/private-route/PrivateRoute";
import NavBarStart from "./components/NavBar-Start"
// Check for token to keep user logged in
import Recipes from "./pages/Recipes";
import Sign from "./components/Chat/index.js";
import VideoPlayer from "./pages/VideoPlayer";
import ChatRoom from "./components/Chat/Chat/chatroom.js";
import Settings from "./pages/settings.js";
import StreamerDashboard from "./pages/dashboard.js";
import LiveStream from "./pages/LiveStream"
import VideoSettings from "./pages/VideoSettings";

const App = (props) => {


console.log(props)

return (

<React.Fragment>
  <NavBarStart/>
   <Router>
      
      <Route exact path = "/intro" component = {Start} />
      <Route exact path = "/" component = {LiveStream} />
      <Route exact path = "/SignUp" component = {SignUp} />
      <Route exact path ='/Login'  component={Login} /> 
      <Route  exact path="/recipes" component={Recipes} />
      <Route path = "/chat" component = {ChatRoom} />
      <Route exact path = "/profile" component = {StreamerDashboard} />
      
       <Route exact path = "/settings" component = {Settings} />
       <Route exact path = "/about" component = {About}/>
      <Route path = "/streams/:username" component = {VideoPlayer} />
      <Route exact path = "/VideoSettings" component = {VideoSettings} />
      <Switch>
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
      </Switch>
   </Router>


    
  </React.Fragment>
  
)}


export default App;

