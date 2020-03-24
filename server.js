
// Require dependencies
const express= require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const PORT2 = process.env.PORT2 || 3002;
const Session = require("express-session");
const middleware = require("connect-ensure-login");
const flash = require("connect-flash");
const FileStore = require("session-file-store")(Session);
const path = require("path");
const server = require("http").createServer(app);
const io = require("socket.io").listen(server);
const config = require("./config/media_config");
const viewers = require("./routes/api/viewers");
const viewer = require("./routes/api/Viewer");
const User = require("./routes/api/user");
const Stream = require("./routes/api/streams");
const passport = require("./config/passport");
const apiRoutes = require("./routes/api/recipes");
const NodeMediaServer = require('./media_server.js');

io.on("connection", (socket) => {

  console.log(socket.id);
  socket.emit("join", "HEY")
  
  socket.on("disconnect", () => {
    console.log("A USER DISCONNECTED")
    socket.removeAllListeners(streamRoom);
  })

  socket.emit("join", (msg, callback ) =>{

    console.log(`PRINTED HERE${msg}`);


  })

  socket.on("sendMessage", message =>{
    
    console.log(message);
    socket.broadcast.emit("chatMessage", message);
    
    
  })




});

app.use(Session({
  store: new FileStore({
      path : 'server/sessions'
  }),
  secret: config.server.secret,
  maxAge : Date().now + (60 * 1000 * 30),
  resave : true,
  saveUninitialized : false,
}));

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

app.use(flash());

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());
// Passport config
require("./config/passport");

// Register app routes
app.use("/api/viewers", viewers);

app.use("/api/streamers", viewer);

// app.use("/streams", Stream);
app.use('/streams', require('./routes/api/streams'));
app.use('/settings', require('./routes/api/setting'));
app.use("/user", User);
app.use('/api',apiRoutes )

app.use('/login', require('./routes/login'));
app.use('/signup', require('./routes/signup'));


server.listen(PORT2, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT2}!`);
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

NodeMediaServer.run(); 
