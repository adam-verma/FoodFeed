const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const StreamerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  streamKey: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = Streamer = mongoose.model("streamer", StreamerSchema);