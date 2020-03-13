const router = require("express").Router();
const streamers = require("./Viewer.js");
// matches with api/streamers
router.use("/streamers", streamers);
module.exports = router;