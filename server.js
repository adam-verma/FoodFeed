
// Require dependencies
const express= require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

const viewers = require("./routes/api/Viewers");
const server = require("https").createServer(app);
const io = require("socket.io").listen(server);
const  Session = require('express-session');
const  middleware = require('connect-ensure-login');
const  FileStore = require('session-file-store')(Session);
const  config = require('./config/default');
const   flash = require('connect-flash');


const passport = require('./config/passport');

const apiRoutes = require("./routes/api/recipes");

 
app.use(passport.initialize());
app.use(passport.session());

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/foodfeed");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/foodfeed")
.then(() => console.log("MongoDB successfully connected"))
.catch(err => console.log(err));


app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, './views'));
app.use(express.static('public'));
app.use(flash());
app.use(require('cookie-parser')());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({extended: true}));
const PORT2 = process.env.PORT2 || 3002;
// const session = require("express-session");
const FileStore = require("session-file-store")(session);
const path = require("path");
const server = require("http").Server(app);
const io = require("socket.io")(server);
const viewers = require("./routes/api/viewers");
const viewer = require("./routes/api/Viewer");
const passport = require("passport");


io.on("connection", (socket) => {

  console.log("A USER CONNECTED!");
  

app.use(Session({
  store: new FileStore({
      path : './server/sessions'
  }),
  secret: config.server.secret,
  maxAge : Date().now + (60 * 1000 * 30)
}));

app.get('/login', middleware.ensureLoggedIn(), (req, res) => {
  res.render('index');
});

//socket.io connection
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

  socket.on("disconnect", () => {
    console.log("USER DISCONNECTED")
  })



// Define middleware here
app.use(express.urlencoded({ extended: true }));
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Passport middleware
app.use(passport.initialize());


// Authentication Routes
// app.use("/api/viewers", viewers);
app.use('/login', require('./routes/login'));
app.use('/signup', require('./routes/signup'));
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




//Recipe route
app.use('/api',apiRoutes )

app.use("/api/streamers", viewer);


server.listen(PORT2, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT2}!`);
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

