const router = require("express").Router(); 
const StreamerRoutes = require("./streams");

// Streamer routes
router.use("/streams", StreamerRoutes);

module.exports = router; 
