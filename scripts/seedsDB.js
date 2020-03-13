const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/foodfeed"

    
);
console.log("CONNECTED!");


const streamerSeed = [
    {
        name: "Randy Marsh",
        email: "cremefraiche@gawl.com",
        password: "1234567890",
        date: new Date(Date.now()),
        settings: {
            

        }
    },
    {
        name: "Sharon Marsh",
        email: "cremefraiche@gawl.com",
        password: "1234567890",
        date: new Date(Date.now())
    },
    {
        name: "Shelly Marsh",
        email: "cremefraiche@gawl.com",
        password: "1234567890",
        date: new Date(Date.now())
    },
    {
        name: "Stan Marsh",
        email: "cremefraiche@gawl.com",
        password: "1234567890",
        date: new Date(Date.now())
    },

];

db.Streamer
  .remove({})
  .then(() => db.Streamer.collection.insertMany(streamerSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });