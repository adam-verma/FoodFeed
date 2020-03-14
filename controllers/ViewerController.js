const db = require("../models");



module.exports = {

    findAll: function(req, res) {
        console.log("I started");
        db.Streamer
            .find({})
            .then(dbModel => res.json(dbModel))
            .catch(error => res.json(error));
    }
    





};