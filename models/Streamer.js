const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const streamerSchema = new Schema ({
    name: {
        type: String,
        required: true
    },

})

const Streamer = mongoose.model("Streamer", streamerSchema);

module.exports = Streamer; 
