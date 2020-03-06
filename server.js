const express = require("express");
<<<<<<< HEAD
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 5000;
const passport = require("passport");
const viewers = require("./routes/api/viewers");




=======
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = require('express')();

const server = require("https").createServer(app);
const io = require("socket.io").listen(server);

const PORT = process.env.PORT || 3001;
>>>>>>> 7e9618a9efa1c85f6aebc1ac2c4a43ed8b97ce66






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
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
// app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/foodfeed")
.then(() => console.log("MongoDB successfully connected"))
.catch(err => console.log(err));

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());


// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/viewers", viewers);



app.use('*', express.static(path.join(__dirname, "client", "build")));

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
