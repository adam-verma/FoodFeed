// Require dependencies
const express= require("express"),
bodyParse = require("body-parser"),
mongoose = require("mongoose"),
routes = require("./routes"),
app = express(),
PORT = process.env.PORT || 3001,
session = require("express-session"),
FileStore = require("session-file-store")(session);
const path = require("path");
const server = require("https").createServer(app);
const io = require("socket.io").listen(server);


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
app.use(routes);

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/foodfeed";
// Connect to Mongo DB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, err => { if(err) { console.log(err); }});



app.use('*', express.static(path.join(__dirname, "client", "build")));

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
