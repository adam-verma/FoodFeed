const express = require("express");
const router =  express.Router();
const StreamerController = require('../../controllers/UserController');

// Matches with "/api/Streamer"
router.get("/streams/info",
    require('connect-ensure-login').ensureLoggedIn(),
    (req, res) => {
        if (req.query.streams) {
            let streams = JSON.parse(req.query.streams);
            let query = {$or : []};
            for (let stream in streams) {
                if (!streams.hasOwnProperty(stream)) continue;
                query.$or.push({stream_key: stream});
            }
        StreamerController.find(req, res);
};
});
module.exports = router;