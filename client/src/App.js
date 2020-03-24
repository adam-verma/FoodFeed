

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
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import PrivateRoute from "./components/private-route/PrivateRoute";
import NavBarStart from "./components/NavBar-Start"
// Check for token to keep user logged in
import Recipes from "./pages/Recipes";
import Sign from "./components/Chat/index.js";
import VideoPlayer from "./pages/VideoPlayer";
import ChatRoom from "./components/Chat/Chat/chatroom.js";
import Settings from "./pages/settings.js";
import profileDashboard from "./pages/dashboard.js";



import LiveStream from "./pages/LiveStream";
import LiveStream from "./pages/LiveStream"
import VideoSettings from "./pages/VideoSettings";

// if (localStorage.jwtToken) {
//   // Set auth token header auth
//   const token = localStorage.jwtToken;
//   setAuthToken(token);
//   // Decode token and get user info and exp
//   const decoded = jwt_decode(token);
//   // Set user and isAuthenticated
//   store.dispatch(setCurrentUser(decoded));
// // Check for expired token
//   const currentTime = Date.now() / 1000; // to get in milliseconds
//   if (decoded.exp < currentTime) {
//     // Logout user
//     store.dispatch(logoutUser());
//     // Redirect to login
//     window.location.href = "./login";
//   }
// }

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
      <Route exact path = "/profile" component = {profileDashboard} />
      
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

