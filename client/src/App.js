import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Sign from "./components/Chat/index.js";
import ChatRoom from "./components/Chat/Chat/chatroom.js"

const App = () => (

  <div>
    <Router>
      <Route path = "/" exact component = {Sign} />
      <Route path = "/chat" component = {ChatRoom} />
    </Router>
    







  </div>
)

export default App;
