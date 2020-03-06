const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const viewerSchema = new Schema ({
    name: {
        type: String,
        required: true
    },

})

const Viewer = mongoose.model("Viewer", viewerSchema);

module.exports = Viewer; 
