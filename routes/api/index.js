const router = require("express").Router; 
const StreamerRoutes = require("./Streamer");

// Streamer routes
router.use("/streamer", StreamerRoutes);

module.exports = router; 