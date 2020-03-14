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
            notifications: {
                email: {
                    streamer1: false
                    

                },
                sms: {
                    streamer1: false

                }

            },
            geolocation: "Houston, Texas",
            securiprivacy: {
                twofactor: true,
                blocked: {
                    id: "kas3509u9gw2h3423n0f8u"

                }
            },
            delete: false,
            certified:{
                test1: true,
                test2: true,
                test3: true,
                chefoverride: true
            },
            account: {
                streamerkey: "jnesifuyw3oh238hdf890734f3"

            }
            

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