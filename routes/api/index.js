const router = require("express").Router(); 
const StreamerRoutes = require("./streams");
const RecipeRoutes = require("./recipes");
const SettingRoutes = require("./setting");

// Streamer routes
router.use("/streams", StreamerRoutes);
router.use("/recipes", RecipeRoutes);
router.use("/settings", SettingRoutes);


module.exports = router; 
