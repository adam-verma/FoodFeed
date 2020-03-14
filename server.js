
// Require dependencies
const express= require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const PORT2 = process.env.PORT2 || 3002;
const session = require("express-session");
const FileStore = require("session-file-store")(session);
const path = require("path");
<<<<<<< HEAD
const server = require("https").createServer(app);
const io = require("socket.io").listen(server);
const mediaServer = require("node-media-server");

=======
const server = require("http").Server(app);
const io = require("socket.io")(server);
>>>>>>> 6f76afd21ceb4007b16b7d9c262f9c56963899af
const viewers = require("./routes/api/viewers");
const viewer = require("./routes/api/Viewer");
const passport = require("passport");

const NodeMediaServer = require('./media_server.js')

io.on("connection", (socket) => {

  console.log("A USER CONNECTED!");
  

  socket.on("disconnect", () => {
    console.log("A USER DISCONNECTED")
  })

  socket.on("join", ({}, callback) => {

    callback({msg: "Welcome!"});
  })


  socket.on("sendMessage", (message, callback) =>{
    console.log(socket.id);
    console.log(message);
    io.sockets.emit("sendMessage", {message: message, username: socket.id});
    
  })

});



// Define middleware here
app.use(express.urlencoded({ extended: true }));
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);
// app.use(routes);

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(bodyParser.json());

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/foodfeed";
// Connect to Mongo DB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, err => { if(err) { console.log(err); }}).
then(() => console.log("MONGO DATABASE CONNECTED"));



// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/viewers", viewers);

app.use("/api/streamers", viewer);


server.listen(PORT2, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT2}!`);
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

NodeMediaServer.run(); 
