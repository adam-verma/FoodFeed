const db = require("../models");



module.exports = {

    findAll: function(req, res) {
        db.Streamer
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(error => res.json(error));
    }
    





};