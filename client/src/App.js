

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Start from "./pages/Start";
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
// import NavBarStart from "./components/NavBar-Start/index"
// import Home from "./pages/Home"
import { Provider } from "react-redux";
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import PrivateRoute from "./components/private-route/PrivateRoute";
import NavBarStart from "./components/NavBar-Start/index"
// Check for token to keep user logged in
import ChatRoom from "./components/Chat/Chat/chatroom.js"
import Recipes from "./pages/Recipes";

if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

const App = (props) => {


console.log(props)

return (

<React.Fragment>
<NavBarStart/>

    <Provider store={store}>
      <Router>

      
      <Route exact path = "/" component = {Start} />

       
          
          {/* <Route path='/Login'component={} */}
          <Route exact path = "/SignUp" component = {SignUp} />
          <Route exact path ='/Login'  component={Login} /> 
          <Route exact path = "/chat" component = {ChatRoom} />
          <Route  exact path="/recipes" component={Recipes} />
              
           
                                                                   
          
        
        


      </Router>
    </Provider>
  
  </React.Fragment>
)}
;

export default App;

