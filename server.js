const express = require("express");

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

io.on("connection", (socket) => {

  console.log("CONNECTION ESTABLISHED!");


  socket.on("disconnect", () => {
    console.log("USER DISCONNECTED")
  })
})
// response.writeHead(200, {
//   /// ...
//   'Access-Control-Allow-Origin' : '*'
// });


// Define middleware here
app.use(express.urlencoded({ extended: true }));
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);
// app.use(routes);


// Passport middleware
app.use(passport.initialize());




// Passport config
// require("./config/passport")(passport);




// Authentication Routes
// app.use("/api/viewers", viewers);
app.use('/login', require('./routes/login'));
app.use('/signup', require('./routes/signup'));


//Recipe route
app.use('/api',apiRoutes )

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
