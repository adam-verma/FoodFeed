const db = require('../models');

// Defining methods for the StreamerController
module.exports = {
    find: function(req, res) {
        db.User
            .find(req.query)
            .then(dbStreamers => res.json(dbStreamers))
            .catch(err => res.status(422).json(err));
    }
}
