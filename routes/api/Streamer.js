const router =  require("express").Router();
const StreamerController = require('../../controllers/StreamerController');

// Matches with "/api/Streamer"
router.route("/streamerInfo")
    .get(StreamerController.find);


module.exports = router;